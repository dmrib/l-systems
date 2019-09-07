// Constants and definitions
const CANVAS_SIZE = 800;
const BACKGROUND_COLOR = [98, 139, 143];
let CURRENT_SCENE = 0;
let lsystem;


/**
 * p5.js setup function.
 */
function setup()
{
    createCanvas(windowWidth, windowHeight);
    noLoop();

    scene(CURRENT_SCENE);

    redraw();
}

/**
 * p5.js key pressed callback.
 */
function keyPressed() {
    if (keyCode === RIGHT_ARROW) 
    {
    CURRENT_SCENE + 1 === SCENES.length ? CURRENT_SCENE = 0 : CURRENT_SCENE++;
    scene = SCENES[CURRENT_SCENE];
    lsystem = new LSystem(scene.axiom, scene.ruleset);
    turtle = new Turtle(scene.x, 
                        scene.y,
                        scene.distance, 
                        radians(scene.angle), 
                        scene.decay);

    redraw();
    }
}

/**
 * Scene setup.
 */
function scene()
{
    scene = SCENES[CURRENT_SCENE];
    lsystem = new LSystem(scene.axiom, scene.ruleset);
    turtle = new Turtle(scene.x, 
                        scene.y,
                        scene.distance, 
                        radians(scene.angle), 
                        scene.decay);

    redraw();
}

/**
 * p5.js draw function.
 */
function draw()
{
    background(...BACKGROUND_COLOR);
    turtle.draw(lsystem.buffer.state());
}

/**
 * p5.js mouse clicked callback
 */
function mouseClicked()
{
    lsystem.derivate(lsystem.buffer.flush());
    redraw();
}