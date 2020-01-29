class Background {
    constructor(ctx, w, h, imgSource) {

        this.ctx = ctx;
        this.backgroundWidth = w;
        this.backgroundHeight = h;


        this.image = new Image();
        this.image.src = './images/background.JPG';

        this.posX = 0;
        this.posY = 0;

        this.velX = 2;


    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.backgroundWidth, this.backgroundHeight);
        this.ctx.drawImage(this.image, this.posX + this.backgroundWidth, this.posY, this.backgroundWidth, this.backgroundHeight);
    }

    move(){
        this.posX -= this.velX;

        if(this.posX <= -this.backgroundWidth) { this.posX = 0};
    }
}