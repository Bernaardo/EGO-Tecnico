import { ButtonFilterItem, OrdenarPorItem } from "../../../interfaces/interfaces";

export const buttonFilterItems: ButtonFilterItem[]= [
    {
        title: 'Todos',
        segment: null
    },
    {
        title: 'Sedan',
        segment: '1'
    },
    {
        title: 'Hatchback',
        segment: '2'
    },
    {
        title: 'Pickups y Comerciales',
        segment: '3'
    },
    {
        title: 'SUVs y Crossovers',
        segment: '4'
    },
]

export const ordernarPorItems: OrdenarPorItem[] = [
    {
        title: 'Nada',
        ordering: null
    },
    {
        title: 'De <b>menor</b> a <b>mayor</b> precio',
        ordering:'price'
    },
    {
        title: 'De <b>mayor</b> a <b>menor</b> precio',
        ordering:'-price'
    },
    {
        title: 'Más <b>nuevos</b> primero',
        ordering:'-year'
    },
    {
        title: 'Más <b>viejos</b> primero',
        ordering:'year'
    },
]