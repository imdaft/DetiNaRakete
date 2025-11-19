import { SearchBar } from '@/components/shared/search-bar'
import { ProfileCard } from '@/components/features/profile/profile-card'
import { SlidersHorizontal } from 'lucide-react'

export default function SearchPage() {
  // Mock data
  const studios = [
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
    {
      id: '4',
      slug: 'super-show',
      name: 'Супер Шоу',
      city: 'Москва',
      rating: 4.9,
      reviewsCount: 156,
      priceFrom: 18000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Шоу', 'Фокусы', 'Аниматоры'],
      verified: true,
    },
    {
      id: '5',
      slug: 'kids-fun',
      name: 'Kids Fun',
      city: 'Екатеринбург',
      rating: 4.6,
      reviewsCount: 73,
      priceFrom: 11000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Квесты', 'Игры', 'Батуты'],
    },
    {
      id: '6',
      slug: 'dream-party',
      name: 'Праздник Мечты',
      city: 'Казань',
      rating: 4.8,
      reviewsCount: 94,
      priceFrom: 13000,
      photos: ['/api/placeholder/400/300'],
      tags: ['Анимация', 'Декор', 'Фото'],
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <SearchBar variant="compact" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">Фильтры</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    Сбросить
                  </button>
                </div>

                {/* Price Filter */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Цена</h3>
                  <div className="space-y-3">
                    {['До 10 000 ₽', '10 000 - 20 000 ₽', '20 000 - 30 000 ₽', 'От 30 000 ₽'].map((price) => (
                      <label key={price} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                        />
                        <span className="text-sm text-slate-700 group-hover:text-slate-900">
                          {price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* City Filter */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Город</h3>
                  <div className="space-y-3">
                    {['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'].map((city) => (
                      <label key={city} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                        />
                        <span className="text-sm text-slate-700 group-hover:text-slate-900">
                          {city}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Рейтинг</h3>
                  <div className="space-y-3">
                    {[
                      { stars: 4.5, label: '4.5+ звезд' },
                      { stars: 4.0, label: '4.0+ звезд' },
                      { stars: 3.5, label: '3.5+ звезд' },
                    ].map((rating) => (
                      <label key={rating.stars} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                        />
                        <span className="text-sm text-slate-700 group-hover:text-slate-900">
                          {rating.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Verified Only */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      Только проверенные
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl font-medium text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Фильтры
              </button>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  Найдено {studios.length} студий
                </h1>
                <p className="text-slate-600">
                  Детские праздники в вашем городе
                </p>
              </div>

              {/* Sort */}
              <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none cursor-pointer">
                <option>По популярности</option>
                <option>По рейтингу</option>
                <option>Сначала дешевле</option>
                <option>Сначала дороже</option>
              </select>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {studios.map((studio) => (
                <ProfileCard key={studio.id} {...studio} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Назад
                </button>
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                  Далее
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

