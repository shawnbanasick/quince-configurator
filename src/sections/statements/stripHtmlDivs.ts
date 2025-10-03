const stripHtmlDivs = (string) => {
  try {
    if (true) {
      const replaceOpenDiv = /{{{div}}}{{{div}}}/gi;
      const replaceRegOpenDiv = /<div>/gi;
      const replaceCloseDiv = /{{{\/div}}}{{{\/div}}}/gi;
      const replaceRegCloseDiv = /<\/div>/gi;
      const stringText2 = string.replace(replaceOpenDiv, "");
      const stringText3 = stringText2.replace(replaceCloseDiv, "");
      const stringText4 = stringText3.replace(replaceRegOpenDiv, "");
      const stringText5 = stringText4.replace(replaceRegCloseDiv, "");
      return stringText5;
    } else {
      return string;
    }
  } catch (error) {
    console.log("There was an error decoding into HTML");
    console.error(error);
  }
};

export { stripHtmlDivs };
