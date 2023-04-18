function textToLowerCase(text) {
    text = text.toLowerCase()
    const firstLetter = text[0].toUpperCase()
    return text = text.replace(/^\w/, firstLetter)
}


export default textToLowerCase