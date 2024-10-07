const erros: string[] = [];

function campoIsVazio(input: HTMLInputElement){
    if(input.value === ""){
        return true;
    }
    return false;
}

function validarNome(input: HTMLInputElement){
    if(campoIsVazio(input)){
        erros.push("Campo nome está vazio");
        return;
    }
    if(input.value.length > 20 || input.value.length < 5){
        erros.push("Número de caracteres no campo nome está inválido");
        return;
    }
    return;
}

function validarEmail(input: HTMLInputElement){
    if(campoIsVazio(input)){
        erros.push("Campo email está vazio");
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(input.value)){
        erros.push("Email inválido")
        return;
    }
    return;
}

function validarCPF(input: HTMLInputElement){
    if(campoIsVazio(input)){
        erros.push("Campo CPF está vazio");
        return;
    }
    const cpf = Number(input.value);
    if(typeof cpf !== "number"){
        erros.push("O campo CPF não contem apenas numeros");
        return;
    }
    if(input.value.length !== 11){
        erros.push("Campo CPF deve conter 11 digitos");
        return;
    }
}

function validarIdade(input: HTMLInputElement){
    if(campoIsVazio(input)){
        erros.push("O campo idade está vazaio");
        return;
    }
    const idade = Number(input.value);
    if(idade > 30 || idade < 16){
        erros.push("Idade inválida");
        return;
    }
}

export function handleCampos(){

    const inputNome = document.getElementById("nome") as HTMLInputElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputCPF = document.getElementById("cpf") as HTMLInputElement;
    const inputIdade = document.getElementById("idade") as HTMLInputElement;
    const divNotify = document.getElementById("notify") as HTMLDivElement;

    divNotify.innerHTML = "";
    erros.length = 0;

    validarNome(inputNome);
    validarEmail(inputEmail);
    validarCPF(inputCPF);
    validarIdade(inputIdade);
    
    if(erros.length > 0){
        erros.forEach((erro) => {
            const element = document.createElement("p");
            element.textContent = erro;
            element.style.color = "red";
            divNotify.appendChild(element);
        })
        return;
    }
    const success = document.createElement("p");
    success.textContent = "Campos Validos";
    success.style.color = "green";
    divNotify.appendChild(success);
}

