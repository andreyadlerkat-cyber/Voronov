# Портфолио — Пономаренко Дмитрий

Персональное портфолио (визитная карточка) веб-разработчика, созданное на Next.js с использованием современных технологий.

## 🚀 Технологии

- **Фреймворк:** [Next.js 16](https://nextjs.org/)
- **Язык:** [TypeScript](https://www.typescriptlang.org/)
- **Стили:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Анимации:** [Framer Motion](https://www.framer.com/motion/)
- **3D графика:** [Three.js](https://threejs.org/)
- **Хостинг:** [GitHub Pages](https://pages.github.com/)

## 📋 Функциональность

- ✅ Главная страница с приветствием и 3D-фоном
- ✅ Раздел «Обо мне» с резюме и опытом работы
- ✅ Раздел «Навыки» с визуальными индикаторами
- ✅ Раздел «Проекты» с карточками проектов
- ✅ Раздел «Контакты» с формой обратной связи
- ✅ Адаптивный дизайн (мобильные, планшеты, десктоп)
- ✅ SEO-оптимизация (метатеги, Open Graph)
- ✅ Плавные анимации при скролле
- ✅ Мобильное меню навигации

## 🛠️ Установка и запуск

### Требования

- Node.js 20+
- npm или yarn

### Шаги

1. Клонируйте репозиторий:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Сборка продакшн-версии |
| `npm run start` | Запуск продакшн-сервера |
| `npm run lint` | Проверка кода ESLint |

## 🏗️ Структура проекта

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Корневой layout с метаданными
│   │   ├── page.tsx        # Главная страница
│   │   └── globals.css     # Глобальные стили
│   ├── components/
│   │   ├── Header.tsx      # Шапка с навигацией
│   │   ├── Hero.tsx        # Главная секция с 3D-фоном
│   │   ├── About.tsx       # Раздел «Обо мне»
│   │   ├── Skills.tsx      # Раздел «Навыки»
│   │   ├── Projects.tsx    # Раздел «Проекты»
│   │   ├── Contact.tsx     # Раздел «Контакты»
│   │   └── Footer.tsx      # Подвал
│   └── lib/
│       └── data.ts         # Данные портфолио
├── public/                 # Статические ресурсы
├── package.json           # Зависимости и скрипты
└── tsconfig.json          # Конфигурация TypeScript
```

## 🎨 Дизайн

- **Цветовая схема:** тёмная тема с фиолетовыми и голубыми акцентами
- **Шрифты:** Inter (основной), JetBrains Mono (код)
- **Анимации:** плавные переходы при скролле и наведении
- **3D элементы:** интерактивный фон с частицами и соединительными линиями

## 📱 Адаптивность

Сайт корректно отображается на:
- 📱 Мобильных устройствах (320px+)
- 📱 Планшетах (768px+)
- 💻 Десктопах (1024px+)

## 🔒 Безопасность

- Форма обратной связи защищена от базового спама
- Все ссылки на внешние ресурсы используют `rel="noopener noreferrer"`

## 📄 Лицензия

MIT

## 👤 Автор

**Пономаренко Дмитрий**

- 📧 Email: 89654837470dp@gmail.com
- 📞 Телефон: 8 988 186 81 39

## 🚀 Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Добавьте remote:
```bash
git remote add origin https://github.com/<username>/<repo>.git
```

3. Обновите `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/<repo-name>',
  images: {
    unoptimized: true,
  },
};
```

4. Соберите проект:
```bash
npm run build
```

5. Включите GitHub Pages в настройках репозитория (Settings → Pages → gh-pages branch)

## 📚 Источники

- [Документация Next.js](https://nextjs.org/docs)
- [Документация Three.js](https://threejs.org/docs/)
- [Гайдлайны WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Web.dev — производительность](https://web.dev/learn/)
