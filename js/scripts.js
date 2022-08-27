
// TOGGLE THEME
function changeTheme() {
    const inputToggle = document.getElementById("chkTheme");
    inputToggle.checked ? document.documentElement.setAttribute("data-theme", "light") : document.documentElement.setAttribute("data-theme", "dark");
}

window.onload = ()=>{
    const header = document.querySelector('.header')
    const cards = document.querySelectorAll('.stats__card')
    const h2 = document.querySelector('h2')
    const attribution = document.querySelector('.attribution')

    const startAnimation = (entries, observer) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }

    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    })

    observer.observe(header)
    cards.forEach(card => {
        observer.observe(card)
    });
    observer.observe(h2)
    observer.observe(attribution)
}