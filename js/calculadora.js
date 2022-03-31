function apagarUm () {
  let num = document.calc.tela.value
  window.document.calc.tela.value = num.substring(0, num.length-1)
}

function extrairRaiz () {
  let num = document.calc.tela.value
  resultado = Math.sqrt(num)
  window.document.calc.tela.value = resultado
}

document.addEventListener("keyup", function(event){
  if(event.key == 1){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 2){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 3){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 4){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 5){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 6){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 7){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 8){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 9){
    window.document.calc.tela.value+= event.key
  } else if(event.key == 0){
    window.document.calc.tela.value+= event.key
  } else if(event.key === "+"){
    window.document.calc.tela.value+= event.key
  } else if(event.key === "-"){
    window.document.calc.tela.value+= event.key
  } else if(event.key === "*"){
    window.document.calc.tela.value+= event.key
  } else if(event.key === "/"){
    window.document.calc.tela.value+= event.key
  } else if(event.key === "."){
    window.document.calc.tela.value+= event.key
  } else if(event.key == "Backspace"){
    let num = document.calc.tela.value
    window.document.calc.tela.value = num.substring(0, num.length-1)
  } else if(event.key == "Escape"){
    window.document.calc.tela.value = ""
  } else if(event.key == "Enter" || event.key == "="){
    window.document.calc.tela.value = eval(calc.tela.value)
  } 
})
