const utcToIst = (utcDate) => {
  if (!(utcDate instanceof Date)) {
    utcDate = new Date(utcDate)
  }
  return utcDate
}

export { utcToIst }
