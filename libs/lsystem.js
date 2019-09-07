/**
 * L-System abstraction.
 */
class LSystem
{
    /**
     * Constructor.
     * 
     * Args:
     *  axiom(string): initial axiom
     *  ruleset(Object): system derivation ruleset
     * 
     * Returns:
     *  undefined.
     */
    constructor(axiom, ruleset)
    {
        // store components
        this.axiom = axiom;
        this.ruleset = ruleset;
        this.buffer = new StringBuffer()
        this.steps = 0;
    }

    /**
     * I derivate a construction according to my ruleset.
     * 
     * Args:
     *  construction(string): construction to be derivated
     * 
     * Returns:
     *  undefined.
     * 
     * Raises:
     *  InvalidToken: on token not in system's alphabet
     */
    derivate(construction)
    {
        // derivate each token of construction
        for(let token of [...construction])
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