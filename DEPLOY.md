# Инструкции по деплою на GitHub Pages

## Настройка

1. **Обновите homepage в package.json**
   Замените `yourusername` на ваше имя пользователя GitHub:
   ```json
   "homepage": "https://yourusername.github.io/any-2-img"
   ```

2. **Убедитесь, что репозиторий настроен на GitHub**
   - Создайте репозиторий на GitHub с именем `any-2-img`
   - Подключите локальный репозиторий к GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/any-2-img.git
   git push -u origin main
   ```

## Деплой

Для деплоя приложения на GitHub Pages выполните:

```bash
npm run deploy
```

Эта команда:
1. Соберет приложение (`npm run build`)
2. Загрузит собранные файлы в ветку `gh-pages`
3. GitHub Pages автоматически опубликует сайт

## Доступ к сайту

После успешного деплоя ваш сайт будет доступен по адресу:
`https://yourusername.github.io/any-2-img`

## Важные замечания

- Используется HashRouter вместо BrowserRouter для совместимости с GitHub Pages
- Создан файл `public/404.html` для правильной работы SPA на GitHub Pages
- При каждом деплое содержимое ветки `gh-pages` полностью заменяется
