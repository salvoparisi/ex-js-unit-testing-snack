function getInitial(name) {
    return name.split('')[0].toUpperCase()
}

function createSlug(str) {
    return str.toLowerCase().replace(/\s/, "-")
}

function avarange(arr) {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

module.exports = {
    getInitial,
    createSlug,
    avarange
}