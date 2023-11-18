/* 
document.addEventListener("DOMContentLoaded" ,function() {
    const colorList = document.getElementById("colorList");
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton")
    const storedColors = []; 

    addButton.addEventListener("click", addColor);
    removeButton.addEventListener("click", removeColor);

    function addColor(){
        const userColor = prompt("Ange en HTML-färg:");
        const rainBow = document.getElementById("rainBow");
        rainBow.textContent=userColor;
        
        if(userColor !== null && userColor !== ""){
            const colorItem =document.createElement("div");
            colorItem.className = "colorItem";
            colorItem.style.backgroundColor = userColor;
            colorItem.textContent = userColor;
            colorList.appendChild(colorItem);

           

            storedColors.push(userColor);
            updateButtonColors();
        }
    }

    const colorContainer = documnet.createElement("div");
    colorList.appendChild(colorContainer );

    function removeColor (){
        const lastItem = colorList.lastElementChild;
        if (lastItem) {
            colorList.removeChild(lastItem);

            storedColors.pop();
            updateButtonColors();
        }
    }
    function updateButtonColors() {
        // Sätt färgen på knapparna till den senaste färgen i arrayen
        const lastColor = storedColors[storedColors.length -1];
        addButton.style.backgroundColor = lastColor;
        
    }

});  */



document.addEventListener("DOMContentLoaded", function () {
    const colorList = document.getElementById("colorList");
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");
    const storedColors = [];
  
    addButton.addEventListener("click", addColor);
    removeButton.addEventListener("click", removeColor);
  
    function addColor() {
      const userColor = prompt("Ange en HTML-färg:");
      const rainBow = document.getElementById("rainBow");
      rainBow.textContent = userColor;
  
      if (userColor !== null && userColor !== "") {
        const colorItem = document.createElement("div");
        colorItem.className = "colorItem";
        colorItem.style.backgroundColor = userColor;
        colorItem.textContent = userColor;
        colorList.appendChild(colorItem);
  
        storedColors.push(userColor);
        updateButtonColors();
      }
    }
  
    const colorContainer = document.createElement("div");
    colorList.appendChild(colorContainer);
  
    function removeColor() {
      const lastItem = colorList.lastElementChild;
      if (lastItem) {
        colorList.removeChild(lastItem);
  
        storedColors.pop();
        updateButtonColors();
      }
    }
  
    function updateButtonColors() {
      // Sätt färgen på knapparna till den senaste färgen i arrayen
      const lastColor = storedColors[storedColors.length - 1];
      addButton.style.backgroundColor = lastColor;
      rainBow.textContent = lastColor;
      /* removeButton.style.backgroundColor = lastColor; */
    }
  });
  

