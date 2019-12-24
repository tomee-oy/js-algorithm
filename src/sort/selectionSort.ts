const selectionSort: SortFun = (arr: number[]): number[] => {
  const length: number = arr.length
  let tempIndex: number
  for(let i: number = 0; i < length - 1; i++) {
    tempIndex = i
    for(let j: number = i + 1; j < length; j++) {
      if (arr[tempIndex] > arr[j]) {
        tempIndex = j
      }
    }
    if (i !== tempIndex) {
      [arr[i], arr[tempIndex]] = [arr[tempIndex], arr[i]]
    }
  }
  return arr
}

export default selectionSort