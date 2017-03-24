import INI from 'ini';
import YAML from 'yamljs';

const formats = {
  ini: INI,
  yaml: YAML,
  yml: YAML,
  json: JSON,
};

export default (file, data = file.data, ext = file.ext) => formats[ext].parse(data);
