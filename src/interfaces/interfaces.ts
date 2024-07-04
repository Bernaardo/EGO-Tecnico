export interface SidebarProps{
    open: boolean;
    handleClick: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface SidebarItem {
    title: string;
    href: string;
}

export interface TabItem {
    title: string;
}

export interface ButtonFilterItem {
    title: string;
    segment: string | null;
}

export interface OrdenarPorItem {
    title: string;
    ordering: string | null;
}

export interface FilterModelsProps{
    handleButtonFilter: (filter:ButtonFilterItem) => void;
    handleOrderSelect: (order:OrdenarPorItem) => void;
}

export interface Modelo {
    id:number;
    name: string;
    photo: string;
    price: number;
    segment: string;
    thumbnail: string;
    year: number; 
}

export interface ModeloProps {
    modelo: Modelo;
}

export interface getAllModelsPorps {
    filter?: string;
    order?: string;
}