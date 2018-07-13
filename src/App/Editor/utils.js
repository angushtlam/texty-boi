export function getNewLineProperties(line) {
  const newLine = {...line}
  const {value} = newLine

  if (value.startsWith('>')) {
    newLine.skin = 'quote'
  } else if (value.startsWith('##')) {
    newLine.skin = 'subheader'
  } else if (value.startsWith('#')) {
    newLine.skin = 'header'
  } else if (value.length > 1 && value.startsWith('`') && value.endsWith('`')) {
    newLine.skin = 'code'
  } else {
    newLine.skin = null
  }

  return newLine
}
