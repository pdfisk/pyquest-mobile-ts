$sw = [Diagnostics.Stopwatch]::StartNew()
./c
./p
./cp
$sw.Stop()
$sw.Elapsed
