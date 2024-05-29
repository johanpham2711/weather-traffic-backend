import { registerDecorator, ValidationOptions } from 'class-validator';

export const IsMatchPattern = (pattern: string, validationOptions?: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'isValidPattern',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${propertyName} is invalid`,
        ...validationOptions,
      },
      validator: {
        validate(value: string) {
          return typeof value === 'string' && new RegExp(pattern).test(value);
        },
      },
    });
  };
};
