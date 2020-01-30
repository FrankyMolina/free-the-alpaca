class Alpaca {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWith = w;
        this.gameHeight = h;

        this.alpacaWidth = 80;
        this.alpacaHeight = 90;

        this.alpacaPosX = this.gameWith;
        this.alpacaPosY = 300;

        this.img = new Image();
        this.img.src = './images/legendary alpaca-trns.png';



        this.velX = 6;
    }


    draw() {
        this.ctx.drawImage(this.img, this.alpacaPosX, this.alpacaPosY, this.alpacaWidth, this.alpacaHeight);
    }


    move() {
        this.alpacaPosX -= this.velX;
    }
}