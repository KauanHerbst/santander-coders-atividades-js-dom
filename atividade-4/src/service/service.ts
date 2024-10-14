import ICep from "../Interfaces/ICep";

const btn = document.getElementById("btn") as HTMLInputElement;
const cepInput = document.getElementById("cep") as HTMLInputElement;


export function buscarCep(cep: string) {
    if (cep === "") {
        window.alert("CEP está vazio");
        return;
    }

    const regexCep = /^[0-9]{8}$/;
    if (!regexCep.test(cep)) {
        window.alert("CEP inválido");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            if (!response.ok) {
                window.alert("Erro ao buscar o CEP");
                throw new Error("Erro");
            }
            return response.json();
        })
        .then((data: ICep) => {
            mostrarNosCampos(data);
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}

function onChangeCep(){
    const cepInput = document.getElementById("cep") as HTMLInputElement;
    const cep = cepInput.value;
    if(cep.length < 8 || cep.length > 8){
        cepInput.style.borderColor = "red";
    }
    if(cep.length == 8){
        cepInput.style.borderColor = "green";
        buscarCep(cep);
    }
}



function mostrarNosCampos(data: ICep){
    const rua = document.getElementById("rua") as HTMLInputElement;
    const cidade = document.getElementById("cidade") as HTMLInputElement;
    const estado = document.getElementById("estado") as HTMLInputElement;

    if(data.cep === undefined){
        rua.value = "CEP inválido";
        cidade.value = "CEP inválido";
        estado.value = "CEP inválido";
        rua.disabled = false;
        cidade.disabled = false;
        estado.disabled = false;
        return;
    }

    rua.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.estado;

    rua.disabled = true;
    cidade.disabled = true;
    estado.disabled = true;
}

function limparCampos(){
    const nome = document.getElementById("nome") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const nascimento = document.getElementById("nascimento") as HTMLInputElement;
    const cepInput = document.getElementById("cep") as HTMLInputElement;
    const rua = document.getElementById("rua") as HTMLInputElement;
    const cidade = document.getElementById("cidade") as HTMLInputElement;
    const estado = document.getElementById("estado") as HTMLInputElement;

    cepInput.style.borderColor = "";

    nome.value = "";
    email.value = "";
    nascimento.value = "";
    cepInput.value = "";
    rua.value = "";
    cidade.value = "";
    estado.value = "";
    rua.disabled = false;
    cidade.disabled = false;
    estado.disabled = false;
}

cepInput.addEventListener("change", onChangeCep);
btn.addEventListener("click", limparCampos)