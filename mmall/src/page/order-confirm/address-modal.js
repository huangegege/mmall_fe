/*
 * @Author: huangegege
 * @Date:   2017-11-02 17:52:34
 * @Last Modified by:   huangegege
 * @Last Modified time: 2017-11-02 19:47:27
 */
'use strict';
var _mm = require('util/mm.js');
var _cities = require('util/cities/index.js');
var _address = require('service/address-service.js');
var templateAddressModal = require('./address-modal.string');

var addressModal = {
  show: function(option) {
    // option的绑定
    this.option = option;
    this.$modalWrap = $('.modal-wrap');
    // 渲染页面
    this.loadModal();
    // 绑定事件
    this.bindEvent();
  },
  bindEvent: function() {
    var _this = this;
    // 省份和城市的二级联动
    this.$modalWrap.find('#receiver-province').change(function() {
      var selectedProvince = $(this).val();
      _this.loadCities(selectedProvince);
    });
  },
  loadModal: function() {
    var addressModalHtml = _mm.renderHtml(templateAddressModal, this.option.data);
    this.$modalWrap.html(addressModalHtml);
    // 加载省份
    this.loadProvince();
    // 加载城市
    this.loadCities();
  },
  // 加载省份信息
  loadProvince: function() {
    var provinces = _cities.getProvinces() || [],
      $provinceSelect = this.$modalWrap.find('receiver-province');
    $provinceSelect.html(this.getSelectOption(provinces));
  },
  // 加载城市信息
  loadCities: function(provinceName) {
    var cities = _cities.getCities(provinceName) || [],
      $citySelect = this.$modalWrap.find('receiver-city');
    $citySelect.html(this.getSelectOption(cities));
  },
  // 获取select框的选项，输入:array， 输出:HTML
  getSelectOption: function(optionArray) {
    var html = '<option value="">请选择</option>';
    for (var i = 0, length = optionArray.length; i < length; i++) {
      html += '<option value="' + optionArray[i] + '">' + optionArray[i] + '</option>';
    }
    return html;
  },
  hide: function() {

  }
};
module.exports = addressModal;