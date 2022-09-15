const close = document.getElementById('close');
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');

close.addEventListener("click", () =>{
    navbar.classList.add('active')
});

bar.addEventListener("click", () =>{
    navbar.classList.remove('active')
});



if (bar) {
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click', () =>{
        navbar.classList.remove('active');
    })
}

