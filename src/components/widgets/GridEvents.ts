import type { GridRowClickEvent } from '@progress/kendo-vue-grid';

export declare type GridSortEvent = { dir: 'asc' | 'desc'; field: string }[];
export declare type GridPageEvent = { skip: number; take: number };

export declare type FilterOperator =
    | 'eq'
    | 'neq'
    | 'isnull'
    | 'isnotnull'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'startswith'
    | 'endswith'
    | 'contains'
    | 'doesnotcontain'
    | 'isempty'
    | 'isnotempty';

export declare type GridFilterEvent = {
    field?: string;
    ignoreCase?: boolean;
    operator: FilterOperator;
    value: any;
}[];
export type { GridRowClickEvent };
