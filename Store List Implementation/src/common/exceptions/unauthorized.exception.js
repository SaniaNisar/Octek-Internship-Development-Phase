class UnauthorizedException extends Error {
    constructor() {
        super("Authorization error");
    }
}

export default UnauthorizedException;
