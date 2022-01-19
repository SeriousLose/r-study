
import { API_TREE } from '../http/api-tree';
import request from '../http/fetch';

/**
 * @description: 获取文章
 * @param {*}
 * @return {*}
 */
export function getArticle (id) {
  let accessToken = '70837f24e79ee5a4bb54a59e5d6ae2a1_csz_web'
  return request({
    url: API_TREE.thanos.api.cms.article.info + `?targetId=${id}&accessToken=${accessToken}`,
    method: 'get'
  })
}