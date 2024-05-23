document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    burgerMenu.addEventListener('click', function () {
        sidebarMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = sidebarMenu.contains(event.target); // клик внутри бокового меню
        const isClickOnBurgerMenu = burgerMenu.contains(event.target); // клик на бургер-меню

        if (!isClickInsideMenu && !isClickOnBurgerMenu) {
            sidebarMenu.classList.remove('active'); // закрываем боковое меню
        }
    });
});