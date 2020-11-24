# Backend mocked

Para testar apenas o frontend rode o seguinte comando para subir um container com a execução de um backend "fake"

```sh
run.ps1
```

Por padrão será criado um container com o nome backend-uaiqueijos na porta 8081.

Caso queiram mudar a porta ou o nome do container para rodar o mocked segue os parametros opcionais 

```sh
 .\run.ps1 -name "backend-uaiqueijos-test" -p 8083
```

## Instalação docker

Verifique seu sistema operacional, e prossiga com a [instalação docker](https://docs.docker.com/get-docker/).

## Dica Docker

Para melhor visualização dos container e imagens suba o container do portainer

```sh
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

Após instalado com sucesso acesso [UI Portainer](http://localhost:9000)





