const selectionSort: SortFun = (arr: number[], sortType: string = 'ascend'): number[] => {
  const length: number = arr.length
  let tempIndex: number
  let j: number
  for(let i: number = 0; i < length - 1; i++) {
    tempIndex = i
    j = i + 1
    while (j < length) {
      if ((sortType === 'ascend' && arr[j] < arr[tempIndex]) || (sortType === 'descend' && arr[j] > arr[tempIndex])) {
        tempIndex = j
      }
      j++
    }
    if (i !== tempIndex) {
      [arr[i], arr[tempIndex]] = [arr[tempIndex], arr[i]]
    }
  }
  return arr
}

export default selectionSort