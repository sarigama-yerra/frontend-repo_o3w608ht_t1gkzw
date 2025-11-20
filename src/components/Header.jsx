import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isSw = location.pathname.toLowerCase().startsWith('/sw')
  const isEng = location.pathname.toLowerCase().startsWith('/eng') || location.pathname === '/'

  const toggleLang = () => {
    if (isSw) navigate('/Eng')
    else navigate('/Sw')
  }

  const linkClasses = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
  }`

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to={isSw ? '/Sw' : '/Eng'} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg" />
            <span className="font-bold">Sokoni Pro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground">Features</a>
            <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground">Pricing</a>
            <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground">Blog</a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg border border-border hover:bg-muted/30 transition">
              {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button aria-label="Switch language" onClick={toggleLang} className="px-3 py-2 rounded-lg border border-border hover:bg-muted/30 transition text-sm font-medium">
              {isSw ? 'EN' : 'SW'}
            </button>
            <a href="https://sokonipro.com/register" target="_blank" rel="noreferrer" className="px-3 py-2 text-sm font-medium">Login</a>
            <a href="https://sokonipro.com/register" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-semibold rounded-xl bg-primary text-primary-foreground shadow hover:opacity-90 transition">Start for Free</a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-border" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={20}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="absolute top-4 right-4">
            <button className="p-2 rounded-lg border border-border" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="mt-20 px-6 space-y-4">
            <NavLink onClick={() => setOpen(false)} to="/about" className="block px-3 py-3 rounded-lg border border-border">About</NavLink>
            <a onClick={() => setOpen(false)} href="#features" className="block px-3 py-3 rounded-lg border border-border">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block px-3 py-3 rounded-lg border border-border">Pricing</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block px-3 py-3 rounded-lg border border-border">Blog</a>
            <div className="flex items-center gap-3 pt-4">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex-1 px-3 py-3 rounded-lg border border-border">{theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
              <button onClick={toggleLang} className="px-3 py-3 rounded-lg border border-border">{isSw ? 'EN' : 'SW'}</button>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://sokonipro.com/register" className="flex-1 px-3 py-3 rounded-lg border border-border text-center" target="_blank" rel="noreferrer">Login</a>
              <a href="https://sokonipro.com/register" className="flex-1 px-3 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold shadow" target="_blank" rel="noreferrer">Start for Free</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
