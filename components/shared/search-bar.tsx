'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

interface SearchBarProps {
  onSearch?: (params: SearchParams) => void
  variant?: 'default' | 'compact'
}

interface SearchParams {
  query: string
  city: string
  date?: string
  children?: number
}

export function SearchBar({ onSearch, variant = 'default' }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query, city })
    }
  }

  if (variant === 'compact') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Найти аниматора, студию или мероприятие..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full pl-12 pr-4 py-4 text-base border-2 border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white shadow-sm hover:shadow-md"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-2">
        <div className="flex flex-col md:flex-row gap-2">
          {/* Что ищем */}
          <div className="flex-1 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Что ищете? (например: пиратская вечеринка)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className="w-full pl-12 pr-4 py-4 text-base rounded-2xl hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Город */}
          <div className="flex-1 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <MapPin className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Город"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className="w-full pl-12 pr-4 py-4 text-base rounded-2xl hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Кнопка поиска */}
          <button
            onClick={handleSearch}
            className="md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline">Найти</span>
          </button>
        </div>

        {/* Расширенные фильтры */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <button className="px-4 py-2 rounded-full border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Дата
            </button>
            <button className="px-4 py-2 rounded-full border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-center gap-2 text-sm font-medium">
              <Users className="h-4 w-4" />
              Количество детей
            </button>
            <button className="px-4 py-2 rounded-full border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-sm font-medium">
              Возраст
            </button>
            <button className="px-4 py-2 rounded-full border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-sm font-medium">
              Бюджет
            </button>
          </div>
        )}
      </div>

      {/* Быстрые теги */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['Аниматоры', 'Химическое шоу', 'Фотограф', 'Квест', 'Батуты'].map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 rounded-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

