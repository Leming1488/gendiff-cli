import program from 'commander';

import genDiff from './';

export default () => {
  program
    .version('0.0.1')
    .arguments('<first_config> <second_config>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .action((firstConfig, secondConfig) => {
      console.log(genDiff(firstConfig, secondConfig));
    })
    .parse(process.argv);
};
