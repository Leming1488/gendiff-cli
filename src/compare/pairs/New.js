import Base from './Base';

export default class New extends Base {
  constructor(...arg) {
    super(...arg);
    this.state = 'new';
  }
  toString() {
    return `+ ${super.toString()}`;
  }
}
