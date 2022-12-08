
let nappi = document.querySelector("button")
let size = 50

nappi.style.width = size + "px"
nappi.style.height = size + "px"

nappi.addEventListener("mouseover", changeLanguage)
nappi.addEventListener("mouseout", changeDefault)
nappi.addEventListener("click", growSize)

function changeLanguage(event){
    event.preventDefault();
    nappi.textContent = "Click"
}

function changeDefault(event){
    event.preventDefault(event)
    nappi.textContent = "Paina"
}

function growSize(event){
    event.preventDefault(event)
    size += 10
    nappi.style.width = size + "px"
    nappi.style.height = size + "px"
}

