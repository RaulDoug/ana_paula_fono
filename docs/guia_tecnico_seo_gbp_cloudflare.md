# Guia Técnico — Código, Cloudflare, Search Console e Google Perfil da Empresa (GBP)

Este documento reúne o diagnóstico técnico, o que já foi corrigido no repositório e o checklist de implementação técnica no código, na Cloudflare, no Google Search Console e no painel administrativo do Google Perfil da Empresa (GBP).

---

## 1. Resumo do diagnóstico técnico

Os testes de busca no Google explicam-se pela combinação de quatro fatores:

1. **Domínio e ficha muito recentes:** O site e a ficha do GBP foram criados recentemente, ainda sem histórico de backlinks e com **0 avaliações** e **sem fotos atualizadas** no GBP. Redes sociais (`instagram.com`) e diretórios antigos possuem autoridade de domínio muito superior no curto prazo.
2. **Inconsistência de CEP e nome de entidade (NAP):**
   - O GBP usa o CEP oficial **`35630-005`**, enquanto o código do site estava com **`35630-000`**.
   - O schema estruturado estava duplicado (`index.html` + `src/data/schema.ts`) e usava `"Ana Paula Azevedo Ferreira Fonoaudióloga - Azevedo Fonoaudiologia"` em vez do nome exato do GBP (`Ana Paula Azevedo Ferreira Fonoaudióloga`).
3. **Configuração de domínios na Cloudflare:**
   - `https://ana-paula-fono.rauldougbr.workers.dev/` responde `HTTP 200 OK` **sem** cabeçalho `X-Robots-Tag: noindex`, pois `public/_headers` possui regra apenas para `https://:project.pages.dev/*`.
   - `https://www.azevedofono.com.br/` responde `HTTP 200 OK` direto em vez de redirecionar (`301`) para `https://azevedofono.com.br/`.
4. **Rastreamento anterior ao último ajuste de SEO:**
   - Segundo o Google Search Console, `/` foi rastreada em **11/11/2026** e `/servicos` em **09/11/2026**, antes do commit de SEO de **12/11/2026** (`9ac1865`).

---

## 2. Alterações no código do site

### 2.1. Já aplicado no repositório (pronto para deploy)

- **`src/data/clinicInfo.ts`**:
  - Adicionado `gbpName: "Ana Paula Azevedo Ferreira Fonoaudióloga"`.
  - Corrigido `address.cep` de `"35630-000"` para `"35630-005"`.
- **`index.html`**:
  - Removido o bloco `<script type="application/ld+json">` duplicado que era injetado em todas as rotas (incluindo `/404`).
- **`src/data/schema.ts`**:
  - Definido `clinicSchema.name` como `CLINIC_INFO.gbpName` (`"Ana Paula Azevedo Ferreira Fonoaudióloga"`), correspondendo exatamente ao GBP.
  - Mantido `"Azevedo Fonoaudiologia"` em `alternateName` e consolidado `availableService` no `@graph`.
  - Ajustado `websiteSchema.alternateName` para `[CLINIC_INFO.gbpName, 'Ana Paula Fonoaudióloga Bom Despacho']`.
- **`src/data/seoData.ts`**:
  - Atualizados `<title>` e `description` da Home (`/`) com `"Ana Paula Azevedo Ferreira Fonoaudióloga | Bom Despacho - MG"`.
  - Atualizado `<title>` de `/servicos` com `"Ana Paula Azevedo Ferreira"`.
- **`scripts/prerender.mjs`**:
  - Corrigido `.replace('<!--app-head-->', ...)` para usar função callback, evitando que `$$` em `"priceRange": "$$"` seja convertido para `"$"`.
- **`src/components/home/HeroSection.tsx`**:
  - Removido `initial={{ opacity: 0 }}` de `framer-motion` na dobra inicial para que `<h1>`, subtítulo, CTAs e retrato já venham visíveis no HTML pré-renderizado.
- **`public/llms.txt` e `public/sitemap.xml`**:
  - Atualizado CEP para `35630-005`, incluído `Ana Paula Azevedo Ferreira Fonoaudióloga` no título de `llms.txt` e atualizado `<lastmod>` do `sitemap.xml` para `2026-11-17`.

### 2.2. Checklist de revisão e deploy do código

- [ ] Conferir as alterações locais com `git diff`.
- [ ] Rodar `npm run lint` e `npm run build` para garantir geração atualizada de `dist/`.
- [ ] Publicar o build atualizado na Cloudflare Workers (`npx wrangler deploy` ou pipeline utilizado no projeto).
- [ ] Validar o HTML publicado em produção:
  - Conferir apenas **1** `<script data-seo type="application/ld+json">` na Home.
  - Conferir `"postalCode":"35630-005"` e `"priceRange":"$$"`.
  - Validar as URLs no [Teste de Pesquisa Aprimorada do Google](https://search.google.com/test/rich-results).

### 2.3. Melhorias futuras recomendadas no código (opcional, médio prazo)

- [ ] **Páginas dedicadas por serviço/intenção local:** caso a concorrência orgânica por termos específicos aumente, avaliar rotas próprias indexáveis (ex.: `/aparelhos-auditivos-bom-despacho`, `/fonoaudiologia-domiciliar-bom-despacho`) adicionadas também em `PRERENDER_ROUTES` (`src/entry-server.tsx`) e `public/sitemap.xml`.
- [ ] **Embed do Google Maps no `/sobre`:** em `src/components/about/LocationSection.tsx`, o `iframe` atual usa coordenadas (`?q=-19.741961,-45.255228`). Quando a ficha do GBP estiver consolidada no Maps, considere atualizar `CLINIC_INFO.googleMapsUrl` e o `iframe` com o Place ID / URL oficial da ficha no Google Maps para reforçar a associação geográfica.

---

## 3. Configurações na Cloudflare

### 3.1. Desativar o subdomínio `workers.dev`

Hoje `https://ana-paula-fono.rauldougbr.workers.dev/` serve uma cópia completa e indexável do site.

- [ ] No painel da Cloudflare, acessar **Workers e Pages** → selecionar o Worker **`ana-paula-fono`**.
- [ ] Ir em **Configurações** → **Domínios e rotas**.
- [ ] Desativar a rota **`workers.dev`** (`ana-paula-fono.rauldougbr.workers.dev`) — e também Preview URLs, se habilitadas — mantendo ativos apenas os **Domínios personalizados** (`azevedofono.com.br` e `www.azevedofono.com.br`).
  > **Observação sobre `wrangler.jsonc`:** Como os domínios personalizados estão configurados via painel (e não via `routes` no `wrangler.jsonc`), evite adicionar `"workers_dev": false` no `wrangler.jsonc` sem declarar `routes` no arquivo, ou valide antes no deploy para não exigir `routes` obrigatório no CLI.
- [ ] Testar `https://ana-paula-fono.rauldougbr.workers.dev/` após desativar para confirmar que não está mais acessível publicamente.

### 3.2. Criar Redirect `301` de `www` para domínio raiz

Hoje `https://www.azevedofono.com.br/` responde `200 OK` sem redirecionar.

- [ ] No painel da Cloudflare da zona **`azevedofono.com.br`**, acessar **Regras (Rules)** → **Regras de redirecionamento (Redirect Rules)**.
- [ ] Criar regra:
  - **Nome:** `Redirect www to apex`
  - **Quando (Hostname equals):** `www.azevedofono.com.br`
  - **Tipo:** Dinâmico (`Dynamic`)
  - **Expressão:** `concat("https://azevedofono.com.br", http.request.uri.path)` *(marcando **Preservar string de consulta** / query string)*
  - **Código de status:** `301` (Permanente)
- [ ] Confirmar via navegador ou `curl -I https://www.azevedofono.com.br/` que retorna `HTTP/2 301` apontando para `https://azevedofono.com.br/`.

---

## 4. Configurações no Google Search Console

- [ ] Após publicar o novo build e aplicar o redirect `301` na Cloudflare:
  - Conferir em **Sitemaps** se `https://azevedofono.com.br/sitemap.xml` foi lido com sucesso após a atualização de `<lastmod>` (`2026-11-17`).
  - Usar **Inspeção de URL** → **Solicitar indexação** para:
    - `https://azevedofono.com.br/`
    - `https://azevedofono.com.br/servicos`
    - `https://azevedofono.com.br/sobre`
- [ ] Acompanhar na aba **Desempenho** quais consultas começam a gerar impressões e cliques ao longo das próximas 2–4 semanas.

---

## 5. Configurações no painel do Google Perfil da Empresa (GBP)

Ficha atual: `https://share.google/G9cpJcyQh3aZX1oap`

### 5.1. Dados básicos e consistência (NAP)

- [ ] **Nome da empresa:** manter exatamente `Ana Paula Azevedo Ferreira Fonoaudióloga` (igual ao site e sem palavras-chave artificiais para evitar suspensão).
- [ ] **Endereço:** confirmar exatamente `Rua do Rosário, 159 - Centro, Bom Despacho - MG, 35630-005`.
  - Como é **local compartilhado**, se o espaço possuir identificação de sala (ex.: `Sala 2`), inclua no complemento caso exista placa na porta; caso contrário, mantenha o endereço limpo e comprove a presença física com fotos da placa/recepção.
- [ ] **Telefone:** `(37) 99943-9900`.
- [ ] **Site:** `https://azevedofono.com.br/`.
- [ ] **Horário de funcionamento:** Segunda a Sexta-feira, `08:00` às `18:00`.

### 5.2. Categorias e Serviços

- [ ] **Categoria principal:** manter `Fonoaudiólogo`.
- [ ] **Categorias secundárias:** verificar no seletor oficial em português do GBP quais categorias secundárias aplicáveis existem no catálogo (ex.: categoria relacionada a **aparelhos auditivos**, caso disponível para o perfil no Brasil) e adicionar apenas as que representem serviços reais.
- [ ] **Serviços cadastrados:** no menu **Editar serviços**, adicionar individualmente com nome e descrição curta:
  1. `Seleção e Adaptação de Aparelhos Auditivos`
  2. `Fonoaudiologia Infantil (Fala e Linguagem)`
  3. `Tratamento de Disfagia em Idosos`
  4. `Fonoaudiologia Domiciliar (Home Care)`
  5. `Motricidade Orofacial e Reabilitação Pós-AVC`
  6. `Avaliação e Terapia de Voz`

### 5.3. Descrição sugerida para o perfil (máx. 750 caracteres)

```text
Ana Paula Azevedo Ferreira Fonoaudióloga (CRFa 6-3588), à frente da Azevedo Fonoaudiologia no Centro de Bom Despacho - MG (Rua do Rosário, 159, em frente à VDM). Atendimento clínico especializado em seleção, testes e adaptação de aparelhos auditivos digitais com conectividade Bluetooth, fonoaudiologia infantil (atraso de fala e linguagem), motricidade orofacial, voz e reabilitação neurológica. Também oferecemos atendimento fonoaudiológico domiciliar (Home Care) em toda a área urbana de Bom Despacho para idosos com disfagia, engasgos ou recuperação pós-AVC. Consultas com hora marcada pelo telefone e WhatsApp (37) 99943-9900 ou pelo site azevedofono.com.br.
```

### 5.4. Atributos e link de avaliação

- [ ] Preencher os atributos aplicáveis no perfil (ex.: atendimento presencial, necessidade de agendamento, acessibilidade se houver, estacionamento na rua/proximidades).
- [ ] No painel do GBP, clicar em **Solicitar avaliações**, copiar o link oficial curto de avaliação (`g.page/.../review`) e enviar para a cliente usar conforme o guia dela.
