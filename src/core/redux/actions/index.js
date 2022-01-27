/**
 * @description: 获取文章id
 * @param {*} text
 * @return {*}
 */
export const TARGET_ID = 'TARGET_ID'

export const getId = (id) => ({
  type: TARGET_ID,
  id
})