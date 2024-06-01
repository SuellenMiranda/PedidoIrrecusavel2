function fadeOutEffect() {
  var body = document.getElementsByTagName("body")[0];
  var fadeOut = setInterval(function () {
    if (!body.style.opacity) {
      body.style.opacity = 1;
    }
    if (body.style.opacity > 0) {
      body.style.opacity -= 0.1;
    } else {
      clearInterval(fadeOut);
      window.location.href = "app";
    }
  }, 200);
}

setTimeout(function(){
    fadeOutEffect();
}, 3000);

var moveButton = document.querySelector("button:nth-child(2)");

  var correctlyButton = document.querySelector("button:first-child");

  moveButton.addEventListener("click", function () {
    var vertical = Math.floor(Math.random() * 400);
    var horizontal = Math.floor(Math.random() * 400);
    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
    console.log('opa, desviei...');
  });

  correctlyButton.addEventListener("click", function () {
    alert("Resposta correta! Vamo comer um empadão");
    window.open('https://www.youtube.com/watch?v=izGwDsrQ1eQ','_blank');
  });