jQuery.webshims.ready("form-core",function(d,i){if(!("value"in document.createElement("output"))){var k=document;(function(){var a={input:1,textarea:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},h=function(b){var f,j=b.attr("value"),g=function(l){if(b){var m=b.attr("value");if(m!==j){j=m;if(!l||l.type!="input")i.triggerInlineForm(b[0],"input")}}},c=function(){b.unbind("focusout",c).unbind("input",g);clearInterval(f);g();b=null};clearInterval(f);f=setInterval(g,d.browser.mozilla?
250:111);setTimeout(g,9);b.bind("focusout",c).bind("input",g)};d(k).bind("focusin",function(b){if(b.target&&b.target.type&&!b.target.readonly&&!b.target.readOnly&&!b.target.disabled&&a[(b.target.nodeName||"").toLowerCase()]&&!e[b.target.type])h(d(b.target))})})();var n=function(a){if(!a.getAttribute("aria-live")){a=d(a);var e=(a.text()||"").trim(),h=a.attr("id"),b=a.attr("for"),f=d('<input class="output-shim" type="hidden" name="'+(a.attr("name")||"")+'" value="'+e+'" style="display: none" />').insertAfter(a),
j=f[0].form||k,g=function(c){f[0].value=c;c=f[0].value;a.text(c);a[0].value=c};a[0].defaultValue=e;a[0].value=e;a.attr({"aria-live":"polite"});if(h){f.attr("id",h);a.attr("aria-labeldby",i.getID(d('label[for="'+h+'"]',j)))}if(b){h=i.getID(a);b.split(" ").forEach(function(c){(c=j.getElementById(c))&&c.setAttribute("aria-controls",h)})}a.data("outputShim",g);f.data("outputShim",g);return g}};i.attr("value",{elementNames:["output","input"],getter:true,setter:function(a,e,h){var b=d.data(a,"outputShim");
if(!b)if(d.nodeName(a,"output"))b=n(a);else return h();b(e)}});i.addReady(function(a,e){d("output",a).add(e.filter("output")).each(function(){n(this)})});i.createReadyEvent("form-output")}},true);