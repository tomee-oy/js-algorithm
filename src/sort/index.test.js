import bubbleSort from './bubbleSort.ts'
import selectionSort from './selectionSort.ts'
import insertionSort from './insertionSort.ts'

describe('排序算法测试', () => {
  test('冒泡排序', () => {
    expect(bubbleSort([6, 4, 1, 9, 7, 3, 2])).toEqual([1, 2, 3, 4, 6, 7, 9])
  })

  test('选择排序', () => {
    expect(selectionSort([6, 4, 1, 9, 7, 3, 2])).toEqual([1, 2, 3, 4, 6, 7, 9])
  })

  test('插入排序', () => {
    expect(insertionSort([6, 4, 1, 9, 7, 3, 2])).toEqual([1, 2, 3, 4, 6, 7, 9])
  })
})