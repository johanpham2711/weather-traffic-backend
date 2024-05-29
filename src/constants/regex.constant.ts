// Check password contains at least one alphabet letter and one number
export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).+$/;

// Check username not contain numeric
export const NOT_CONTAIN_NUMERIC_REGEX = /^[^0-9]+$/;

// Regex check name just allow alphabet and space
export const NAME_REGEX = /^[a-zA-Z ]+$/;

// Regex check postal code just allow upper case alphabet and number
export const POSTAL_CODE_REGEX = /^[A-Z0-9]+$/;

export const URL_LINK_REGEX =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

export const HEX_COLOR = /^#([0-9a-f]{3}){1,2}$/i;
