define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "background-repeat: repeat;\r\nbackground-position: center center;\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "background-size: 100% auto;\r\nbackground-size: cover;\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "color: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accent_color : stack1), depth0))
    + ";\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<meta charset=\"utf-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<style type=\"text/css\">\r\nbody {\r\nbackground-image: url(/enduro_demo"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_image : stack1), depth0))
    + ");\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tile_background : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "font-family: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.body_text_font_family : stack1), depth0))
    + ";\r\n}\r\nh1, h2, h3, h4, h5, h6 {\r\nfont-family: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.headers_font_family : stack1), depth0))
    + ";\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accented_headers : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\r\na {\r\ncolor: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accent_color : stack1), depth0))
    + ";\r\n}\r\n.aBackgroundTint {\r\nbackground: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_tint_color : stack1), depth0))
    + ";\r\nopacity: 0."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_tint : stack1), depth0))
    + "\r\n}\r\n.inner {\r\nwidth: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.blog_width : stack1), depth0))
    + ";\r\n}\r\n</style>\r\n<link rel=\"stylesheet\" href=\"/enblog_demo/assets/css/main.css\">\r\n";
},"useData":true}); });