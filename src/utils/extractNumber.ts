export const extractPhoneNumberFromCsv = async (
  file: File
): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const lines = reader.result?.toString().split('\n') || []
      const phoneNumbers: string[] = []

      for (const line of lines) {
        const indianPhoneNumberRegex = /^\d{10}$/

        const phoneNumber = line.trim().split(',')[0]
        if (phoneNumber && indianPhoneNumberRegex.test(phoneNumber)) {
          phoneNumbers.push(phoneNumber)
        }
      }
      resolve(phoneNumbers)
    }
    reader.onerror = () => {
      reject(new Error('Error in reading the csv file'))
    }
    reader.readAsText(file)
  })
}
