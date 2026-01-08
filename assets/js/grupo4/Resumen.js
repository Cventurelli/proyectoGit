
$(document).ready(function() {
    const currenTheme = localStorage.getItem('theme');
    if (currenTheme==='dark') {
        $('body').addClass('dark-mode');
    } 
}
);

$(document).ready(function() {
    $('#toggle-theme').on('click', function() {
        $('body').toggleClass('dark-mode');
        let theme = 'light';
        if ($('body').hasClass('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
});
});

$(document).ready(function () {
    $('.clickable-card').on('click', function () {
        const url = $(this).data('url');
        window.location.href = url;
    });
});