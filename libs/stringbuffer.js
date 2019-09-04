/**
 * String buffer implementation.
 */
class StringBuffer
{
    /**
     * Constructor.
     * 
     * Returns:
     *  undefined.
     */
    constructor()
    {
        // store components
        this.buffer = [];
        this.length = 0;
    }

    /**
     * I insert a string construction into buffer.
     * 
     * Args:
     *  construction(string): construction to be added
     * 
     * Returns:
     *  undefined.
     */
    insert(construction)
    {
        // construction has multiple characters: extend buffer
        if(construction.length > 1)
        {
            this.buffer.push(...construction.split(''));
            this.length += construction.length;
        }

        // construction is a single character: insert it using indexing (faster)
        else
        {
            this.buffer[this.length] = construction;
            this.length++;
        }
    }

    /**
     * I clear the buffer.
     * 
     * Returns:
     *  content(string): buffer previously stored content
     */
    flush()
    {
        const content = this.buffer.join('');

        this.length = 0;
        this.buffer = [];

        return content;
    }

    /**
     * I expose the buffer current state.
     * 
     * Returns:
     *  (string): buffer content
     */
    state()
    {
        return this.buffer.join('');
    }
}