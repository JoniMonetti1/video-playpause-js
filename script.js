document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('background-video');
    const preloader = document.getElementById('preloader');
    const switchButton = document.querySelector('.switch-btn');
    const mainTitle = document.querySelector('.main-title');
    const overlay = document.querySelector('.overlay');

    //Inicialmente ocultar todos los elementos relacionados al video
    switchButton.classList.add('hidden');
    overlay.classList.add('hidden');
    mainTitle.classList.add('hidden');
    video.classList.add('hidden');

    //mostrar el preloader
    preloader.style.display = 'block';

    //escuchar cuando el video este listo para reproducirse
    video.addEventListener('canplaythrough', () => {
        //ocultar el preloader despues de que el video este listo
        preloader.style.display = 'none';

        //mostrar los elementos relacionados al video
        switchButton.classList.remove('hidden');
        overlay.classList.remove('hidden');
        mainTitle.classList.remove('hidden');
        video.classList.remove('hidden');

        //inicia la reproducción del video al cargar la página
        video.play(); 
    });

    //escucahr cuando se hace click en el boton y manejar su funcionalidad
    switchButton.addEventListener('click', function() {
        //alternar la clase slide para reproducir o pausar el video
        if (this.classList.toggle('slide')) {
            video.play();
        } else {
            video.pause();
        };
    });
});