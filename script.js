mario = document.querySelector('.mario');
yoshi = document.querySelector('.yoshi');
pipe = document.querySelector('.pipe');
grass = document.querySelector('.grass');
textStart = document.querySelector('text-start')
pontos = document.querySelector('pontos')
audioStart = new Audio('./audio/theme.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')
audioYoshi = new Audio('./audio/yoshi.mp3')
audioJump = new Audio('./audio/jump.wav')
floor1 = document.querySelector('.floor-1')
floor2 = document.querySelector('.floor-2')
floor3 = document.querySelector('.floor-3')

var vida = 0;
var contador = 0;

/*================ Função Start ===================*/ 

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

        mario.src = './images/mario.gif';
        mario.style.width = '150px';
        mario.style.marginLeft = '50px';

    function yoshiAnimation(){
        yoshi.classList.add('yoshi-animation');
        }setInterval(yoshiAnimation, 5000);

    function grassAnimation(){
        grass.classList.add('grass-animation');
            }setInterval(grassAnimation, 6000);

    function floorAnimation1(){
        floor1.classList.add('floor-animation-1');
            }setInterval(floorAnimation1, 0);

    function floorAnimation2(){
        floor2.classList.add('floor-animation-2');
            }setInterval(floorAnimation2, 0);
                           
    function floorAnimation3(){
        floor3.classList.add('floor-animation-3');
            }setInterval(floorAnimation3, 3100); 
     
            
    audioStart.play();
}

document.addEventListener('keydown', start);



/*================ Função Pulo ===================*/ 

const jump = () => {
    document.getElementById("text-start").innerHTML="<strong>VIDA = </strong>" + vida;
    if (vida == 1) {
        mario.src = './images/marioYoshi.gif';
        mario.style.width = '140px';
        mario.style.marginLeft = '50px';
    } else{
        mario.src = mario.src;
    }
    audioJump.play();
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

document.addEventListener('keydown', jump);

/*================ Código para acabar o jogo ===================*/ 



const checkGameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const yoshiPosition = yoshi.offsetLeft;
    const grassPosition = grass.offsetLeft;
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;

    document.getElementById("text-start").style.color = "black";

         function Contando(){
            if(pipePosition <= 20 && pipePosition > 0){
                contador++;
                console.log (contador);
                console.log(pipePosition);

                if (contador <= 1){
                document.getElementById("pontos").style.color = "black";
                document.getElementById("pontos").innerHTML= contador + "<strong> PONTO</strong>";""
            } else {
                document.getElementById("pontos").style.color = "black";
                document.getElementById("pontos").innerHTML= contador + "<strong> PONTOS</strong>";
            }
            }
                }setTimeout(Contando, 100);

        if (yoshiPosition <= 120 && yoshiPosition > 0 && marioPosition < 80 ) {

            yoshi.style.animation = 'none';
            mario.src = './images/marioYoshi.gif';
            mario.style.width = '140px';
            mario.style.marginLeft = '50px';
            audioYoshi.play();
            vida = 1;
        }

   
         if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && vida == 0 ) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            yoshi.style.animation = 'none';

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;

            document.getElementById("text-start").style.color = "black";
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";


            function stopAudioStart(){
                audioStart.pause();
                }stopAudioStart();

            audioGameOver.play();

            function stopAudio(){
                audioGameOver.pause();
                }setTimeout(stopAudio, 8000);

            clearInterval(checkGameOver);

         } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && vida == 1) {

            mario.src = './images/mario.gif';
            mario.style.width = '150px';
            mario.style.marginLeft = '50px';
            function timeVida(){
                vida = 0
                    }setInterval(timeVida, 600);
        }
}, 20);

