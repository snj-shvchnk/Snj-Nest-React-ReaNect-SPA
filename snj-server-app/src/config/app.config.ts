import { DEBUG_Config as debugConfig } from './DEBUG.config'
import { RELEASE_Config as releaseConfig } from './RELEASE.config';

export class AppConfig {
    private _ConfigInstance: {};

    constructor({ mode }) {
        switch (mode) {
            case 'DEBUG':
                this._ConfigInstance = { ...debugConfig };
                break;
            case 'RELEASE':
                this._ConfigInstance = { ...releaseConfig };
                break;
        };
        
        console.log(
            'App configuration:', 
            { mode, instance: { ...this._ConfigInstance }
        });
    }
    
    Get = () => this._ConfigInstance ?? {};
}