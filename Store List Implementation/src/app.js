import express from 'express';
import { AuthRoutes } from './modules/auth/routes';
import { ExceptionMiddleware } from './common/middlewares';
import SwaggerUI from "swagger-ui-express";
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Subscription Manager APIs",
            version: "1.0.0",
        },
        tags: [
            {
                name: "auth",
                description: "Operations related to authentication and registration"
            }
        ]
    },
    apis: ["./src/**/*.routes.js"],
  };  
const swaggerSpec = swaggerJSDoc(options);

export const app = express();
const apiRouter = express.Router();
app.use(express.json());
app.use("/api", apiRouter);
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));
apiRouter.use("/auth", AuthRoutes);
app.use(ExceptionMiddleware);