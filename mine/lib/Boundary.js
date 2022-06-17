class Boundary {
    static width = 54
    static height = 54
    constructor({ position }) {
        this.position = position
        this.width = Boundary.width
        this.height = Boundary.height
    }
    draw() {
        context.fillStyle = 'rgba(255, 0, 0, 0.3)'
        context.fillRect(this.position.x, this.position.y, Boundary.width, Boundary.height)
    }
}