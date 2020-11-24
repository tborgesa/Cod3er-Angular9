param(
    [string]
    [Alias('name','n')]
    $nome = "backend-uaiqueijos",
    [int]
    [Alias('port','p')]
    $porta = 8081
)

$portaDocker = "$($porta):80"
$location = Get-Location
docker run -d -p $portaDocker --name $nome -v $location/db.json:/data/db.json clue/json-server