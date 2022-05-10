import platformBg from './img/platform.png';

console.log(platformBg);

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;
let platformsOffset = 0;

const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
};

class Player {
    constructor(x, y, width, height, color) {
        this.position = { x, y }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = width
        this.height = height
        this.color = color
    }    

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if ((this.position.y + this.height + this.velocity.y + gravity) <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

class Platform {
    constructor({x, y, width, height, color = 'blue'}) {
        this.position = {
            x,
            y
        },
        this.width = width,
        this.height = height
        this.color = color;
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player(100, 100, 30, 30, 'red');
const platforms = [new Platform({x: 100, y: 200, width: 200, height: 10}), new Platform({x: 300, y: 500, width: 100, height: 20, color: 'green'})];
const playerSpeed = 5;

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach(platform => {
        platform.draw();
    })
    
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = playerSpeed;
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -playerSpeed;
    } else {
        player.velocity.x = 0;
        if (keys.right.pressed) {
            platformsOffset += playerSpeed;
            platforms.forEach(platform => {
                platform.position.x -= playerSpeed;
            })
        }

        if (keys.left.pressed) {
            platformsOffset -= playerSpeed;
            platforms.forEach(platform => {
                platform.position.x += playerSpeed;
            })
        }
    }
    
    // platform collistion detection
    platforms.forEach(platform => {
        const playerIsAboveOrExactlyOnPlatform = player.position.y + player.height <= platform.position.y;
        const playerRightSideIsFurtherThanPlatformStart = player.position.x + player.width > platform.position.x;
        
        if (playerIsAboveOrExactlyOnPlatform && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            playerRightSideIsFurtherThanPlatformStart &&
            player.position.x < platform.position.x + platform.width) {
            player.velocity.y = 0;
        }
    })

    if (platformsOffset > 1000) {
        console.log('You won!!!')
    }
}

animate();

const KEYCODES = {
    a: 65,
    s: 83,
    d: 68,
    w: 87,
    right: 39,
    left: 37,
    up: 38,
    down: 40
};

window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case KEYCODES.left:
            console.log('move left');
            keys.left.pressed = true;
            break;
        case KEYCODES.down:
            console.log('move down');
            player.velocity.y += 20;
            break;
        case KEYCODES.right:
            console.log('move right');
            keys.right.pressed = true;
            break;
        case KEYCODES.up:
            console.log('move up');
            player.velocity.y -= 40;
            break;
    }
});

window.addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case KEYCODES.left:
            keys.left.pressed = false;
            break;
        case KEYCODES.down:
            player.velocity.y = 0;
            break;
        case KEYCODES.right:
            keys.right.pressed = false;
            break;
    }
});
