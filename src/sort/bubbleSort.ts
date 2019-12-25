const bubbleSort: SortFun = (arr: number[], sortType: string = 'ascend'): number[] => {
  const length: number = arr.length
  for(let i: number = 0; i < length; i++) {
    for(let j: number = 0; j < length - i - 1; j++) {
      if (sortType === 'ascend') {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      } 
      if (sortType === 'descend') {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
  }
  return arr
}

export default bubbleSort