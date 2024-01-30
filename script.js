const numeroCapitulo = 10;
const nomeCapitulo = document.getElementById('Capitulos');
const tocarOuPausarFaixa = document.getElementById("pausar-tocar");
const capituloPosterior = document.getElementById("avançar");
const capítuloAnterior = document.getElementById("voltar");
const audio = document.getElementById("audios")

let taTocando = false;
let capitulo =1;

function tocarFaixa(){
    tocarOuPausarFaixa.classList.remove("bi-play-circle");
    tocarOuPausarFaixa.classList.add("bi-pause");
    audio.play();
    taTocando=true;
}

function pausarFaixa(){
    tocarOuPausarFaixa.classList.remove("bi-pause");
    tocarOuPausarFaixa.classList.add("bi-play-circle");
    audio.pause();
    taTocando=false;
}

function tocarOuPausar(){
    if(taTocando === true){
       pausarFaixa();
    }else{
        tocarFaixa();
    }
}

function proximoCapitulo() {
    if(capitulo < numeroCapitulo){
        capitulo = capitulo+1;
    } else{
        Capitulo = 1;
    }
     audio.src = "media/books/dom-casmurro/" + capitulo + ".mp3";
     nomeCapitulo.innerText = "Capítulo" + capitulo;
     tocarFaixa();
}

function voltarCapitulo(){
    if(capitulo === 1){
        capitulo = numeroCapitulo;
    }else{
        capitulo = capitulo-1;
    }
    audio.src = "media/books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo" + capitulo;
    tocarFaixa();
}

tocarOuPausarFaixa.addEventListener('click', tocarOuPausar);
capituloPosterior.addEventListener('click', proximoCapitulo);
capítuloAnterior.addEventListener('click', voltarCapitulo);
audio.addEventListener('ended', proximoCapitulo);