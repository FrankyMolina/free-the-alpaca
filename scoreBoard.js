
const scoreboard = {
    

    init(ctx) {
        this.ctx = ctx;
        this.ctx.font = "40px Bangers";
        
    },

    update(score) {
        this.ctx.fillStyle = "green";
        this.ctx.fillText(`${Math.floor(score)} / 180`, 50, 50);
    }
};


