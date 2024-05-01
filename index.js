// Atividade 01
let name = prompt('Por favor, nos diga seu nome:')

if (name) {
  console.log(`Boas vindas, ${name}!`)
} else {
  console.log("Você não digitou um nome.")
}

// Atividade 02

let num1, num2

num1 = Number(prompt('Digite o primeiro número.'))

num2 = Number(prompt('Digite o segundo número.'))

let soma = parseFloat(num1) + parseFloat(num2)

if (!isNaN(soma)) {
  console.log("A soma dos números é: " + soma)
} else {
  console.log("Você não digitou um número válido.")
}

// Atividade 03

const today = new Date().getFullYear()

let age = Number(prompt('Agora, nos diga sua idade:'))

const birthyear = parseFloat(today) - parseFloat(age)

if (!isNaN(birthyear)) {
console.log("Então você nasceu, aproximadamente, em: " + birthyear)
} else {
  console.log("Você não digitou uma idade válida.")
}

// Atividade 04

var radius = prompt("Não tenha medo, insira o raio do círculo:")

radius = parseFloat(radius)

if (isNaN(radius) || radius <= 0) {
    console.log("Por favor, insira um número válido para o raio.")
} else {
 
var area = Math.PI * radius * radius

  console.log("A área do círculo com raio " + radius + " é: " + area)
}

// Atividade 05

var dollar = prompt("Vamos continuar, agora, insira um valor desejado, em dólares:")

dollar = parseFloat(dollar)

if (isNaN(dollar) || dollar < 0) {
    console.log("Por favor, insira um valor válido em dólares.")
} else {

var euro = dollar * 0.85

  console.log("O valor em euros é: €" + euro)
}

// Atividade 06

var initial_value = prompt("Prosseguindo, sou sua máquina de descontos, mas reconheço apenas o desconto de 10%, por favor, insira o preço do produto:")

initial_value = parseFloat(initial_value)

if (isNaN(initial_value) || initial_value < 0) {
  console.log("Por favor, insira um preço válido para o produto.")
} else {

var discount = initial_value * 0.10
var final_value = initial_value - discount

 console.log("O preço com desconto de 10% é: R$" + final_value)
}

// Atividade 07

var meters_value = prompt("Por último, gostaria de demonstrar minhas habilidades com medidas, insira um valor em metros:")

meters_value = parseFloat(meters_value)

if (isNaN(meters_value) || meters_value < 0) {
  console.log("Por favor, insira uma medida válida para metros.")
} else {
  
var centimeters_value = meters_value * 100

 console.log("O valor em centímetros é " + centimeters_value)
}




