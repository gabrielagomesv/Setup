function valida(){
    if(document.form.dia.value == ''){
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerHTML = "Queira informar o dia";
        document.form.dia.focus();
        return;
    }

    if(document.form.mes.value == ''){
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerHTML = "Queira informar o mês";
        document.form.mes.focus();
        return;
    }

    if(document.form.ano.value == ''){
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerHTML = "Queira informar o ano";
        document.form.ano.focus();
        return;
    }

    var dia = document.form.dia.value;
    var mes = document.form.mes.value;
    var ano = document.form.ano.value;

    wesley_safadao(dia, mes, ano);
}

function wesley_safadao(d, m, a){
    safado = somatorio(m) + (a/100) * (50-d);
    anjo = 100 - safado;

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = "<h1>"+ anjo.toFixed(2) + "% anjo, mas aquele <br>" + safado.toFixed(2) + "% é vagabundo </h1>";
}

function somatorio(m){
    soma = 0;

    for(i = 1; soma <= m; i++){
        soma += i;
    }
    return soma;
}

function limit(element){
    var max_caracter = 2;

    if(element.value.lenght > max_caracter){
        element.value = element.value.substr(0, max_caracter);
    }
}