#
# Makefile for gendiff
#

install:
	sudo yarn

start:
	npm run babel-node -- 'src/bin/gendiff.js'

build:
	rm -rf dist
	npm run bild

publish:
	npm publish

test:
	sudo npm test

lint:
	npm run eslint --src test

check-types:
	npm run flow
