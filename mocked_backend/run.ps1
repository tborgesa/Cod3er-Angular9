param(
    [string]
    [Alias('name','n')]
    $nome = "backend-uaiqueijos",
    [int]
    [Alias('port','p')]
    $porta = 8081
)

$portaContainer = "$($porta):80"
$location = Get-Location

try
{
    $dockerVersion = docker version --format '{{.Server.Version}}'
    Write-Output "Versao docker $dockerVersion"
}
catch
{
     Write-Output "Docker ainda não existe. Verifique seu sistema operacional, e prossiga para https://docs.docker.com/get-docker/."
}

$container = docker ps -a --format "{{json .}}" | ConvertFrom-Json | Where-Object {$_.Names -eq $nome}

if ($null -ne $container){
    docker start $container.ID
    Write-Output "Container iniciado $($container.ID)"
    return;
}

$volume = docker volume ls --format "{{json .}}" | ConvertFrom-Json | Where-Object {$_.Name -eq $nome}
$volumeContainer = "$($nome):/data"

if ($null -eq $volume){
    $volume = docker volume create $nome
    $null = docker container create --name vazio -v $volumeContainer alpine
    $null = docker cp $location/data/. vazio:/data
    $null = docker rm vazio
    Write-Output "Volume criado $volume"
}

$container = docker run -d -p $portaContainer --name $nome -v $volumeContainer --restart always clue/json-server
Write-Output "Container criado e iniciado $container"