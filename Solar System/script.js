let earthSpeed = 10;
let moonSpeed = 3;

function updateSpeed() {
    document.getElementById("earthOrbit").style.animationDuration = earthSpeed + "s";
    document.getElementById("moonOrbit").style.animationDuration = moonSpeed + "s";
}

function speedUp() {
    earthSpeed = Math.max(2, earthSpeed - 2);
    moonSpeed = Math.max(1, moonSpeed - 1);
    updateSpeed();
}

function slowDown() {
    earthSpeed += 2;
    moonSpeed += 1;
    updateSpeed();
}

function pauseOrbit() {
    const earth = document.getElementById("earthOrbit");
    const moon = document.getElementById("moonOrbit");

    if (earth.style.animationPlayState === "paused") {
      earth.style.animationPlayState = "running";
      moon.style.animationPlayState = "running";
    } else {
      earth.style.animationPlayState = "paused";
      moon.style.animationPlayState = "paused";
    }
}

updateSpeed();