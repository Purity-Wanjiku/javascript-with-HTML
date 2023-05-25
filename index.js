document.getElementsByClassName('body');
document.getElementById('body').style.backgroundColor = 'silver';


document.getElementById('title').style.color = 'green';
document.getElementById('title2').style.textTransform = 'uppercase'


let fruitList = document.getElementById('fruList');
let newFruit = document.createElement('li');
newFruit.textContent = 'Avocado';
fruitList.appendChild(newFruit);


let veggieList = document.getElementById('vegList');
let newVeggie = document.createElement('li');
newVeggie.textContent = 'Broccoli';
veggieList.appendChild(newVeggie)