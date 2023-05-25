const chkHamburger = document.getElementById('hamburger')

chkHamburger.addEventListener('change', e => {
    if(e.target.checked){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
})
