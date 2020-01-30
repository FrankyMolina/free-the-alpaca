
const livesboard = {
    //ctx = null,

    init(ctx) {

        this.ctx = ctx;
        this.ctx.font = "40px Bangers";

    },

    update(lives) {
        this.ctx.fillStyle = "red";
        this.ctx.fillText(`${Math.floor(lives)} / 3`, 650, 50);

    },
};
