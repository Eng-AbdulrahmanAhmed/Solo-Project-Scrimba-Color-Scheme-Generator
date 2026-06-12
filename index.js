const button = document.querySelector("#get-scheme-button")
const allColors = document.querySelectorAll(".color")
const allSpans = document.querySelectorAll(".color-code")

button.addEventListener("click" , ()=>{

    const colorDropDownMenuValue = document.querySelector("#color-scheme-dropdown").value
    const color = document.querySelector("#color-input").value
    fetchColor(color , colorDropDownMenuValue)

})

function fetchColor(color , mode) {

    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${mode}`)
    .then(response => response.json())
    .then(data => {
        
        allColors.forEach((div ,index) => {
            div.style.backgroundColor = data.colors[index].hex.value;
        })
        allSpans.forEach((span , index) => {
            span.textContent = data.colors[index].hex.value
        })
    })
}