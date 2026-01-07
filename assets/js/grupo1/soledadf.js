document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('miAvatar');

    img.addEventListener('mouseenter', () => {
        img.src='../../img/grupo1/img_de_sole/20250816_173415.jpg';
    });

    img.addEventListener('mouseleave', () => {
        img.src='../../img/grupo1/img_de_sole/image_5e4a48c3.png';
    });
});
    const btn = document.getElementById('dark-mode-toggle');
        btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
});

