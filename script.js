const navItems = document.querySelectorAll('#navigasi a')
navItems.forEach(navActive => {
    navActive.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active')
    })
})

