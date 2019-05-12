'use strict';

(function () {
    const distanceMax = 600;
    const distanceMin = 50;
    let currentPosition = 0;
    const obstacleWidth = 50;
    const positions = [];
    const gameNode = document.querySelector('#stage');
    const player = document.querySelector('.player');
    let intervalId;
    for (let i = 0; i < 10; i += 1) {
        const range = distanceMax - distanceMin
        const increment = Math.random() * range + distanceMin;
        const lastPosition = positions[positions.length - 1]
        if (lastPosition === undefined) {
            positions.push(increment);
        } else {
            positions.push(lastPosition + increment);
        }
    }

    console.log(positions)
    positions.forEach(position => {
        const obstacle = document.createElement('div');
        obstacle.classList.add('square');
        obstacle.style.left = position + 'px';
        gameNode.appendChild(obstacle);
    })

    gameNode.addEventListener('click', () => {
        clearInterval(intervalId);
        currentPosition = 0;
        intervalId = setInterval(() => {
            currentPosition = (currentPosition + 10) % 2000;
            gameNode.style.marginLeft = -currentPosition + 'px';
        }, 16)
    })

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            console.log('space');
            player.style.bottom = "200px"

            if (parseInt(player.style.bottom) > 250) {
                player.style.bottom = "250px"
            }
            falling(player)
        }
    })

    let fallingID;
    const falling = (playerNode) => {
        if(parseInt(playerNode.style.bottom) < 10 ) {
            return;
        }
        falling.position = parseInt(playerNode.style.bottom)
      falling.position -= 10
      playerNode.style.bottom = falling.position + 'px'
      requestAnimationFrame(falling.bind(falling, playerNode))
        console.log(playerNode.style.bottom)
    }



})()  