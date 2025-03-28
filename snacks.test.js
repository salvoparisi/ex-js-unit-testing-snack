const { getInitial, createSlug, avarange } = require("./snacks.js")

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

