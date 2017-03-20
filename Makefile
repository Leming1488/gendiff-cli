#
# Makefile for gendiff
#

install:
	sudo yarn

start:
	npm run babel-node -- 'src/bin/index.js'

publish:
	npm publish

lint:
	npm run eslint

check-types:
	npm run flow
