import React from 'react'
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle, Tiktok } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="pt-16 pb-24 relative">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-foreground/80">
            <li><a href="/about" className="hover:text-foreground">About</a></li>
            <li><a href="/privacy" className="hover:text-foreground">Privacy</a></li>
            <li><a href="/terms" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-foreground/80">
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            <li><a href="#community" className="hover:text-foreground">Community</a></li>
            <li><a href="mailto:info@sokonipro.com" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex gap-3 text-foreground/80">
            <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-lg border border-border hover:bg-muted/30"><Instagram size={18}/></a>
            <a href="https://facebook.com" aria-label="Facebook" className="p-2 rounded-lg border border-border hover:bg-muted/30"><Facebook size={18}/></a>
            <a href="https://tiktok.com" aria-label="TikTok" className="p-2 rounded-lg border border-border hover:bg-muted/30"><Tiktok size={18}/></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-lg border border-border hover:bg-muted/30"><Linkedin size={18}/></a>
            <a href="https://youtube.com" aria-label="YouTube" className="p-2 rounded-lg border border-border hover:bg-muted/30"><Youtube size={18}/></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 text-sm text-foreground/70">© {year} Sokoni Pro. All rights reserved.</div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/255616506030" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg hover:animate-none" style={{ backgroundColor: '#25D366' }}>
        <MessageCircle />
      </a>
    </footer>
  )
}
