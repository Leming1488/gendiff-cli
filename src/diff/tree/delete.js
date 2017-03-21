import Base from './base';

export default class Delete extends Base {
  constructor(key, value) {
    super();
    this.state = 'delete';
    this.key = key;
    this.value = value;
  }
}
