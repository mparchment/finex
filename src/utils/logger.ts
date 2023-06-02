import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            colorize: true,
        },
    },
    base: {
        pid: false // Process ID
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
});

export default log;