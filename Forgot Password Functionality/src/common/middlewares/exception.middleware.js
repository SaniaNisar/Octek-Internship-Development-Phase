import { ValidationError } from "sequelize";
import jwt from "jsonwebtoken";
import { ResourceNotFoundException, UnauthorizedException } from "../exceptions/index.js";

const middleware = (error, request, response, next) => {
    if (error instanceof ResourceNotFoundException) {
        response.status(404).send({ message: error.message });
    } else if (error instanceof UnauthorizedException) {
        response.status(401).send({ message: error.message });
    } else if (error instanceof jwt.JsonWebTokenError) {
        response.status(401).send({ message: error.message });
    } else if (error instanceof ValidationError) {
        response.status(400).send({ message: error.message });
    } else {
        response.status(500).send(error.message);
    }
    next();
};

export default middleware;
