document.getElementById("touchBtn").addEventListener("click", function() {
    // disable the button
    document.getElementById("touchBtn").disabled = true;
    // Update the touch count
    let touchCount = parseInt(document.getElementById("numTouch").textContent);
    touchCount++;
    document.getElementById("numTouch").innerText = `${touchCount}`;
    const handImage = document.getElementById("handImage");
    handImage.classList.add("active");

    // Remove the "active" class after the animation completes
    handImage.addEventListener("animationend", function() {
        handImage.classList.remove("active");
        // Re-enable the button
        document.getElementById("touchBtn").disabled = false;
    });
});