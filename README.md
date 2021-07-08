# vacinaAqui!

**Projeto livre {reprograma} | CRUD + integração MongoDB**

<br>

## Sobre o projeto 
O **vacinaAqui!** é proposição de um sistema de gestão de estoque ***fictício***\* de vacinas.

<br>

`* não são disponibilizados dados reais de vacinas distribuídas por locais de vacinação.`

<br>

## Tecnologias utilizadas
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Atlas` | Interface da cloud para verificar se os dados foram persistidos|
|`Insomnia` | Interface gráfica para realizar os testes|
|`cors` | permite a comunicação entre servidores diferentes|

## Arquitetura 
 ```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 database.js
             |- 📄 vacinaController.js
   |
   |    |- 📁 models
   |         |- 📄 vacinaModels.js
   |
   |    |- 📁 routes
   |         |- 📄 index.js
   |         |- 📄 vacinaAqui.js
   |
   |    |- 📄 app.js
   |         
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 package-lock.json
   |- 📄 server.js
```
### Requisitos 

<br>

**get / find()**
* `/index/`: retorna informações básicas do projeto


<br>

* `/vacinaAqui/`: retorna todas as unidades básicas de saúde cadastradas
* `vacinaAqui/bairros`: retorna unidade de saúde por bairro - query

**post / save()**
* `/vacinaAqui/`: cadastra unidade de saúde 

**delete / remove()**
* `/vacinaAqui/:id`: deleta unidade de saúde cadastrada 

**put / save()**
* `/vacinaAqui/:id`: atualiza unidade de saúde cadastrada

## Dados para collection
* id: obrigatório e automático
* nome: texto e obrigatório
* endereco: texto e obrigatório
* bairro: texto e obrigatório
* telefone: texto e obrigatório
* qtdInsumo: número e obrigatório
* dtCriacao: data automática

## Exemplo de saída json

```jsx
[
  {
    "message": "Local cadastrado com sucesso",
    "novoLocal": {
      "dtCriacao": "2021-07-07T01:17:06.987Z",
      "_id": "60e500e5da3c7a65d502f7d7",
      "nome": "UBS Vila Sanção",
      "bairro": "av. Principal, s/n",
      "endereco": "av. Principal, s/n",
      "telefone": "(94) 99182-5925",
      "qtdInsumo": 100,
      "__v": 0
    }
  }
]

```

