ace.define("ace/mode/applescript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var r=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({"support.function":"activate|beep|count|delay|launch|log|offset|read|round|run|say|summarize|write","constant.language":"AppleScript|false|linefeed|return|pi|quote|result|space|tab|true","support.type":"alias|application|boolean|class|constant|date|file|integer|list|number|real|record|string|text|character|characters|contents|day|frontmost|id|item|length|month|name|paragraph|paragraphs|rest|reverse|running|time|version|weekday|word|words|year",keyword:"about|above|after|against|and|around|as|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|continue|copy|div|does|eighth|else|end|equal|equals|error|every|exit|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|over|prop|property|put|ref|reference|repeat|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|try|until|where|while|whose|with|without"},"identifier");this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",regex:"\\(\\*",next:"comment"},{token:"string",regex:'".*?"'},{token:"support.type",regex:"\\b(POSIX file|POSIX path|(date|time) string|quoted form)\\b"},{token:"support.function",regex:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"},{token:"constant.language",regex:"\\b(text item delimiters|current application|missing value)\\b"},{token:"keyword",regex:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"},{token:e,regex:"[a-zA-Z][a-zA-Z0-9_]*\\b"}],comment:[{token:"comment",regex:"\\*\\)",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};r.inherits(l,n),t.AppleScriptHighlightRules=l})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,o){"use strict";var r=e("../../lib/oop"),n=e("../../range").Range,l=e("./fold_mode").FoldMode,c=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(c,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var line=e.getLine(o);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var r=this._getFoldWidgetBase(e,t,o);return!r&&this.startRegionRe.test(line)?"start":r},this.getFoldWidgetRange=function(e,t,o,r){var n,line=e.getLine(o);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,o);if(n=line.match(this.foldingStartMarker)){var i=n.index;if(n[1])return this.openingBracketBlock(e,n[1],o,i);var l=e.getCommentFoldRange(o,i+n[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,o):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(n=line.match(this.foldingStopMarker))){i=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],o,i):e.getCommentFoldRange(o,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),o=line.search(/\S/),r=t,l=line.length,c=t+=1,d=e.getLength();++t<d;){var h=(line=e.getLine(t)).search(/\S/);if(-1!==h){if(o>h)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=r)break;if(f.isMultiLine())t=f.end.row;else if(o==h)break}c=t}}return new n(r,l,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,line,t){for(var o=line.search(/\s*$/),r=e.getLength(),l=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,d=1;++t<r;){line=e.getLine(t);var h=c.exec(line);if(h&&(h[1]?d--:d++,!d))break}if(t>l)return new n(l,o,t,line.length)}}.call(c.prototype)})),ace.define("ace/mode/applescript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/applescript_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,o){"use strict";var r=e("../lib/oop"),n=e("./text").Mode,l=e("./applescript_highlight_rules").AppleScriptHighlightRules,c=e("./folding/cstyle").FoldMode,d=function(){this.HighlightRules=l,this.foldingRules=new c,this.$behaviour=this.$defaultBehaviour};r.inherits(d,n),function(){this.lineCommentStart="--",this.blockComment={start:"(*",end:"*)"},this.$id="ace/mode/applescript"}.call(d.prototype),t.Mode=d})),ace.require(["ace/mode/applescript"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));