"use strict";

(function() {
  let fail = false;
  let isFlying = false;
  const obstaclePositions = [];
  const distanceMax = 600;
  const distanceMin = 50;
  const gameNode = document.querySelector("#stage");
  const player = document.querySelector(".player");
  const playerWidth = player.clientWidth;
  let currentPosition = playerWidth;

  let intervalId;
  for (let i = 0; i < 10; i += 1) {
    const range = distanceMax - distanceMin;
    const increment = currentPosition +50 +Math.random() * range + distanceMin;
    const lastPosition = obstaclePositions[obstaclePositions.length - 1];
    if (lastPosition === undefined) {
      obstaclePositions.push(increment);
    } else {
      obstaclePositions.push(lastPosition + increment);
    }

  }

  obstaclePositions.forEach(position => {
    const obstacle = document.createElement("div");
    obstacle.classList.add("square");
    obstacle.style.left = position + "px";
    gameNode.appendChild(obstacle);
  });

  gameNode.addEventListener("click", () => {
    clearInterval(intervalId);
    currentPosition = 0;
    intervalId = setInterval(() => {
      currentPosition = (currentPosition + 10) % 2000;

        obstaclePositions.forEach(obstacle => {
            fail = !isFlying && Math.abs(obstacle - currentPosition) <10  
            if(fail) {
              window.alert('you died')
            }
        })
      gameNode.style.marginLeft = -currentPosition + "px";
    }, 16);
  });

  document.addEventListener("keyup", () => {

    isFlying = true
    player.style.bottom = "200px";

    if (parseInt(player.style.bottom) > 250) {
      player.style.bottom = "250px";
    }
    falling(player);
  });

  let fallingID;
  const falling = playerNode => {
    if (parseInt(playerNode.style.bottom) < 10) {
      return;
    }
    falling.position = parseInt(playerNode.style.bottom);
    falling.position -= 10;
    playerNode.style.bottom = falling.position + "px";
    requestAnimationFrame(falling.bind(falling, playerNode));
    setTimeout(() => {
      isFlying = false
    }, 202);
  };
})();
