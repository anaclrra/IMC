/* 18.50 – 24.99: Peso Normal
25.00 – 29.99: Pré-Obesidade
30.00 – 34.99: Obesidade Grau I
35.00 – 39.99: Obesidade Grau II
≥40.00: Obesidade Grau III */

function calcular_imc() {

    let peso = document.getElementById("iPeso").value;
    let altura = document.getElementById("iAltura").value;
    let resultado = document.getElementById("iResultado");
   
    if (altura != '' && peso != '') {
        var novAltura = altura / 100;
        var imc = (peso / (novAltura * novAltura)).toFixed(2);
        
        let classificacao = '';

        if (imc < 18.50) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.50 && imc <= 24.99) {
            classificacao = "Peso Normal";
    
        } else if (imc >= 25.00 && imc <= 29.99) {
            classificacao = "Acima do peso";
    
        } else if (imc >= 30.00 && imc <= 34.99) {
            classificacao = "Obesidade Grau I";
    
        } else if (imc >= 35.00 && imc <= 39.99) {
            classificacao = "Obesidade Grau II";
    
        } else if (imc >= 40.00) {
            classificacao = "Obesidade Grau III";
    
        }
        resultado.innerHTML = `- IMC ${imc} - ${classificacao}`;
    }else {
        resultado.innerHTML = "Por favor, preencha todos os campos!";
    }
    
}
