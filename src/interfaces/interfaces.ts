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
    filterType:string | null;
    orderType:string | null;
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

export interface ModelFeature {
    name: string;
    description: string;
    image: string;
}

export interface ModelHighlight {
    title: string;
    content: string;
    image: string;
}

export interface ModeloSheet {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
    title: string;
    description: string;
    model_features: ModelFeature[];
    model_highlights: ModelHighlight[];
  }

export interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    icon?: React.ReactNode;
}

export interface CarouselProps {
    data: ModelFeature[];
}

export interface OrderModelsProps {
    items: OrdenarPorItem[];
    handleSelected: (item: OrdenarPorItem) => void;
    itemType: string | null;
}

export interface FilterModelsSelectProps {
    items: ButtonFilterItem[];
    handleSelected: (item: ButtonFilterItem) => void;
    itemType: string | null;
}

export interface HighlightsProps {
    highlight: ModelHighlight;
    index: number;
}