import Ini from 'ini';
import Yaml from 'yamljs';

const formats = {
  '.ini': Ini,
  '.yaml': Yaml,
  '.yml': Yaml,
  '.json': JSON,
};

export default data => formats[data.ext].parse(data.body);
