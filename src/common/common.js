export function getQueryString(url) {
  if (url) {
    url = url.substr(url.indexOf("?") + 1); //字符串截取，比我之前的split()方法效率高
  }
  var result = {}, //创建一个对象，用于存name，和value
    queryString = url || location.search.substring(1), //location.search设置或返回从问号 (?) 开始的 URL（查询部分）。
    re = /([^&=]+)=([^&]*)/g, //正则，具体不会用
    m;
  while (m = re.exec(queryString)) { //exec()正则表达式的匹配，具体不会用
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]); //使用 decodeURIComponent() 对编码后的 URI 进行解码
  }
  return result;
}
