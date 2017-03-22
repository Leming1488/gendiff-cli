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
	npm test

lint:
	npm run -- eslint src

check-types:
	npm run flow
