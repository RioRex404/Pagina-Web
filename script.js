document.addEventListener('DOMContentLoaded', function() {
    // Configurar el botón "EXPLORAR GALERÍA"
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animación mejorada del botón
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
                
                // Navegación suave a la sección de álbumes
                const albumsSection = document.querySelector('.albums-section');
                if (albumsSection) {
                    albumsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Efecto visual de destacado en la sección de álbumes
                    albumsSection.style.backgroundColor = 'rgba(242, 175, 92, 0.2)';
                    setTimeout(() => {
                        albumsSection.style.backgroundColor = 'rgba(242, 142, 133, 0.1)';
                    }, 2000);
                }
            }, 200);
        });
    }
    
    // Efectos hover mejorados para las tarjetas de álbum
    const albumCards = document.querySelectorAll('.album-card');
    albumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Click en tarjeta de álbum
        card.addEventListener('click', function() {
            const albumTitle = this.querySelector('h3').textContent;
            alert(`Próximamente podrás ver: "${albumTitle}"`);
        });
    });
    
    // Efectos mejorados para los iconos sociales
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de aparición suave al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar efecto a elementos
    const elementsToAnimate = document.querySelectorAll('.album-card, .upcoming-content, .main-image');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efecto de carga inicial
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Contador de visitas simulado (solo para demostración)
    const visitCount = localStorage.getItem('visitCount') || 0;
    const newCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', newCount);
    
    console.log(`¡Bienvenido a mi blog fotográfico! Esta es tu visita número: ${newCount}`);
    
    // Efecto especial para la imagen principal
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    }
});