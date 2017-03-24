export default tree => [...tree].reduce((acc, pair) => [...acc, `${pair}`], []).join('');
