
console.log(trackRobot(-10, 20, 10));

function trackRobot(...steps) {
    let x = 0;
    let y = 0;
    let direction = 1;
    for (let i of steps) {
        if (direction == 1) {
            y += i;
        }
        else if (direction == 2) {
            x += i;
        }
        else if (direction == 3) {
            y -= i;
        }
        else {
            x -= i;
        }

        direction++;
        if (direction == 5) {
            direction = 1;

        }
    }
    return [x, y];
}
