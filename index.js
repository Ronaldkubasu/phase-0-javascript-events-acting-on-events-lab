// function moving to the right
dodger = document.getElementById('dodger')
function moveDodgerLeft() {
    let left = dodger.style.left
    left = parseInt(left)
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    document.addEventListener("keydown", function (event) {
        if (e.key === "ArrowLeft") {
          moveDodgerLeft();
        }
      });
  }


//   function moving to the left

  function moveDodgerRight() {
    let left = dodger.style.left
    left = parseInt(left)
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (event) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });