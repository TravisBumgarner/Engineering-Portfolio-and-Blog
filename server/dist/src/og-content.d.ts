type OGContent = {
    'og:title': string;
    'og:description': string;
    'og:image': string;
};
export declare function getOgContentFromParts(parts: string[]): OGContent | null;
export {};
