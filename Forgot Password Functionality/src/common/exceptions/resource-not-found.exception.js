class ResourceNotFoundException extends Error {
    constructor() {
        super("Resource not found");
    }
}

export default ResourceNotFoundException;
