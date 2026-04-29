# JEUNES SOLDATS DE CHRIST - Site Web Professionnel

## 📋 Description
Site web professionnel et moderne pour le groupe de musique gospel **Jeunes Soldats de Christ** de l'Église Apostolique de Saaba, Burkina Faso.

### Caractéristiques
✅ Design moderne et minimaliste inspiré d'Adèle  
✅ Sections pour vidéos et musiques  
✅ Lecteurs vidéo YouTube intégrés  
✅ Lecteurs audio MP3 intégrés  
✅ Système de gestion future pour les téléchargements premium  
✅ Formulaire de contact  
✅ Responsive design (mobile, tablette, desktop)  
✅ Navigation fluide et animations modernes  

---

## 📁 Structure des Fichiers

```
jeunes-soldats-de-christ/
├── index.html              # Fichier principal HTML
├── styles.css              # Styles CSS
├── script.js               # JavaScript interactif
├── data.js                 # Données des vidéos et musiques
├── README.md               # Ce fichier
├── images/                 # Dossier pour les images
│   ├── hero-group.jpg      # Photo principale du groupe
│   ├── video-1-thumb.jpg   # Miniature vidéo 1
│   ├── video-2-thumb.jpg   # Miniature vidéo 2
│   └── ... (autres images)
├── audio/                  # Dossier pour les fichiers audio MP3
│   ├── je-crois-en-toi.mp3
│   ├── paix-coeur.mp3
│   └── ... (autres mp3)
└── videos/                 # Dossier pour les vidéos (optionnel si YouTube)
    ├── louange-direct.mp4
    └── ... (autres vidéos)
```

---

## 🚀 Comment Démarrer

### Option 1: Ouverture Simple (Développement Local)
1. Téléchargez tous les fichiers
2. Créez l'architecture des dossiers (images/, audio/, videos/)
3. Ouvrez `index.html` directement dans votre navigateur

### Option 2: Avec un Serveur Local (Recommandé)

**Avec Python 3:**
```bash
cd chemin/vers/votre/projet
python -m http.server 8000
```
Puis ouvrez: http://localhost:8000

**Avec Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Avec Node.js (http-server):**
```bash
npx http-server
```

---

## 📝 Configuration des Médias

### 1. Ajouter des Vidéos

**Étape 1:** Uploadez votre vidéo sur YouTube
**Étape 2:** Copiez le lien YouTube
**Étape 3:** Modifiez `data.js`

```javascript
{
    id: 'video-nouveau',
    title: 'Titre de votre vidéo',
    description: 'Description détaillée...',
    thumbnail: 'images/nouvelle-video-thumb.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=xxxxx',
    duration: '5:30'
}
```

**Créer une miniature:**
- Prenez une capture d'écran de votre vidéo
- Redimensionnez à 320x180 pixels (ratio 16:9)
- Sauvegardez dans le dossier `images/`

### 2. Ajouter des Musiques

**Étape 1:** Préparez votre fichier audio en MP3
**Étape 2:** Mettez-le dans le dossier `audio/`
**Étape 3:** Modifiez `data.js`

```javascript
{
    id: 'musique-nouvelle',
    title: 'Titre de la musique',
    artist: 'Jeunes Soldats de Christ',
    genre: 'Gospel',
    audioFile: 'audio/titre-musique.mp3',
    duration: '4:32',
    releaseDate: '2024-01-15'
}
```

### 3. Ajouter la Photo du Groupe

**Étape 1:** Préparez votre photo en haute résolution
**Étape 2:** Redimensionnez à environ 800x1000 pixels
**Étape 3:** Sauvegardez comme `images/hero-group.jpg`
**Étape 4:** Vérifiez que `data.js` pointe vers ce fichier

---

## 🎨 Personnalisation du Design

### Couleurs
Modifiez les variables CSS dans `styles.css` (lignes 1-16):

```css
:root {
    --primary-color: #1a1a1a;      /* Noir principal */
    --secondary-color: #2d2d2d;    /* Gris foncé */
    --accent-color: #d4af37;       /* Or (logo/boutons) */
    --light-color: #f5f5f5;        /* Blanc cassé */
    --text-color: #333333;         /* Texte */
}
```

### Polices d'Écriture
```css
--font-display: 'Georgia', serif;        /* Titres élégants */
--font-body: 'Segoe UI', sans-serif;     /* Corps de texte */
```

### Informations du Groupe
Modifiez dans `data.js` la section `groupInfo`:

```javascript
groupInfo: {
    name: 'Jeunes Soldats de Christ',
    location: 'Église Apostolique de Saaba',
    phone: '+226 70 05 28 28',
    email: 'votre-email@example.com'
}
```

---

## 🔧 Fonctionnalités Principales

### Vidéos
- ✅ Grille responsive
- ✅ Miniatures avec effet hover
- ✅ Modal lightbox pour la lecture
- ✅ Intégration YouTube directe
- ✅ Bouton pour regarder sur YouTube
- ✅ Bouton pour téléchargement (future intégration premium)

### Musiques
- ✅ Lecteur audio HTML5 intégré
- ✅ Contrôles de lecture personnalisés
- ✅ Affichage des informations (titre, artiste, genre)
- ✅ Lecture simultanée exclusive (stop de l'autre lors de la lecture)
- ✅ Bouton de téléchargement (future intégration premium)

### Contact
- ✅ Formulaire de contact fonctionnel
- ✅ Affichage des coordonnées
- ✅ Localisation de l'église
- ✅ Message de confirmation après soumission

---

## 💳 Intégration du Système Premium (Prochaines Étapes)

Le site est préparé pour recevoir un système de paiement. Voici ce qu'il faut faire:

### 1. Choisir une Plateforme de Paiement

**Pour l'Afrique de l'Ouest:**
- 🟨 **Orange Money** - Très populaire au Burkina Faso
- 📱 **Mobile Money** - Service bancaire mobile
- 💳 **Stripe** - Service international
- 🏦 **PayPal** - Alternative internationale

### 2. Intégrer le Paiement

Vous aurez besoin:
1. D'un compte marchant chez le fournisseur de paiement
2. Des clés API du fournisseur
3. D'un backend (serveur) pour traiter les paiements

### 3. Exemple Simple avec Stripe

```javascript
// Dans script.js
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        // Vérifier si l'utilisateur est premium
        const response = await fetch('/api/check-premium', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUser })
        });
        
        const data = await response.json();
        if (data.isPremium) {
            // Permettre le téléchargement
            downloadFile(e.target.dataset.fileId);
        } else {
            // Rediriger vers la page de paiement
            window.location.href = '/payment';
        }
    });
});
```

---

## 📱 Responsive Design

Le site fonctionne parfaitement sur:
- 📱 Téléphones (320px+)
- 📊 Tablettes (768px+)
- 💻 Ordinateurs (1024px+)

Les points de rupture sont:
- `768px` - Petit écran
- `480px` - Très petit écran

---

## 🌐 Déploiement en Ligne

### Option 1: Netlify (Gratuit et Simple)
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec GitHub
3. Sélectionnez votre dépôt
4. Déploiement automatique!

### Option 2: GitHub Pages (Gratuit)
1. Créez un dépôt GitHub
2. Uploadez vos fichiers
3. Allez dans Settings → Pages
4. Sélectionnez la branche main
5. Votre site sera accessible à: `https://votreusername.github.io/nom-repo`

### Option 3: Hébergement Classique
1. Achetez un hébergement web
2. Uploadez tous les fichiers via FTP
3. Accédez à votre domaine

### Option 4: Hébergement Camerounais/Africain
- **Togohub** (Togo)
- **Infomaniak** (Suisse - Services africains)
- **Hostaway** (Services africains)
- **Hosting.com** (Bonne couverture en Afrique)

---

## 📧 Contact & Support

**Pour des questions ou modifications:**
- 📞 Téléphone: +226 70 05 28 28
- 📍 Localisation: Église Apostolique de Saaba, Saaba, Burkina Faso

---

## 📄 Licence et Droits d'Auteur

Ce site web et son contenu appartiennent à **Jeunes Soldats de Christ** et à l'**Église Apostolique de Saaba**. Tous droits réservés 2024.

---

## 🛠️ Dépannage

### Les images ne s'affichent pas
- Vérifiez les chemins dans `data.js`
- Assurez-vous que les fichiers sont dans le dossier `images/`
- Les noms doivent correspondre exactement (majuscules/minuscules)

### L'audio ne marche pas
- Vérifiez que les fichiers sont en format MP3
- Vérifiez les chemins dans `data.js`
- Testez le fichier MP3 avec un lecteur audio

### Les vidéos YouTube ne chargent pas
- Vérifiez que le lien YouTube est correct
- Assurez-vous que la vidéo est publique (pas privée)
- Testez le lien dans un nouvel onglet

### Le site ne répond pas sur mobile
- Videz le cache du navigateur
- Vérifiez que vous utilisez une connexion HTTPS (si en ligne)
- Testez dans un autre navigateur

---

## 📚 Documentation Utile

- [HTML5 Audio Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [YouTube Embed Guide](https://developers.google.com/youtube/iframe_api_reference)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Responsive Design Best Practices](https://web.dev/responsive-web-design-basics/)

---

## ✨ Améliorations Futures

- [ ] Système de paiement intégré
- [ ] Connexion utilisateur
- [ ] Zone membre premium
- [ ] Blog/Actualités
- [ ] Galerie photos
- [ ] Calendrier des événements
- [ ] Intégration réseaux sociaux
- [ ] Commentaires et avis
- [ ] Traduction multilingue
- [ ] Optimisation SEO avancée

---

**Créé avec ❤️ pour Jeunes Soldats de Christ**  
*Musique de l'Âme - Église Apostolique de Saaba*
