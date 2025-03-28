function getInitial(name) {
    return name.split('')[0].toUpperCase()
}

function createSlug(str) {
    if (str.length === 0) {
        throw new Error("La parola è vuota")
    } else {
        return str.toLowerCase().replace(/\s/, "-")
    }
}

function avarange(arr) {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

function isPalindrome(str) {
    if (str.toLowerCase() === str.split('').reverse().join('').toLowerCase()) {
        return true
    } else {
        return false
    }
}

function findPostById(arr, id) {
    return arr.find(obj => obj.id === id)
}

module.exports = {
    getInitial,
    createSlug,
    avarange,
    isPalindrome,
    findPostById
}