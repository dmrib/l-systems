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
        // construction has multiple characters: extend buffer
        if(this.buffer.length > 1)
        {
            this.buffer.push(...construction.split(''));
        }

        // construction is a single character: insert it using indexing (faster)
        else
        {
            this.buffer[this.buffer.length] = construction;
        }
    }


    /**
     * Clear buffer and returns previously bufferized string.
     *
     * @returns {string} - previously bufferized string
     */
    flush()
    {
        // get current buffer content
        const content = this.buffer.join('');

        // restart buffer
        this.buffer = [];

        return content;
    }


    /**
     * Exposes the buffer current state.
     *
     * @returns {string} - current buffer state
     */
    get state()
    {
        return this.buffer.join('');
    }
}
