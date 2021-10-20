const input = {
  rawContent: `row1
  row2
  row3
  row1
  row2
  row3`,
  numberOfRows: 3
}

const convertRawContentToRows = function (input) {
  const content = input.rawContent.split('\n')
  const rows = []
  content.forEach((item, index) => {
    if ((index + 1) % input.numberOfRows === 0) {
      rows.push(content.slice(index - (input.numberOfRows - 1), index + 1))
    }
  })

  return rows
}

const rows = convertRawContentToRows(input)

const createDownloadUriFromRows = function (rows) {
  const csv = 'data:text/csv;charset=utf-8,\uFEFF' + rows.join('\r\n')

  return encodeURI(csv)
}

const downloadUri = createDownloadUriFromRows(rows)

console.log(downloadUri)