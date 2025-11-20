import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import HomeEng from './pages/HomeEng'
import HomeSw from './pages/HomeSw'
import StaticPage from './pages/StaticPage'

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Eng" replace />} />
      <Route path="/Eng" element={<HomeEng />} />
      <Route path="/Sw" element={<HomeSw />} />
      <Route path="/about" element={<StaticPage title="About Sokoni Pro">Sokoni Pro is an all-in-one platform helping sellers build stores, manage inventory, accept payments and track deliveries.</StaticPage>} />
      <Route path="/terms" element={<StaticPage title="Terms & Conditions">These are placeholder terms. Replace with your legal content.</StaticPage>} />
      <Route path="/privacy" element={<StaticPage title="Privacy Policy">This is a placeholder privacy policy. Replace with your policy.</StaticPage>} />
      <Route path="*" element={<StaticPage title="Page Not Found">We couldn't find what you were looking for.</StaticPage>} />
    </Routes>
  )
}

export default function App(){
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}
