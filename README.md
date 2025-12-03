# 🌐 Meu Portfólio – Victor

Este é o meu site pessoal, desenvolvido com **HTML, CSS e JavaScript**, onde apresento minhas informações, competências, habilidades, experiências, educação e projetos.

---

## 🎨 Tecnologias utilizadas

- **HTML5** → estrutura das páginas  
- **CSS3** → estilização, animações e layout moderno  
- **JavaScript** → interatividade (menu lateral abre e fecha)

---

## 📌 Funcionalidades

- ✔ Menu lateral retrátil (abre e fecha)
- ✔ Layout responsivo
- ✔ Cards animados com hover
- ✔ Design moderno com azul como cor principal
- ✔ Código organizado e fácil de editar


## 🚀 Como executar o projeto

1. Instale a extensão **Live Server** no VS Code  
2. Clique com o botão direito no arquivo **index.html**  
3. Escolha **"Open with Live Server"**

---

## Paleta de cores ultilizada:

**#2487c9 – azul principal**

**#1a6ea0 – azul escuro**

---

## Configuração de Debug

O projeto também possui um `launch.json` para facilitar o debug no Chrome:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug no Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:5500",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
