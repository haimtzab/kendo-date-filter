export declare type GridColumn = {
    field: string;
    title: string;
    minWidth?: number | string;
    filter?: 'boolean' | 'numeric' | 'text' | 'date';
    columnMenu?: string;
    format?: string;
    cell?: string;
};

export declare type GridColumns = GridColumn[];
