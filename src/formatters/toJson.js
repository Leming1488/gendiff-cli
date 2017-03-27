export default (tree) => {
  const toJson = (node) => {
    switch (node.type) {
      case 'new':
        return { added: { [node.key]: node.value } };
      case 'delete':
        return { deleted: { [node.key]: node.value } };
      case 'change':
        return { changed: { added: { [node.key]: node.value },
          deleted: { [node.key]: node.oldValue } } };
      case 'same':
        if (node.value instanceof Array) {
          return { [node.key]: node.value
                   .reduce((acc, el) => ({ ...acc, ...toJson(el) }), {}) };
        }
        return { [node.key]: node.value };
      default:
        return { error: 'error' };
    }
  };
  return JSON.stringify([...tree]
                        .reduce((acc, node) => ({ ...acc, ...toJson(node) }), {}),
                        (key, value) => (typeof value === 'number' ? value.toString() : value), 2);
};
