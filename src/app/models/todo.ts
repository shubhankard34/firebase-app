export interface Todo {
    title: string;
    description: string;
    date: any;
}

export const DEFAULT_TODO: Todo =  {
    title: "",
    description: "",
    date: undefined
}