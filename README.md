# GraphQL API - Movies, Actors and Genres

API GraphQL completa para gerenciamento de filmes, atores e gêneros, implementada em TypeScript seguindo as melhores práticas de arquitetura.

## Estrutura do Projeto

```
src/
├── data/                 # Dados simulados (arrays)
│   ├── movies.ts
│   ├── actors.ts
│   └── genres.ts
├── data-sources/         # Camada de acesso a dados
│   ├── movieDataSource.ts
│   ├── actorDataSource.ts
│   └── genreDataSource.ts
├── resolvers/            # Lógica de negócio GraphQL
│   ├── index.ts
│   ├── movieResolvers.ts
│   ├── actorResolvers.ts
│   └── genreResolvers.ts
├── schemas/              # Definições de tipos GraphQL
│   └── typeDefs.ts
└── index.ts              # Servidor principal
```

## Instalação

```bash
npm install
```

## Execução

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm run build
npm start
```

### Teste Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Compilar o projeto
npm run build

# 3. Executar o servidor
npm start

# 4. Testar a API:
#    - Interface web: http://localhost:4000 (recomendado)
#    - API direta: http://localhost:4000/graphql
#    - Exemplos: use o arquivo examples.graphql
```

## Endpoint GraphQL

- **URL**: `http://localhost:4000/graphql`
- **Interface Web**: `http://localhost:4000` - Interface interativa para testar queries e mutations
- **API Direta**: Use o endpoint `/graphql` para integrações programáticas
- **Exemplos**: Arquivo `examples.graphql` com todas as queries e mutations

## Queries Disponíveis

### Filmes

```graphql
# Listar todos os filmes
query {
  movies {
    id
    title
    year
    actors {
      name
    }
    genres {
      name
    }
  }
}

# Buscar filme por ID
query {
  movie(id: "1") {
    id
    title
    year
    description
    actors {
      name
      nationality
    }
    genres {
      name
      description
    }
  }
}
```

### Atores

```graphql
# Listar todos os atores
query {
  actors {
    id
    name
    birthDate
    nationality
    movies {
      title
      year
    }
  }
}

# Buscar ator por ID
query {
  actor(id: "1") {
    id
    name
    birthDate
    nationality
    movies {
      title
      year
    }
  }
}
```

### Gêneros

```graphql
# Listar todos os gêneros
query {
  genres {
    id
    name
    description
    movies {
      title
      year
    }
  }
}

# Buscar gênero por ID
query {
  genre(id: "1") {
    id
    name
    description
    movies {
      title
      year
    }
  }
}
```

## Mutations Disponíveis

### Filmes

```graphql
# Criar filme
mutation {
  createMovie(
    input: {
      title: "Novo Filme"
      year: 2024
      description: "Descrição do filme"
      actorIds: ["1", "2"]
      genreIds: ["1", "3"]
    }
  ) {
    id
    title
    year
  }
}

# Atualizar filme
mutation {
  updateMovie(id: "1", input: { title: "Título Atualizado", year: 2025 }) {
    id
    title
    year
  }
}

# Excluir filme
mutation {
  deleteMovie(id: "1")
}

# Adicionar atores ao filme
mutation {
  addActorsToMovie(movieId: "1", actorIds: ["3", "4"]) {
    id
    title
    actors {
      name
    }
  }
}

# Remover ator do filme
mutation {
  removeActorFromMovie(movieId: "1", actorId: "2") {
    id
    title
    actors {
      name
    }
  }
}

# Adicionar gêneros ao filme
mutation {
  addGenresToMovie(movieId: "1", genreIds: ["2", "4"]) {
    id
    title
    genres {
      name
    }
  }
}
```

### Atores

```graphql
# Criar ator
mutation {
  createActor(
    input: {
      name: "Novo Ator"
      birthDate: "1990-01-01"
      nationality: "Brasileiro"
    }
  ) {
    id
    name
    birthDate
  }
}

# Atualizar ator
mutation {
  updateActor(
    id: "1"
    input: { name: "Nome Atualizado", nationality: "Canadense" }
  ) {
    id
    name
    nationality
  }
}

# Excluir ator
mutation {
  deleteActor(id: "1")
}
```

### Gêneros

```graphql
# Criar gênero
mutation {
  createGenre(
    input: { name: "Novo Gênero", description: "Descrição do gênero" }
  ) {
    id
    name
    description
  }
}
```

## Relacionamentos

- **Filme ↔ Ator**: N para N (um filme pode ter vários atores, um ator pode estar em vários filmes)
- **Filme ↔ Gênero**: N para N (um filme pode ter vários gêneros, um gênero pode ser associado a vários filmes)

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal
- **Apollo Server**: Servidor GraphQL
- **Express**: Framework web
- **GraphQL**: Protocolo de consulta
- **Node.js**: Runtime JavaScript

## Arquitetura

A API segue o padrão de camadas GraphQL:

1. **Schemas (Type Definitions)**: Definem a estrutura dos dados e operações
2. **Resolvers**: Implementam a lógica de negócio e busca de dados
3. **Data Sources**: Abstraem o acesso aos dados (arrays simulados)
4. **Data Layer**: Arrays locais simulando entidades do banco

## Melhores Práticas Implementadas

- ✅ Separação clara de responsabilidades
- ✅ Tipagem forte com TypeScript
- ✅ Resolvers organizados por entidade
- ✅ Data sources reutilizáveis
- ✅ Tratamento de erros
- ✅ Estrutura modular e escalável
- ✅ Documentação clara das operações
