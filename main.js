var SpeechR = window.webkitSpeechRecognition;
var reconhecimento = new SpeechR
function iniciar() {
document.getElementById('textbox').innerHTML = ''
reconhecimento.start ()
}
reconhecimento.onresult = function (evento){
console.log (evento)
 var conteudo = evento.results [0] [0].transcript
console.log(conteudo)
document.getElementById ('textbox').innerHTML = conteudo
if (conteudo == 'tire minha selfie '){
    speak()
}
}
function speak(){
    var api = window.speechSynthesis
    Webcam.attach(camera);
    // var texto =document.getElementById('textbox').value
    var texto = 'tirando sua selfie '
    var textocon = new SpeechSynthesisUtterance(texto)
    api.speak(textocon)
    Webcam.attach (camera)
    setTimeout(function (){
   var imgid = 'selfie1'
   tirarselfie ()

 textocon = new SpeechSynthesisUtterance(texto)
    },3000)

    setTimeout(function (){
 var imgid = 'selfie2'
 tirarselfie ()
 textocon = new SpeechSynthesisUtterance(texto)
 },6000)
 setTimeout(function (){
    var imgid = 'selfie3'
    tirarselfie ()
   
    },9000)
 }
 function tirarselfie (){
Webcam.snep (function (data_uri){
if(imgid == 'sefie1'){
document.getElementById ('resultado1').innerHTML = `<img id="selfie1" src="${data_uri}" />`
}
if(imgid == 'sefie2'){
    document.getElementById ('resultado2').innerHTML = `<img id="selfie2" src="${data_uri}" />`
    }
    if(imgid == 'sefie3'){
        document.getElementById ('resultado3').innerHTML = `<img id="selfie3" src="${data_uri}" />`
        }
})
 }
 camera = document.getElementById ('camera')
Webcam.set ({

    width:500, 
    height:400, 
    image_format : 'jpeg',
     jpeg_quality:90
})
