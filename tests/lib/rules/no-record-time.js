/**
 * @fileoverview Tests for no-record-time rule.
 * @author Chen Qiwen
 */

'use strict';

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
var rule = require('../../../lib/rules/no-record-time')
ruleTester.run("no-record-time", rule, {
  valid: [
    `
    var obj = {};
    function abs1(){}; 
    function abs2(){}; 
    function abs3(){};    
    var aa = setInterval(abs1, 3e3);    
    var aa = setTimeout(abs1, 3e3);    
    bb = setInterval(abs2, 3e3);    
    obj.timer = setInterval(abs3, 3e3);
    `,
  ],
  invalid: [
    { code: 'function abs66(){}; \n setInterval(abs66, 300);', errors: [{ message: 'setInterval timer didn\'t record', type: 'ExpressionStatement'}] },
    { code: 'function abs66(){}; \n setTimeout(abs66, 300);', errors: [{ message: 'setTimeout timer didn\'t record', type: 'ExpressionStatement'}] },
  ]
});