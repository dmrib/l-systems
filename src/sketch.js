/**
 * p5.js sketch.
 */


// colors definition
const BACKGROUND_COLOR = '#fbe6c2';
const ENTRY_COLOR = '#c15050';
const INFO_COLOR = '#d97642'
const TURTLE_COLOR = '#a3d2ca'

// fonts definition
const LARGE = 45;
const MEDIUM = 30;
let chango;

// define L-system state
let iteration = 1;
let currentGrammar = 0;
let lsystem;


/**
 * p5.js pre-setup function.
 */
function preload()
{
    // load 'Chango' font
    chango = loadFont('assets/Chango-Regular.ttf');
}


/**
 * p5.js setup function.
 */
function setup()
{
    // create drawing canvas
    createCanvas(windowWidth, windowHeight);

    // stop drawing loop
    noLoop();

    // draw initial grammar
    loadGrammar();

    // clean background
    background(BACKGROUND_COLOR);
}


/**
 * p5.js draw function.
 */
function draw()
{
    // clean background
    background(BACKGROUND_COLOR);

    // draw current L-system state
    turtle.draw(lsystem.state);

    // display grammar info
    displayInfo();
}


/**
 * p5.js mouse clicked callback.
 */
function mouseClicked()
{
    if (iteration === GRAMMARS[currentGrammar].maxDerivations)
    {
        iteration = 1;
        nextScene();
    }

    else
    {
        iteration += 1;
        nextDerivation();
    }
}


/**
 * Grammar setup.
 */
function loadGrammar()
{
    // load grammar parameters
    grammar = GRAMMARS[currentGrammar];

    // restart L-system
    lsystem = new LSystem(grammar.axiom, grammar.ruleset);

    // restart turtle drawer
    turtle = new Turtle(
        grammar.x,
        grammar.y,
        grammar.distance,
        radians(grammar.angle),
        grammar.decay
    );
}


/**
 * Forward sketch to next grammar.
 */
function nextScene()
{
    // get next grammar index
    currentGrammar + 1 === GRAMMARS.length ? currentGrammar = 0 : currentGrammar++;

    // setup next grammar
    loadGrammar();

    // call p5.js drawing function
    redraw();
}


/**
 * Get L-system next derivation.
 */
function nextDerivation()
{
    // derivate next L-system state
    lsystem.derive();

    // call p5.js drawing function
    redraw();
}


/**
 * Displays info about current sketch state.
 */
function displayInfo()
{
    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textFont(chango, LARGE);
    text('System:', 50, (windowHeight * 0.15))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`(${currentGrammar + 1}/${GRAMMARS.length})`, 50, (windowHeight * 0.2))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textFont(chango, LARGE);
    text('Axiom:', 50, (windowHeight * 0.3))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`${GRAMMARS[currentGrammar].axiom}`, 50, (windowHeight * 0.35))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textSize(LARGE);
    text('Iteration:', 50, (windowHeight * 0.45))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`(${iteration}/${GRAMMARS[currentGrammar].maxDerivations})`, 50, (windowHeight * 0.5))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textSize(LARGE);
    text('Instructions:', 50, (windowHeight * 0.6))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`${lsystem.state.length}`, 50, (windowHeight * 0.65))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textSize(LARGE);
    text(`Ruleset:`, 50, (windowHeight * 0.75))

    let i = 0.8;
    for (let rule in GRAMMARS[currentGrammar].ruleset)
    {
        fill(INFO_COLOR);
        stroke(INFO_COLOR);
        textSize(MEDIUM);
        text(`${rule}: ${GRAMMARS[currentGrammar].ruleset[rule]}`, 50, (windowHeight * i));
        i += 0.05;
    }
}
