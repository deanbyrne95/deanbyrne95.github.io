import {Injectable} from '@angular/core';
import {Logger} from '@core/services/logs/log.service';

const logger = new Logger('BrowserService');

@Injectable({providedIn: 'root'})
export class BrowserService {

    constructor() {
    }

    public existsInStorage(storage: Storage, key: string): boolean {
        logger.debug(`does '${key.toLowerCase()}' exist in storage?`)
        if (storage) {
            return storage.getItem(key) !== null;
        } else {
            logger.error('storage cannot be set to null');
            return false;
        }
    }

    public setInStorage(storage: Storage, key: string, value: any): void {
        logger.debug(`setting '${key.toLowerCase()}' in storage`)
        if (storage) {
            storage.setItem(key, JSON.stringify(value))
        } else {
            logger.error('storage cannot be set to null');
        }
    }

    public getInStorage(storage: Storage, key: string): any {
        logger.debug(`getting '${key.toLowerCase()}' in storage`)
        if (storage) {
            try {
                return JSON.parse((storage.getItem(key) || ''));
            } catch (e) {
                logger.error(e);
                return null;
            }
        } else {
            logger.error('storage cannot be set to null');
            return null;
        }
    }
}
