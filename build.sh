#!/usr/bin/env bash

set -e

rm -rf build dist

git clone https://github.com/highlightjs/highlight.js.git build/highlight.js
git clone "${PWD}" build/highlightjs-rego

ln -s "${PWD}"/build/highlightjs-rego build/highlight.js/extra/highlightjs-rego

cd build/highlight.js
npm ci
node ./tools/build.js -t cdn
cd ../..
cp -r build/highlightjs-rego/dist ./
