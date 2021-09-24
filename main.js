/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*==================== DARK THEME ====================*/

const img = document.getElementById("white");
const icon = document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src = "sun.png";
        white.src ="CP_dark@2x.png"
    }
    else
    {
        icon.src = "moon.png";
        white.src ="CP_white@2x.png"
    }
}