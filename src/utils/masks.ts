function maskPhone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
    return value;
}



function removeMask(value:string) {
    const phone = value.replace(/[^a-z0-9]/gi,'');

    return parseInt(phone)
    
}

export { maskPhone, removeMask };