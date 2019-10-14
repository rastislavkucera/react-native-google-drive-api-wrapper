declare namespace GDrive {
    export function init(): void;
    export function setAccessToken(token: string): void; 
    export function isInitialized(): boolean;

    export const accessToken: string;

    export const files: {
        createFileMultipart: (media: string, mediaType: string, metadata: any, isBase64: boolean) => Promise<Response>,
        download: (fileID: string, params: any) => Promise<Response>,
        list: (queryParams: Object) => Promise<Response>,
        safeCreateFolder: (metadata: {name: string, parents: string[]}) => string,
    };
}

export default GDrive;
