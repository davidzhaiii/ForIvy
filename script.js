function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // Set button position to absolute
        noButton.style.position = "absolute";

        // Change image source to "gun.gif"
        document.getElementsByClassName("image")[0].src = "static/images/gun.gif";

        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Update text content and hide name message
        document.getElementById("question").textContent =
            "Huh, you thought you could say no to me??";
        document.getElementById("name").style.display = "none";

        // Enlarge the "Yes" button and its text by 25%
        const yesButton = document.getElementById("yesButton");
        const currentWidth = parseFloat(getComputedStyle(yesButton).width);
        const currentHeight = parseFloat(getComputedStyle(yesButton).height);
        const newWidth = currentWidth * 1.25; // Enlarge width by 25%
        const newHeight = currentHeight * 1.25; // Enlarge height by 25%
        const currentFontSize = parseFloat(getComputedStyle(yesButton).fontSize);
        const newFontSize = currentFontSize * 1.25; // Enlarge font size by 25%
        yesButton.style.width = newWidth + "px";
        yesButton.style.height = newHeight + "px";
        yesButton.style.fontSize = newFontSize + "px";
    }

    if (response === "Yes") {
        // Remove name message and no/yes button
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();
        document.getElementById("yesButton").remove();
    
        // Update text content, show message, and change image source to "dance.gif"
        const yesMessage = document.getElementById("yes-message");
        yesMessage.textContent = "YAY! See you on the 14th baby.";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        yesMessage.innerHTML += '<p>\n</p>';
        yesMessage.innerHTML += '<a href="yay.html">Some photos I love.</a>';
        document.getElementsByClassName("image")[0].src = "static/images/dance.gif";
    }
}
