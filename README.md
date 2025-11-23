# Portfolio Website - Erhan

Moderne, professionelle Portfolio-Website für Softwareentwicklung, Test-Automatisierung und n8n Workflow-Automatisierung.

## 🚀 Features

- ✅ **Mehrsprachig**: Deutsch (Hauptsprache), Englisch, Türkisch
- ✅ **Dark/Light Mode**: Themenwechsel mit localStorage Persistenz
- ✅ **Responsive Design**: Mobile-first Ansatz
- ✅ **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- ✅ **SEO-optimiert**: Metadata und strukturierter Content
- ✅ **Schnelle Performance**: Optimierte Ladezeiten

## 📋 Sections

1. **Hero** - Einführung und CTA
2. **Über mich** - Professioneller Hintergrund
3. **Leistungen** - 4 Hauptbereiche:
   - Softwareentwicklung
   - Test-Automatisierung
   - Workflow-Automatisierung (n8n)
   - Datenbank-Management
4. **Berufserfahrung** - Lebodoors, Touchtech, Projekte
5. **Projekte** - Kategorisiert (Development, QA, n8n)
6. **Kenntnisse** - Mit "Derzeit lerne ich: SAP ABAP"
7. **Kontakt** - Formular und Kontaktinformationen

## 🛠️ Installation

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn

### Schritte

1. **Repository klonen oder Dateien kopieren**

2. **Dependencies installieren**
```bash
cd portfolio
npm install
```

3. **Development Server starten**
```bash
npm run dev
```

4. **Im Browser öffnen**
```
http://localhost:3000
```

## 📦 Build für Production

```bash
# Production Build erstellen
npm run build

# Production Server starten
npm start
```

## 🎨 Anpassungen

### Persönliche Informationen ändern

1. **Kontaktdaten** in `components/Contact.tsx`:
   - Email
   - Telefon
   - Standort

2. **Social Media Links** in `components/Hero.tsx` und `components/Footer.tsx`:
   - GitHub URL
   - LinkedIn URL
   - Email

3. **Projekte hinzufügen** in `components/Projects.tsx`:
   - Neues Projekt zum `projects` Array hinzufügen

### Farben anpassen

Tailwind Konfiguration in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Ihre Farben hier
  }
}
```

### Sprachen hinzufügen

Übersetzungen in `utils/translations.ts` erweitern.

## 📁 Projektstruktur

```
portfolio/
├── app/
│   ├── globals.css          # Global Styles
│   ├── layout.tsx           # Root Layout
│   └── page.tsx             # Main Page
├── components/
│   ├── Navbar.tsx           # Navigation mit Sprachumschalter
│   ├── Hero.tsx             # Hero Section
│   ├── About.tsx            # Über mich Section
│   ├── Services.tsx         # Leistungen
│   ├── Experience.tsx       # Berufserfahrung
│   ├── Projects.tsx         # Projekte mit Filterung
│   ├── Skills.tsx           # Kenntnisse & SAP ABAP
│   ├── Contact.tsx          # Kontaktformular
│   └── Footer.tsx           # Footer
├── utils/
│   └── translations.ts      # Mehrsprachige Übersetzungen
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🌐 Deployment

### Vercel (Empfohlen)

1. Repository auf GitHub pushen
2. [Vercel](https://vercel.com) Account erstellen
3. Repository importieren
4. Automatisches Deployment

### Netlify

1. Build Command: `npm run build`
2. Publish Directory: `.next`

### Andere Hosting-Optionen

- AWS Amplify
- GitHub Pages (mit Static Export)
- Docker Container

## 🔧 Technologien

- **Framework**: Next.js 14
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## 📝 To-Do / Erweiterungen

- [ ] Blog-Funktionalität mit MDX hinzufügen
- [ ] CMS Integration (z.B. Sanity, Contentful)
- [ ] Animationen mit Framer Motion
- [ ] Newsletter Integration
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Kontaktformular Backend (EmailJS, SendGrid)

## 📄 Lizenz

Dieses Projekt ist für persönliche Zwecke erstellt.

## 👤 Autor

**Erhan**
- Softwareentwickler
- Spezialisiert auf Java, Test-Automatisierung und n8n Workflows

---

**Viel Erfolg mit Ihrer Portfolio-Website! 🚀**
