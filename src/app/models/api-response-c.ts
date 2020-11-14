import { Character } from './character';

export interface ApiResponseC {
    info:{
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    results: Array<Character>,
}
