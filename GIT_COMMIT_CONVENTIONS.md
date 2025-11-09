# 📝 Conventions de Commits - Workly Website

## 🎯 Convention : **Libre**

Ce repo utilise des commits **libres et flexibles** pour permettre une documentation rapide des changements.

## ✅ Format suggéré

Pas de format strict, mais quelques suggestions pour rester organisé :

```
[ACTION] Description du changement
```

## 💡 Actions suggérées (optionnelles)

Tu peux utiliser ces préfixes si tu veux, mais ce n'est **pas obligatoire** :

| Préfixe | Usage | Exemple |
|---------|-------|---------|
| `[ADD]` | Ajout de contenu | `[ADD] Page about avec équipe` |
| `[UPDATE]` | Mise à jour | `[UPDATE] Texte homepage` |
| `[FIX]` | Correction | `[FIX] Lien cassé dans navigation` |
| `[STYLE]` | Design/CSS | `[STYLE] Amélioration responsive mobile` |
| `[REFACTOR]` | Réorganisation | `[REFACTOR] Structure des assets` |
| `[REMOVE]` | Suppression | `[REMOVE] Anciennes images inutilisées` |

## 🎨 Exemples valides

Tous ces formats sont **acceptés** :

```bash
# Avec préfixe
[ADD] Page de contact
[UPDATE] CSS de la homepage
[FIX] Menu mobile qui ne s'affiche pas

# Sans préfixe (totalement OK !)
Ajout de la page privacy
Mise à jour du design
Correction du footer
Amélioration de la navigation
Nouvelles images pour la galerie

# Français ou Anglais (les deux OK !)
Add privacy policy page
Update homepage design
Fix mobile menu bug

# Descriptif détaillé (OK aussi !)
Refonte complète de la page about avec nouvelles photos d'équipe et descriptions des membres

# Court et simple (OK !)
Fix typo
Update CSS
Add images
```

## ✅ Bonnes pratiques (suggestions)

Même si c'est libre, voici quelques conseils pour garder un historique lisible :

### 📝 Descriptions claires

- ✅ Décrire **ce qui a changé**
- ✅ Être **suffisamment précis** pour retrouver le changement
- ✅ Utiliser un langage **naturel et compréhensible**

### Exemples clairs vs flous

```bash
# ✅ Clair
Ajout de la page privacy policy avec mentions légales

# ❌ Trop flou
Update

# ✅ Clair
Correction du menu mobile qui ne s'affichait pas sur iPhone

# ❌ Trop flou
Fix bug
```

### 🔄 Commits réguliers

Plutôt que de faire un gros commit avec 50 changements, préfère :

```bash
# Plutôt que :
Mise à jour complète du site

# Préfère plusieurs commits :
Ajout de la page about
Mise à jour du design de la homepage
Ajout des nouvelles images
Correction des liens cassés
```

## 🌍 Langue

**Les deux sont acceptées :**
- 🇫🇷 Français (si tu es plus à l'aise)
- 🇬🇧 Anglais (standard international)

Choisis celle qui te convient le mieux ! Pas besoin de toujours utiliser la même.

## 📦 Commits détaillés (optionnel)

Si tu veux ajouter plus de détails, tu peux utiliser le corps du commit :

```bash
Refonte de la homepage

- Nouveau design avec CSS moderne
- Images optimisées pour le web
- Amélioration du responsive
- Ajout d'animations smooth scroll
```

## 💡 Pourquoi cette convention libre ?

1. **Rapidité** : Pas besoin de réfléchir au format
2. **Flexibilité** : Adapté aux changements rapides de design/contenu
3. **Naturel** : Écrire comme tu parles
4. **Accessibilité** : Pas de barrière technique
5. **Focus** : Se concentrer sur le contenu, pas sur le format

## 🚫 Éviter quand même

Même si c'est libre, évite :

- ❌ Commits vides ou sans description : `update`, `fix`, `.`
- ❌ Messages cryptiques : `wip`, `test`, `qsdfqsdf`
- ❌ Commits trop gros avec 100 changements différents

## 🎯 L'essentiel

**Tu es libre !** Écris des commits qui ont du sens pour toi et pour les autres.

Le but est de pouvoir **retrouver facilement** ce qui a été fait dans l'historique Git.

---

**🎯 Résumé rapide :**
- Pas de format strict obligatoire
- Descriptions claires et compréhensibles
- Français ou anglais, au choix
- Commits réguliers plutôt qu'énormes
- L'important : savoir ce qui a changé
