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
      return "Italiano";
    case "es":
      return "Español";
    case "fr":
      return "Français";
    case "de":
      return "Deutsch";
    case "nl":
      return "Nederlands";
    case "pt":
      return "Português";
    default:
      return "Language Error";
  }
};

export default getLangAbbreviation;
