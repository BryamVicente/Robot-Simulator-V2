document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  document.addEventListener("keydown", function(e) {
    // console.log(e.key)
    const uL = document.getElementById("moves-container")
    const newLi = document.createElement("li")

    if (e.key == "ArrowRight") {
      uL.appendChild(newLi)
      newLi.innerHTML = "right"
      
    }else if (e.key == "ArrowLeft") {
      uL.appendChild(newLi)
      newLi.innerHTML = "left" 
  
    }else if (e.key == "ArrowUp") {
      uL.appendChild(newLi)
      newLi.innerHTML = "up" 
  
    }else if (e.key == "ArrowDown") {
      uL.appendChild(newLi)
      newLi.innerHTML = "down" 
  
    }else 
    
    {console.log("Nice Try!")
  }

  })
  const moveButton = document.getElementById("move-button")
  moveButton.addEventListener("click", function(e) {
// console.log("pressed")
    const btParent = moveButton.parentElement
    const moveDirection = btParent.querySelector("li")
    // console.log(moveDirection)
    // console.dir(moveDirection)
    move(moveDirection.innerText)
    moveDirection.remove()
  })



  


})
