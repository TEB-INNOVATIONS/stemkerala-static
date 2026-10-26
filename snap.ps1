$proc = Start-Process -FilePath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--window-size=1138,499",
    "--screenshot=C:\agneycodes\stem kerala\view_1138x499.png",
    "http://127.0.0.1:5173/"
) -PassThru
Start-Sleep -Seconds 4
if (!$proc.HasExited) {
    Stop-Process -Id $proc.Id -Force
}
Write-Output "Done snapshot attempt"
