import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-txt">
      <AppHeader />
      <main className="flex-1 flex flex-col">{children}</main>
      <AppFooter />
    </div>
  )
}
