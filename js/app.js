let buttonCount = 0;

document.getElementById("createButton").addEventListener("click", function () {
    buttonCount++;
    const newButton = document.createElement("button");
    newButton.innerText = "Button " + buttonCount;
    document.getElementById("buttonContainer").appendChild(newButton);
});

