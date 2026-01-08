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

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('formContacto');
        const inputs = form.querySelectorAll('input, textarea');

    // Función para validar cada campo en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });

    // Validación final al intentar enviar
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            document.getElementById('feedbackExito').classList.remove('d-none');
            form.reset();
            // Limpia las clases de validación tras el envío exitoso
            inputs.forEach(i => i.classList.remove('is-valid', 'is-invalid'));
        }
        form.classList.add('was-validated');
    }, false);
});


