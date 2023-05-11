const navBar = document.querySelector('.navbar-collapse')
const navItem = document.querySelectorAll('.nav-link')

const hideNav = () => {
	navBar.classList.remove('show')
}

navItem.forEach(link => {
	link.addEventListener('click', hideNav)
})
