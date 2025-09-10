// Mobile number validation for Iranian formats(Note: The Regex has been written by ChatGPT)
export const validateMobileNumber = (mobile: string): boolean => {
  // Remove all spaces and special characters except + and numbers
  const cleanMobile = mobile.replace(/[\s-()]/g, "")

  // Valid formats:
  // 09xxxxxxxxx (11 digits starting with 09)
  // +989xxxxxxxxx (13 digits starting with +989)
  // 00989xxxxxxxxx (13 digits starting with 00989)

  const patterns = [
    /^09\d{9}$/, // 09xxxxxxxxx
    /^\+989\d{9}$/, // +989xxxxxxxxx
    /^00989\d{9}$/, // 00989xxxxxxxxx
  ]

  return patterns.some((pattern) => pattern.test(cleanMobile))
}

export const formatMobileNumber = (mobile: string): string => {
  // Remove all non-digit characters except +
  return mobile.replace(/[^\d+]/g, "")
}
