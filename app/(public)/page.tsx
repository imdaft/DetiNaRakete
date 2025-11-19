import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import { SearchBar } from '@/components/shared/search-bar'
import { ProfileCard } from '@/components/features/profile/profile-card'

export default function HomePage() {
  // Mock data для демо
  const featuredStudios = [
    {
      id: '1',
      slug: 'magic-party',
      name: 'Магия Праздника',
      city: 'Москва',
      rating: 4.9,
      reviewsCount: 127,
      priceFrom: 15000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Анимация', 'Шоу', 'Квесты'],
      verified: true,
      featured: true,
    },
    {
      id: '2',
      slug: 'happy-kids',
      name: 'Счастливые Дети',
      city: 'Санкт-Петербург',
      rating: 4.8,
      reviewsCount: 89,
      priceFrom: 12000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Аниматоры', 'Фотосессия'],
      verified: true,
    },
    {
      id: '3',
      slug: 'party-zone',
      name: 'Зона Праздника',
      city: 'Новосибирск',
      rating: 4.7,
      reviewsCount: 64,
      priceFrom: 10000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Химшоу', 'Батуты', 'Квесты'],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-6xl">🚀</span>
                </span>
                Запускаем детей
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500"> к их мечтам!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Умный поиск детских праздников, кружков и секций с AI-подбором. 
                Найдём идеальное за 30 секунд! ⚡
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Studios */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Топ студий
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Лучшие по отзывам и рейтингу
              </p>
            </div>
            <Link 
              href={ROUTES.SEARCH}
              className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2"
            >
              Смотреть все
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStudios.map((studio) => (
              <ProfileCard key={studio.id} {...studio} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Как это работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                1. Поиск с AI
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Опишите желаемый праздник, и AI подберёт лучшие варианты
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                2. Выбор и бронь
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Сравните предложения, прочитайте отзывы и забронируйте онлайн
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                3. Праздник!
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Наслаждайтесь идеальным праздником для вашего ребёнка
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Studios Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800" id="for-studios">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-6">
              Для студий и аниматоров
            </h2>
            <p className="text-xl text-center text-slate-600 dark:text-slate-400 mb-12">
              Привлекайте больше клиентов через единую федеральную платформу
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  ✨ AI-продвижение
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Умный алгоритм показывает ваши услуги нужным клиентам
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  📊 Аналитика
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Отслеживайте эффективность и рост бизнеса
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  💳 Онлайн-оплата
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Принимайте оплату через платформу безопасно и удобно
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  ⭐ Репутация
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Собирайте отзывы и повышайте доверие клиентов
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href={ROUTES.SIGNUP}
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Начать работу
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы создать незабываемый праздник?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных родителей по всей России
          </p>
          <Link 
            href={ROUTES.SEARCH}
            className="inline-block px-8 py-4 text-lg font-semibold text-indigo-600 bg-white hover:bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Найти праздник сейчас
          </Link>
        </div>
      </section>
    </div>
  )
}

