/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.64
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){"use strict";a.formUtils.registerLoadedModule("sepa");var b=[["AD",24,"F04F04A12"],["AE",23,"F03F16"],["AL",28,"F08A16"],["AT",20,"F05F11"],["AZ",28,"U04A20"],["BA",20,"F03F03F08F02"],["BE",16,"F03F07F02"],["BG",22,"U04F04F02A08"],["BH",22,"U04A14"],["BR",29,"F08F05F10U01A01"],["CH",21,"F05A12"],["CR",21,"F03F14"],["CY",28,"F03F05A16"],["CZ",24,"F04F06F10"],["DE",22,"F08F10"],["DK",18,"F04F09F01"],["DO",28,"U04F20"],["EE",20,"F02F02F11F01"],["ES",24,"F04F04F01F01F10"],["FI",18,"F06F07F01"],["FO",18,"F04F09F01"],["FR",27,"F05F05A11F02"],["GB",22,"U04F06F08"],["GE",22,"U02F16"],["GI",23,"U04A15"],["GL",18,"F04F09F01"],["GR",27,"F03F04A16"],["GT",28,"A04A20"],["HR",21,"F07F10"],["HU",28,"F03F04F01F15F01"],["IE",22,"U04F06F08"],["IL",23,"F03F03F13"],["IS",26,"F04F02F06F10"],["IT",27,"U01F05F05A12"],["KW",30,"U04A22"],["KZ",20,"F03A13"],["LB",28,"F04A20"],["LC",32,"U04F24"],["LI",21,"F05A12"],["LT",20,"F05F11"],["LU",20,"F03A13"],["LV",21,"U04A13"],["MC",27,"F05F05A11F02"],["MD",24,"U02A18"],["ME",22,"F03F13F02"],["MK",19,"F03A10F02"],["MR",27,"F05F05F11F02"],["MT",31,"U04F05A18"],["MU",30,"U04F02F02F12F03U03"],["NL",18,"U04F10"],["NO",15,"F04F06F01"],["PK",24,"U04A16"],["PL",28,"F08F16"],["PS",29,"U04A21"],["PT",25,"F04F04F11F02"],["RO",24,"U04A16"],["RS",22,"F03F13F02"],["SA",24,"F02A18"],["SE",24,"F03F16F01"],["SI",19,"F05F08F02"],["SK",24,"F04F06F10"],["SM",27,"U01F05F05A12"],["ST",25,"F08F11F02"],["TL",23,"F03F14F02"],["TN",24,"F02F03F13F02"],["TR",26,"F05F01A16"],["VG",24,"U04F16"],["XK",20,"F04F10F02"],["AO",25,"F21"],["BF",27,"F23"],["BI",16,"F12"],["BJ",28,"F24"],["CI",28,"U01F23"],["CM",27,"F23"],["CV",25,"F21"],["DZ",24,"F20"],["IR",26,"F22"],["JO",30,"A04F22"],["MG",27,"F23"],["ML",28,"U01F23"],["MZ",25,"F21"],["QA",29,"U04A21"],["SN",28,"U01F23"],["UA",29,"F25"]],c=function(a){a=a.replace(/\s+/g,""),a=a.substr(4)+a.substr(0,4),a=a.split("").map(function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}).join("");for(var b,c=a;c.length>2;)b=c.slice(0,9),c=(parseInt(b,10)%97).toString()+c.slice(b.length);return parseInt(c,10)%97===1},d=function(a){a=a.toUpperCase(),a=a.replace(/\s+/g,"");var c=a.slice(0,2),d=0,e="";for(d=0;d<b.length;++d)if(b[d][0]===c){e=b[d][2];break}if(""===e)return!1;var f=e.match(/(.{3})/g).map(function(a){var b,c=a.slice(0,1),d=parseInt(a.slice(1),10);switch(c){case"A":b="0-9A-Za-z";break;case"B":b="0-9A-Z";break;case"C":b="A-Za-z";break;case"F":b="0-9";break;case"L":b="a-z";break;case"U":b="A-Z";break;case"W":b="0-9a-z"}return"(["+b+"]{"+d+"})"}),g=new RegExp("^"+f.join("")+"$");return a.length===b[d][1]&&g.test(a.slice(4))};a.formUtils.addValidator({name:"sepa",validatorFunction:c,errorMessage:"",errorMessageKey:"badSepa"}),a.formUtils.addValidator({name:"iban",validatorFunction:function(a){return d(a)&&c(a)},errorMessage:"",errorMessageKey:"badIban"}),a.formUtils.addValidator({name:"bic",validatorFunction:function(a){var b=new RegExp("^[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}$");return b.test(a)},errorMessage:"",errorMessageKey:"badBic"})}(a)});