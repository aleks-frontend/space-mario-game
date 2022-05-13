import bodyBg from '../img/background.png';
import hillsBg from '../img/hills.png';
import platformBg from '../img/platform.png';
import platformSmallTallBg from '../img/platformSmallTall.png';
import spriteStandRight from '../img/spriteStandRight.png';
import spriteStandLeft from '../img/spriteStandLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteEnemyWalkRight from '../img/enemy-walk-right.png';
import spriteEnemyWalkLeft from '../img/enemy-walk-left.png';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 578;

const gravity = 1.5;
let platformsOffset;
let lastKey;

const createImage = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;

  return image;
};

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
        this.speed = 10
        this.position = { x, y }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = width
        this.height = height
        this.color = color
        this.frame = 0
        this.sprites = {
          stand: {
            left: createImage(spriteStandLeft),
            right: createImage(spriteStandRight),
            cropWidth: 177,
            width: 39
          },
          run: {
            left: createImage(spriteRunLeft),
            right: createImage(spriteRunRight),
            cropWidth: 341,
            width: 76.725
          }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = this.sprites.stand.cropWidth
        this.currentWidth = this.sprites.stand.width
    }    

    draw() {
        c.drawImage(
          this.currentSprite,
          this.frame * this.currentCropWidth,
          0,
          this.currentCropWidth,
          400,
          this.position.x,
          this.position.y,
          this.currentWidth,
          this.height
        )
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.frame = this.frame < 29 ? (this.frame + 1) : 0;

        if ((this.position.y + this.height + this.velocity.y + gravity) <= canvas.height) {
            this.velocity.y += gravity;
        }
    }
}

class Enemy {
  constructor(x, y, width, height, color, range) {
      this.speed = 10
      this.position = { x, y }
      this.velocity = {
          x: 5,
          y: 0
      }
      this.sprites = {
        walk: {
          left: createImage(spriteEnemyWalkLeft),
          right: createImage(spriteEnemyWalkRight),
          cropWidth: 27,
        }
      }
      this.initialPosition = x
      this.width = width
      this.height = height
      this.color = color
      this.range = range
      this.frame = 0
      this.currentDirection = 'right'
      this.currentSprite = this.sprites.walk.right
      this.currentCropWidth = this.sprites.walk.cropWidth
      this.currentWidth = this.width
  }    

  draw() {
      c.drawImage(
        this.currentSprite,
        this.frame * this.currentCropWidth,
        0,
        this.currentCropWidth,
        24,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
  }

  update() {
      this.draw();
      this.position.x += this.velocity.x

      this.frame = this.frame < 3 ? (this.frame + 1) : 0;

      if ((this.position.y + this.height + this.velocity.y + gravity) <= canvas.height) {
          this.velocity.y += gravity;
      }
  }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y,
            image
        },
        this.image = image
        this.width = image.width,
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericImage {
  constructor({x, y, image}) {
      this.position = {
          x,
          y,
          image
      },
      this.image = image
      this.width = image.width,
      this.height = image.height
  }

  draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const platformImage = createImage(platformBg);
const platformSmallTallImage = createImage(platformSmallTallBg);

const floorPlatformYPos = canvas.height - platformImage.height;
let player;
let enemies;
let platforms;
let genericImages;
let winLocation;

const init = () => {
  winLocation = platformImage.width * 4 + 500;
  player = new Player(100, 100, 76, 90, 'red');
  enemies = [
    new Enemy(200, floorPlatformYPos - 44.4, 50, 44.4, 'red', 900), 
    new Enemy(1300, floorPlatformYPos - 61.6, 70, 61.6, 'blue', 600),
    new Enemy(winLocation, floorPlatformYPos - 61.6, 70, 61.6, '#bada55', 500),
  ];
  platformsOffset = 0;
  platforms = [
    new Platform({x: -1, y: floorPlatformYPos, image: platformImage}), 
    new Platform({x: platformImage.width * 4 + 98 - platformSmallTallImage.width, y: 250, image: platformSmallTallImage}),
    new Platform({x: platformImage.width - 3, y: floorPlatformYPos, image: platformImage}),
    new Platform({x: platformImage.width * 2 + 100, y: floorPlatformYPos, image: platformImage}),
    new Platform({x: platformImage.width * 3 + 98, y: floorPlatformYPos, image: platformImage}),
    new Platform({x: winLocation, y: floorPlatformYPos, image: platformImage}),
  ];
  genericImages = [
    new GenericImage({
      x: -1,
      y: -1,
      image: createImage(bodyBg)
    }),
    new GenericImage({
      x: -1,
      y: -1,
      image: createImage(hillsBg)
    })
  ];
}

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    genericImages.forEach(genericImage => {
      genericImage.draw();
    });
    platforms.forEach(platform => {
      platform.draw();
    })
    player.update();
    enemies.forEach(enemy => enemy.update());
    
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && platformsOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0;
        if (keys.right.pressed) {
            platformsOffset += player.speed;
            platforms.forEach(platform => {
                platform.position.x -= player.speed;
            });

            genericImages.forEach(genericImage => {
              genericImage.position.x -= player.speed * 0.66;
            });

            enemies.forEach(enemy => enemy.position.x -= player.speed);
        }

        if (keys.left.pressed && platformsOffset > 0) {
            platformsOffset -= player.speed;
            platforms.forEach(platform => {
                platform.position.x += player.speed;
            });

            genericImages.forEach(genericImage => {
              genericImage.position.x += player.speed * 0.66;
            });

            enemies.forEach(enemy => enemy.position.x += player.speed);
        }
    }
    
    // enemy movement
    enemies.forEach(enemy => {
      if (enemy.currentDirection === 'right' && (enemy.position.x + platformsOffset) > (enemy.initialPosition + enemy.range)) {
        enemy.currentDirection = 'left';
        enemy.currentSprite = enemy.sprites.walk.left;
        enemy.velocity.x = -5;
      } else if (enemy.currentDirection === 'left' && (enemy.position.x + platformsOffset) < enemy.initialPosition) {
        enemy.currentDirection = 'right';
        enemy.currentSprite = enemy.sprites.walk.right;
        enemy.velocity.x = 5;
      }
    });

    // enemy collision detection
    // clean up the enemy position logic + detect when player landed on enemy and kill the enemy!
    enemies.forEach(enemy => {
      if (((player.position.x + player.width) > enemy.position.x) &&
        (player.position.x) < (enemy.position.x + enemy.width) &&
          (player.position.y + player.height) > enemy.position.y) {
        init();
      }
    })
    
    // platform collision detection
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

    // sprite toggling ?
    if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth
      player.currentWidth = player.sprites.run.width
      player.frames = 1;
    } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth
      player.currentWidth = player.sprites.run.width
      player.frames = 1;
    } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth
      player.currentWidth = player.sprites.stand.width
      player.frames = 1;
    } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth
      player.currentWidth = player.sprites.stand.width
      player.frames = 1;
    }

    // Win condition
    if (platformsOffset > winLocation - 400) {
        console.log('You won!!!')
    }

    // Lose condition
    if (player.position.y > canvas.height) {
      init();
    }
}

init();
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
            keys.left.pressed = true;
            lastKey = 'left';
            
            break;
        case KEYCODES.down:
            player.velocity.y += 0;
            break;
        case KEYCODES.right:
            keys.right.pressed = true;
            lastKey = 'right';
            
            break;
        case KEYCODES.up:
            if (player.velocity.y === 0) {
              player.velocity.y -= 30;
            }
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
