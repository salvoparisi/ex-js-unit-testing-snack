const { getInitial, createSlug } = require("./snacks.js")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitial("Marco")).toBe("M")
    expect(getInitial("luca")).toBe("L")
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("LoWeRcAsE")).toBe("lowercase")
})