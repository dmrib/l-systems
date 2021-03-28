/**
 * L-System abstraction.
 */


class LSystem
{
    /**
     * Constructor.
     *
     * @constructor
     *
     * @param {string} axiom - L-system inital axiom
     * @param {Object} ruleset - L-system ruleset
     */
    constructor(axiom, ruleset)
    {
        // store components
        this.axiom = axiom;
        this.ruleset = ruleset;
        this.buffer = new StringBuffer()
        this.steps = 0;

        // initialize buffer
        this.buffer.insert(this.axiom);
    }

    /**
     * Derives next construction according to my ruleset.
     */
    derive()
    {
        // derivate each token of construction
        for (let token of [...this.buffer.flush().split('')])
        {
            // insert derivation into buffer
            try
            {
                this.buffer.insert(this.ruleset[token]);
            }

            // invalid token found: give warning and ignore it
            catch(TypeError)
            {
                console.log(`Invalid token '${token}' ignored.`);
            }
        }
    }
}
