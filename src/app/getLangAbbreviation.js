const getLangAbbreviation = (lang) => {
    switch (lang) {
        case "en":
            return "en-US";
        case "ja":
            return "ja";
        default:
            return "en-US";
    }
}

export default getLangAbbreviation;