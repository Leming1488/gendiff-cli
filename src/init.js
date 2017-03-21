import program from 'commander';

import gendiff from './';

let before;
let after;

export default () => {
  program
    .version('0.0.1')
    .arguments('<first_config> <second_config>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .action((firstConfig, secondConfig) => {
      before = firstConfig;
      after = secondConfig;
    })
    .parse(process.argv);

  gendiff(before, after);
};
