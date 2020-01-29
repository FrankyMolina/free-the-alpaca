const game = {

    canvas: null,
    ctx: null,
    width: null,
    height: null,

    framesCounter: 0,
    fireCamps: [],

 

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
            this.framesCounter++;
            this.clear();
            this.drawAll();
            this.moveAll();

            this.generateFireCamps();
            this.clearFireCamps();



        }, 1000 / 60);
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.fireCamps.forEach(fire => fire.draw(this.framesCounter));

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.fireCamps = [];

    },

    moveAll() {
        this.background.move();
        this.player.move();
        this.fireCamps.forEach(fire => fire.move());

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateFireCamps() {
        if (this.framesCounter % 90 == 0) {
            this.fireCamps.push(new FireCamps(this.ctx, this.width, this.height));
            
        }
        console.log(this.fireCamps);
    },

    clearFireCamps() {
        this.fireCamps = this.fireCamps.filter(fire => fire.flamePosX >= 0);
    },
}