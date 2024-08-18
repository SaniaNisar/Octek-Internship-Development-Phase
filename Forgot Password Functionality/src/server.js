import logger from "../winston.js";
import { app } from "./app.js";

const startServer = async () => {
    try {
        app.listen(process.env.PORT || 3000, () => {
            logger.info(`Server running on port ${process.env.PORT || 3001}`);
        });
    } catch (error) {
        logger.error("Error starting the server:", error.description);
    }
};

startServer(); 
