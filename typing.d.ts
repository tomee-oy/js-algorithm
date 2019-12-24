declare global {
  type SortFun<T = number> = (arr: Array<T>) => Array<T>
}

export {}