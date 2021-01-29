/**
 * @fileoverview Rule to flag timer didn't record.
 * @author 陈其文<jianwang19@sina.com>
 * @copyright 2021-01 All rights reserved.
 */
"use strict";

module.exports = {
  meta: {
    type: "problem",

    docs: {
      description: "定时器检测",
      category: "ExpressionStatement",
      recommended: true,
    },

    schema: []
  },
  create: function (context) {
    function getSetInterval(node) {
      if (node.expression.callee && node.expression.callee.name === 'setInterval') {
        return false
      }
      if (node.expression.callee && node.expression.callee.name === 'setTimeout') {
        return false
      }
      return true
    }
    return {
      ExpressionStatement(node){
        let state = getSetInterval(node)
        if (!state) {
          context.report(node, '{{ name }} timer didn\'t record', {
            name: node.expression.callee.name
          });
        }
      },
    };
  },
};