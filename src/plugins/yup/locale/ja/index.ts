const mixed = {
    default: '{{path, field}}の入力値が無効です',
    required: '{{path, field}}は必須です',
    defined: '{{path, field}}は定義されている必要があります',
    notNull: '{{path, field}}は必須です',
    oneOf: '{{path, field}}は、以下の値のいずれかを取ることができます: {{values}}',
    notOneOf: '{{path, field}}は、以下の値を取ることはできません: {{values}}',
    notType: '{{path, field}}は必須です',
    notTypeMixed: '{{path, field}}は設定された型と一致する必要があります',
};

const string = {
    length: '{{path, field}}は{{length}}文字で入力してください',
    min: '{{path, field}}は{{min}}文字以上で入力してください',
    max: '{{path, field}}は{{max}}文字以下で入力してください',
    matches:
        '{{path, field}}の長さは、以下のパターンに一致する必要があります: "{{regex}}"',
    email: '{{path, field}}は有効なメールアドレスを入力してください',
    url: '{{path, field}}は有効なURLを入力してください',
    uuid: '{{path, field}}は有効なUUIDを入力してください',
    trim: '{{path, field}}は前後に空白をいれないでください',
    lowercase: '{{path, field}}は小文字で入力してください',
    uppercase: '{{path, field}}は大文字で入力してください',
};

const number = {
    min: '{{path, field}}人数は{{min}}以上の数字を入力してください',
    max: '{{path, field}}は{{max}}以下で入力してください',
    lessThan: '{{path, field}}は{{less}}以下で入力してください',
    moreThan: '{{path, field}}は{{more}}以上で入力してください',
    positive: '{{path, field}}は正の数である必要があります',
    negative: '{{path, field}}は負の数である必要があります',
    integer: '{{path, field}}は整数である必要があります',
};

const date = {
    min: '{{path, field}}は{{min}}より後でなければなりません',
    max: '{{path, field}}は{{max}}より前でなければなりません',
    isBeforeToDay: '{{path, field}}は今日より前でなければなりません',
    isAfterToDay: '{{path, field}}は今日より後でなければなりません',
};

const boolean = {
    isValue: '{{path, field}}は{{value}}である必要があります',
};

const object = {
    require: '{{path, field}}は必須です',
    noUnknown: '{{path, field}}には未指定のキーが含まれています: {{unknown}}',
};

const array = {
    min: '{{path, field}}は{{min}}個以下でアイテムを入力してください',
    max: '{{path, field}}は{{max}}個以下でアイテムを入力してください',
    length: '{{path, field}}は{{length}}個のアイテムを入力してください',
};

export const localeJa = {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
};
