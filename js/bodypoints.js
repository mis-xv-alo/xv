document.addEventListener("DOMContentLoaded", function() {
    const numGroups = 100; // Número de grupos de puntos
    const gridSize = Math.ceil(Math.sqrt(numGroups)); 
    const spacingX = window.innerWidth / gridSize;
    const spacingY = document.body.scrollHeight / gridSize;

    for (let i = 0; i < numGroups; i++) {
        let row = Math.floor(i / gridSize);
        let col = i % gridSize;

        let x = col * spacingX + Math.random() * (spacingX / 3);
        let y = row * spacingY + Math.random() * (spacingY / 3);

        let group = document.createElement("div");
        group.classList.add("star-group");
        group.style.left = x + "px";
        group.style.top = y + "px";

        for (let j = 0; j < 1; j++) {
            let star = document.createElement("div");
            star.classList.add("star");

            // 🌟 Tamaño de los puntos más grande (de 5px a 15px)
            let size = Math.random() * 10 + 5; 
            star.style.width = size + "px";
            star.style.height = size + "px";

            // Posición dentro del grupo (más separadas)
            star.style.left = Math.random() * 20 + "px";
            star.style.top = Math.random() * 20 + "px";

            group.appendChild(star);
        }

        document.body.appendChild(group);
    }
});