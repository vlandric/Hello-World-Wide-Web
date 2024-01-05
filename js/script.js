document.addEventListener('DOMContentLoaded', function() {
	
    const gallery = document.querySelector('.image-gallery');
    const images = gallery.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            const fullscreenDiv = document.createElement('div');
            fullscreenDiv.classList.add('fullscreen');

            const clone = this.cloneNode();
            fullscreenDiv.appendChild(clone);

            document.body.appendChild(fullscreenDiv);

            fullscreenDiv.addEventListener('click', function() {
                this.remove();
            });

            fullscreenDiv.classList.add('active');
        });
    });
});


