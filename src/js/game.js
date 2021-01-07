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
    }
    init() {
        for(let i=0; i<this.maxParticles; i++){
            this.particles.push(new Particle(Math.random()*this.canvas.width, 0, 20, this.ctx))
        }
        this.animate()
    }
    animate() {
        // clear canvas frame for fading effect
        this.ctx.fillStyle = 'rgba(0,0,0,0.05)'
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)
        this.particles.map(particle => {
            particle.update()
            particle.draw()
        })
        requestAnimationFrame(()=>this.animate())
    }
}