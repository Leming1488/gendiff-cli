import Base from './Base';

export default class Same extends Base {
  constructor(key, value) {
    super();
    this.state = 'same';
    this.key = key;
    this.value = value;
  }
}
