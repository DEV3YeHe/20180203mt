//
function checkKey(json, key) {
  if (typeof json != 'object' || typeof key != 'string')
    return false;
  //.some()遍历json对象中的所有key值，其中some（）的参数有item【key值】，index
  //【key下标】，arra【目标参数】,返回值必须为boolean值
  return Object.keys(json).some(k => k === key || checkKey(json[k], key));

  //console.log('该json中是够含有subkey2的键: ' + chechKey(json, 'subkey2'));
}

module.exports.checkKey = checkKey;