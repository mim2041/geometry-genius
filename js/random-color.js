function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + color.join(", ") + ")";
  }
  
document.getElementById('cards').addEventListener('mouseover',function(event){
    event.target.parentNode.style.backgroundColor = randomColor();
})