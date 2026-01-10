const getLangAbbreviation = (lang) => {
    switch (lang) {
        case "en":
            return "English";
        case "ja":
            return "日本語";
        case "ko":
            return "한국어";
        case "zh-Hans":
            return "简体中文";
        case "zh-Hant":
            return "繁體中文";
        case "it":
            return "italiano";
        case "es":
            return "español";
        case "fr":
            return "français";
        case "de":
            return "deutsch";
        case "nl":
            return "Nederlands";
        case "pt":
            return "português";
        default:
            return "Language Error";
    }
}

export default getLangAbbreviation;