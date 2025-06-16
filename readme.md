# Handlebars Boilerplate

Бойлерплейт на основе связки Gulp + Webpack с поддержкой SVG спрайтов и SCSS

## Установка

Установить Node JS, затем выполнить команду:

```bash
npm install
```

## Использование

В режиме разработки:

```bash
npm run dev
```
В продакшен режиме:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use 16

npm run build
```