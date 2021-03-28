/**
 * p5.js sketch.
 */


// colors definition
const BACKGROUND_COLOR = [0, 0, 0];

// define L-system state
let clicks = 1;
let currentScene = 0;
let lsystem;


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
}


/**
 * p5.js draw function.
 */
function draw()
{
    // clean background
    background(...BACKGROUND_COLOR);

    // draw current L-system state
    turtle.draw(lsystem.state);
}


/**
 * p5.js mouse clicked callback.
 */
function mouseClicked()
{
    if (clicks === SCENES[currentScene].maxDerivations)
    {
        nextScene();
        clicks = 0;
    }

    else
        nextDerivation();
        clicks += 1;
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
