/**
 * Let's make a game 🕹
 */

type Position = {x: number, y:number}

const position: Position = { x: 0, y:0 };

type Direction = 'up' | 'down' | 'left' | 'right';



const moving = (direction: Direction) => {
  switch(direction) {
    case 'up':
      position.y += 1
      break
    case 'down':
      position.y -= 1
      break
    case 'left':
      position.x -= 1
      break
    case 'right':
      position.x += 1
      break
    default:
      throw new Error ('Unknown Direction')

  }
}


console.log(position); // { x: 0, y: 0}
moving('up');
console.log(position); // { x: 0, y: 1}
moving('down');
console.log(position); // { x: 0, y: 0}
moving('left');
console.log(position); // { x: -1, y: 0}
moving('right');
console.log(position); // { x: 0, y: 0}
