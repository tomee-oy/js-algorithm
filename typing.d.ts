declare global {
  type SortFun<T = number> = (arr: Array<T>, sortType?: string) => Array<T>
}

export {}