const game = {

    canvas: null,
    ctx: null,
    width: null,
    height: null,





    init() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.setDimensions();

        this.board = new Board(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height);
        this.wall = new Walls(this.ctx, this.width, this.height);


        



        //this.background = new Background(this.ctx, this.width, this.height, this.src);
        //this.bird = new Bird(this.ctx, this.width, this.height, this.keys),
        // this.obstaclesTop = new obstaclesTop(this.ctx, this.width, this.height);


        this.start();

    },


    setDimensions() {
        this.width = 600;
        this.height = 600;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);

    },

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.drawAll()
            this.moveAll()
            this.player.collision();

            
            



        }, 1000 / 60)

    },

    drawAll(){
        this.board.draw();
        this.player.draw();
        this.wall.draw();
    },

    moveAll(){
        this.player.move();
    }

}
