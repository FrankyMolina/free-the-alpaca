const game = {

    canvas: null,
    ctx: null,
    width: null,
    height: null,

    framesCounter: 0,
    fireCamps: [],

    alpaca: [],

    score: 0,

    lives: 3,

    keys: {
        up: 38,
        //right: 39,
        //left: 37,

    },


    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
        scoreboard.init(this.ctx);
        //livesboard.init(this.ctx);
        this.start();

    },

    setDimensions() {
        this.width = 800;
        this.height = 600;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.framesCounter++;
            this.clear();
            this.drawAll();
            this.moveAll();

            this.generateFireCamps();
            this.clearFireCamps();

            this.burned();

            if (this.lives === 0) {
                this.gameOver();
            }


            this.generateAlpaca();
            this.clearAlpaca();


            this.getPoints();

            if (this.score >= 500) {
                this.gameWin();
            }


            this.score += 0.01;


        }, 1000 / 60);
    },

    drawAll() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        this.fireCamps.forEach(fire => fire.draw(this.framesCounter));
        this.alpaca.forEach(alp => alp.draw(this.framesCounter));
        this.drawScore();
        //this.drawLives();

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.fireCamps = [];
        this.alpaca = [];
        this.scoreboard = scoreboard;
        //this.livesboard = livesboard;

    },

    moveAll() {
        this.background.move();
        this.player.move();
        this.fireCamps.forEach(fire => fire.move());
        this.alpaca.forEach(alp => alp.move());

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    //*****************Fire Camps************************************************************************************************** */


    generateFireCamps() {
        if (this.framesCounter % 130 == 0) {
            this.fireCamps.push(new FireCamps(this.ctx, this.width, this.height));

        }
        //console.log(this.fireCamps);
    },

    clearFireCamps() {
        this.fireCamps = this.fireCamps.filter(fire => fire.flamePosX >= 0);
    },

    burned() {

        return this.fireCamps.some((fire, idx) => {
            if (
                this.player.posX + this.player.playerWidth - 50 >= fire.flamePosX &&
                this.player.posY + this.player.playerHeight - 30 >= fire.playerPosY0 &&
                this.player.posX <= fire.flamePosX + fire.width

            ) {
                this.fireCamps.splice(idx, 1);
                this.lives--;
                console.log(this.lives);
                return true;
            }
        })

    },

    gameOver() {
        clearInterval(this.interval);
        /*window.alert('Game Over, start again.');*/
        
        document.querySelector('#canvas').style.display = 'none';
        document.querySelector('#game-over').style.display = 'flex';
        
        setTimeout(()=> {
            location.reload();

        },2500);
        

    },





    //*****************Alpaca**************************************************************************************************** */

    generateAlpaca() {
        if (this.framesCounter % 200 == 0) {
            this.alpaca.push(new Alpaca(this.ctx, this.width, this.height));

        }
        //console.log(this.alpaca);
    },

    clearAlpaca() {
        this.alpaca = this.alpaca.filter(alp => alp.alpacaPosX >= 0);
    },

    getPoints() {

        return this.alpaca.some((alp, idx) => {

            if (
                this.player.posX + this.player.playerWidth - 50 >= alp.alpacaPosX &&
                this.player.posY + this.player.playerHeight - 30 >= alp.alpacaPosY &&
                this.player.posX <= alp.alpacaPosX + alp.alpacaWidth &&
                this.player.posY <= alp.alpacaPosY + alp.alpacaHeight
            ) {
                this.alpaca.splice(idx, 1)
                this.score += 25;
            }

        })

    },

    gameWin() {

        clearInterval(this.interval);
        window.alert('You win the game!!!');

    },

    /* ************************************ scoreboard ************************************************************************* */


    drawScore() {
        this.scoreboard.update(this.score);
    },

    /* ************************************* Lives ******************************************************************************* */

    /*drawLives() {
        this.livesboard.update(this.lives);
    }*/
}