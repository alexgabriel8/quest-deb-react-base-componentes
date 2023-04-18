import textToLowerCase from "./text-to-lowercase"

function textToUpperCase(pClicked) {
    const pList = document.querySelectorAll('.paragraph')
    let text = pList[pClicked].innerHTML

    if (text === text.toUpperCase()) {
        text = textToLowerCase(text)
        pList[pClicked].innerHTML = text
        return
    } else {
        text = text.toUpperCase()
        pList[pClicked].innerHTML = text
    }
}

export default textToUpperCase