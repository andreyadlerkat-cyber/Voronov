// Данные для портфолио

export const personalInfo = {
  name: "Воронов Даниил",
  title: "Веб-разработчик",
  phone: "89154137507",
  email: "dn.voronov@YANDEX.RU",
  location: "Россия",
  social: {
    github: "https://github.com",
    telegram: "https://t.me/xarasara",
    linkedin: "https://linkedin.com",
  },
};

export const about = {
  description: `Я — увлечённый веб-разработчик с опытом создания современных веб-приложений. 
  Специализируюсь на фронтенд-разработке с использованием React, Next.js и TypeScript. 
  Стремлюсь создавать быстрые, доступные и визуально привлекательные веб-приложения.
  
  Постоянно изучаю новые технологии и подходы к разработке, уделяю внимание качеству кода 
  и пользовательскому опыту. Имею опыт работы как в команде, так и самостоятельно.`,
  experience: [
    {
      period: "2024 — настоящее время",
      role: "Frontend-разработчик",
      company: "Фриланс / Проекты",
      description: "Разработка веб-приложений на Next.js, React, TypeScript. Создание адаптивных интерфейсов, оптимизация производительности.",
    },
    {
      period: "2023 — 2024",
      role: "Junior Frontend-разработчик",
      company: "Изучение и практика",
      description: "Изучение JavaScript, React, Next.js. Создание учебных проектов, освоение TypeScript и Tailwind CSS.",
    },
  ],
};

export const skills = [
  { name: "JavaScript / TypeScript", level: 85, icon: "📜" },
  { name: "React / Next.js", level: 80, icon: "⚛️" },
  { name: "HTML5 / CSS3", level: 90, icon: "🎨" },
  { name: "Tailwind CSS", level: 85, icon: "🌊" },
  { name: "TypeScript", level: 80, icon: "📘" },
  { name: "Git / GitHub", level: 75, icon: "🔧" },
  { name: "REST API", level: 70, icon: "🔗" },
  { name: "Three.js / WebGL", level: 60, icon: "🎮" },
];

export const projects = [
  {
    id: 1,
    title: "Портфолио (визитная карточка)",
    description: "Персональное портфолио на Next.js с 3D-элементами, адаптивным дизайном и SEO-оптимизацией.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "E-commerce платформа",
    description: "Интернет-магазин с корзиной, оплатой и админ-панелью. Серверный рендеринг для SEO.",
    technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Prisma"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/project-2.png",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Приложение для управления задачами с drag-and-drop, авторизацией и real-time обновлениями.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/project-3.png",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Дашборд погоды с геолокацией, графиками и прогнозом на неделю. Интеграция с OpenWeather API.",
    technologies: ["JavaScript", "React", "Chart.js", "OpenWeather API"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/project-4.png",
  },
];

export const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];
