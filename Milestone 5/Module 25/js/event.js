console.log('This is separate js file');

// event: action of user or browser
// event handler: function to handle the event

// event handler --> on + event (small letters)

/**
 * ## some common events:
 *  - click and mouse: click, mouseover, scroll
 *  - keyboard: keydown, keyup
 *  - form: submit, change, focus
 *  - window, document: load, resize, scroll
 *  - clipboard: copy, paste
 *  - drag and drop: dragstart, drop
 *  - media: play, pause
 */


/**
 * --------- keydown vs keypress vs keyup ---------
 * 
 * keydown: Fires when the key is pressed, but the letter may not appear in the input field yet.
 * keypress: Fires when a character key is pressed, but it’s deprecated.
 * keyup: Fires after the key is released, when the character is already added to the input field.
 * 
 * - keypress fires on only character-producing keys (letters, digits, punctuation)
 */