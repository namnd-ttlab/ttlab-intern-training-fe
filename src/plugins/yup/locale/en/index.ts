const mixed = {
    default: '{{path, field}} is invalid',
    required: '{{path, field}} is a required field',
    defined: '{{path, field}} must be defined',
    notNull: '{{path, field}} cannot be null',
    oneOf: '{{path, field}} must be one of the following values: {{values}}',
    notOneOf: '{{path, field}} must not be one of the following values: {{values}}',
    notType: '{{path, field}} must be a {{type}} type',
    notTypeMixed: '{{path, field}} must match the configured type',
};

const string = {
    length: '{{path, field}} must be exactly {{length}} characters',
    min: '{{path, field}} must be at least {{min}} characters',
    max: '{{path, field}} must be at most {{max}} characters',
    matches: '{{path, field}} must match the following: "{{regex}}"',
    email: '{{path, field}} must be a valid email',
    url: '{{path, field}} must be a valid URL',
    uuid: '{{path, field}} must be a valid UUID',
    trim: '{{path, field}} must be a trimmed string',
    lowercase: '{{path, field}} must be a lowercase string',
    uppercase: '{{path, field}} must be a upper case string',
};

const number = {
    min: '{{path, field}} must be greater than or equal to {{min}}',
    max: '{{path, field}} must be less than or equal to {{max}}',
    lessThan: '{{path, field}} must be less than {{less}}',
    moreThan: '{{path, field}} must be greater than {{more}}',
    positive: '{{path, field}} must be a positive number',
    negative: '{{path, field}} must be a negative number',
    integer: '{{path, field}} must be an integer',
};

const date = {
    min: '{{path, field}} field must be later than {{min}}',
    max: '{{path, field}} field must be at earlier than {{max}}',
};

const boolean = {
    isValue: '{{path, field}} field must be {{value}}',
};

const object = {
    noUnknown: '{{path, field}} field has unspecified keys: {{unknown}}',
};

const array = {
    min: '{{path, field}} field must have at least {{min}} items',
    max: '{{path, field}} field must have less than or equal to {{max}} items',
    length: '{{path, field}} must have {{length}} items',
};

export const localeEn = {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
};
