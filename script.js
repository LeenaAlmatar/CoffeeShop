let navbar = document.querySelector('.navebar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    Cartitems.classList.remove('active');
}