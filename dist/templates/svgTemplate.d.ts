export interface templateType {
    id: string;
    Component: (props: any) => string | HTMLElement;
    colors?: any;
}
export declare const badgeTemplates: templateType[];
export declare const ribbonTemplates: templateType[];
export declare const iconTemplates: templateType[];
