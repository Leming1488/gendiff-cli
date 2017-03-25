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
	sudo npm publish

test-watch:
	sudo npm test -- --watch

test:
	npm test

lint:
	npm run -- eslint 

check-types:
	npm run flow
