console.log('[DevSoutinho] Flappy Bird');
let frames = 0;
const sprites = new Image();
sprites.src = './imagens/sprites.png';

const spritesFloor = new Image();
spritesFloor.src = './imagens/floor.png';

const spritesPlanoDeFundo = new Image();
spritesPlanoDeFundo.src = './imagens/fundoDoMar.png';

const spritesPeixe = new Image();
spritesPeixe.src = './imagens/inimigos.png';


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function fazColisao(mario, floor) {
    const marioY = mario.y + mario.altura;
    const floorY = floor.y;

    if(marioY >= floorY) {
        return true;
    }
    return false;
}

function criaMario(){
    const mario = {
        spriteX: 92,
        spriteY: 31,
        largura: 21,
        altura: 28,
        x: 10,
        y: 50,
        pulo: 4.6,
        pula() {
            mario.velocidade = - mario.pulo;
        },
        gravidade: 0.25,
        velocidade: 0,
        atualiza() {
            if(fazColisao(mario, floor)){
                console.log('fez colisão');
                return;
            }
            mario.velocidade = mario.velocidade + mario.gravidade;
            mario.y = mario.y + mario.velocidade;
    
        },
        movimentos: [
            { spriteX: 92, spriteY: 32, },
            { spriteX: 112, spriteY: 32, },
            { spriteX: 132, spriteY: 32, },
        ],

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
    return mario;
}

   // [MARIO]
   
const mario = {
    spriteX: 92,
    spriteY: 32,
    largura: 21,
    altura: 28,
    x: 10,
    y: 50,
    pulo: 4.6,
    pula() {
        mario.velocidade = - mario.pulo;
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza() {
        if(fazColisao(mario, floor)){

            return;
        }
        mario.velocidade = mario.velocidade + mario.gravidade;
        mario.y = mario.y + mario.velocidade;

    },
       movimentos: [
            { spriteX: 92, spriteY: 32, },
            { spriteX: 112, spriteY: 32, },
            { spriteX: 132, spriteY: 32, },
            { spriteX: 153, spriteY: 32, },
        ],
    frameAtual: 0,
    atualizaOFrameAtual() {
        const intervaloDeFrames = 10;
        const passouOIntervalo = frames % intervaloDeFrames === 0;

        if(passouOIntervalo){
        const baseDoIncremento = 1;
        const imcremento = baseDoIncremento + mario.frameAtual;
        const baseRepeticao = mario.movimentos.length;
        mario.frameAtual = imcremento % baseRepeticao;

        }
    },
    desenha() { 
        mario.atualizaOFrameAtual();
        const { spriteX, spriteY } = mario.movimentos[mario.frameAtual];
        context.drawImage(
            sprites,
            spriteX, spriteY, //Sprite X, Sprite Y
            mario.largura, mario.altura, // Tamanho do recorte na sprite
            mario.x, mario.y,
            mario.largura, mario.altura,
        )
    }
}

    // [CHÃO]
 //   function criaChao() {
        const floor = {
            spriteX: 0,
            spriteY: 0,
            largura: 1500,
            altura: 34,
            x: 0,
            y: 446,
            atualiza() {
                const movimentoDoChao = 1;
                const repeteEm = floor.largura / 2;
                const movimentacao = floor.x - movimentoDoChao;

                floor.x = movimentacao % repeteEm;
            },
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
   // }

    // [BackGroud]
    const planoDeFundo = {
        spriteX: 0,
        spriteY: 0,
        largura: 1021,
        altura: 433,
        x: 0,
        y: 34,
        atualiza() {

            const movimentoDoFundo = 2;
            const repeteEm = planoDeFundo.largura / 2;
            const movimentacao = planoDeFundo.x - movimentoDoFundo;

            planoDeFundo.x = movimentacao % repeteEm;
        },

        desenha() { 
            const yRandom = - 150;
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

        // [Peixe]
        const peixe = {
            spriteX: 168,
            spriteY: 483,
            largura: 26,
            altura: 22,
            x: 0,
            y: 34,
            desenha() { 
                context.drawImage(
                spritesPeixe,
                peixe.spriteX, peixe.spriteY, //Sprite X, Sprite Y
                peixe.largura, peixe.altura, // Tamanho do recorte na sprite
                peixe.x, peixe.y,
                peixe.largura, peixe.altura,
                ) 
            },
            pares: [],
            atualiza() {
                const passou100Frames = frames % 100 === 0 ;
                if(passou100Frames) {
                    peixe.pares.push ({
                        x: 100,
                        y: -150 * (Math.Random + 1),
                    });
    
                }
    
            }
        }
 


function loop() {
    
    
    planoDeFundo.desenha();
    planoDeFundo.atualiza();
    floor.desenha();
    floor.atualiza();
    mario.desenha();
    mario.atualiza();
    peixe.desenha();
    peixe.atualiza();
    frames = frames + 1;
// teste

    requestAnimationFrame(loop);
}

window.addEventListener('keydown', function() {
    mario.pula();

});

loop();