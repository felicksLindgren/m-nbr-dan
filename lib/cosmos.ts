import { Container, CosmosClient, Database } from "@azure/cosmos";

class CosmosSingleton {
    private _database: Database;
    private _client: CosmosClient;
    private _container: Container;

    constructor() {
        this._client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
        this._database = this._client.database(process.env.COSMOS_DATABASE_NAME);
        this._container = this._database.container(process.env.COSMOS_CONTAINER_NAME);
    }

    get container(): Container {
        return this._container;
    }
}

const cosmos = new CosmosSingleton();
export default cosmos;