(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{292:function(r,t,_){"use strict";_.r(t);var v=_(28),e=Object(v.a)({},(function(){var r=this,t=r.$createElement,_=r._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("h2",{attrs:{id:"接入前常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接入前常见问题"}},[r._v("#")]),r._v(" 接入前常见问题")]),r._v(" "),_("p",[r._v("1.接入前开发者要确认服务是审核通过的状态，请到小程序开发者平台-支付管理查看审核状态，不然会导致接口不通，无法正常收到服务器请求和返回参数。")]),r._v(" "),_("p",[r._v("2.开发者配置中的“开发者公钥”、“回调地址”均要填写正确，回调地址要保证畅通，不然会导致接入错误无法进行到下一步，请检查服务器网关是否有准入限制，如有限制请参照"),_("RouterLink",{attrs:{to:"/develop/function/aliyun_v2/"}},[r._v("阿里云安全组设置")]),r._v("中的IP地址设置白名单。")],1),r._v(" "),_("h2",{attrs:{id:"资质入驻审核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资质入驻审核"}},[r._v("#")]),r._v(" 资质入驻审核")]),r._v(" "),_("p",[r._v("1.资质审核时长一般多久？")]),r._v(" "),_("p",[r._v("我们为人工审核，审核周期为1天。")]),r._v(" "),_("p",[r._v("2.资质审核未通过提示：“未查询到执照信息“怎么办？")]),r._v(" "),_("p",[r._v("有些开发者由于企业资质刚刚申请完，工商网信息未更新，开发这可以将自己的营业执照扫描图和企信网截图自上而下拼为一张图重新上传即可。")]),r._v(" "),_("h2",{attrs:{id:"服务审核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务审核"}},[r._v("#")]),r._v(" 服务审核")]),r._v(" "),_("p",[r._v("1.如何申请服务?")]),r._v(" "),_("p",[r._v("在小程序开发者平台-支付管理中，开发者需要开通支付账号审核通过，在第二步“绑定支付服务”中创建支付服务，填写服务名称、录入银行卡信息、并且进行财务设置。详情见"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/introduction/pay/",target:"_blank",rel:"noopener noreferrer"}},[r._v("百度收银台支付开通指引"),_("OutboundLink")],1),r._v("。")]),r._v(" "),_("p",[r._v("2.银行信息的填写与选择的注意事项？")]),r._v(" "),_("p",[r._v("目前服务仅支持对公账户，且填写的信息一定要与开户证明完全一致，不然会导致审核被驳回；"),_("br"),r._v("\n在选择银行分类选择中一定要选择和开户行一致的银行分类，如：上海银行XXX分行，在分类下拉列表中选择“上海银行”即可，如无匹配分类，选择其他；分行地址的填写一定要与开户证明的完全一致，不然同样会导致审核被驳回。")]),r._v(" "),_("p",[r._v("3.审核被驳回提示“银行划付失败”怎么办？")]),r._v(" "),_("p",[r._v("首先，检查银行分类选择是否准确，分行地址是否填写一致；"),_("br"),r._v("\n其次，检查下对公账户是否有打款限制。")]),r._v(" "),_("p",[r._v("4.服务审核的时间一般是多久？")]),r._v(" "),_("p",[r._v("服务审核目前由系统自动审核，周期为一天，有时会出现数据堵塞的情况，待数据释放完毕审核通过，一般修复时间为3天。")]),r._v(" "),_("p",[r._v("5.服务审核注意事项")]),r._v(" "),_("p",[r._v("服务审核通过后，开发者再次修改相关设置，服务会重新进入审核状态。服务审核时间见“FAQ服务审核内容第四项“。")]),r._v(" "),_("h2",{attrs:{id:"调起收银台错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调起收银台错误"}},[r._v("#")]),r._v(" 调起收银台错误")]),r._v(" "),_("p",[r._v("1.调起后提示“商品不存在”怎么办？")]),r._v(" "),_("p",[r._v("由于服务审核未通过，确认服务审核通过后再进行接入调试。")]),r._v(" "),_("p",[r._v("2.调起后提示“errCode:6”、“请求签名错误”怎么办？")]),r._v(" "),_("p",[r._v("（1）    检查整个orderInfo 是否是一个 json 对象；")]),r._v(" "),_("p",[r._v("（2）    检查bizInfo这个键值是否是以一个以字符串形式存放的json对象和签名内字符串；")]),r._v(" "),_("p",[r._v("（3）    检查dealID、appKey、totalAmount、tpOrderID、signFieldSRange的值是否按照要求填写正确；")]),r._v(" "),_("p",[r._v("（4）    检查私钥和开发者公钥格式是否正确")]),r._v(" "),_("p",[r._v("（5）    检查签名是否按照文档要求操作生成；")]),r._v(" "),_("p",[r._v("（6）    最后自行验证看是否可以验证成功。"),_("br"),r._v("\n详见"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up/#%E8%B0%83%E8%B5%B7%E7%99%BE%E5%BA%A6%E6%94%B6%E9%93%B6%E5%8F%B0/",target:"_blank",rel:"noopener noreferrer"}},[r._v("调起百度收银台"),_("OutboundLink")],1),r._v("、"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/sign_v2/",target:"_blank",rel:"noopener noreferrer"}},[r._v("签名与验签"),_("OutboundLink")],1),r._v("、"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/keygen_v2/",target:"_blank",rel:"noopener noreferrer"}},[r._v("密钥生成"),_("OutboundLink")],1),r._v("。")]),r._v(" "),_("blockquote",[_("p",[r._v("在调起收银台过程中，如开发者在任何一个环节没有严格按照文档要求操作均会导致此“签名错误”，请认真阅读文档。")])]),r._v(" "),_("h2",{attrs:{id:"后台订单问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后台订单问题"}},[r._v("#")]),r._v(" 后台订单问题")]),r._v(" "),_("p",[r._v("1.订单导出规则")]),r._v(" "),_("p",[r._v("目前后台可以对订单进行筛选查询，但导出订单仅支持近30天的订单，切勿混淆。")]),r._v(" "),_("p",[r._v("2.订单显示已付款为什么“企业资产”没有变化？")]),r._v(" "),_("p",[r._v("首先已消费的订单金额才会流转至“企业资产”，开发者在用户支付后需要对订单进行核销才会更新订单状态为已消费，即完成通知支付状态参数返回，详见"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up/#%E9%80%9A%E7%9F%A5%E6%94%AF%E4%BB%98%E7%8A%B6%E6%80%81/",target:"_blank",rel:"noopener noreferrer"}},[r._v("通知支付状态"),_("OutboundLink")],1),r._v("。")]),r._v(" "),_("blockquote",[_("p",[r._v("平台佣金实时扣取，最小单位：分，如付款金额为0.01会导致支付款项全部扣为佣金，订单已消费也没有资金可以流入“企业资产”，故“企业资产”资金不会变化。建议开发者测试过程中，支付最小金额不低于0.1元并支付2笔（包含两笔）以上相同金额订单。")])]),r._v(" "),_("p",[r._v("3.为什么订单一直是“已付款”状态？")]),r._v(" "),_("p",[r._v("开发者需要严格按照"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up/#%E9%80%9A%E7%9F%A5%E6%94%AF%E4%BB%98%E7%8A%B6%E6%80%81/",target:"_blank",rel:"noopener noreferrer"}},[r._v("通知支付状态"),_("OutboundLink")],1),_("br"),r._v("\n完成对订单的核销，如服务器调用开发者回调接口不成功或开发者返回参数有误连续三次，订单会锁定“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产。还请开发者仔细根据文档操作。如有无法核销的“已付款订单，请开发者提供appId、orderId、服务名称、公司名称、问题描述发送至问题反馈邮箱，jiaoyi-ask@baidu.com。")]),r._v(" "),_("p",[r._v("4.为什么订单已消费，财务列表还未显示这比订单？")]),r._v(" "),_("p",[r._v("由于是银行打款环节，会造成一定延迟。")]),r._v(" "),_("p",[r._v("5.财务列表订单全部都不显示怎么办？")]),r._v(" "),_("p",[r._v("检查订单是否是已消费状态且超过一天，如已经是上述状态，发送服务名称、appid、账号密码、问题描述反馈至客服邮箱 jiaoyi-ask@baidu.com。")]),r._v(" "),_("h2",{attrs:{id:"支付状态查询即支付回调错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#支付状态查询即支付回调错误"}},[r._v("#")]),r._v(" 支付状态查询即支付回调错误")]),r._v(" "),_("p",[r._v("1.支付成功了为什么没有收到支付回调？")]),r._v(" "),_("p",[r._v("“回调地址”要填写正确，回调地址要保证畅通，且对应的最新回调地址配置后后服务审核状态是“审核通过”，同时检查服务器网关是否有准入限制，如有限制请参照"),_("RouterLink",{attrs:{to:"/develop/function/aliyun_v2/"}},[r._v("阿里云安全组设置")]),r._v("中的IP地址设置白名单；业务方接口的耗时要求小于2s"),_("br"),r._v("\n（超过2s会触发平台的超时重试，为保障体验，重试只有三次，回调失败订单会保持“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产）。")],1),r._v(" "),_("p",[r._v("2.收到回调后验证服务器请求验签不通过怎么办？")]),r._v(" "),_("p",[r._v("验签服务器请求需要用平台提供的公钥进行验签，并核对所使用的公钥是否准确，核对验签参数、规则等是否准确。支付回调验签由于涉及到的参数较多要重点检查，支付回调验签中全部参数签名是对收到的平台回调的所有POST参数进行签名（这里所指的参数不包含rsasign，故不需要参与签名），如没有对回调中收到的所有参数签名，会导致验签不通过，如果商户URL里包含GET类型参数，不会参与签名。如开发者在任何一个环节没有严格按照文档要求操作或遗漏需要参与签名的参数均会导致验签不成功，请认真阅读文档。")]),r._v(" "),_("h2",{attrs:{id:"取消核销错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取消核销错误"}},[r._v("#")]),r._v(" 取消核销错误")]),r._v(" "),_("p",[r._v("1.参数操作无误为什么返回10003错误？")]),r._v(" "),_("p",[r._v("“企业资产”金额小于退款金额时会导致取消核销失败，返回10003错误，请开发者保证“企业资产”充足。")]),r._v(" "),_("p",[r._v("2.“企业资产”资金大于退款金额为什么返回10002错误？")]),r._v(" "),_("p",[r._v("如取消核销请求参数的orderID、userID填写错误，会提示10002错误，返回自查是否和系统支付回调时回传的参数一致，如一致，请反馈问题至客服邮箱jiaoyi-ask@baidu.com。")]),r._v(" "),_("h2",{attrs:{id:"退款相关错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#退款相关错误"}},[r._v("#")]),r._v(" 退款相关错误")]),r._v(" "),_("p",[r._v("1.申请退款报错怎么办？")]),r._v(" "),_("p",[r._v("首先确认报错信息，根据信息可以直接定位问题的可直接进行处理（如提示签名错误，可直接核对签名，计算过程是否准确，是否Urlencode等）；直接提示无法解决问题的，检查订单状态，如为已核销，需要取消核销后再发起退款，详见"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up/#%E7%94%B3%E8%AF%B7%E9%80%80%E6%AC%BE/",target:"_blank",rel:"noopener noreferrer"}},[r._v("申请退款"),_("OutboundLink")],1),r._v("。")]),r._v(" "),_("p",[r._v("2.退款审核返回参数后为什么会审核失败？")]),r._v(" "),_("p",[r._v("返回参数中“refundPayMoney”值以分为单位，且不能加小数点，如不严格按照文档提示操作，会导致退款审核失败。详见"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up/#%E8%AF%B7%E6%B1%82%E4%B8%9A%E5%8A%A1%E6%96%B9%E9%80%80%E6%AC%BE%E5%AE%A1%E6%A0%B8/",target:"_blank",rel:"noopener noreferrer"}},[r._v("请求业务方退款审核"),_("OutboundLink")],1)]),r._v(" "),_("p",[r._v("3.为什么在申请退款/退款审核返回参数后没有收到服务器请求/通知？")]),r._v(" "),_("p",[r._v("“回调地址”均要填写正确，回调地址要保证畅通，且对应的最新回调地址配置后后服务审核状态是“审核通过”不然会导致接入错误无法进行到下一步，请检查服务器网关是否有准入限制，如有限制请参照"),_("RouterLink",{attrs:{to:"/develop/function/aliyun_v2/"}},[r._v("阿里云安全组设置")]),r._v("中的IP地址设置白名单。")],1),r._v(" "),_("h2",{attrs:{id:"签名验签和密钥生成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#签名验签和密钥生成"}},[r._v("#")]),r._v(" 签名验签和密钥生成")]),r._v(" "),_("p",[r._v("详见"),_("RouterLink",{attrs:{to:"/develop/function/sign_v2/"}},[r._v("签名与验签")]),r._v("、"),_("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/function/keygen_v2/",target:"_blank",rel:"noopener noreferrer"}},[r._v("密钥生成"),_("OutboundLink")],1),r._v("。")],1),r._v(" "),_("blockquote",[_("p",[r._v("在签名和验签过程中，如开发者在任何一个环节没有严格按照文档要求操作均会导致此“签名错误”，开发者请认真阅读文档。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);