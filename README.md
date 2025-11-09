# 🌐 Workly Website

Site web officiel de [Workly](https://workly.xyon.site.elsites.fr).

---

## 🚀 Déploiement Automatique

Le site est déployé automatiquement sur **Plesk (Elsites)** via Git intégré.

### Workflow
1. **Push** sur `main` → Déploiement auto sur Plesk
2. **Webhook GitHub** déclenche le pull
3. **Site live** en ~30 secondes
4. **URL** : https://workly.xyon.site.elsites.fr

---

## 🏗️ Structure

```
workly-website/
├── index.html          # Page d'accueil
├── pages/              # Pages additionnelles
├── assets/             # Ressources
│   ├── css/            # Styles
│   ├── js/             # Scripts
│   └── images/         # Images
└── README.md           # Ce fichier
```

---

## 🛠️ Développement Local

```powershell
# Ouvrir dans le navigateur
start index.html

# Ou utiliser un serveur local (optionnel)
python -m http.server 8000
# → http://localhost:8000
```

---

## 🔗 Liens

- **Organisation** : [WorklyHQ](https://github.com/WorklyHQ)
- **App Desktop** : [workly-desktop](https://github.com/WorklyHQ/workly-desktop)
- **Documentation** : [workly-docs](https://github.com/WorklyHQ/workly-docs)

---

## 📝 Configuration Plesk

**URL du dépôt :**
```
https://TOKEN@github.com/WorklyHQ/workly-website.git
```

**Mode de déploiement :** Automatique  
**Chemin serveur :** `/workly.xyon.site.elsites.fr/httpdocs`

---

**Made with ❤️ by WorklyHQ**
