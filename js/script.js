    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const p$ = document.getElementById('contador');
    const audioStart = new Audio('./audio/theme.mp3')
    const audioGameOver = new Audio('./audio/gameover.mp3')


    document.getElementById('contador').style.color = "rgb(236, 236, 236)";

    let contador = 0;

    p$.innerHTML = contador;

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }


    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        

        if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.webp';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
        }
    }, 10);

    
    document.addEventListener('keydown', jump)

    
    audioStart.play();
    audioStart.loop =true;
    audioStart.playbackRate = 2;






    //function incrementar() {
    //   document.getElementById("contador").innerHTML = `Value: ${++contador}`;
    //}

    //function UmSegundoeMeio(){
      //  contador++;
        //console.log(contador)
    //}
    //setInterval(UmSegundoeMeio, 1000*1.5);