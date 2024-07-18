const utcToIst = (utcDate) => {
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000)
  return istDate
}

export { utcToIst }
