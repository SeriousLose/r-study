import { API_TREE_CONFIG } from "./api-tree.config";

const API_TREE = API_TREE_CONFIG;

/**
 * 为api node chain 组装api
 */
/**
 * @description: 组装api
 */
const assemblyApi = (apiNodeChain) => {
  return apiNodeChain ? `/${apiNodeChain.replace(/^\//, "")}` : ``;
};

/**
 * @description: 生成api tree
 * @param {apiTreeConfig} api tree config
 * @param {parentApiNodeChain} parentApiNode1/parentApiNode2/parentApiNode3
 */
const apiTreeGenerator = (apiTreeConfig, parentApiNodeChain) => {
  for (const key of Object.keys(apiTreeConfig)) {
    const apiNode = key;
    const prefixChain = parentApiNodeChain ? `${parentApiNodeChain}/` : "";
    if (Object.prototype.toString.call(apiTreeConfig[key]) === "[object Object]") {
      apiTreeGenerator(apiTreeConfig[key], prefixChain + apiNode);
    } else {
      apiTreeConfig[key] = parentApiNodeChain ? assemblyApi(prefixChain + key) : assemblyApi(key);
    }
  }
  apiTreeConfig["_this"] = parentApiNodeChain ? assemblyApi(`${parentApiNodeChain}`) : assemblyApi("");
};

apiTreeGenerator(API_TREE_CONFIG);

// 导出配置好的url
export { API_TREE };
