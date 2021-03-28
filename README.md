# l-systems
Rendering fractals defined as L-systems 🕸

### About

This is a simple implementation of a [L-systems](https://en.wikipedia.org/wiki/L-system) renderer.

Given a ruleset, it will derive axioms and render instructions using a Turtle drawer.

| Rule | Effect                                                |
|------|-------------------------------------------------------|
| F    | Draw a line of `stepSize` and translate to end point. |
| f    | Move to the end point without drawing.                |
| +    | Rotate by `angle`                                     |
| -    | Rotate by -`angle`                                    |

Made when I was reading [The Nature of Code](https://natureofcode.com/).

### Usage

Click anywhere on the screen to advance to next derivation or grammar.

### How to run

Simply run a HTTP server on the repository root.

Or se it live [here](https://dmrib.github.io/l-systems/).
