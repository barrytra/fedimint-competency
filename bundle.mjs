import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const CORE_LIB_DIST = path.dirname(require.resolve('@fedimint/core-web'))
const WASM_DIST = path.resolve(
  CORE_LIB_DIST,
  '../node_modules/@fedimint/fedimint-client-wasm-bundler',
)

const OUTPUT_DIR = path.resolve(process.cwd(), 'dist')
fs.mkdirSync(OUTPUT_DIR, { recursive: true })

function printErr(err) {
  if (err) return console.log(err)
}

fs.copyFile(
  path.resolve(process.cwd(), 'index.html'),
  path.resolve(OUTPUT_DIR, 'index.html'),
  printErr
)

fs.copyFile(
  path.resolve(CORE_LIB_DIST, 'index.js'),
  path.resolve(OUTPUT_DIR, 'index.js'),
  printErr,
)

fs.copyFile(
  path.resolve(CORE_LIB_DIST, '../src/worker/worker.js'),
  path.resolve(OUTPUT_DIR, 'worker.js'),
  printErr,
)
// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm_bg.wasm'), './fedimint_client_wasm_bg.wasm', printErr)

// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm.js'), './fedimint_client_wasm.js', printErr)
// fs.copyFile(path.resolve(WASM_DIST, 'fedimint_client_wasm_bg.js'), './fedimint_client_wasm_bg.js', printErr)
