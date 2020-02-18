function showInfo() {
    //side menu active 
    document.querySelector(".info").classList.add("active")
    document.querySelector(".tech").classList.remove("active")
    //hide aboutTech 
    document.querySelector(".aboutTech").classList.add("hide")
    document.querySelector(".aboutTech").classList.remove("show")
    //show aboutInfo 
    document.querySelector(".aboutInfo").classList.remove("hide")
    document.querySelector(".aboutInfo").classList.add("show")
}
function showTech() {
    //side menu active 
    document.querySelector(".tech").classList.add("active")
    document.querySelector(".info").classList.remove("active")
    //hide aboutInfo
    document.querySelector(".aboutInfo").classList.add("hide")
    document.querySelector(".aboutInfo").classList.remove("show")
    //show aboutTech
    document.querySelector(".aboutTech").classList.remove("hide")
    document.querySelector(".aboutTech").classList.add("show")
}

export { showInfo, showTech }