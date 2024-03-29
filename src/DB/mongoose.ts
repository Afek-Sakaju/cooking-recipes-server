import mongoose from 'mongoose';

import { SYSTEM_REQ_ID, logger } from '../utils';

export async function connectDB(url: string) {
    await mongoose
        .connect(url)
        .then(() => {
            logger.info(SYSTEM_REQ_ID, 'Connected to DB');
        })
        .catch((err) => {
            logger.error(SYSTEM_REQ_ID, 'Connection to DB failed', {
                error: err,
            });
            throw err;
        });
}
