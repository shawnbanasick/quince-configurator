const getLangAbbreviation = (lang) => {
    switch (lang) {
        case "en":
            return "en";
        case "ja":
            return "ja";
        case "ko":
            return "ko";
        case "zh-Hans":
            return "zh-Hans";
        case "zh-Hant":
            return "zh-Hant";
        case "it":
            return "it";
        case "es":
            return "es";
        case "fr":
            return "fr";
        case "de":
            return "de";
        case "nl":
            return "nl";
        case "pt":
            return "pt";
        default:
            return "en-US";
    }
}

export default getLangAbbreviation;