/* eslint-env node */
'use strict';
const fs = require('fs');
const BroccoliPlugin = require('broccoli-plugin');

module.exports = {
  name: 'wasm-to-asm',

  isDevelopingAddon() {
    return true;
  },

  treeForVendor() {
    // ember/ember.prod.js
    // ember/ember.debug.js
    return new PatchPlugin();
  },

  updateFastBootManifest(manifest) {
    console.log(manifest);
    manifest.appFiles.push('wasm.js');
    return manifest;
  }
};

class PatchPlugin extends BroccoliPlugin {
  constructor() {
    super([]);
  }

  build() {
    let prod = fs.readFileSync('node_modules/ember-source/dist/ember.prod.js', 'utf8');
    let debug = fs.readFileSync('node_modules/ember-source/dist/ember.debug.js', 'utf8');

    try {
      fs.mkdirSync(this.outputPath + '/ember');
    } catch (e) {
    }

    let start = prod.indexOf('var base64 = "');
    let end = prod.indexOf('    function __wbg_lolevelvm_free', start);

    let patch = `
    var memory = void 0;
    var booted = new Promise(resolve => {
      exports.__resolve__ = function (callback) {
        resolve(callback({ './rust': import_b }).then(function (obj) {
          wasm = obj.instance;
          exports.wasmMemory = memory = wasm.exports.memory;
        }));
      };
    });
`

    fs.writeFileSync(this.outputPath + '/ember/ember.prod.js',
      prod.slice(0, start) + patch + prod.slice(end));


    start = debug.indexOf('var base64 = "');
    end = debug.indexOf('    function __wbg_lowlevelvm_free', start);

    fs.writeFileSync(this.outputPath + '/ember/ember.debug.js',
      debug.slice(0, start) + patch + debug.slice(end));
  }
}
