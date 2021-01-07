export default class Particle {
    constructor(x, y, size, ctx) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = Math.random()*size+1;
        this.weight = Math.random()*4+1;
        this.wind = -2;
        this.color = `hsl(${Math.random()*360},100%,50%)`
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
    update(){
        if(this.y > this.ctx.canvas.height) {
            this.y = 0;
            this.x = Math.random() * this.ctx.canvas.width
        }
        this.y += this.weight;
        this.x += this.wind;
    }
}