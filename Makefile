CWD=$(shell pwd)
BIN:=./node_modules/.bin

.PHONY: build test tdd

build:
	@docker build \
		-t schema-image \
		.

publish:
	-@docker rm -f schema-container 2> /dev/null || true
	@docker run --rm -it \
		--name schema-container \
		-v $(CWD)/src/package.json:/usr/src/package.json \
		-v $(CWD)/src/.npmignore:/usr/src/.npmignore \
		-v $(CWD)/src/lib:/usr/src/lib \
		schema-image \
		/bin/sh -c 'echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && npm publish'

test:
	-@docker rm -f schema-container 2> /dev/null || true
	@docker run --rm -it \
		--name schema-container \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		schema-image

tdd:
	-@docker rm -f schema-container 2> /dev/null || true
	@docker run --rm -it \
		--name schema-container \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		schema-image \
		$(BIN)/nodemon \
			--quiet \
			--watch ./ \
			--delay 250ms \
			-x '$(BIN)/standard && $(BIN)/mocha test/*.js || exit 1'
