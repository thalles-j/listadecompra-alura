const msgVazia = document.querySelector('#msgVazia');

export function msgValue(lista){
    if(lista.childElementCount === 0){
        msgVazia.style.display = "block";

    }else{
        msgVazia.style.display = "none";
    }
}