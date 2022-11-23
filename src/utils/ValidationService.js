class ValidationService {
    isValidInteger(input) {
        return (input == null || input.length === 0 || !Number.isInteger(Number(input)));
    }

    isValidPhoneNumber(input) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return (input == null || input.length === 0 || !re.test(input));
    }

    isValidString(input) {
        return (input == null || input.length === 0 || typeof myVar !== 'string');
    }

}

export default new ValidationService();