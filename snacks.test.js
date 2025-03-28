const { getInitial, createSlug, avarange, isPalindrome, findPostById } = require("./snacks.js")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitial("Marco")).toBe("M")
    expect(getInitial("luca")).toBe("L")
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("LoWeRcAsE")).toBe("lowercase")
})

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(avarange([1, 2, 3, 4, 5])).toBe(3)
})

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Create Slug")).toBe("create-slug")
})

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Ciao")).toBeFalsy()
    expect(isPalindrome("Osso")).toBeTruthy()
})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow(Error)
})

const posts = [
    {
        id: 1,
        title: "Come imparare JavaScript velocemente",
        content: "Ecco alcuni consigli per imparare JavaScript in modo rapido ed efficace...",
        author: "Mario Rossi",
        date: "2025-03-28"
    },
    {
        id: 2,
        title: "I migliori framework per il web nel 2025",
        content: "React, Vue e Svelte dominano ancora il panorama dei framework web...",
        author: "Luca Bianchi",
        date: "2025-03-27"
    },
    {
        id: 3,
        title: "Guida completa a Node.js",
        content: "Scopri come usare Node.js per creare applicazioni scalabili e veloci...",
        author: "Giulia Verdi",
        date: "2025-03-26"
    }
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toBe(posts[1])
})
