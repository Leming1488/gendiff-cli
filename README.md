# gendiff-cli-utilit
[![Code Climate](https://codeclimate.com/github/Leming1488/gendiff-cli/badges/gpa.svg)](https://codeclimate.com/github/Leming1488/gendiff-cli)
[![Build Status](https://travis-ci.org/Leming1488/gendiff-cli.svg?branch=master)](https://travis-ci.org/Leming1488/gendiff-cli)
[![Issue Count](https://codeclimate.com/github/Leming1488/gendiff-cli/badges/issue_count.svg)](https://codeclimate.com/github/Leming1488/gendiff-cli)
## Install

```
$ npm install gendiff-cli
```


## Usage

```
Usage: gendiff-cli [options] <first_config> <second_config>

   Compares two configuration files and shows a difference.
   
$ gendiff-cli -f plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```
