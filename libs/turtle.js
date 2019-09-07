/**
 * Turtle commands renderer abstraction.
 */
class Turtle
{
    /**
     * Constructor.
     * 
     * Args:
     *  x(number): initial x coordinate
     *  y(number): initial y coordinate
     *  distance(number): initial step size
     *  angle(number): rotation angle
     *  decay(number): step size decrement factor
     * 
     * Returns:
     *  undefined.
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
     * I draw according to a given sequence.
     * 
     * Args:
     *  sequence(string): drawing instructions
     * 
     * Returns:
     *  undefined.
     */
    draw(sequence)
    {
        // set line color
        const color = [int(random(0, 255)),
                       int(random(0, 255)),
                       int(random(0, 255))]
        stroke(...color);
        strokeWeight(2);

        // push transformation matrix
        push();

        // initialize in centered position
        translate(int(random(200, 1000)),
                  int(random(200, 1000)));

        // draw sequence
        for(let step of [...sequence.split('')])
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