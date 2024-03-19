
let textoInput = document.querySelector(".text-area").value;
let textoOutput = document.querySelector(".mensagem").value;
let cripto = document.getElementById (".btn-codificar").value;
let desCrito = document.getElementById (".btn-decodificar").value;
let copia = document.getElementById (".btn-copiar").value;

function codificar() { 
    let input = textoInput.value;
    
    let resultCripto = textoInput.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("text-area").innerHTML = resultCripto.value; 
    //document.querySelector("text-area").innerHTML = "<textarea readonly id=text-area>" + resultDescripto + "/textarea>" + "<button class="btn-copiar" onclick="copiar()">Copiar</button>"; 
    console.log(codificar);
}
function decodificar() {
    var output = textoInput.value;
    
    var resultDescripto = textoOutput.result.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("menssagem").innerHTML = resultDescripto.value;  
    //document.querySelector("mensagem").innerHTML = "<textarea readonly id=text-area>" + resultDescripto + "/textarea>" + "<button class="btn-copiar" onclick="copiar()">Copiar</button>";
}

function copiar() {
    var textoCopiado = document.querySelector ("btn-copiar");

    textoCopiado.select ();
    document.execCommand ("copy");
    alert ("Texto copiado");
}