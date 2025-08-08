const formatRawStatements = (currentStatements) => {
  let array = currentStatements.split("\n");
  array = array.filter((element) => element);
  return array;
};

export { formatRawStatements };
