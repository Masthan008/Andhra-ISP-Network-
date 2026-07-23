export interface AppConfig {
    env: string;
    port: number;
    apiPrefix: string;
    corsOrigins: string[];
}
export declare const appConfig: () => {
    app: AppConfig;
};
