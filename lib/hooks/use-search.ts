'use client'

import { useState, useEffect, useCallback } from 'react'

export interface SearchFilters {
  city?: string
  priceMin?: number
  priceMax?: number
  ageFrom?: number
  ageTo?: number
  tags?: string[]
}

export interface SearchResult {
  services: any[]
  profiles: any[]
  total: number
  isLoading: boolean
  error: string | null
  method?: 'keyword' | 'semantic' // Какой метод поиска использовался
}

export type SearchMode = 'keyword' | 'semantic' | 'auto'

/**
 * Хук для управления поиском
 */
export function useSearch(initialQuery: string = '', mode: SearchMode = 'auto') {
  const [query, setQuery] = useState(initialQuery)
  const [filters, setFilters] = useState<SearchFilters>({})
  const [searchMode, setSearchMode] = useState<SearchMode>(mode)
  const [results, setResults] = useState<SearchResult>({
    services: [],
    profiles: [],
    total: 0,
    isLoading: false,
    error: null,
  })

  // Определяем, использовать ли семантический поиск
  const shouldUseSemanticSearch = useCallback((searchQuery: string): boolean => {
    if (searchMode === 'keyword') return false
    if (searchMode === 'semantic') return true
    
    // Auto mode: используем семантический поиск для сложных запросов
    const words = searchQuery.trim().split(/\s+/)
    return words.length >= 3 // Если 3+ слова, используем семантику
  }, [searchMode])

  // Семантический поиск
  const searchSemantic = useCallback(async (searchQuery: string, searchFilters: SearchFilters = {}) => {
    try {
      const response = await fetch('/api/search/semantic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          ...searchFilters,
          limit: 20,
          threshold: 0.6, // 60% similarity
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка семантического поиска')
      }

      const data = await response.json()

      setResults({
        services: data.services || [],
        profiles: [], // Пока не ищем профили
        total: data.total || 0,
        isLoading: false,
        error: null,
        method: 'semantic',
      })
    } catch (error: any) {
      console.error('Semantic search error:', error)
      // Fallback на keyword поиск при ошибке
      await searchKeyword(searchQuery, searchFilters)
    }
  }, [])

  // Keyword поиск
  const searchKeyword = useCallback(async (searchQuery: string, searchFilters: SearchFilters = {}) => {
    try {
      const params = new URLSearchParams()
      params.append('q', searchQuery)
      params.append('active', 'true')
      
      if (searchFilters.city) params.append('city', searchFilters.city)
      if (searchFilters.priceMin !== undefined) params.append('priceMin', searchFilters.priceMin.toString())
      if (searchFilters.priceMax !== undefined) params.append('priceMax', searchFilters.priceMax.toString())
      if (searchFilters.ageFrom !== undefined) params.append('ageFrom', searchFilters.ageFrom.toString())
      if (searchFilters.ageTo !== undefined) params.append('ageTo', searchFilters.ageTo.toString())
      if (searchFilters.tags && searchFilters.tags.length > 0) {
        searchFilters.tags.forEach(tag => params.append('tags', tag))
      }

      const response = await fetch(`/api/services?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Ошибка поиска')
      }

      const data = await response.json()

      setResults({
        services: data.services || [],
        profiles: [],
        total: data.total || 0,
        isLoading: false,
        error: null,
        method: 'keyword',
      })
    } catch (error: any) {
      console.error('Keyword search error:', error)
      setResults(prev => ({
        ...prev,
        isLoading: false,
        error: error.message || 'Ошибка поиска',
      }))
    }
  }, [])

  // Основная функция поиска
  const search = useCallback(async (searchQuery: string, searchFilters: SearchFilters = {}) => {
    if (!searchQuery.trim()) {
      setResults({
        services: [],
        profiles: [],
        total: 0,
        isLoading: false,
        error: null,
      })
      return
    }

    setResults(prev => ({ ...prev, isLoading: true, error: null }))

    // Выбираем метод поиска
    if (shouldUseSemanticSearch(searchQuery)) {
      await searchSemantic(searchQuery, searchFilters)
    } else {
      await searchKeyword(searchQuery, searchFilters)
    }
  }, [shouldUseSemanticSearch, searchSemantic, searchKeyword])

  // Автоматический поиск при изменении query или filters
  useEffect(() => {
    if (query) {
      search(query, filters)
    }
  }, [query, filters, search])

  return {
    query,
    setQuery,
    filters,
    setFilters,
    searchMode,
    setSearchMode,
    results,
    search,
  }
}

