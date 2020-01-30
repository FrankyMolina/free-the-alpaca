class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;
        this.keys = keys;


        this.playerWidth = 120;
        this.playerHeight = 140;


        this.img = new Image();
        this.img.src = './images/spritesheet.png';

        this.posX = 30;
        this.posY = 400;
        this.posY0 = 425;

        this.velY = 10;

        this.img.frames = 8;
        this.img.framesIndex = 0;

        this.setListeners();

    }

    draw(framesCounter) {

        this.ctx.drawImage(
            this.img,
            this.img.framesIndex * Math.floor(this.img.width / this.img.frames),
            0,
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.posX,
            this.posY,
            this.playerWidth,
            this.playerHeight,
        );

        this.animate(framesCounter);

    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.img.framesIndex++;
        }
        if (this.img.framesIndex > this.img.frames - 1) {
            this.img.framesIndex = 0;
        }
    }

    move() {
        let gravity = 0.2;

        if (this.posY < this.posY0) {
            this.posY += this.velY;
            this.velY += gravity;
        } else {
            this.posY = this.posY0;
            this.velY = 1;
        }

    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.up:
                    if (this.posY >= this.posY0) {
                        this.posY -= 40;
                        this.velY -= 8;

                    }
                /*case this.keys.right:
                    if (this.posX <= this.gameWidth - this.playerWidth - 30)

                        this.posX += 20;*/
            }

        })

    }
}

