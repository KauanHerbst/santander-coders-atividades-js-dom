function randomNumber(){
    const randomNumber = Math.floor(Math.random() * 11);
    return randomNumber;
}

export function toggle(){
    const btn = document.getElementById("btn-toggle") as HTMLButtonElement;
    const image = document.getElementById("lampadaImage") as HTMLImageElement;
    if(randomNumber() === 5){
        image.src = "/src/assets/lampadaQuebrada.jpg";
        btn.disabled = true;
        return;
    }
    if(btn.value === "0"){
        btn.value = "1";
        image.src = "/src/assets/lampadaLigada.jpg";
        return;
    }
    btn.value = "0";
    image.src = "/src/assets/lampadaDesligada.jpg";
    return;
}