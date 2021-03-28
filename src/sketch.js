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
let currentScene = 0;
let lsystem;


/**
 * p5.js pre-setup function.
 */
function preload()
{
    // load 'Chango' font
    chango = loadFont('../assets/Chango-Regular.ttf');
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

    // draw initial scene
    loadScene();

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

    // display scene info
    displayInfo();
}


/**
 * p5.js mouse clicked callback.
 */
function mouseClicked()
{
    if (iteration === SCENES[currentScene].maxDerivations)
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
 * Scene setup.
 */
function loadScene()
{
    // load scene parameters
    scene = SCENES[currentScene];

    // restart L-system
    lsystem = new LSystem(scene.axiom, scene.ruleset);

    // restart turtle drawer
    turtle = new Turtle(
        scene.x,
        scene.y,
        scene.distance,
        radians(scene.angle),
        scene.decay
    );
}


/**
 * Forward sketch to next scene.
 */
function nextScene()
{
    // get next scene index
    currentScene + 1 === SCENES.length ? currentScene = 0 : currentScene++;

    // setup next scene
    loadScene();

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
    text(`(${currentScene + 1}/${SCENES.length})`, 50, (windowHeight * 0.2))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textFont(chango, LARGE);
    text('Axiom:', 50, (windowHeight * 0.3))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`${SCENES[currentScene].axiom}`, 50, (windowHeight * 0.35))

    fill(ENTRY_COLOR);
    stroke(ENTRY_COLOR);
    textSize(LARGE);
    text('Iteration:', 50, (windowHeight * 0.45))

    fill(INFO_COLOR);
    stroke(INFO_COLOR);
    textSize(MEDIUM);
    text(`(${iteration}/${SCENES[currentScene].maxDerivations})`, 50, (windowHeight * 0.5))

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
    for (let rule in SCENES[currentScene].ruleset)
    {
        fill(INFO_COLOR);
        stroke(INFO_COLOR);
        textSize(MEDIUM);
        text(`${rule}: ${SCENES[currentScene].ruleset[rule]}`, 50, (windowHeight * i));
        i += 0.05;
    }
}
