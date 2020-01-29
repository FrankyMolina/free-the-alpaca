class FireCamps {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWith = w;
        this.gameHeight = h;

        this.width = 70;
        this.height = 70;

        this.flamePosX = this.gameWith;
        this.playerPosY0 = 485;

        this.img = new Image();
        this.img.src = './images/fire obstacles trns.png';

        this.img.frames = 3;
        this.img.framesIndex = 0;



        this.velX = 2;
    }


    draw(framesCounter) {

        this.ctx.drawImage(
            this.img,
            this.img.framesIndex * Math.floor(this.img.width / this.img.frames),
            0,
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.flamePosX,
            this.playerPosY0,
            this.width,
            this.height,
        );

        this.animate(framesCounter);

    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.img.framesIndex++;
        }
        if (this.img.framesIndex > this.img.frames - 1) {
            this.img.framesIndex = 0;
        }
    }


    move() {
        this.flamePosX  -= this.velX;
    }
}