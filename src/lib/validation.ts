// Mobile number validation for Iranian formats(Note: The Regex has been written by ChatGPT)

export type ValidationResult = {
  isValid: boolean;
  error?: string;
  formattedNumber?: string;
};

export const validateMobileNumber = (mobile: string): ValidationResult => {
  // Remove all spaces and special characters except + and numbers
  const cleanMobile = mobile.replace(/[\s-()]/g, "");

  // Check if empty
  if (!cleanMobile.trim()) {
    return {
      isValid: false,
      error: "Mobile number is required",
    };
  }

  // Check if contains only digits and + (basic format check)
  if (!/^[\d+]+$/.test(cleanMobile)) {
    return {
      isValid: false,
      error: "Mobile number can only contain digits and + symbol",
    };
  }

  // Check if starts with + but not +989
  if (cleanMobile.startsWith("+") && !cleanMobile.startsWith("+989")) {
    return {
      isValid: false,
      error: "For international format, use +989xxxxxxxxx",
    };
  }

  // Check if starts with 00 but not 00989
  if (cleanMobile.startsWith("00") && !cleanMobile.startsWith("00989")) {
    return {
      isValid: false,
      error: "For international format, use 00989xxxxxxxxx",
    };
  }

  // Check if starts with 0 but not 09
  if (cleanMobile.startsWith("0") && !cleanMobile.startsWith("09")) {
    return {
      isValid: false,
      error: "Mobile number must start with 09",
    };
  }

  // Valid formats:
  // 09xxxxxxxxx (11 digits starting with 09)
  // +989xxxxxxxxx (13 digits starting with +989)
  // 00989xxxxxxxxx (13 digits starting with 00989)

  const patterns = [
    { pattern: /^09\d{9}$/, format: "09xxxxxxxxx" }, // 09xxxxxxxxx
    { pattern: /^\+989\d{9}$/, format: "+989xxxxxxxxx" }, // +989xxxxxxxxx
    { pattern: /^00989\d{9}$/, format: "00989xxxxxxxxx" }, // 00989xxxxxxxxx
  ];

  const validPattern = patterns.find(({ pattern }) =>
    pattern.test(cleanMobile)
  );

  if (validPattern) {
    return {
      isValid: true,
      formattedNumber: cleanMobile,
    };
  }

  // Determine specific error based on input
  if (cleanMobile.startsWith("09")) {
    if (cleanMobile.length < 11) {
      return {
        isValid: false,
        error: `Mobile number is too short. Expected 11 digits, got ${cleanMobile.length}`,
      };
    }
    if (cleanMobile.length > 11) {
      return {
        isValid: false,
        error: `Mobile number is too long. Expected 11 digits, got ${cleanMobile.length}`,
      };
    }
    return {
      isValid: false,
      error: "Invalid mobile number format. Please check your input",
    };
  }

  if (cleanMobile.startsWith("+989") || cleanMobile.startsWith("00989")) {
    if (cleanMobile.length < 13) {
      return {
        isValid: false,
        error: `Mobile number is too short. Expected 13 digits, got ${cleanMobile.length}`,
      };
    }
    if (cleanMobile.length > 13) {
      return {
        isValid: false,
        error: `Mobile number is too long. Expected 13 digits, got ${cleanMobile.length}`,
      };
    }
    return {
      isValid: false,
      error: "Invalid mobile number format. Please check your input",
    };
  }

  // Generic error for unrecognized format
  return {
    isValid: false,
    error:
      "Please use one of these formats: 09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx",
  };
};

export const formatMobileNumber = (mobile: string): string => {
  // Remove all non-digit characters except +
  return mobile.replace(/[^\d+]/g, "");
};

export const getValidationHint = (mobile: string): string => {
  const cleanMobile = mobile.replace(/[\s-()]/g, "");

  if (!cleanMobile) return "Enter your mobile number";

  const getRemainingDigits = (expected: number) => {
    const remaining = expected - cleanMobile.length;
    return remaining > 0 ? `${remaining} more digits needed` : "Valid format";
  };

  if (cleanMobile.startsWith("09")) return getRemainingDigits(11);
  if (cleanMobile.startsWith("+989") || cleanMobile.startsWith("00989"))
    return getRemainingDigits(13);

  return "Start with 09, +989, or 00989";
};
