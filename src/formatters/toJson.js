export default (tree) => {
  const toJson = (node) => {
    switch (node.type) {
      case 'new':
        return { add: { [node.key]: node.value } };
      case 'delete':
        return { delete: { [node.key]: node.value } };
      case 'change':
        return { change: { add: { [node.key]: node.value },
          delete: { [node.key]: node.oldValue } } };
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
