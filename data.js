// ================================
// DONNÉES DU SITE - JEUNES SOLDATS DE CHRIST
// ================================
// INSTRUCTIONS: Remplacez les chemins des fichiers par vos propres vidéos/musiques
// Les fichiers doivent être dans le même dossier ou dans des dossiers spécifiques

const videosData = {
    // Image d'en-tête du site (la photo du groupe)
    heroImage: 'images/hero-group.jpg', // Remplacez par le chemin de votre photo de groupe
    
    // ================================
    // SECTION VIDÉOS
    // ================================
    videos: [
        {
            id: 'video-1',
            title: 'Louange en Direct',
            description: 'Une magnifique performance en direct à l\'église apostolique de Saaba.',
            thumbnail: 'images/video-1-thumb.jpg', // Remplacez par une miniature de votre vidéo
            videoFile: 'videos/louange-direct.mp4', // Chemin vers votre fichier vidéo (non utilisé si YouTube)
            youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Remplacez par le lien YouTube réel
            duration: '5:32'
        },
        {
            id: 'video-2',
            title: 'Concert de Noël 2024',
            description: 'Célébration spéciale de Noël avec les Jeunes Soldats de Christ.',
            thumbnail: 'images/video-2-thumb.jpg',
            videoFile: 'videos/concert-noel.mp4',
            youtubeLink: 'https://www.youtube.com/watch?v=example-2',
            duration: '12:45'
        },
        {
            id: 'video-3',
            title: 'Témoignages de Foi',
            description: 'Partage inspirant des messages de foi et d\'espérance.',
            thumbnail: 'images/video-3-thumb.jpg',
            videoFile: 'videos/temoignages.mp4',
            youtubeLink: 'https://www.youtube.com/watch?v=example-3',
            duration: '8:20'
        },
        {
            id: 'video-4',
            title: 'Répétitions en Studio',
            description: 'Coulisses des répétitions des nouvelles compositions.',
            thumbnail: 'images/video-4-thumb.jpg',
            videoFile: 'videos/repetitions.mp4',
            youtubeLink: 'https://www.youtube.com/watch?v=example-4',
            duration: '7:15'
        },
        {
            id: 'video-5',
            title: 'Hymne Gospel',
            description: 'Performance acoustique d\'un hymne gospel traditionnel revisité.',
            thumbnail: 'images/video-5-thumb.jpg',
            videoFile: 'videos/hymne-gospel.mp4',
            youtubeLink: 'https://www.youtube.com/watch?v=example-5',
            duration: '6:48'
        },
        {
            id: 'video-6',
            title: 'Méditation Spirituelle',
            description: 'Moment de recueillement et de méditation musicale.',
            thumbnail: 'images/video-6-thumb.jpg',
            videoFile: 'videos/meditation.mp4',
            youtubeLink: 'https://www.youtube.com/watch?v=example-6',
            duration: '10:12'
        }
    ],

    // ================================
    // SECTION MUSIQUES
    // ================================
    musiques: [
        {
            id: 'musique-1',
            title: 'Je Crois en Toi',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel',
            audioFile: 'audio/je-crois-en-toi.mp3', // Remplacez par votre fichier audio
            duration: '4:32',
            releaseDate: '2024-01-15'
        },
        {
            id: 'musique-2',
            title: 'Paix dans mon Cœur',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Contemporain',
            audioFile: 'audio/paix-coeur.mp3',
            duration: '5:12',
            releaseDate: '2024-02-20'
        },
        {
            id: 'musique-3',
            title: 'Lumière du Monde',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Inspirant',
            audioFile: 'audio/lumiere-monde.mp3',
            duration: '4:45',
            releaseDate: '2024-01-10'
        },
        {
            id: 'musique-4',
            title: 'Grâce Divine',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Traditionnel',
            audioFile: 'audio/grace-divine.mp3',
            duration: '6:20',
            releaseDate: '2023-12-25'
        },
        {
            id: 'musique-5',
            title: 'Amour Éternel',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Ballade',
            audioFile: 'audio/amour-eternel.mp3',
            duration: '5:08',
            releaseDate: '2024-01-05'
        },
        {
            id: 'musique-6',
            title: 'Espérance Nouvelle',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Urbain',
            audioFile: 'audio/esperance-nouvelle.mp3',
            duration: '4:56',
            releaseDate: '2024-02-10'
        },
        {
            id: 'musique-7',
            title: 'Révélation Céleste',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Poétique',
            audioFile: 'audio/revelation-celeste.mp3',
            duration: '5:34',
            releaseDate: '2024-01-28'
        },
        {
            id: 'musique-8',
            title: 'Sentier de Lumière',
            artist: 'Jeunes Soldats de Christ',
            genre: 'Gospel Accoustique',
            audioFile: 'audio/sentier-lumiere.mp3',
            duration: '4:18',
            releaseDate: '2024-02-05'
        }
    ],

    // ================================
    // INFORMATIONS DU GROUPE
    // ================================
    groupInfo: {
        name: 'Jeunes Soldats de Christ',
        location: 'Église Apostolique de Saaba',
        city: 'Saaba, Burkina Faso',
        phone: '+226 70 05 28 28',
        email: 'contact@jeunessoldata-de-christ.bf', // À remplacer si vous avez un email
        established: 2020,
        description: 'Un groupe de jeunes musiciens talentueux partageant l\'amour de Dieu à travers la musique gospel inspirante.',
        members: [
            'Membre 1 - Vocal Principal',
            'Membre 2 - Guitare',
            'Membre 3 - Basse',
            'Membre 4 - Batterie',
            'Membre 5 - Clavier'
        ]
    }
};

// ================================
// INSTRUCTIONS D'UTILISATION
// ================================
/*

COMMENT AJOUTER VOS VIDÉOS:
1. Uploadez votre vidéo sur YouTube
2. Copiez le lien YouTube (ex: https://www.youtube.com/watch?v=xxxxx)
3. Ajoutez une entrée dans le tableau 'videos' avec les infos
4. Créez une miniature (image) pour la vidéo et mettez-la dans le dossier 'images'

COMMENT AJOUTER VOS MUSIQUES:
1. Mettez vos fichiers audio MP3 dans le dossier 'audio'
2. Ajoutez une entrée dans le tableau 'musiques' avec les infos du fichier

STRUCTURE DES DOSSIERS RECOMMANDÉE:
/
├── index.html
├── styles.css
├── script.js
├── data.js
├── images/
│   ├── hero-group.jpg
│   ├── video-1-thumb.jpg
│   ├── video-2-thumb.jpg
│   └── ...
├── audio/
│   ├── je-crois-en-toi.mp3
│   ├── paix-coeur.mp3
│   └── ...
└── videos/
    ├── louange-direct.mp4
    ├── concert-noel.mp4
    └── ...

NOTES IMPORTANTES:
- Les fichiers audio doivent être en format MP3 pour une compatibilité maximum
- Les vidéos YouTube sont préférables car elles ne consomment pas d'espace serveur
- Les images miniatures doivent avoir un ratio 16:9 pour les vidéos
- Assurez-vous que tous les chemins des fichiers sont corrects
- Les noms de fichiers ne doivent pas avoir d'espaces (utilisez des tirets)

POUR LES TÉLÉCHARGEMENTS PREMIUM:
Le site affiche un message "Premium" pour les téléchargements.
Vous pouvez intégrer plus tard un système de paiement comme:
- Stripe
- PayPal
- Orange Money / Mobile Money pour l'Afrique de l'Ouest

*/
