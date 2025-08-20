# Compress all MP4 files in the public folder to around 2MB
$folder = "C:\Users\nagaa\Downloads\weddingsite\project\public"

Get-ChildItem $folder -Filter *.mp4 | ForEach-Object {
    $temp = "$($_.DirectoryName)\$($_.BaseName)-temp$($_.Extension)"
    Write-Output "Compressing $($_.Name) ..."
    ffmpeg -i $_.FullName -b:v 600k -fs 2M -y $temp
    Move-Item -Force $temp $_.FullName
    Write-Output "Done: $($_.Name)"
}

Write-Output "✅ All videos compressed to ~2MB."
