import { argv } from 'yargs';
import * as path from 'path';

class ServerConfig {
    private _mangoConnetion: string;
    private _port: number;
    private _buildType: string;
    private _localStaticPath: string;

  public get localStaticPath(): string {
        if (!this._localStaticPath) {
            this._localStaticPath = path.resolve(__dirname, '../../dev/client');
        }
        return this._localStaticPath;
    }

    public get mangoConnetion(): string {
        if (!this._mangoConnetion) {
            this._mangoConnetion = argv['mongo_connection'] || process.env.MONGO_CONNECTION || 'mongodb://localhost/mongotest';
        }
        return this._mangoConnetion;
    }

    public get port(): number {
        if (!this._port) {
            this._port = argv['port'] || process.env.PORT || 9001;
        }
        return this._port;
    }

    public get buildType(): string {
        if (!this._buildType) {
            this._buildType = (argv['build-type'] || argv['env'] || process.env.ENV || '').toLowerCase();
        }
        return this._buildType;
    }
}

const config: ServerConfig = new ServerConfig();

export default config;