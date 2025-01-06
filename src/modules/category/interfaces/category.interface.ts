export interface InterfaceBaseCategory  {
    id: number;
    name: string;
    description: string;
    active: boolean;
    parentId?: number | null;
}

export interface InterfaceCategory extends InterfaceBaseCategory {
    children: InterfaceBaseCategory[];
}