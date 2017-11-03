/*
 * @Author: huangegege
 * @Date:   2017-11-02 16:13:12
 * @Last Modified by:   huangegege
 * @Last Modified time: 2017-11-03 11:37:46
 */
'use strict';

var _mm = require('util/mm.js');

var _address = {
  // 获取地址列表
  getAddressList: function(resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('/shipping/list.do'),
      data: {
        pageSize: 50
      },
      success: resolve,
      error: reject
    });
  },
  // 新建收件人
  save: function(addressInfo, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('/shipping/add.do'),
      data: addressInfo,
      success: resolve,
      error: reject
    });
  }
}
module.exports = _address;