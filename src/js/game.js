import Particle from './particle'

export default class Game {
    constructor(canvasId, elmId) {
        this.element = document.getElementById(elmId);
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.particles = [];
        this.maxParticles = 100;
        this.gameTime = 0;
    }
    begin() {
        // find obstacle
        const obstacle = this.element.getBoundingClientRect();
        this.obstacle = {
            x: obstacle.left,
            y: obstacle.top,
            width: obstacle.width,
            height: obstacle.height,
        }

        // rest particles array
        this.particles = [];
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // create new particles and do animate
        for(let i=0; i<this.maxParticles; i++){
            this.particles.push(new Particle(Math.random()*this.canvas.width, Math.random() * 1 -100, 20, this.ctx))
        }
    }
    animate() {
        this.gameTime++;
        // clear canvas frame for fading effect
        // this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'rgba(0,0,0,0.05)'
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)
        this.particles.map(particle => {
            particle.update()
            particle.draw()
        })
        requestAnimationFrame(()=>this.animate())
    }
    init() {
        this.begin();
        window.addEventListener('resize', () => this.begin());
        this.animate()
    }
}