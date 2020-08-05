const menus = document.querySelectorAll('.menu')
menus.forEach(menu => {
    const menuItems = menu.querySelectorAll('.menu-item')
    menuItems.forEach((item: HTMLElement) => {
        item.addEventListener('click', e => {
            menuItems.forEach(item => item.classList.remove('active'))
            const target = e.target as HTMLElement;
            target.classList.add('active')
        })
    })
})