/*
 * @Author: huangegege
 * @Date:   2017-11-04 10:47:52
 * @Last Modified by:   huangegege
 * @Last Modified time: 2017-11-04 12:01:40
 */
'use strict';

var _mm = require('util/mm.js');

var _payment = {
  // 获取支付信息
  getPaymentInfo: function(orderNumber, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('/order/pay.do'),
      data: {
        orderNo: orderNumber
      },
      success: resolve,
      error: reject
    });
  },
  // 获取订单状态
  getPaymentStatus: function(orderNumber, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('/order/query_order_pay_status.do'),
      data: {
        orderNo: orderNumber
      },
      success: resolve,
      error: reject
    });
  }
}
module.exports = _payment;