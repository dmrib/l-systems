/**
 * String buffer.
 */


class StringBuffer
{
    /**
     * Constructor.
     *
     * @constructor
     */
    constructor()
    {
        // store components
        this.buffer = [];
    }


    /**
     * Inserts a string construction into buffer.
     *
     * @param {string} construction - construction to be added to buffer
     */
    insert(construction)
    {
        this.buffer.push(...construction.split(''));
    }


    /**
     * Clear buffer and returns previously bufferized string.
     *
     * @returns {string[]} - previously bufferized string
     */
    flush()
    {
        // get current buffer content
        const content = [...this.buffer];

        // restart buffer
        this.buffer = [];

        return content;
    }


    /**
     * Exposes the buffer current state.
     *
     * @returns {string[]} - current buffer state
     */
    get state()
    {
        return this.buffer;
    }
}
