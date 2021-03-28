/**
 * Turtle commands renderer abstraction.
 */


class Turtle
{
    /**
     * Constructor.
     *
     * @constructor
     *
     * @param {Number} x - initial 'x' coordinate
     * @param {Number} y - initial 'y'
     * @param {Number} distance - distance between each steps
     * @param {Number} angle - rotation angle
     * @param {Number} decay - decay rate between steps
     */
    constructor(x, y, distance, angle, decay)
    {
        // set starting point
        this.start = createVector(x, y);

        // store parameters
        this.distance = distance
        this.angle = angle
        this.decay = decay

        // setup initial step size
        this.stepSize = this.distance;
    }

    /**
     * Draws sequence of turtle commands.
     *
     * @param {string} sequence - sequence of turtle commands
     */
    draw(sequence)
    {
        // set line color
        stroke(TURTLE_COLOR);
        strokeWeight(2);

        // push transformation matrix
        push();

        // initialize in centered position
        translate(windowWidth / 2, windowHeight / 2);

        // draw sequence
        for(let step of sequence)
        {
            switch(step)
            {
                case 'F':
                    line(0, 0, this.stepSize, 0);
                    translate(this.stepSize, 0);
                    break;
                case 'f':
                    translate(this.stepSize, 0);
                    break;
                case '+':
                    rotate(this.angle);
                    break;
                case '-':
                    rotate(-this.angle);
                    break;
            }
        }

        // pop transformation matrix
        pop();

        // decay step size
        this.stepSize /= this.decay;
    }
}
