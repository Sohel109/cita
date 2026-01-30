Add-Type -AssemblyName System.Drawing
try {
    $image = [System.Drawing.Bitmap]::FromFile("C:/Users/haggu/.gemini/antigravity/brain/e3ea3d07-2398-4a83-b298-65199ee9cfb0/uploaded_media_1769625805420.png")
    $color = $image.GetPixel(0,0)
    Write-Host "#$($color.R.ToString('X2'))$($color.G.ToString('X2'))$($color.B.ToString('X2'))"
} catch {
    Write-Error $_
}
