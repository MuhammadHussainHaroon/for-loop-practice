

const div = document.querySelector('div')
const ul = document.querySelector('ul')
const array = ['red' ,'lightblue' ,'green' ,'lightgreen' ,'orange' ,'purple' ,'blue' ,'yellow' ,'pink']
for(i = 0; i < array.length; i++){
    div.innerHTML += `<button onclick='colornames(${i})'> ${array[i]}</button>`

}

function colornames(i){
    ul.style.backgroundColor = `${array[i]}`
    ul.innerHTML += `${array[i]} <br/>`
}

