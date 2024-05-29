export const REPORT_MESSAGE = {
  MAX_LENGTH: (type: string, maxLength: number): string => `Max length of ${type} is ${maxLength}`,
  SPECIFIC_LENGTH: (type: string, length: number): string => `Length of ${type} must be ${length}`,
  MIN: (type: string, min: number): string => `Min value of ${type} is ${min}`,
  MAX: (type: string, max: number): string => `Max value of ${type} is ${max}`,
  BETWEEN: (type: string, min: number, max: number): string => `Value of ${type} must be between ${min} and ${max}`,
  IS_NOT_EMPTY: (type: string): string => `${type} is required`,
  INTEGER: (type: string): string => `${type} must be an integer`,
  GREAT_THAN_ZERO: (type: string): string => `${type} must be greater than 0`,
  CREATED_SUCCESSFULLY: 'Created report successfully',
  NOT_FOUND: 'Report not found',
  UPDATED_SUCCESSFULLY: 'Updated report successfully',
  DELETED_SUCCESSFULLY: 'Deleted report successfully',
  START_END_DATE_INVALID: 'Start date time must be less than end date time',
};
