"""
Script pour créer les favicons du site web à partir de l'icône Workly
Génère tous les formats nécessaires pour les différents navigateurs et appareils
"""

from pathlib import Path
from PIL import Image


def create_favicons():
    """Crée tous les favicons nécessaires pour le site web"""

    # Chemins
    desktop_root = Path(__file__).parent.parent.parent / "workly-desktop"
    website_root = Path(__file__).parent.parent.parent / "workly-website"

    source_ico = desktop_root / "assets" / "icons" / "workly.ico"
    images_dir = website_root / "assets" / "images"

    # Créer le dossier images s'il n'existe pas
    images_dir.mkdir(parents=True, exist_ok=True)

    print("🎨 Création des favicons pour le site web...")
    print(f"📂 Source : {source_ico}")
    print(f"📁 Destination : {images_dir}")

    if not source_ico.exists():
        print(f"❌ Erreur : {source_ico} n'existe pas !")
        return False

    try:
        # Charger l'icône source
        img = Image.open(source_ico)
        print(f"✅ Icône chargée : {img.size[0]}x{img.size[1]} pixels")

        # Convertir en RGBA
        if img.mode != "RGBA":
            img = img.convert("RGBA")

        # === 1. FAVICON.ICO (pour les vieux navigateurs) ===
        favicon_ico = images_dir / "favicon.ico"
        img.save(favicon_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
        print(f"✅ favicon.ico créé")

        # === 2. FAVICON.PNG (moderne) ===
        favicon_png = images_dir / "favicon.png"
        img_32 = img.copy()
        img_32.thumbnail((32, 32), Image.Resampling.LANCZOS)
        img_32.save(favicon_png, "PNG")
        print(f"✅ favicon.png créé (32x32)")

        # === 3. APPLE TOUCH ICON (iOS) ===
        apple_touch = images_dir / "apple-touch-icon.png"
        img_180 = img.copy()
        img_180.thumbnail((180, 180), Image.Resampling.LANCZOS)
        img_180.save(apple_touch, "PNG")
        print(f"✅ apple-touch-icon.png créé (180x180)")

        # === 4. ANDROID CHROME ICONS ===
        # 192x192
        android_192 = images_dir / "android-chrome-192x192.png"
        img_192 = img.copy()
        img_192.thumbnail((192, 192), Image.Resampling.LANCZOS)
        img_192.save(android_192, "PNG")
        print(f"✅ android-chrome-192x192.png créé")

        # 512x512
        android_512 = images_dir / "android-chrome-512x512.png"
        img_512 = img.copy()
        img_512.thumbnail((512, 512), Image.Resampling.LANCZOS)
        img_512.save(android_512, "PNG")
        print(f"✅ android-chrome-512x512.png créé")

        # === 5. LOGO PRINCIPAL (pour le site) ===
        logo = images_dir / "logo.png"
        img_256 = img.copy()
        img_256.thumbnail((256, 256), Image.Resampling.LANCZOS)
        img_256.save(logo, "PNG")
        print(f"✅ logo.png créé (256x256)")

        # === 6. MANIFEST ICON (PWA) ===
        manifest_icon = images_dir / "icon-512.png"
        img_512.save(manifest_icon, "PNG")
        print(f"✅ icon-512.png créé (pour manifest)")

        print("\n📋 Résumé des fichiers créés :")
        print("   ✓ favicon.ico (16x16, 32x32, 48x48)")
        print("   ✓ favicon.png (32x32)")
        print("   ✓ apple-touch-icon.png (180x180) - iOS")
        print("   ✓ android-chrome-192x192.png - Android")
        print("   ✓ android-chrome-512x512.png - Android")
        print("   ✓ logo.png (256x256) - Site web")
        print("   ✓ icon-512.png (512x512) - PWA")

        return True

    except Exception as e:
        print(f"❌ Erreur : {e}")
        import traceback

        traceback.print_exc()
        return False


if __name__ == "__main__":
    print("=" * 70)
    print("🌐 CRÉATION DES FAVICONS POUR LE SITE WEB WORKLY")
    print("=" * 70)

    success = create_favicons()

    print("\n" + "=" * 70)
    if success:
        print("✅ Tous les favicons ont été créés avec succès !")
        print("\n🔄 Prochaine étape :")
        print("   Mettre à jour les fichiers HTML avec les liens favicon")
    else:
        print("❌ La création a échoué")
    print("=" * 70)
