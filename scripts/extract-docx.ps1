$docxPath = "C:\Users\crise\Downloads\Emem Onuigbo - 5 Agricom Blog Articles & Publication Plan with images.docx"
$tempDocx = "d:\AgricomAssurance\agricom\agricom-website\agricom-website\scripts\articles.docx"
$extractDir = "d:\AgricomAssurance\agricom\agricom-website\agricom-website\scripts\docx_extracted"

# Copy using FileShare.ReadWrite in case Word has it open
$fileStream = [System.IO.File]::Open($docxPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
$outStream = [System.IO.File]::Create($tempDocx)
$fileStream.CopyTo($outStream)
$fileStream.Close()
$outStream.Close()

Write-Host "Copied docx."

# Unzip
if (Test-Path $extractDir) {
    Remove-Item -Recurse -Force $extractDir
}
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory($tempDocx, $extractDir)

Write-Host "Extracted to $extractDir"
Get-ChildItem -Path "$extractDir\word\media" | Select-Object Name, Length
