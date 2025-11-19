# DetiNaRakete - MVP Development

**🚀 Запускаем детей к их мечтам!**

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install --legacy-peer-deps
```

### 2. Настройка переменных окружения

Создайте `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://ваш-проект.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Gemini AI
GEMINI_API_KEY=AIzaSy...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=DetiNaRakete
```

### 3. Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📚 Документация

- **Полная спека:** `../PROJECT_SPECS.md`
- **Быстрый старт:** `../QUICKSTART.md`
- **TODO лист:** `../TODO.md`
- **Tech Stack:** `../TECH_STACK.md`

## 🛠️ Команды

```bash
npm run dev          # Разработка (Turbopack)
npm run build        # Сборка production
npm start            # Запуск production
npm run lint         # Линтинг
```

## ✅ Статус

- [x] Next.js 15 + TypeScript + Tailwind
- [x] Supabase клиенты (client, server)
- [x] Gemini AI интеграция
- [x] Базовая структура проекта
- [ ] База данных (миграции)
- [ ] Auth flow
- [ ] UI компоненты

## 📦 Основные технологии

- **Next.js** 15.0.3
- **React** 19.0.0-rc
- **TypeScript** 5.6
- **Tailwind CSS** 3.4
- **Supabase** (PostgreSQL + pgvector)
- **Gemini 2.0 Flash** (AI)

## 🎯 Следующие шаги

1. Создать проект в Supabase
2. Получить Gemini API ключ
3. Настроить `.env.local`
4. Создать схему БД
5. Начать разработку по `../TODO.md`

---

**Версия:** 0.1.0  
**Дата:** 18.11.2025
