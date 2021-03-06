/*
 * @Description: 插入排序
 * @Author: cggcbb
 * @Date: 2019-02-02 10:08:01
 * @LastEditTime: 2019-02-13 14:10:53
 */
import util from '@/js/util/util'

export default class InsertionSort {
  // 有swap的过程(一次swap相当于有三次赋值操作)
  static sort(arr) {
    for (let i = 1, length = arr.length; i < length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        util.swap(arr, j, j - 1)
      }
    }
  }
  // 没有swap的过程(效率相对于有swap的要高一些)
  static sortNoneSwap(arr) {
    InsertionSort.sortRange(arr, 0, arr.length - 1)
  }
  // 排序arr[l....r]
  static sortRange(arr, l, r) {
    for (let i = l + 1; i <= r; i++) {
      // 待插入的元素副本
      let el = arr[i]
      // 最终需要插入的下标
      let j
      for (j = i; j > l && arr[j - 1] > el; j--) {
        arr[j] = arr[j - 1]
      }
      arr[j] = el
    }
  }
}