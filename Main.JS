function livetime() {
    var livetime = new Date()
    document.getElementById('livetime').innerText = livetime.toLocaleTimeString()
}
setInterval(livetime, 1000)
var count = localStorage.getItem('counter')

var body = document.getElementsByTagName('body');

if (localStorage.getItem('Ticket') != null) {
    var button = document.createElement('button')
    button.innerText = 'Log out '
    button.onclick = function () {
        localStorage.removeItem('Ticket')
        localStorage.removeItem('counter')
        location.reload()
    }
    button.style.position = 'fixed'
    button.style.bottom = '10px'
    button.style.right = '10px'
    button.style.zIndex = '1000'
    button.style.padding = '10px 20px'
    button.style.backgroundColor = '#f44336'
    button.style.color = 'white'
    body[0].appendChild(button)
}