
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const bn = document.getElementById('get-started')
const bttn = document.getElementById('getstarted')
const body = document.querySelector('body')
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

bn.addEventListener('click', () => {
 bn.style.color = "red"
 swal("Good job!", "This is a Landing Page Clone of FrontEnd Mentor Challenge By *Olamide Akintayo🙃*", "success");
 body.style.background = "pink"
})

bttn.addEventListener('click', () => {
    body.style.background = "pink"
    swal("Good job!", "This is a Landing Page Clone of FrontEnd Mentor Challenge By *Olamide Akintayo🙃*", "success");
   })
   
