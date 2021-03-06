/*
 * @Description: 测试辅助
 * @Author: cggcbb
 * @Date: 2019-02-02 09:27:51
 * @LastEditTime: 2019-02-13 14:25:01
 */
import util from '@/js/util/util'

export default class SortTestHelper {
  // 测试排序算法
  static testSort(sortName, sortFunc, arr) {
    let startTime = +new Date()
    sortFunc(arr)
    let endTime = +new Date()
    util.print(`${sortName} : ${endTime - startTime}ms`)
  }
}