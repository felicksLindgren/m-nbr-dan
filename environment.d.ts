declare namespace NodeJS {
    export interface ProcessEnv {
        COSMOS_CONNECTION_STRING: string;
        COSMOS_DATABASE_NAME: string;
        COSMOS_CONTAINER_NAME: string;
    }
}