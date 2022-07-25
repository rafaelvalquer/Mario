console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './imagens/sprites.png';

const spritesFloor = new Image();
spritesFloor.src = './imagens/floor.png';

const spritesPlanoDeFundo = new Image();
spritesPlanoDeFundo.src = './imagens/fundoDoMar.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

   // [MARIO]
const mario = {
    spriteX: 328,
    spriteY: 435,
    largura: 17,
    altura: 29,
    x: 10,
    y: 50,
    pulo: 4.6,
    pula() {
        mario.velocidade = - mario.pulo;
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza() {
        mario.velocidade = mario.velocidade + mario.gravidade;
        mario.y = mario.y + mario.velocidade;
        console.log(mario.y);
    },

    desenha() { 
        context.drawImage(
            sprites,
            mario.spriteX, mario.spriteY, //Sprite X, Sprite Y
            mario.largura, mario.altura, // Tamanho do recorte na sprite
            mario.x, mario.y,
            mario.largura, mario.altura,
        )
    }
}

    // [CHÃO]
const floor = {
    spriteX: 0,
    spriteY: 0,
    largura: 1500,
    altura: 34,
    x: 0,
    y: 446,
    desenha() { 
        context.drawImage(
            spritesFloor,
            floor.spriteX, floor.spriteY, //Sprite X, Sprite Y
            floor.largura, floor.altura, // Tamanho do recorte na sprite
            floor.x, floor.y,
            floor.largura, floor.altura,
        )
    }
}

    // [BackGroud]
    const planoDeFundo = {
        spriteX: 0,
        spriteY: 0,
        largura: 511,
        altura: 433,
        x: 0,
        y: 34,
        desenha() { 
            context.fillStyle = '#004040';
            context.fillRect(0,0, canvas.width, canvas.height)
            context.drawImage(
                spritesPlanoDeFundo,
                planoDeFundo.spriteX, planoDeFundo.spriteY, //Sprite X, Sprite Y
                planoDeFundo.largura, planoDeFundo.altura, // Tamanho do recorte na sprite
                planoDeFundo.x, planoDeFundo.y,
                planoDeFundo.largura, planoDeFundo.altura,
            )
        }
    }


function loop() {
    mario.atualiza();
    planoDeFundo.desenha();
    floor.desenha();
    mario.desenha();

    requestAnimationFrame(loop);
}

window.addEventListener('keydown', function() {
    mario.pula();

});

loop();