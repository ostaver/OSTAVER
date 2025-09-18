// Localization
const translations = {
    en: {
        'Graytitle': '[GrayZone]',
        'nav-about': 'About',
        'nav-team': 'Team',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
        'hero-title': 'Hello, We are the <span class="accent">GrayZone Team</span>',
        'hero-subtitle': 'Team full of creative people.',
        'learn-more': 'Learn More',
        'get-in-touch': 'Get in Touch',
        'download': 'DOWNLOAD',
        'about': 'About GrayZone',
        'game-description': 'The player takes on the role of a high school senior on the path to education, where he willcontinue his studies and higher education. He receives a wonderful opportunity for ascholarship to a great university abroad, but the time to apply for the scholarship isshort. To succeed, the player must go through a series of series and situations that look atreality - preparing documents, administrative, interviews with institutions and test questions. <br><br>At each step, the player is faced with a choice: to follow the honestpath and put in the effort, or to choose which groups of positive practices at first glanceseem like a solution. The decisions they make lead the player through a ‘gray zone’ - a space in which the borderbetween ethically correct actions and illegal actions is unclear and difficult to demarcate.<br><br>Each choice has consequences based on the story and the final outcome: obtainingthe scholarship in an honest way, dismiss opportunity, or achieve success through a group of practicesthat leave behind negative integrity scars.<br><br>The game offers multiple scenarios and endings that make it playful and interactive, and theresponse to critical thinking for young people about the importance of integrity, ethicalchoices and the consequences of corruption.The goals of the game that we strive to achieve are the following: <br><br>Young people are faced with real corrupt situations.Of course, critical thinking, moral assessment and active reflection on the decisions madeby each player. (In the process of playing, each player\'s integrity, reputation, time andmoney are measured). <br>Values ​​such as integrity, honesty and resistance to corruption are promoted.<br>A long-lasting resource which will be used in teaching and non-formal educational environments.'
    },
    mk: {
        'Graytitle': "[СиваЗона]",
        'nav-about': 'За нас',
        'nav-team': 'Тим',
        'nav-gallery': 'Галерија',
        'nav-contact': 'Контакт',
        'hero-title': 'Здраво, ние сме тимот на <span class="accent">Сива Зона</span>',
        'hero-subtitle': 'Тим полн со креативни луѓе.',
        'learn-more': 'Дознај повеќе',
        'get-in-touch': 'Контактирај не',
        'download': 'ПРЕЗЕМИ',
        'about': 'За Сива Зона',
        'game-description': 'Играчот ја превзема улогата на средношколец во последната година од своето средно образование, затекнат на патот да одлучи каде ќе ги продолжи своите студии и високо образование. Добива прекрасна можност за стипендија на одличен универзитет во странство, но времето за аплицирање на стипендијата е кратко.За да успее, играчот мора да помине низ серија предизвици и ситуации што ја одразуваат реалноста – подготовка на документи, административни процедури, разговори со институции и полагање на тестови. <br><br>На секој чекор, играчот се соочува со избор: да оди по чесен пат и да вложи труд, или да избере коруптивни практики кои на прв поглед изгледаат како побрзо решение. Одлуките кои ги превзема го водат играчот низ ‘сива зона’ – простор во кој границата помеѓу етички исправните постапки и нелегалните дејствија е неодредена и тешко разграничена. <br><br>Секој избор има последици врз текот на приказната и крајниот исход: добивање на стипендијата на чесен начин, губење на можноста или постигнување на успех преку коруптивни практики што оставаат негативни траги. <br><br>Играта нуди повеќе сценарија и завршетоци, што ја прави повторно игрива и интерактивна, а истовремено поттикнува критичко размислување кај младите за важноста на интегритетот, етичките избори и последиците од корупцијата. Цели на играта кои стремиме да ги постигнеме се следните: <br><br>Младите се соочуваат со реални коруптивни ситуации. Се поттикнува критичко размислување, морална проценка и активна рефлексија на одлуките кои ги носи секој играч (во процесот на играње на секој играч му се мери интегритет, репутација, време и пари). Се промовираат вредности како интегритет, чесност и отпор кон корупција. Се создава долготраен ресурс кој ќе се користи во наставни и неформални едукативни средини.'
    }
};

let currentLanguage = 'en';

function updateLanguage(lang) {
    currentLanguage = lang;

    // Update navigation links
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Use innerHTML for game-description to allow HTML tags like <br>
            if (key === 'game-description') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const learnMoreBtn = document.querySelector('.btn-primary');
    const getInTouchBtn = document.querySelector('.btn-secondary');
    const downloadBtn = document.querySelector('.btn-download');

    if (heroTitle) heroTitle.innerHTML = translations[lang]['hero-title'];
    if (heroSubtitle) heroSubtitle.textContent = translations[lang]['hero-subtitle'];
    if (learnMoreBtn) learnMoreBtn.textContent = translations[lang]['learn-more'];
    if (getInTouchBtn) getInTouchBtn.textContent = translations[lang]['get-in-touch'];
    if (downloadBtn) downloadBtn.textContent = translations[lang]['download'];

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Language switcher event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(savedLang);

    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
    }
});

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;

// Create lightbox modal
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-nav">
            <button class="lightbox-prev">&#10094;</button>
            <button class="lightbox-next">&#10095;</button>
        </div>
    </div>
`;
document.body.appendChild(lightbox);

// Lightbox styles
const lightboxStyles = `
    .lightbox {
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(5px);
    }
    
    .lightbox-content {
        position: relative;
        margin: auto;
        padding: 20px;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 80%;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .lightbox-close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        z-index: 2001;
    }
    
    .lightbox-close:hover {
        color: var(--accent-primary);
    }
    
    .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        pointer-events: none;
    }
    
    .lightbox-prev,
    .lightbox-next {
        background: rgba(166, 246, 92, 0.8);
        color: white;
        border: none;
        padding: 15px 20px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
        pointer-events: all;
        transition: background-color 0.3s ease;
    }
    
    .lightbox-prev:hover,
    .lightbox-next:hover {
        background: rgba(136, 246, 92, 1);
    }
    
    @media (max-width: 768px) {
        .lightbox-prev,
        .lightbox-next {
            padding: 10px 15px;
            font-size: 16px;
        }
        
        .lightbox-close {
            font-size: 30px;
            right: 20px;
        }
    }
`;

// Add lightbox styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

// Gallery click handlers
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

// Lightbox functionality
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

function openLightbox() {
    // Get the actual image source from the clicked gallery item
    const galleryImg = galleryItems[currentImageIndex].querySelector('img');
    const imageSrc = galleryImg ? galleryImg.src : '';
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryItems.length - 1;
    const galleryImg = galleryItems[currentImageIndex].querySelector('img');
    const imageSrc = galleryImg ? galleryImg.src : '';
    lightboxImage.src = imageSrc;
}

function showNextImage() {
    currentImageIndex = currentImageIndex < galleryItems.length - 1 ? currentImageIndex + 1 : 0;
    const galleryImg = galleryItems[currentImageIndex].querySelector('img');
    const imageSrc = galleryImg ? galleryImg.src : '';
    lightboxImage.src = imageSrc;
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    }
});

// Intersection Observer for scroll animations
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

// Add animation styles and observe elements
const animatedElements = document.querySelectorAll('.project-card, .gallery-item, .about-content');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add typing effect to hero title with HTML support
function typeWriter(element, htmlText, speed = 100) {
    // Parse HTML to separate text from tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;

    // Extract just the text content for typing
    const textContent = tempDiv.textContent || tempDiv.innerText;

    // Find where the accent span should start and end
    const accentMatch = htmlText.match(/<span class="accent">(.*?)<\/span>/);
    let accentStart = -1;
    let accentEnd = -1;

    if (accentMatch) {
        const beforeAccent = htmlText.substring(0, htmlText.indexOf('<span class="accent">'));
        const tempBefore = document.createElement('div');
        tempBefore.innerHTML = beforeAccent;
        accentStart = (tempBefore.textContent || tempBefore.innerText).length;
        accentEnd = accentStart + accentMatch[1].length;
    }

    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < textContent.length) {
            const currentChar = textContent.charAt(i);

            // Build the current text
            let currentText = textContent.substring(0, i + 1);

            // Apply accent span if we're in the accent range
            if (accentStart >= 0 && accentEnd >= 0) {
                if (i + 1 > accentStart) {
                    const beforeAccent = currentText.substring(0, accentStart);
                    const accentPart = currentText.substring(accentStart, Math.min(i + 1, accentEnd));
                    const afterAccent = currentText.substring(accentEnd);

                    if (i + 1 <= accentEnd) {
                        currentText = beforeAccent + '<span class="accent">' + accentPart + '</span>' + afterAccent;
                    } else {
                        const fullAccentText = textContent.substring(accentStart, accentEnd);
                        currentText = beforeAccent + '<span class="accent">' + fullAccentText + '</span>' + afterAccent;
                    }
                }
            }

            element.innerHTML = currentText;
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const underTitle = document.querySelector('.hero-subtitle');
    // Use innerHTML to preserve HTML tags like <span class="accent">
    const originalText = heroTitle.innerHTML;
    const underText = underTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
    underTitle.textContent = '...'
    setTimeout(() => {
        typeWriter(underTitle, underText, 20);
    }, 2000);
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    `;

    hero.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(246, 115, 92, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation keyframes
const particleStyles = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`;

const particleStyleSheet = document.createElement('style');
particleStyleSheet.textContent = particleStyles;
document.head.appendChild(particleStyleSheet);

// Initialize particles
createParticles();

