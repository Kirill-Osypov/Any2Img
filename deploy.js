const fs = require('fs');
const { execSync } = require('child_process');

// Читаем package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Сохраняем оригинальный package.json
const originalPackageJson = { ...packageJson };

// Добавляем homepage для GitHub Pages
packageJson.homepage = 'https://Kirill-Osypov.github.io/Any2Img';

// Записываем обновленный package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

try {
  console.log('🔨 Собираем приложение...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('🚀 Деплоим на GitHub Pages...');
  execSync('npx gh-pages -d build', { stdio: 'inherit' });

  console.log('✅ Деплой завершен!');
  console.log(
    '🌐 Сайт доступен по адресу: https://Kirill-Osypov.github.io/Any2Img'
  );
} catch (error) {
  console.error('❌ Ошибка при деплое:', error.message);
} finally {
  // Восстанавливаем оригинальный package.json
  fs.writeFileSync(
    'package.json',
    JSON.stringify(originalPackageJson, null, 2)
  );
  console.log('🔄 package.json восстановлен');
}
