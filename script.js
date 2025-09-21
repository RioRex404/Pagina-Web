// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const miBoton = document.getElementById('miBoton');
    const formulario = document.getElementById('formularioContacto');
    
    // Función para el botón
    miBoton.addEventListener('click', function() {
        // Cambiar el texto del botón
        this.textContent = '¡Gracias por hacer clic!';
        this.style.backgroundColor = '#28a745';
        
        // Mostrar mensaje emergente
        mostrarMensaje('¡Hola! Gracias por visitar nuestra página.', 'success');
    });
    
    // Función para el formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (nombre && email && mensaje) {
            // Simular envío del formulario
            console.log('Formulario enviado:', { nombre, email, mensaje });
            
            // Mostrar mensaje de éxito
            mostrarMensaje('¡Mensaje enviado correctamente!', 'success');
            
            // Limpiar formulario
            formulario.reset();
        } else {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
        }
    });
    
    // Función para mostrar mensajes
    function mostrarMensaje(mensaje, tipo) {
        // Crear elemento de mensaje
        const divMensaje = document.createElement('div');
        divMensaje.className = `mensaje ${tipo}`;
        divMensaje.textContent = mensaje;
        
        // Estilos del mensaje
        divMensaje.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            border-radius: 5px;
            color: white;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        // Colores según el tipo
        if (tipo === 'success') {
            divMensaje.style.backgroundColor = '#28a745';
        } else {
            divMensaje.style.backgroundColor = '#dc3545';
        }
        
        // Agregar al DOM
        document.body.appendChild(divMensaje);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    
    // Navegación suave
    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto de aparición para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});