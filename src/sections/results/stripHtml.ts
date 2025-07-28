const stripHtml = (text) => {
  if (!text) {
    return;
  }
  text = text.replaceAll("{{{b}}}", "");
  text = text.replaceAll("{{{/b}}}", "");
  text = text.replaceAll("{{{i}}}", "");
  text = text.replaceAll("{{{/i}}}", "");
  text = text.replaceAll("{{{u}}}", "");
  text = text.replaceAll("{{{/u}}}", "");
  text = text.replaceAll("{{{mark}}}", "");
  text = text.replaceAll("{{{/mark}}}", "");
  text = text.replaceAll("{{{center}}}", "");
  text = text.replaceAll("{{{/center}}}", "");
  text = text.replaceAll("{{{strong}}}", "");
  text = text.replaceAll("{{{/strong}}}", "");
  text = text.replaceAll(";;;", ", ");
  return text.trim();
};

export { stripHtml };
