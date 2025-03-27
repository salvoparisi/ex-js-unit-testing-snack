function getInitial(name) {
    return name.split('')[0].toUpperCase()
}

function createSlug(str) {
    return str.toLowerCase()
}

module.exports = {
    getInitial,
    createSlug
}