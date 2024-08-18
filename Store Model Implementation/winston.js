import { createLogger, format, transports } from "winston";

const {
    combine, timestamp, printf, colorize,
} = format;

const myFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
    level: "info",
    format: combine(
        colorize(),
        timestamp(),
        myFormat,
    ),
    transports: [
        new transports.Console({ 
            level: "info"
        }),
    ],
});

export default logger;
