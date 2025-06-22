function livetime(){
    var livetime = new Date()
document.getElementById('livetime').innerText = livetime.toLocaleTimeString()
}
setInterval(livetime,1000)
var count = localStorage.getItem('counter')

