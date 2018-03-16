import { argv } from 'yargs';
import * as path from 'path';

class ServerConfig {
    private _mangoConnetionUri: string;
    private _port: number;
    private _buildType: string;
    private _localStaticPath: string;

    public get localStaticPath(): string {
        if (!this._localStaticPath) {
            this._localStaticPath = path.resolve(__dirname, '../../client');
        }
        return this._localStaticPath;
    }

    public get mangoConnetionUri(): string {
        if (!this._mangoConnetionUri) {
            this._mangoConnetionUri = argv['mongo_connection'] || process.env.MONGO_CONNECTION || 'mongodb://localhost/mongotest';
        }
        return this._mangoConnetionUri;
    }

    public get mangoConnetionOptions(): {} {
        return {};
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

export default config ;