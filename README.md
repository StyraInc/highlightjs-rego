# highlightjs-rego

[highlight.js](https://highlightjs.org/) syntax highlighting for
[Rego](https://www.openpolicyagent.org/docs/latest/policy-language).

# How to build

1. Clone the highlight.js repository
2. Clone this repository
3. In the `extra` directory of the highlight.js repository, create a symlink to this repository
    ```shell
    ln -s /path/to/highlightjs-rego /path/to/highlight.js/extra/highlightjs-rego
    ```
4. In the root of the highlight.js repository, run:
   ```shell
   node ./tools/build.js -t cdn
   ```
5. You'll now find `rego.min.js` in the `build` directory

More detailed instructions for building 3rd party language support for highlight.js can be found
[here](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md#packaging).
