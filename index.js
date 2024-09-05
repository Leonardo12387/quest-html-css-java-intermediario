
const botaoBtn = document.getElementById("enviar");

const inputTodos = document.querySelectorAll(".input");


botaoBtn.addEventListener("click", ()=>{
    inputTodos.forEach((input)=>{

        const campoPreenchido = input.classList.add("campo-preenchido")

        const naoPreenchido = input.classList.add("nao-preenchido")

        const campoObg = document.querySelectorAll(".texto-obrigatorio");

        if(input.value != ""){
            input.classList.add("nao-preenchido")
            input.nextElementSibling.classList.add("texto-obrigatorio")
        } else{
            input.classList.remove("campo-preenchido")
            input.nextElementSibling.classList.remove("texto-obrigatorio")
        }

    })
});

