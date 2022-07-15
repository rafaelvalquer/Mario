    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const grass = document.querySelector('.grass');
    const p$ = document.getElementById('contador');
    const audioStart = new Audio('./audio/theme.mp3');
    const audioGameOver = new Audio('./audio/gameover.mp3')
    const floor1 = document.querySelector('.floor-1')
    const floor2 = document.querySelector('.floor-2')
    const floor3 = document.querySelector('.floor-3')


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
        
        function grassAnimation(){
            grass.classList.add('grass-animation');
                }setInterval(grassAnimation, 8000);


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





    //function incrementar() {
    //   document.getElementById("contador").innerHTML = `Value: ${++contador}`;
    //}

    //function UmSegundoeMeio(){
      //  contador++;
        //console.log(contador)
    //}
    //setInterval(UmSegundoeMeio, 1000*1.5);