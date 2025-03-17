import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const CORE_LIB_DIST = path.dirname(require.resolve('@fedimint/core-web'))
const WASM_DIST = path.resolve(
  CORE_LIB_DIST,
  '../node_modules/@fedimint/fedimint-client-wasm',
)

function printErr(err) {
  if (err) return console.log(err)
}

// Copy index.html
fs.copyFile(
  path.resolve('./index.html'),
  path.resolve(DIST_DIR, 'index.html'),
  printErr
)

// Copy style.css
fs.copyFile(
  path.resolve('./style.css'),
  path.resolve(DIST_DIR, 'style.css'),
  printErr
)

// Copy index.js
fs.copyFile(
  path.resolve('./index.js'),
  path.resolve(DIST_DIR, 'index.js'),
  printErr
)

// Copy worker.js
fs.copyFile(
  path.resolve('./worker.js'),
  path.resolve(DIST_DIR, 'worker.js'),
  printErr
)

// Copy fedimint_client_wasm.js
fs.copyFile(
  path.resolve('./fedimint_client_wasm.js'),
  path.resolve(DIST_DIR, 'fedimint_client_wasm.js'),
  printErr
)

// Copy fedimint_client_wasm_bg.js
fs.copyFile(
  path.resolve('./fedimint_client_wasm_bg.wasm'),
  path.resolve(DIST_DIR, 'fedimint_client_wasm_bg.wasm'),
  printErr
)
// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm_bg.wasm'), './fedimint_client_wasm_bg.wasm', printErr)

// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm.js'), './fedimint_client_wasm.js', printErr)
// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm_bg.js'), './fedimint_client_wasm_bg.js', printErr)
