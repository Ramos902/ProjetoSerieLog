# ProjetoSerieLog

Aplicação web para rastrear e organizar séries de TV, desenvolvida como projeto acadêmico na disciplina de Tecnologia em Sistemas para Internet - IFSP Campus Itapetininga.

## Tecnologias

- Vue 3 (Composition API)
- Vue Router
- Vite
- json-server

## Estrutura

```
ProjetoSerieLog/
├── serielog-front/     # Aplicação Vue 3
└── serielog-api/       # API mock (json-server)
```

## Como executar

Pré-requisitos: Node.js v18+ e npm.

```bash
git clone https://github.com/Ramos902/ProjetoSerieLog.git
cd ProjetoSerieLog
npm install
cd serielog-front && npm install
```

Inicie os dois processos em terminais separados:

```bash
# API (porta 3000)
npm run api

# Frontend (porta 5173)
cd serielog-front && npm run dev
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/series` | Lista todas as séries |
| GET | `/series/:id` | Retorna uma série |
| POST | `/series` | Cadastra uma série |
| PUT | `/series/:id` | Atualiza uma série |
| DELETE | `/series/:id` | Remove uma série |

## Autor

## Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ramos902">
        <img src="https://github.com/Ramos902.png" width="80" height="80" style="border-radius:50%"/><br>
        <sub><b>João Pedro</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/FernandoNino38">
        <img src="https://github.com/FernandoNino38.png" width="80" height="80" style="border-radius:50%"/><br>
        <sub><b>Fernando</b></sub>
      </a>
    </td>
  </tr>
</table>
