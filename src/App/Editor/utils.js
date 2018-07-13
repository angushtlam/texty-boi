export function getNewLineProperties(line) {
  const {skin} = line
  switch (skin) {
    default:
      return getNewLinePropertiesFromDefault(line)
  }
}

function getNewLinePropertiesFromDefault(line) {
  const {value} = line

  if (value.startsWith('> ')) {
    return {
      ...line,
      skin: 'quote',
    }
  } else if (value.startsWith('## ')) {
    return {
      ...line,
      skin: 'subheader',
    }
  } else if (value.startsWith('# ')) {
    return {
      ...line,
      skin: 'header',
    }
  } else if (value.toUpperCase().startsWith('TODO ')) {
    return {
      ...line,
      skin: 'todo',
    }
  }

  return line
}
