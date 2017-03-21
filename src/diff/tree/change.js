import Base from './base';

export default class Change extends Base {
  constructor(key, value, oldValue) {
    super();
    this.state = 'change';
    this.key = key;
    this.value = value;
    this.oldValue = oldValue;
  }
}
