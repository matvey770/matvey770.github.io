window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuBtn = document.querySelector('.hamburger'),
        menuItem = document.querySelectorAll('.menu_item');

    menuBtn.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            menuBtn.classList.toggle('hamburger_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu_active');
            menuBtn.classList.remove('hamburger_active');
        });
    });
});