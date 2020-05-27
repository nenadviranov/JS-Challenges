const validate = (input) => {
    return /^[a-zA-Z]\w*@[\w-]+\.[\w\.]+$/.test(input);
}