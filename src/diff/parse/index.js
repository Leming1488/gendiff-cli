import formats from './formats';

export default (file, data = file.data, ext = file.ext) => formats[ext].parse(data);
