#
# Makefile for gendiff
#

install:
	sudo yarn

start:
	npm run babel-node -- 'src/bin/gendiff.js'

publish:
	npm publish

test:
	npm test

lint:
	npm run eslint --src test

check-types:
	npm run flow
