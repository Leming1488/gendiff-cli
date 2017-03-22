import Base from './Base';

export default class New extends Base {
  constructor(key, value) {
    super();
    this.state = 'new';
    this.key = key;
    this.value = value;
  }
}
