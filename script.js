function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")


    // grab img tag
    const img = document.querySelector("#profile img")

    // replace image
    if (html.classList.contains("light")) {
        // if on light mode, add light image
        img.setAttribute("src", "./assets/profile-light.png")
        img.setAttribute("alt", "Personagem de capacete no fundo vermelho")
    } else {
        // if not on light mode, keep regular image
        img.setAttribute("src", "./assets/profile-dark.png")
        img.setAttribute("alt", "Personagem com capacete sobre um fundo rosa")
    }
}