    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const cogumelo = document.querySelector('.cogumelo');
    const grass = document.querySelector('.grass');
    const p$ = document.getElementById('contador');
    const floor1 = document.querySelector('.floor-1');
    const floor2 = document.querySelector('.floor-2');
    const floor3 = document.querySelector('.floor-3');
    const audioStart = new Audio('./audio/theme.mp3');
    const audioGameOver = new Audio('./audio/gameover.mp3');
    const pulo = new Audio('./audio/pulo.mp3');
    const yoshi = new Audio('./audio/yoshi.mp3');
   
   



    document.getElementById('contador').style.color = "rgb(236, 236, 236)";

    let contador = 0;

    p$.innerHTML = contador;



    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
            pulo.play();
        }, 500);
    }




    const loop = setInterval(() => {

        audioStart.play();
        const pipePosition = pipe.offsetLeft;
        const cogumeloPosition = cogumelo.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const grassPosition = grass.offsetLeft;
        const floorPosition1 = floor1.offsetLeft;
        const floorPosition2 = floor2.offsetLeft;
        const floorPosition3 = floor3.offsetLeft;

        
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



        
        if (cogumeloPosition <= 120 && marioPosition < 80 && cogumeloPosition > 0) {

            cogumelo.style.animation = 'none';

            mario.src = './images/yoshi.gif';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            yoshi.play();
        }

        if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.webp';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            cogumelo.style.animation = 'none';
            cogumelo.style.left = `${cogumeloPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;


            audioStart.pause();

            audioGameOver.play();

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