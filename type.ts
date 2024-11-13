export interface RubricCompound {
    id: number,
    title: string,
    url: string,
    count: number,
}


export interface Rubric {
    children: [ RubricCompound ],
    count: number,
    id: number,
    title: string,
    url: string,
}
