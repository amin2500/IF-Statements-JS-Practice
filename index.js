const textinput = document.getElementById("text")
const button = document.getElementById("submit")
const resulttext = document.getElementById("display-text")
let age = 18


button.onclick = function(){
    age = textinput.value
    age = Number(age)

if(age >= 100){
        resulttext.textContent = ("You are to old to enter")
   
    }
    else if(age >= 18){
        resulttext.textContent = ("You are old enough to enter")
    }
    
    else if(age == 0){
        resulttext.textContent = ("You can't enter. You were just born.")
    }
    
    else if(age == 17){
        resulttext.textContent = ("You can't enter. You are to young to enter try next year :).")
    }
    
    else if(age<0){
        resulttext.textContent = ("Your age can't be below 0")
    }
    else if(age<18){
        resulttext.textContent = ("Your to young to enter")
    }
    else if(age = String){
        resulttext.textContent = ("enter a number only!")
    }
 
}