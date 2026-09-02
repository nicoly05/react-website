# Site +55 Lab

Este repositório contém o front-end de um site institucional criado com Create React App. O objetivo é apresentar os serviços, projetos e contactos da agência +55 Lab.

## Conteúdo deste README
- Instalação (clonar, dependências)
- Como executar em desenvolvimento
- Como gerar um build de produção
- Variáveis opcionais (API do Google Places)
- Estrutura básica e descrição das páginas presentes

---

## 1. Obter o código

Clone o repositório localmente:

```bash
git clone <url-do-repo>
cd SiteMaisCincoCinco
```

## 2. Instalar dependências

Recomendo usar o npm com o flag `--legacy-peer-deps` caso ocorram conflitos de peer dependencies:

```bash
npm install --legacy-peer-deps
```

## 3. Executar em desenvolvimento

Inicie a aplicação localmente (porta padrão 3000):

```bash
npm start
```

Abra `http://localhost:3000` no navegador.

## 4. Gerar build de produção

Para compilar uma versão para produção:

```bash
npm run build
```

Os ficheiros finais ficam em `./build/`.

## 5. Integração opcional: Google Places / Avaliações

Se quiser integrar avaliações automáticas do Google (Google Places API), crie um ficheiro `.env` na raiz com a chave da API (NUNCA comite chaves públicas):

```
REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_here
REACT_APP_GOOGLE_PLACE_ID=your_place_id_here
```

A chave deve ser usada por um endpoint servidor (proxy/express) idealmente, para não expor a API key no front-end. No estado atual do projeto existem secções de avaliações estáticas que podem ser substituídas por chamadas a esse endpoint.

---

## 6. Estrutura do projeto (resumo)

- `src/` — código fonte React
  - `src/pages/` — páginas principais do site
    - `Home.js` — Página inicial. Contém hero, secção de serviços com carrossel, grid de projetos (2x2), secção de avaliações (ligação direta para comentários no Google Maps) e CTAs.
    - `Servicos.js` — Página com listagem detalhada de serviços e descrições (filtros por categoria).
    - `Projetos.js` — Página que lista projetos com filtros e detalhes; permite navegar para cada projeto/categoria.
    - `Contactos.js` — Página de contactos com elementos acionáveis (link para Instagram, `mailto:`, `tel:`) e carrossel de imagens de fundo.
    - `BrandInstagram.js` — Página de integração/embed de Instagram (exibe posts ou reel embeds).
    - `SobreNos.js` — Página institucional com descrição da agência e equipa.
  - `src/components/` — componentes reutilizáveis
    - `Navbar.js` — navegação principal (usa `NavLink` para destacar rota ativa)
    - `Footer.jsx`, `InstagramEmbed.jsx`, etc.
  - `src/styles/` — ficheiros CSS por página/componente (ex.: `Home.css`, `Servicos.css`)
  - `src/assets/` — imagens e ícones usados no site

---

## 7. O que faz cada página (resumo funcional)

- Página inicial (`Home`): apresenta hero com mensagem principal, carrossel de serviços (navegação card-a-card), grid de projetos 2x2 com overlay no hover, secção de avaliações do Google (links diretos para cada comentário) e CTAs para contacto.
- Serviços (`Servicos`): lista filtros e cartões de serviço, com descrição detalhada e links para contactar ou contratar.
- Projetos (`Projetos`): galeria de trabalhos dividida por categorias, com possibilidade de filtrar por tipo de projecto.
- Contactos (`Contactos`): mostra telefone, email e Instagram com links acionáveis; possui carrossel de imagens de fundo e layout alinhado à esquerda.
- Brand Instagram (`BrandInstagram`): página dedicada a embeds/feeds do Instagram.
- Sobre Nós (`SobreNos`): missão, visão e equipa.

## 8. Personalização rápida

- Cores principais: editar variáveis em `src/App.css` (`--primary-pink`, `--dark`, etc.).
- Textos e imagens: editar ficheiros em `src/pages/` e `src/assets/`.


## 9. Problemas comuns

- Se a aplicação não arrancar, corra `npm install --legacy-peer-deps` novamente.
- Se houver problemas com o Google API, confirme que a chave está correta e que o endpoint do servidor (se usado) está a funcionar.


