/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-20 21:42:14
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-21 20:54:48
 */
import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isCollapse: false,
      refsh: false,
    }
  },
})

export default useLayOutSettingStore
