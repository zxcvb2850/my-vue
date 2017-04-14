/**
 * Created by xiaobai on 2017/4/7.
 */
export function formatDate(date, fim) {
  if (/(y+)/.test(fim)) {
    fim = fim.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fim)) {
      let str = o[k] + '';
      fim = fim.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fim;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

