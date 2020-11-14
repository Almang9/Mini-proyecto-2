import { Episode } from './episode';

export interface ApiResponseE {
    info:{
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    results: Array<Episode>,
}
