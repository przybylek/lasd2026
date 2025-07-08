const parse = require('csv-parse/lib/sync')
const fs = require('fs')

export function readCsv(path) {
  const raw = fs.readFileSync(path)

  return parse(raw, { delimiter: ',' })
}
