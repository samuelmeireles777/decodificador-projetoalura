
function botaoCrip() {
    const textoarea = document.querySelector('.textoInput');
    const mensagem = document.querySelector('.txtmensagem'); 

    if (textoarea && mensagem) { 
        const textoEncriptado = encriptar(textoarea.value);
        mensagem.value = textoEncriptado;
        textoarea.value = ""; 
    } else {
        console.error("Elemento 'textoarea' ou 'mensagem' não encontrado");
    }
}

function botaoDescrip() {
    const textoarea = document.querySelector('.textoInput'); 
    const mensagem = document.querySelector('.txtmensagem'); 

    if (textoarea && mensagem) { 
        const txtdesencrip = desencriptar(textoarea.value);
        mensagem.value = txtdesencrip;
        textoarea.value = ""; 
    } else {
        console.error("Elemento 'textoarea' ou 'mensagem' não encontrado");
    }
}
function copiaTexto(){
    const mensagem = document.querySelector('.txtmensagem');
        navigator.clipboard.writeText(mensagem.value) .then(()=>{
        alert ("texto copiado")
     })

    } 

function encriptar(stringCriptografia){

    let matrizcodigo= [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringCriptografia =stringCriptografia.toLowerCase();

    for( let i = 0; i < matrizcodigo.length; i++) {
        if(stringCriptografia.includes(matrizcodigo[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
        
    }
    return stringCriptografia;
}
function desencriptar(stringDesencriptar){

    let matrizcodigo= [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringDesencriptar =stringDesencriptar.toLowerCase();
    for( let i = 0; i<matrizcodigo.length; i++) {
        if(stringDesencriptar.includes(matrizcodigo[i][1])) {
            stringDesencriptar=stringDesencriptar.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
         }
    }
     return stringDesencriptar;
}
