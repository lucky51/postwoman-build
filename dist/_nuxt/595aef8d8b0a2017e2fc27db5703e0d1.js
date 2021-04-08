ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,o){"use strict";var r=e("../../lib/oop"),n=e("./fold_mode").FoldMode,l=e("../../range").Range,d=t.FoldMode=function(){};r.inherits(d,n),function(){this.getFoldWidgetRange=function(e,t,o){var r=this.indentationBlock(e,o);if(r)return r;var n=/\S/,line=e.getLine(o),d=line.search(n);if(-1!=d&&"#"==line[d]){for(var c=line.length,f=e.getLength(),h=o,x=o;++o<f;){var m=(line=e.getLine(o)).search(n);if(-1!=m){if("#"!=line[m])break;x=o}}if(x>h){var _=e.getLine(x).length;return new l(h,c,x,_)}}},this.getFoldWidget=function(e,t,o){var line=e.getLine(o),r=line.search(/\S/),n=e.getLine(o+1),l=e.getLine(o-1),d=l.search(/\S/),c=n.search(/\S/);if(-1==r)return e.foldWidgets[o-1]=-1!=d&&d<c?"start":"","";if(-1==d){if(r==c&&"#"==line[r]&&"#"==n[r])return e.foldWidgets[o-1]="",e.foldWidgets[o+1]="","start"}else if(d==r&&"#"==line[r]&&"#"==l[r]&&-1==e.getLine(o-2).search(/\S/))return e.foldWidgets[o-1]="start",e.foldWidgets[o+1]="","";return e.foldWidgets[o-1]=-1!=d&&d<r?"start":"",r<c?"start":""}}.call(d.prototype)})),ace.define("ace/mode/space_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var r=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"empty_line",regex:/ */,next:"key"},{token:"empty_line",regex:/$/,next:"key"}],key:[{token:"variable",regex:/\S+/},{token:"empty_line",regex:/$/,next:"start"},{token:"keyword.operator",regex:/ /,next:"value"}],value:[{token:"keyword.operator",regex:/$/,next:"start"},{token:"string",regex:/[^$]/}]}};r.inherits(l,n),t.SpaceHighlightRules=l})),ace.define("ace/mode/space",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/coffee","ace/mode/space_highlight_rules"],(function(e,t,o){"use strict";var r=e("../lib/oop"),n=e("./text").Mode,l=e("./folding/coffee").FoldMode,d=e("./space_highlight_rules").SpaceHighlightRules,c=function(){this.HighlightRules=d,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};r.inherits(c,n),function(){this.$id="ace/mode/space"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/space"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));