import Base from './Base';
import Delete from './Delete';
import New from './New';

export default class Change extends Base {
  constructor(key, value, oldValue) {
    super(key, value);
    this.oldValue = oldValue;
    this.state = 'delete';
  }
  toString() {
    return `${new New(this.key, this.value).toString()}${new Delete(this.key, this.oldValue).toString()}`;
  }
}
