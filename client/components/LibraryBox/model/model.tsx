export interface IBook {
    id?: number|null,
    title?: string,
    author?: string,
    year?: string
}

export interface IGlobalState {
    listItems?: IBook[],
    selectItem?: IBook
}
