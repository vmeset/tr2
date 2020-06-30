export const required = (value) => {
    if(value) return ""
    return "required field"
}

export const maxLength = (max) => (value) => {
    if (value.length > max) return `No more ${max} symbols`
    return ""
}