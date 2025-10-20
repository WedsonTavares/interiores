<h2 align="center">Interiores — Landing Page</h2>

Página de demonstração totalmente responsiva para um portfólio de design de interiores. Desenvolvida com HTML, CSS e JavaScript.
Este projeto é uma landing page para fins didáticos.


<div align="center">
	<a href="https://leafy-salamander-302e1a.netlify.app" target="_blank" rel="noopener"><strong>➥ Ver Demonstração</strong></a>
</div>


## Sumário

- [Demonstração](#demonstra%C3%A7%C3%A3o)
- [Screenshots](#screenshots)
- [Recursos](#recursos)
- [Como rodar localmente](#como-rodar-localmente)
- [Commit & Push (passo a passo)](#commit--push-passo-a-passo)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)
- [Licença](#licen%C3%A7a)

---


## Demonstração

Abra `index.html` diretamente no navegador ou rode um servidor estático local para testar.



Visualizar Demo: <a href="https://leafy-salamander-302e1a.netlify.app" target="_blank" rel="noopener">https://leafy-salamander-302e1a.netlify.app</a>

---

## Screenshots

As imagens de demonstração estão em `assets/` e podem ser usadas no README se desejar.

> Observação: se as imagens não aparecerem, verifique se os arquivos existem em `assets/` e têm os nomes corretos.

---

## Recursos

- Layout totalmente responsivo
- Hero com imagem adaptável
- Galeria de trabalhos e depoimentos
- Integração com Swiper para carrosséis
- Ano do rodapé atualizado automaticamente via JavaScript

---

## Como rodar localmente

1. Clone o repositório:

```bash
git clone <URL-DO-SEU-REPO>
cd interiores
```

2. Abra `index.html` no navegador ou rode um servidor estático (recomendado):

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

3. Para desenvolver, edite `index.html`, `css/input.css` e `js/main.js`.

---

## Commit e Push — passo a passo

Use estes comandos para commitar e enviar as alterações ao remoto (assume a branch `main`):

```bash
# 1) conferir status
git status

# 2) adicionar arquivos alterados
git add .

# 3) commitar com mensagem clara
git commit -m "Preparar projeto para deploy: adicionar README e .gitignore"

# 4) enviar para o repositório remoto
git push origin main
```

Se precisar trocar a URL do remoto:

```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

---

## Estrutura do projeto

- `index.html` — página principal
- `css/input.css` — estilos principais (Tailwind input)
- `dist/output.css` — CSS compilado (gerado, ignorado por .gitignore)
- `js/main.js` — scripts do site
- `assets/` — imagens e arquivos estáticos (hero, work, testimonial, brands, news)

---

## Contribuição

1. Faça um fork
2. Crie uma branch: `git checkout -b minha-mudanca`
3. Faça alterações e commite
4. Abra um Pull Request

---

## Contato

- LinkedIn: https://www.linkedin.com/in/wedsontavares/
- Email: wedsonsobral@gmail.com

---

## Licença

Projeto livre para estudo e uso pessoal. Inclua atribuição se compartilhar publicamente.

---
