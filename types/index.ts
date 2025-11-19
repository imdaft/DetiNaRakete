/**
 * Роли пользователей
 */
export type UserRole = 'parent' | 'animator' | 'studio' | 'admin'

/**
 * Статусы бронирования
 */
export type BookingStatus = 'pending' | 'confirmed' | 'paid' | 'completed' | 'cancelled' | 'dispute'

/**
 * Статусы оплаты
 */
export type PaymentStatus = 'unpaid' | 'partial' | 'paid' | 'refunded'

/**
 * Категории услуг
 */
export type ServiceCategory = 'animation' | 'show' | 'photo' | 'video' | 'venue' | 'package' | 'other'

/**
 * Диапазоны цен
 */
export type PriceRange = '$' | '$$' | '$$$'

