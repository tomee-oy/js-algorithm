import bubbleSort from './bubbleSort.ts'
import selectionSort from './selectionSort.ts'
import insertionSort from './insertionSort.ts'

describe('排序算法测试', () => {
  test('冒泡升序排列', () => {
    expect(bubbleSort([6, 4, 1, 9, 7, 3, 2])).toEqual([1, 2, 3, 4, 6, 7, 9])
  })

  test('冒泡降序排列', () => {
    expect(bubbleSort([6, 4, 1, 9, 7, 3, 2], 'descend')).toEqual([9, 7, 6, 4, 3, 2, 1])
  })

  test('选择升序排列', () => {
    expect(selectionSort([9, 2, 6, 7])).toEqual([2, 6, 7, 9])
  })

  test('选择降序排列', () => {
    expect(selectionSort([9, 2, 6, 7], 'descend')).toEqual([9, 7, 6, 2])
  })

  test('插入升序排列', () => {
    expect(insertionSort([10, 21, 5, 88, 24])).toEqual([5, 10, 21, 24, 88])
  })

  test('插入降序排列', () => {
    expect(insertionSort([10, 21, 5, 88, 24], 'descend')).toEqual([88, 24, 21, 10, 5])
  })
})