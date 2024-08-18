import { User } from "../database/models/index.js";
import { UnauthorizedException } from "../exceptions/index.js";
import jwt from "jsonwebtoken";

const AuthMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Invalid authorization header');
        }

        const token = authHeader.split(' ')[1];
        console.log("JWT Header Token =", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Payload =", decoded);

        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // Attach the user object to the request
        req.user = user;
        console.log("User at MiddleWare = ",user);
        next(); // Pass control to the next middleware or route handler

    } catch (error) {
        console.error('Error in User Authentication Service:', error);
        next(error);
    }
};

export default AuthMiddleware;