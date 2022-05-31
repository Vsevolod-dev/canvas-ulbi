import Brush from "./Brush";

export default class Erase extends Brush {
    constructor(canvas) {
        super(canvas);
        this.ctx.strokeStyle = 'white'
    }

    set strokeColorErase(color) {
        this.ctx.strokeStyle = color
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}