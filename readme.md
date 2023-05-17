#API Criada durante o curso explorer no site Rocketseat

Introdução
Esta é a documentação do backend de uma aplicação web de notas, que utiliza as tecnologias Node.js, Express, Knex e Query Builder. A API permite a criação, leitura, atualização e remoção de notas, além de permitir que o usuário associe tags às suas notas.

Rotas de notas
GET /notes
Retorna todas as notas do usuário.

Exemplo de resposta
css
Copy code
[  {    "id": 1,    "title": "Nota 1",    "description": "Descrição da nota 1",    "created_at": "2022-05-10T18:00:00.000Z",    "updated_at": "2022-05-10T18:00:00.000Z",    "tags": [      {        "id": 1,        "name": "Tag 1",        "created_at": "2022-05-10T18:00:00.000Z",        "updated_at": "2022-05-10T18:00:00.000Z"      },      {        "id": 2,        "name": "Tag 2",        "created_at": "2022-05-10T18:00:00.000Z",        "updated_at": "2022-05-10T18:00:00.000Z"      }    ]
  },
  {
    "id": 2,
    "title": "Nota 2",
    "description": "Descrição da nota 2",
    "created_at": "2022-05-10T18:00:00.000Z",
    "updated_at": "2022-05-10T18:00:00.000Z",
    "tags": []
  }
]
POST /notes
Cria uma nova nota.

Corpo da requisição
title: título da nota.
description: descrição da nota.
tags (opcional): lista de tags associadas à nota.
Exemplo de corpo da requisição
json
Copy code
{
  "title": "Nota 1",
  "description": "Descrição da nota 1",
  "tags": ["Tag 1", "Tag 2"]
}
Exemplo de resposta
json
Copy code
{
  "id": 1,
  "title": "Nota 1",
  "description": "Descrição da nota 1",
  "created_at": "2022-05-10T18:00:00.000Z",
  "updated_at": "2022-05-10T18:00:00.000Z"
}
GET /notes/:id
Retorna uma nota pelo ID.

Exemplo de resposta
json
Copy code
{
  "id": 1,
  "title": "Nota 1",
  "description": "Descrição da nota 1",
  "created_at": "2022-05-10T18:00:00.000Z",
  "updated_at": "2022-05-10T18:00:00.000Z",
  "tags": [
    {
        "id": 1,
        "name": "Tag 1",
        "created_at": "2022-05-10T18:00:00.000Z",
        "updated_at": "2022-05-10T18:00:00.000Z"
    },
    {
        "id": 2
        "name": "Tag 2",
        "created_at": "2022-05-10T18:00:00.000Z",
        "updated_at": "2022-05-10T18:00:00.000Z"
    }
    ]
}

markdown
Copy code

#### PUT /notes/:id

Atualiza uma nota pelo ID.

##### Corpo da requisição

- `title` (opcional): novo título da nota.
- `description` (opcional): nova descrição da nota.
- `tags` (opcional): nova lista de tags associadas à nota.

##### Exemplo de corpo da requisição

{
"title": "Novo título",
"tags": ["Tag 1", "Tag 3"]
}

shell
Copy code

##### Exemplo de resposta

{
"id": 1,
"title": "Novo título",
"description": "Descrição da nota 1",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-11T10:00:00.000Z"
}

shell
Copy code

#### DELETE /notes/:id

Remove uma nota pelo ID.

### Rotas de tags

#### GET /tags

Retorna todas as tags do usuário.

##### Exemplo de resposta

[
{
"id": 1,
"name": "Tag 1",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-10T18:00:00.000Z",
"notes": [
{
"id": 1,
"title": "Nota 1",
"description": "Descrição da nota 1",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-10T18:00:00.000Z"
},
{
"id": 2,
"title": "Nota 2",
"description": "Descrição da nota 2",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-10T18:00:00.000Z"
}
]
},
{
"id": 2,
"name": "Tag 2",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-10T18:00:00.000Z",
"notes": [
{
"id": 1,
"title": "Nota 1",
"description": "Descrição da nota 1",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": "2022-05-10T18:00:00.000Z"
}
]
}
]
#### POST /tags

Cria uma nova tag.

##### Corpo da requisição

- `name`: nome da tag.

##### Exemplo de corpo da requisição

{
"name": "Tag 1"
}

shell
Copy code

##### Exemplo de resposta

{
"id": 1,
"name": "Tag 1",
"created_at": "2022-05-10T18:00:00.000Z",
"updated_at": 
PUT /tags/:id
Atualiza uma tag pelo ID.

Corpo da requisição
name (opcional): novo nome da tag.
Exemplo de corpo da requisição
json
Copy code
{
  "name": "Nova tag"
}
Exemplo de resposta
json
Copy code
{
  "id": 1,
  "name": "Nova tag",
  "created_at": "2022-05-10T18:00:00.000Z",
  "updated_at": "2022-05-11T10:00:00.000Z"
}
}
DELETE /tags/:id
Remove uma tag pelo ID.

Considerações finais
Com essa documentação, é possível entender todas as rotas disponíveis na API do site de postagens de anotações. É importante lembrar que essa é apenas uma das possíveis implementações da API, e que cada desenvolvedor pode escolher suas próprias estratégias de autenticação e validação de dados. Além disso, é sempre importante manter a documentação atualizada e acessível para todos os membros da equipe de desenvolvimento, garantindo assim a integridade e a qualidade do projeto.