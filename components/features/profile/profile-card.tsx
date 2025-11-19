'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Heart, Verified } from 'lucide-react'
import { useState } from 'react'

interface ProfileCardProps {
  id: string
  slug: string
  name: string
  city: string
  rating: number
  reviewsCount: number
  priceFrom: number
  photos: string[]
  tags: string[]
  verified?: boolean
  featured?: boolean
}

export function ProfileCard({
  slug,
  name,
  city,
  rating,
  reviewsCount,
  priceFrom,
  photos,
  tags,
  verified = false,
  featured = false,
}: ProfileCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const mainPhoto = photos[currentPhoto] || '/placeholder-studio.jpg'

  return (
    <Link 
      href={`/profiles/${slug}`}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-xl shadow-sm">
        {/* Фото */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={mainPhoto}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                ⭐ Топ
              </span>
            )}
            {verified && (
              <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                <Verified className="h-3 w-3" />
                Проверено
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 shadow-md"
          >
            <Heart 
              className={`h-5 w-5 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-600'
              }`}
            />
          </button>

          {/* Photo Navigation */}
          {photos.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPhoto(index)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentPhoto 
                      ? 'bg-white w-6' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                {name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-slate-600 mt-1">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{city}</span>
              </div>
            </div>
            
            {/* Rating */}
            {rating > 0 && (
              <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
                <span className="text-sm text-slate-500">({reviewsCount})</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 text-slate-500 text-xs font-medium">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-1 pt-3 border-t border-slate-100">
            <span className="text-xl font-bold text-slate-900">
              от {priceFrom.toLocaleString('ru')} ₽
            </span>
            <span className="text-sm text-slate-500">/праздник</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

