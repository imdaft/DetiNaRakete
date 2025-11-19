import Link from 'next/link'
import { ROUTES } from '@/lib/constants'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href={ROUTES.HOME} className="text-xl font-bold text-slate-900 dark:text-white">
              DetiNaRakete
            </Link>
            
            <nav className="flex gap-6">
              <Link 
                href={ROUTES.DASHBOARD}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Дашборд
              </Link>
              <Link 
                href={ROUTES.SERVICES}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Услуги
              </Link>
              <Link 
                href={ROUTES.BOOKINGS}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Заявки
              </Link>
              <Link 
                href={ROUTES.SETTINGS}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Настройки
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

