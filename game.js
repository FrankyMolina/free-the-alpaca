const game = {

    canvas: null,
    ctx: null,
    width: null,
    height: null,

    keys: {
        spaceBar: 32,

    },


    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
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
            //this.clear();
            this.drawAll();
            this.moveAll();



        }, 1000 / 60);
    },

    drawAll() {
        this.background.draw();

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, this.src);

    },

    moveAll() {
        this.background.move();

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },


}