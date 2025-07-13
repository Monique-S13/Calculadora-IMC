function calculoIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        resultado.style.display = "none";
        alert("Erro ao digitar o valor! Tente novamente.");
        return;
    } else{
        const imc = peso / (altura * altura);
        resultado.innerText = imc.toFixed(2);
        resultado.style.display = "block";
    }
}
