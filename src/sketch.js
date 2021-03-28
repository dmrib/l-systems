/**
 * p5.js sketch.
 */


// colors definition
const BACKGROUND_COLOR = [98, 139, 143];

// define L-system state
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
    turtle.draw(lsystem.buffer.state());
}


/**
 * p5.js key pressed callback.
 */
function keyPressed()
{
    // right arrow is pressed: move to next scene
    if (keyCode === RIGHT_ARROW)
    {
        // get next scene index
        currentScene + 1 === SCENES.length ? currentScene = 0 : currentScene++;

        // setup next scene
        loadScene();

        // call p5.js drawing function
        redraw();
    }
}


/**
 * p5.js mouse clicked callback.
 */
function mouseClicked()
{
    // derivate next L-system state
    lsystem.derive();

    // call p5.js drawing function
    redraw();
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
