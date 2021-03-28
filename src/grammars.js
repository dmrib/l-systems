const GRAMMARS = [
    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'F-F+F+FF-F-F+F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 600,
        decay: 4,
        x: 600,
        y: 600
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'F+FF-FF-F-F+F+FF-F-F+F+FF+FF-F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 600,
        decay: 4,
        x: 0,
        y: 0
    },

    {
        axiom: 'F',
        ruleset: {
            'F': 'F+F-F-F+F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 8,
        angle: 90,
        distance: 600,
        decay: 2,
        x: 0,
        y: 0
    },

    {
        axiom: 'F+F+F+F',
        ruleset: {
            'F': 'F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF',
            'f': 'ffffff',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 100,
        decay: 2,
        x: 300,
        y: 300
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'FF-F-F-F-F-F+F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 600,
        y: 600
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'FF-F-F-F-FF',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 300,
        y: 300
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'FF-F+F-F-FF',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 5,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 600,
        y: 600
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'FF-F--F-F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 6,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 400,
        y: 400
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'F-FF--F-F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 6,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 600,
        y: 600
    },

    {
        axiom: 'F-F-F-F',
        ruleset: {
            'F': 'F-F+F-F-F',
            '-': '-',
            '+': '+'
        },
        maxDerivations: 6,
        angle: 90,
        distance: 50,
        decay: 2,
        x: 600,
        y: 600
    }
];
