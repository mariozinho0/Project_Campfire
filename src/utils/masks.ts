function maskPhone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
    return value;
}

export { maskPhone };