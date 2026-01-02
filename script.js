const resetBtn = document.querySelector(".resetBtn")
const monitor = document.querySelector(".monitor")
const keys = document.querySelectorAll(".key")
const resultBtn = document.querySelector(".resultBtn")
const circle = document.querySelector(".circle")
const display = document.querySelector(".display")
const keysContainer  =document.querySelector(".keys")
const header = document.querySelector(".header")
const numbers = document.querySelector(".numbers")
const switchContainer = document.querySelector(".switch")

let values = [5,26,50]
let currentValue = 0
circle.addEventListener("click",()=>{
    if(currentValue + 1 === 3){
        currentValue = 0;
        circle.style.left = values[currentValue] + "px"
        changeTheme(currentValue)
    }else{
         currentValue = currentValue + 1;
        circle.style.left = values[currentValue] + "px"
        changeTheme(currentValue)
    }
   
})

function changeTheme(theme){
    if (theme === 0) {
    monitor.style.color = "hsl(0, 100%, 100%)"
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)"
    display.style.backgroundColor = "hsl(224, 36%, 15%)"
    keysContainer.style.backgroundColor = "hsl(223, 31%, 20%)"
    header.style.color = "hsl(0, 100%, 100%)"
    numbers.style.color = "hsl(0, 100%, 100%)"

    keys.forEach(element => {
        if (element.classList.contains("deleteBtn")) {
            element.style.backgroundColor = "hsl(225, 21%, 49%)"
            element.style.boxShadow = "0px 5px 0px 0px hsl(224, 28%, 35%)"
            element.style.color = "hsl(0, 100%, 100%)"
        } else {
            element.style.backgroundColor = "hsl(0, 0%, 90%)"
            element.style.boxShadow = "0px 5px 0px 0px hsl(28, 16%, 65%)"
            element.style.color = "hsl(221, 14%, 31%)"
        }
    })

    resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)"
    resultBtn.style.boxShadow = "0px 5px 0px 0px hsl(6, 70%, 34%)"
    resultBtn.style.color = "hsl(0, 100%, 100%)"

    resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)"
    resetBtn.style.boxShadow = "0px 5px 0px 0px hsl(224, 28%, 35%)"
    resetBtn.style.color = "hsl(0, 100%, 100%)"

    switchContainer.style.backgroundColor = "hsl(223, 31%, 20%)"
}
    if(theme === 1){
         monitor.style.color = "hsl(60, 10%, 19%)"
         document.body.style.backgroundColor ="hsl(0, 0%, 93%)"
         display.style.backgroundColor ="hsl(0, 100%, 100%)"
         keysContainer.style.backgroundColor ="hsl(0, 5%, 81%)"
         header.style.color = "hsl(60, 10%, 19%)"
         numbers.style.color = "hsl(60, 10%, 19%)"
         keys.forEach(element=>{
            if(element.classList.contains("deleteBtn")){
                element.style.backgroundColor ="hsl(185, 42%, 37%)";
                element.style.boxShadow=" 0px 5px 0px 0px hsl(185, 58%, 25%)";
            }else{
              element.style.backgroundColor ="hsl(0, 0%, 90%)"
              element.style.boxShadow = " 0px 5px 0px 0px hsl(35, 11%, 61%)"
              element.style.color ="hsl(60, 10%, 19%)"
            }
            
         })
         resultBtn.style.backgroundColor = "hsl(25, 98%, 40%)"
         resultBtn.style.boxShadow = "0px 5px 0px 0px hsl(25, 99%, 27%)"
         resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
         resetBtn.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)"
         switchContainer.style.backgroundColor = "hsl(0, 5%, 81%)"
    }
    if (theme === 2) {
    monitor.style.color = "hsl(52, 100%, 62%)"
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
    display.style.backgroundColor = "hsl(268, 71%, 12%)"
    keysContainer.style.backgroundColor = "hsl(268, 71%, 12%)"
    header.style.color = "hsl(52, 100%, 62%)"
    numbers.style.color = "hsl(52, 100%, 62%)"

    keys.forEach(element => {
        if (element.classList.contains("deleteBtn")) {
            element.style.backgroundColor = "hsl(281, 89%, 26%)"
            element.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)"
            element.style.color = "hsl(0, 100%, 100%)"
        } else {
            element.style.backgroundColor = "hsl(268, 47%, 21%)"
            element.style.boxShadow = "0px 5px 0px 0px hsl(290, 70%, 36%)"
            element.style.color = "hsl(52, 100%, 62%)"
        }
    })

    resultBtn.style.backgroundColor = "hsl(176, 100%, 44%)"
    resultBtn.style.boxShadow = "0px 5px 0px 0px hsl(177, 92%, 70%)"
    resultBtn.style.color = "hsl(198, 20%, 13%)"

    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)"
    resetBtn.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)"
    resetBtn.style.color = "hsl(0, 100%, 100%)"

    switchContainer.style.backgroundColor = "hsl(268, 71%, 12%)"
}
}

if(isNaN(parseFloat(monitor.textContent))){
    monitor.classList.add("error")
}

resetBtn.addEventListener("click",function(){
monitor.classList.remove("error")
monitor.textContent = "0"
})

keys.forEach(element =>{
    element.addEventListener("click",()=>{
        if(monitor.classList.contains("error")){
            monitor.classList.remove("error")
            monitor.innerHTML = ""
        }
        if(element.classList.contains("deleteBtn")){
            monitor.innerHTML = monitor.textContent.replace(monitor.textContent.charAt(monitor.textContent.length-1), "")
        }else if(monitor.innerHTML === "0"){
             monitor.textContent = ""
             monitor.textContent += element.innerText;
        }else{
            monitor.textContent += element.innerText;
        }
    })
})

resultBtn.addEventListener("click",function(){
    operator = monitor.textContent.match(/[+\-*/]/)
     firstNumber = parseFloat((monitor.textContent).substring(0,(monitor.textContent).indexOf(operator)))
    secondNumber = parseFloat((monitor.textContent).substring((monitor.textContent).indexOf(operator)+1,monitor.length))
      if(isNaN(firstNumber) || isNaN(secondNumber)){
        monitor.innerHTML = "Missing Numbers"
        monitor.classList.add("error")
        return
    }
     if(operator[0] === "/" && secondNumber === 0){
        monitor.textContent = "Devision By Zero"
        monitor.classList.add("error")
        return
    }
    if(operator && (monitor.textContent).indexOf(operator) === 0){
       monitor.innerHTML = "You can't begin with operator";
       monitor.classList.add("error")
       return
    }
    if(!operator){
        monitor.innerHTML = "You have to choose an operator"
        monitor.classList.add("error")
        return
    }
    if((monitor.textContent).indexOf(operator) !== (monitor.textContent).lastIndexOf(operator)){
        monitor.innerHTML = "There is two operators here"
        monitor.classList.add("error")
        return
    }
    monitor.classList.remove("error")
    if(operator[0] === "+"){
        monitor.textContent = firstNumber + secondNumber;
    }else if(operator[0] === "-"){
        monitor.textContent = firstNumber - secondNumber;
    }else if(operator[0] === "*"){
        monitor.textContent = firstNumber * secondNumber;
    }else{
        monitor.textContent = firstNumber / secondNumber;
    }
})