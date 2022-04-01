export interface IdiscussionConfig {
    menuOptions?: Array<IMenuOptions>;
    userName: string;
    context?: object;
    categories: Icategory;
    path?: string;
    routerSlug?: string;
}

export interface IMenuOptions {
    route: string;
    label: string;
    enable: boolean;
}

export interface Icategory {
    result: Array<string>;
}
