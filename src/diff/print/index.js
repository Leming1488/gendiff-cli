export default (tree) => {
  const printTree = [...tree].reduce((acc, elem) => {
    switch (elem.state) {
      case 'same':
        return [...acc, `${elem.key}: ${elem.value}`];
      case 'change':
        return [...acc, `+ ${elem.key}: ${elem.value}`, `- ${elem.key}: ${elem.oldValue}`];
      case 'delete':
        return [...acc, `- ${elem.key}: ${elem.value}`];
      case 'new':
        return [...acc, `+ ${elem.key}: ${elem.value}`];
      default:
        return false;
    }
  }, []).join('\n');
  return printTree;
};
