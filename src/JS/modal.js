const optnBtn = document.querySelector('.hero-btn-js');
const backdrop = document.querySelector('.backdrop-hero');

optnBtn.addEventListener('click', onToggleModal)

function onToggleModal () {
    backdrop.classList.toggle('.is-hidden')
}