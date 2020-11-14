export interface ApiResponseL {
    info:{
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    results: Array<Location>,
}
