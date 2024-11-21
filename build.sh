#!/usr/bin/env bash

set -e

rm -rf build dist

git clone https://github.com/highlightjs/highlight.js.git build/highlight.js
git clone https://github.com/StyraInc/highlightjs-rego.git build/highlightjs-rego

ln -s "${PWD}"/build/highlightjs-rego build/highlight.js/extra/highlightjs-rego

(
    cd build/highlight.js &&
    npm install &&
    node ./tools/build.js -t cdn &&
    cd ../.. &&
    cp -r build/highlightjs-rego/dist ./
)
