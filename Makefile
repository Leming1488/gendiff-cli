#
# Makefile for gendiff
#

install:
	sudo yarn

start:
	npm run babel-node -- 'src/bin/gendiff.js'

build:
	sudo rm -rf dist
	sudo npm run build

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
