# 📦 Archive - Pages Web

Ce dossier contient des pages web archivées qui ne sont **pas utilisées actuellement** mais sont conservées pour une utilisation future potentielle.

## 📄 Fichiers archivés

### `api.html` - Page API Endpoints

**Raison de l'archivage :** Workly n'utilise pas actuellement d'endpoints Discord (Interactions Endpoint, Linked Roles).

**Contenu de la page :**
- Documentation des endpoints Discord pour bot
- Interactions Endpoint URL
- Linked Roles Verification URL
- Terms of Service URL
- Privacy Policy URL
- Guide de configuration Discord Developer Portal
- Design avec animations et style violet (#903f9e)

**Réutilisation future :**
Si tu décides plus tard d'intégrer :
- Un bot Discord pour Workly
- Des interactions Discord (commandes slash)
- Un système de rôles liés (Linked Roles)

→ Tu peux simplement **copier** `api.html` vers `pages/` et **réactiver les liens** dans la navigation.

## 🔄 Comment réutiliser une page archivée

1. **Copier** le fichier vers `pages/`
   ```powershell
   Copy-Item archive\api.html pages\api.html
   ```

2. **Ajouter le lien** dans la navigation de toutes les pages (index.html, about.html, etc.)
   ```html
   <li><a href="pages/api.html">API Endpoints</a></li>
   ```

3. **Mettre à jour les footers** si nécessaire

4. **Tester** la navigation

## 🎨 Style et Design

Toutes les pages archivées utilisent le même système de design :
- Couleur principale : `#903f9e` (violet)
- Animations au scroll (fade-in)
- Responsive design (mobile, tablette, desktop)
- CSS : `../assets/css/style.css`
- JS : `../assets/js/main.js`

---

**Date d'archivage :** 6 novembre 2025  
**Archivé par :** Copilot (à la demande de l'utilisateur)
