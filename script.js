function calculoIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        resultado.style.display = "none";
        alert("Erro ao digitar o valor! Tente novamente.");
        return;
    } else{
        resultado.innerText = imc.toFixed(2);
        resultado.style.display = "block";
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
}
