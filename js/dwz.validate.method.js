/**
 * @requires jquery.validate.js
 * @author ZhangHuihua@msn.com
 */
(function($){
	if ($.validator) {
		$.validator.addMethod("alphanumeric", function(value, element) {
			return this.optional(element) || /^\w+$/i.test(value);
		}, "Letters, numbers or underscores only please");
		
		$.validator.addMethod("lettersonly", function(value, element) {
			return this.optional(element) || /^[a-z]+$/i.test(value);
		}, "Letters only please"); 
		
		$.validator.addMethod("phone", function(value, element) {
			return this.optional(element) || /^[0-9 \(\)]{8,30}$/.test(value);
		}, "Please specify a valid phone number");
		
		$.validator.addMethod("postcode", function(value, element) {
			return this.optional(element) || /^[0-9 A-Za-z]{5,20}$/.test(value);
		}, "Please specify a valid postcode");
		
		$.validator.addMethod("date", function(value, element) {
			value = value.replace(/\s+/g, "");
			if (String.prototype.parseDate){
				var $input = $(element);
				var pattern = $input.attr('dateFmt') || 'yyyy-MM-dd';
	
				return !$input.val() || $input.val().parseDate(pattern);
			} else {
				return this.optional(element) || value.match(/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/);
			}
		}, "Please enter a valid date.");
		
		/*自定义js函数验证
		 * <input type="text" name="xxx" customvalid="xxxFn(element)" title="xxx" />
		 */
		$.validator.addMethod("customvalid", function(value, element, params) {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "Please fix this field.");
		  //验证调查事件时间
		  $.validator.addMethod("validate_surveytime", function(value, element, params) {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "调查时间不能大于现在时间");
		 //验证事发时间
		  $.validator.addMethod("validate_happentime", function(value, element, params) {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "事发时间不能大于调查时间");
		//事发单位总人数
		  $.validator.addMethod("validate_totalnum", function(value, element, params) {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "事发单位总人数不能小于就诊人数");
		
		  //验证病例数
		  $.validator.addMethod("validate_patientnum", function(value, element, params) 
		  {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "病例数不能大于事发单位总人数");
		
		 //验证事发时间
		  $.validator.addMethod("validate_dealpatientnum", function(value, element, params) 
		  {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "就诊人数不能大于病例数");
		
		  //验证事发时间
		  $.validator.addMethod("validate_hosptialpatient_num", function(value, element, params) 
		  {
			try{
				return eval('(' + params + ')');
			}catch(e){
				return false;
			}
		}, "住院人数不能大于就诊人数");
		$.validator.addClassRules({
			date: {date: true},
			alphanumeric: { alphanumeric: true },
			lettersonly: { lettersonly: true },
			phone: { phone: true },
			postcode: {postcode: true}
		});
		$.validator.setDefaults({errorElement:"span"});
		$.validator.autoCreateRanges = true;
		
	}

})(jQuery);