const tUbahWarna = document.getElementById('tUbahWarna')
tUbahWarna.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda')
})

const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function() {
    const red = Math.round(Math.random() * 255 + 1)
    const green = Math.round(Math.random() * 255 + 1)
    const blue = Math.round(Math.random() * 255 + 1)
    console.log(red)
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ', ' + blue + ')'
})

const range = document.querySelectorAll('input')
const angkaRed = document.querySelector('.angkaMerah')
for (let i = 0; i < range.length; i++) {
    range[i].addEventListener('input', () => {
        const red = range[0].value
        const green = range[1].value
        const blue = range[2].value
        console.log(red)
        angkaRed.innerHTML = red
        document.body.style.backgroundColor = `rgb(${red}, ${green},${blue})`
    })
}



// document.body.addEventListener('mousemove', (e) => {
//     const xPos = Math.round((e.clientX / window.innerWidth) * 255)
//     const yPos = Math.round((e.clientY / window.innerHeight) * 255)
//     document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
// })