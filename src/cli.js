import program from 'commander';

import genDiff from './';

export default () => {
  program
    .version('0.7.2')
    .arguments('<first_config> <second_config>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .action((firstConfig, secondConfig) => {
      console.log(genDiff(firstConfig, secondConfig, program.format));
    })
    .parse(process.argv);
};
