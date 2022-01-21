
import { API_TREE } from '../http/api-tree';
import request from '../http/fetch';

let accessToken = '24100939b1bd176a72081b10ead8e774_csz_web'

/**
 * @description: 获取文章
 * @param {*}
 * @return {*}
 */
export function getArticle (id) {
  return request({
    url: API_TREE.thanos.api.cms.article.info + `?targetId=${id}&accessToken=${accessToken}`,
    method: 'get'
  })
}


/**
 * @description: 获取文章
 * @param {*}
 * @return {*}
 */
export function getArticleList () {
  return request({
    url: API_TREE.shopguide.api.article.getArticlesByColumnId + `?page=1&rows=5&accessToken=${accessToken}`,
    method: 'get'
  })
}


/**
 * @description: 获取评论
 * @param {*}
 * @return {*}
 */
export function getList (id) {
  return request({
    url: API_TREE.thanos.api.cms.discuss + `?discussType=articleComment&discussTargetId=${id}&commentSort=0&pageSize=10&nowPage=1&accessToken=${accessToken}`,
    method: 'get'
  })
}