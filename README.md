# 🎭 Workly Website

Site web officiel de présentation du projet Workly.

💬 **Rejoignez notre communauté** : [Discord Workly](https://discord.gg/3Cpyxg29B4)

## 📋 Structure du Site

```
web/
├── index.html              # Page d'accueil
├── pages/
│   ├── about.html         # À propos du projet
│   ├── api.html           # Endpoints Discord et API
│   ├── terms.html         # Conditions d'utilisation (CGU)
│   └── privacy.html       # Politique de confidentialité
├── assets/
│   ├── css/
│   │   └── style.css      # Styles CSS (violet #903f9e)
│   ├── js/
│   │   └── main.js        # JavaScript (animations, interactions)
│   └── images/            # Images et ressources (à remplir)
└── README.md              # Ce fichier
```

## 🎨 Design

- **Couleur principale :** Violet `#903f9e`
- **Thème :** Dark mode futuriste
- **Animations :** Transitions fluides, effets au scroll
- **Responsive :** Compatible mobile, tablette, desktop

## 🚀 Utilisation

### Tester localement

Pour visualiser le site localement, ouvrez simplement `index.html` dans votre navigateur :

**Option 1 : Double-clic**

```
Double-cliquez sur index.html
```

**Option 2 : Serveur HTTP local (recommandé)**

```bash
# Avec Python
python -m http.server 8000

# Puis ouvrez : http://localhost:8000
```

**Option 3 : Live Server (VS Code)**

- Installez l'extension "Live Server" dans VS Code
- Clic droit sur `index.html` → "Open with Live Server"

### Déployer sur Elsites

1. **Préparer les fichiers**

   - Compresser le dossier `web/` en ZIP (ou l'uploader tel quel)
   - S'assurer que tous les chemins sont relatifs (pas de chemins absolus)

2. **Upload via FTP/SFTP**

   ```
   Connectez-vous à votre hébergeur Elsites
   Uploadez le contenu du dossier web/ dans le répertoire public_html/
   ```

3. **Configuration DNS**

   - Pointez votre domaine vers l'IP de votre hébergeur
   - Configurez les enregistrements A/CNAME

4. **SSL/HTTPS**
   - Activez le certificat SSL (Let's Encrypt recommandé)
   - Toutes les URLs Discord nécessitent HTTPS

## 📄 Pages Disponibles

### 🏠 Accueil (`index.html`)

- Présentation générale de Workly
- Fonctionnalités principales
- Technologies utilisées
- Call-to-action vers les autres pages

### ℹ️ À propos (`pages/about.html`)

- Histoire et vision du projet
- Architecture technique détaillée
- Phases de développement
- Inspiration et objectifs

### 🔗 API Endpoints (`pages/api.html`)

- Interactions Endpoint URL
- Linked Roles Verification URL
- Terms of Service URL
- Privacy Policy URL
- Documentation technique Discord

### 📜 Conditions d'Utilisation (`pages/terms.html`)

- CGU complètes
- Licence MIT Non-Commerciale (MIT-NC)
- Restrictions d'utilisation
- Limitation de responsabilité

### 🔒 Politique de Confidentialité (`pages/privacy.html`)

- Données collectées (locales uniquement)
- Utilisation des données
- Droits RGPD
- Code source disponible (MIT-NC)

## 🛠️ Personnalisation

### Modifier les couleurs

Éditez `assets/css/style.css` (lignes 10-20) :

```css
:root {
  --primary-color: #903f9e; /* Violet principal */
  --primary-dark: #6d2d77; /* Violet foncé */
  --primary-light: #b05baf; /* Violet clair */
  /* ... */
}
```

### Ajouter des images

Placez vos images dans `assets/images/` et référencez-les ainsi :

```html
<img src="assets/images/logo.png" alt="Kira Logo" />
```

### Modifier les animations

Éditez `assets/js/main.js` pour ajuster :

- Vitesse des animations au scroll
- Effets de parallaxe
- Comportement du menu mobile

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :

- **Desktop :** 1200px+
- **Tablette :** 768px - 1199px
- **Mobile :** < 768px

Les breakpoints sont définis dans `style.css` (ligne ~390+).

## 🎯 Fonctionnalités JavaScript

- ✅ Navigation sticky avec effet au scroll
- ✅ Animations au scroll (Intersection Observer)
- ✅ Menu mobile responsive
- ✅ Smooth scroll pour les ancres
- ✅ Boutons "Copier URL" sur la page API
- ✅ Notifications système (toast)
- ✅ Easter egg (5 clics sur le logo) 🎭

## 🔧 Configuration Discord

Pour utiliser les URLs sur Discord Developer Portal :

1. Accédez à [Discord Developer Portal](https://discord.com/developers/applications)
2. Sélectionnez votre application
3. Allez dans **General Information**
4. Remplissez les champs :
   - **Interactions Endpoint URL :** `https://votre-domaine.com/api/interactions`
   - **Linked Roles Verification URL :** `https://votre-domaine.com/verify-user`
   - **Terms of Service URL :** `https://votre-domaine.com/pages/terms.html`
   - **Privacy Policy URL :** `https://votre-domaine.com/pages/privacy.html`

⚠️ **Important :** Les URLs doivent être en HTTPS et accessibles publiquement.

## 📦 Dépendances

**Aucune dépendance externe !** 🎉

Le site utilise uniquement :

- HTML5 natif
- CSS3 natif (avec variables CSS)
- JavaScript vanilla (ES6+)

Pas besoin de npm, webpack, ou autres outils de build.

## 📜 Licence

Le site web fait partie du projet Workly, distribué sous **licence MIT Non-Commerciale (MIT-NC)**.

**Usage autorisé :**

- ✅ Usage personnel et non commercial
- ✅ Modification pour usage personnel
- ✅ Étude et audit du code

**Usage interdit sans autorisation :**

- ❌ Usage commercial
- ❌ Vente ou monétisation
- ❌ Utilisation professionnelle

Pour toute demande d'usage commercial, contactez Xyon15 via GitHub.

## 🌐 Compatibilité Navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📝 TODO / Améliorations Futures

- [ ] Ajouter un favicon personnalisé
- [ ] Créer des images/screenshots du projet
- [ ] Ajouter une page de galerie (screenshots, vidéos)
- [ ] Ajouter un formulaire de contact (optionnel)
- [ ] Intégrer Google Analytics (optionnel)
- [ ] Créer une version multilingue (EN/FR)
- [ ] Ajouter un sitemap.xml pour le SEO
- [ ] Optimiser les images (compression, WebP)

## 💡 Conseils SEO

Pour améliorer le référencement :

1. **Ajouter un sitemap.xml**
2. **Ajouter un robots.txt**
3. **Meta tags Open Graph** (pour les réseaux sociaux)
4. **Meta tags Twitter Card**
5. **Schema.org markup** (JSON-LD)

Exemples à ajouter dans le `<head>` :

```html
<!-- Open Graph -->
<meta property="og:title" content="Kira - Workly" />
<meta property="og:description" content="Votre compagnon virtuel intelligent" />
<meta
  property="og:image"
  content="https://votre-domaine.com/assets/images/og-image.jpg"
/>
<meta property="og:url" content="https://votre-domaine.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Kira - Workly" />
<meta
  name="twitter:description"
  content="Votre compagnon virtuel intelligent"
/>
<meta
  name="twitter:image"
  content="https://votre-domaine.com/assets/images/twitter-card.jpg"
/>
```

## 🐛 Dépannage

### Le menu mobile ne fonctionne pas

- Vérifiez que `main.js` est bien chargé
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les animations ne se déclenchent pas

- Vérifiez que JavaScript est activé
- Le navigateur doit supporter `IntersectionObserver` (tous navigateurs modernes)

### Les liens ne fonctionnent pas

- Vérifiez les chemins relatifs (surtout dans les pages du dossier `pages/`)
- Les liens vers CSS/JS doivent être `../assets/...` depuis `pages/`

## 📄 License

MIT Non-Commercial License (MIT-NC) - Ce site web fait partie du projet Workly.

Voir le fichier [LICENSE](../LICENSE) à la racine du projet pour les détails complets.

## 👤 Auteur

**Xyon15**

- GitHub : [@Xyon15](https://github.com/Xyon15)
- Projet : [workly-desktop](https://github.com/WorklyHQ/workly-desktop)

---

**🎭 Fait avec 💜 pour la communauté Workly**
