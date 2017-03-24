import indent from 'indent-string';

export default class Base {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.state = '';
  }
  toString(indentCount = 0) {
    if (this.value instanceof Set) {
      return `${indent(this.key, 4)}: {\n${[...this.value].reduce((acc, el) => [...acc, `${indent(el.toString(2), 4)}`], []).join('')}${indent('}\n', 4)}`;
    }
    if (typeof this.value === 'object') {
      console.log(indentCount);
      const obj = this.value;
      return `${indent(this.state, 4 - indentCount)} ${this.key}: {\n${Object.keys(obj).reduce((acc, key) => [...acc, indent(`${key}: ${obj[key]}\n`, 8)], []).join('')}${indent('}\n', 4)}`;
    }
    return indent(`${this.state} ${this.key}: ${this.value}\n`, 2);
  }
}
