const insertionSort: SortFun = (arr: number[]): number[] => {
  const length: number = arr.length
  let temp: number
  let index: number
  for(let i: number = 1; i < length; i++) {
    temp = arr[i]
    index = i - 1
    while(index >= 0 && arr[index] > temp) {
      arr[index + 1] = arr[index]
      index--
    }
    arr[index + 1] = temp
  }
  return arr
}

export default insertionSort