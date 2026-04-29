// ================================
// GESTION DU MENU MOBILE
// ================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ================================
// GESTION DES VIDÉOS
// ================================

const videoModal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close');
const videoPlayer = document.getElementById('videoPlayer');
const videosGrid = document.getElementById('videosGrid');

// Vérifier que les données des vidéos existent
if (typeof videosData !== 'undefined' && videosData.videos) {
    videosData.videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-overlay">
                <div class="play-button">▶</div>
            </div>
            <h3 class="video-title">${video.title}</h3>
        `;
        
        videoCard.addEventListener('click', () => openVideoModal(video));
        videosGrid.appendChild(videoCard);
    });
}

function openVideoModal(video) {
    // Extraire l'ID YouTube du lien
    const youtubeId = extractYoutubeId(video.youtubeLink);
    
    videoPlayer.src = `https://www.youtube.com/embed/${youtubeId}`;
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;
    document.getElementById('youtubeLink').href = video.youtubeLink;
    document.getElementById('downloadBtn').dataset.videoId = video.id;
    
    videoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function extractYoutubeId(url) {
    // Gère plusieurs formats de URL YouTube
    let id = '';
    if (url.includes('youtube.com')) {
        id = url.split('v=')[1];
        if (id.includes('&')) {
            id = id.split('&')[0];
        }
    } else if (url.includes('youtu.be')) {
        id = url.split('/').pop().split('?')[0];
    }
    return id;
}

closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.overflow = 'auto';
    }
});

// ================================
// GESTION DES MUSIQUES
// ================================

const musiquesGrid = document.getElementById('musiquesGrid');

// Vérifier que les données des musiques existent
if (typeof videosData !== 'undefined' && videosData.musiques) {
    videosData.musiques.forEach((musique, index) => {
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card';
        musicCard.innerHTML = `
            <div class="music-header">
                <div class="music-artwork">🎵</div>
                <div class="music-info">
                    <h3>${musique.title}</h3>
                    <p>${musique.artist}</p>
                </div>
            </div>
            <audio controls class="audio-player">
                <source src="${musique.audioFile}" type="audio/mpeg">
                Votre navigateur ne supporte pas l'audio HTML5.
            </audio>
            <div class="music-actions">
                <button class="music-btn play-btn" data-music-id="${musique.id}">🎧 Écouter</button>
                <button class="music-btn download-btn" data-music-id="${musique.id}">⬇️ Premium</button>
            </div>
        `;
        
        musiquesGrid.appendChild(musicCard);
    });

    // Gérer les boutons de lecture
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const musicCard = e.target.closest('.music-card');
            const audioPlayer = musicCard.querySelector('audio');
            
            // Arrêter toutes les autres musiques
            document.querySelectorAll('audio').forEach(audio => {
                if (audio !== audioPlayer) {
                    audio.pause();
                }
            });
            
            // Basculer la lecture
            if (audioPlayer.paused) {
                audioPlayer.play();
                e.target.textContent = '⏸️ En pause';
            } else {
                audioPlayer.pause();
                e.target.textContent = '🎧 Écouter';
            }
        });
    });

    // Gérer les boutons de téléchargement (Premium)
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            alert('🔒 Accès Premium requis\n\nVeuillez souscrire à notre plan Premium pour télécharger les musiques.\n\nContactez-nous: +226 70 05 28 28');
        });
    });
}

// ================================
// GESTION DU FORMULAIRE CONTACT
// ================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Afficher un message de confirmation
        alert(`Merci ${name}! Votre message a été envoyé.\n\nNous vous répondrons à l'adresse: ${email}\n\nMessage: "${message}"`);
        
        // Réinitialiser le formulaire
        contactForm.reset();
        
        // Note: En production, il faudrait envoyer les données à un serveur
        // Exemple avec fetch:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // })
    });
}

// ================================
// GESTION DES BOUTONS PREMIUM
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Ajouter les écouteurs pour les boutons de téléchargement vidéo
    const downloadVideoBtn = document.getElementById('downloadBtn');
    if (downloadVideoBtn) {
        downloadVideoBtn.addEventListener('click', () => {
            alert('🔒 Accès Premium requis\n\nVeuillez souscrire à notre plan Premium pour télécharger les vidéos.\n\nContactez-nous: +226 70 05 28 28');
        });
    }
});

// ================================
// SCROLL ANIMÉ
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments au chargement de la page
window.addEventListener('load', () => {
    document.querySelectorAll('.video-card, .music-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ================================
// GESTION DE L'IMAGE HERO
// ================================



// ================================
// GESTION DES LIENS DE NAVIGATION ACTIFS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ================================
// MODE SOMBRE / LUMINEUX (optionnel)
// ================================

// Vous pouvez activer le code ci-dessous si vous voulez ajouter un toggle
/*
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Appliquer le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
*/

// ================================
// LOGS DE DÉBOGAGE
// ================================

console.log('✓ Site Jeunes Soldats de Christ chargé');
console.log('Contact: +226 70 05 28 28');
console.log('Localisation: Église Apostolique de Saaba');
