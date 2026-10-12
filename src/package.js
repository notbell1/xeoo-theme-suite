/**
 * Xeoo Theme Suite - Standalone VSIX Packager
 * Packages the extension into a standard .vsix installer without requiring external dependencies.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));
// Clean up old vsix files in ROOT_DIR
fs.readdirSync(ROOT_DIR).forEach((file) => {
  if (file.endsWith('.vsix')) {
    fs.unlinkSync(path.join(ROOT_DIR, file));
  }
});

const vsixName = `${pkg.name}-${pkg.version}.vsix`;
const vsixOutput = path.join(ROOT_DIR, vsixName);

console.log(`\n📦 Packaging ${vsixName}...`);

// Generate [Content_Types].xml
const contentTypesXml = `<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension=".json" ContentType="application/json"/>
  <Default Extension=".js" ContentType="application/javascript"/>
  <Default Extension=".md" ContentType="text/markdown"/>
  <Default Extension=".txt" ContentType="text/plain"/>
  <Default Extension=".svg" ContentType="image/svg+xml"/>
  <Default Extension=".png" ContentType="image/png"/>
  <Default Extension=".vsixmanifest" ContentType="text/xml"/>
</Types>`;

// Generate extension.vsixmanifest
const vsixManifest = `<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011" xmlns:d="http://schemas.microsoft.com/developer/vsx-schema-design/2011">
  <Metadata>
    <Identity Language="en-US" Id="${pkg.name}" Version="${pkg.version}" Publisher="${pkg.publisher}" />
    <DisplayName>${pkg.displayName}</DisplayName>
    <Description xml:space="preserve">${pkg.description}</Description>
    <Tags>${(pkg.keywords || []).join(',')}</Tags>
    <Categories>${(pkg.categories || []).join(',')}</Categories>
    <GalleryFlags>Public</GalleryFlags>
    <Icon>extension/assets/xeoo-icon.png</Icon>
    <Properties>
      <Property Id="Microsoft.VisualStudio.Code.Engine" Value="${pkg.engines?.vscode || '^1.90.0'}" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionKind" Value="ui,workspace,web" />
    </Properties>
  </Metadata>
  <Installation>
    <InstallationTarget Id="Microsoft.VisualStudio.Code"/>
  </Installation>
  <Dependencies/>
  <Assets>
    <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.Details" Path="extension/README.md" Addressable="true" />
  </Assets>
</PackageManifest>`;

// Temporary staging directory
const stageDir = path.join(ROOT_DIR, '.vsix_stage');
if (fs.existsSync(stageDir)) fs.rmSync(stageDir, { recursive: true, force: true });
fs.mkdirSync(stageDir, { recursive: true });

fs.writeFileSync(path.join(stageDir, '[Content_Types].xml'), contentTypesXml, 'utf8');
fs.writeFileSync(path.join(stageDir, 'extension.vsixmanifest'), vsixManifest, 'utf8');

const extDir = path.join(stageDir, 'extension');
fs.mkdirSync(extDir, { recursive: true });

// Copy files into extension/
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Files to bundle
const filesToBundle = ['package.json', 'README.md', 'LICENSE', 'assets', 'themes', 'src'];
filesToBundle.forEach((file) => {
  const src = path.join(ROOT_DIR, file);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(extDir, file));
  }
});

// Create zip / vsix using PowerShell's built-in ZipFile
if (fs.existsSync(vsixOutput)) fs.unlinkSync(vsixOutput);

const psScript = `Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${stageDir.replace(/\\/g, '/')}', '${vsixOutput.replace(/\\/g, '/')}')`;

execSync(`powershell -NoProfile -Command "${psScript}"`);

// Clean up staging directory
fs.rmSync(stageDir, { recursive: true, force: true });

const sizeKb = (fs.statSync(vsixOutput).size / 1024).toFixed(1);
console.log(`✨ Successfully generated installer: ${vsixName} (${sizeKb} KB)\n`);
