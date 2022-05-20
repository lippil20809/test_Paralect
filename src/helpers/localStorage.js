export const getByKey =  (key, defaultValue)  => {
    const data = window.localStorage.getItem(key) || (defaultValue ?? '{}')
    return JSON.parse(data) 
    }

export const setByKey = (key, value) => {
    window.localStorage.setItem(key,JSON.stringify(value))
}    