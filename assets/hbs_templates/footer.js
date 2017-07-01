define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"aWidget\">\r\n                    "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.left_bottom_HTML : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"aWidget\">\r\n                    "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.right_bottom_HTML : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<footer>\r\n    <div class=\"inner\">\r\n        <div class=\"Widgets\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.left_bottom_HTML : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.right_bottom_HTML : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div style=\"clear: both;\"></div>\r\n        <p>\r\n            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.copyright_notice : stack1), depth0))
    + "\r\n        </p>\r\n        <p>\r\n            Proudly powered by <a href=\"https://www.endurojs.com/\" target=\"_blank\" title=\"Enduro\"><i class=\"icon-enduro-wide\"></i>\r\n        </p>\r\n    </div>\r\n</footer>\r\n";
},"useData":true}); });