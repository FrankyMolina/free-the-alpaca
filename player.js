class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;
        this.keys = keys;


        this.playerWidth = 50;
        this.playerHeight = 70;

        //imgSrc

        this.posX = 30;
        this.posY = 485;
        this.posY0 = 485;

        this.velY = 10;

        this.setListeners();

    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.posX, this.posY, this.playerWidth, this.playerHeight);
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
                case this.keys.spaceBar:
                    if (this.posY >= this.posY0) {
                        this.posY -= 40;
                        this.velY -= 8;
                        
                    }

            }
        });
    }
}