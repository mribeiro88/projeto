function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {

    } else {
        img.setAttribute("src", "./assents/avatar.png")
    }
}