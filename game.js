const game = {

    canvas: null,
    ctx: null,
    width: null,
    height: null,

    framesCounter: 0,
    fireCamps: [],

    alpaca: [],

    //score: 0,

    keys: {
        spaceBar: 32,

    },


    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
       // this.scoreboard.init(this.ctx);
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

            /*if (this.burned()) {
                this.gameOver();
            }*/

            this.generateAlpaca();
            this.clearAlpaca();


            if (this.getPoints()) {
               // this.winGame();
            }
            //this.score += 0.01;


        }, 1000 / 60);
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.fireCamps.forEach(fire => fire.draw(this.framesCounter));
        this.alpaca.forEach(alp => alp.draw(this.framesCounter));

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.fireCamps = [];
        this.alpaca = [];
        //this.scoreboard = scoreboard;

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

        return this.fireCamps.some(fire => {
            if (
                this.player.posX + this.player.playerWidth >= fire.flamePosX &&
                this.player.posY + this.player.playerHeight >= fire.playerPosY0 &&
                this.player.posX <= fire.flamePosX + fire.width

            ) return true;
        })

    },

    gameOver() {
        clearInterval(this.interval);
        window.alert('Game Over, start again.');
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

        return this.alpaca.some(alp => {

            if (
                this.player.posX + this.player.playerWidth >= alp.alpacaPosX &&
                this.player.posY + this.player.playerHeight >= alp.alpacaPosY &&
                this.player.posX <= alp.alpacaPosX + alp.alpacaWidth &&
                this.player.posY <= alp.alpacaPosY + alp.alpacaHeight
            ) return /*this.score += 2 &&*/ true;
        })

    },

    gameWin() {
        

        if (this.score === 10) {
            clearInterval(this.interval);
            window.alert('You win the game!!!');
        }
    },

    /* ************************************ scoreboard ************************************************************************* */

    /*
    drawScore() {
        this.scoreboard.update(this.score);
    }
    */

}