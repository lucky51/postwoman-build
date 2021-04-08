ace.define("ace/mode/pig_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.block.pig",regex:/\/\*/,push:[{token:"comment.block.pig",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.pig"}]},{token:"comment.line.double-dash.asciidoc",regex:/--.*$/},{token:"keyword.control.pig",regex:/\b(?:ASSERT|LOAD|STORE|DUMP|FILTER|DISTINCT|FOREACH|GENERATE|STREAM|JOIN|COGROUP|GROUP|CROSS|ORDER|LIMIT|UNION|SPLIT|DESCRIBE|EXPLAIN|ILLUSTRATE|AS|BY|INTO|USING|LIMIT|PARALLEL|OUTER|INNER|DEFAULT|LEFT|SAMPLE|RANK|CUBE|ALL|KILL|QUIT|MAPREDUCE|ASC|DESC|THROUGH|SHIP|CACHE|DECLARE|CASE|WHEN|THEN|END|IN|PARTITION|FULL|IMPORT|IF|ONSCHEMA|INPUT|OUTPUT)\b/,caseInsensitive:!0},{token:"storage.datatypes.pig",regex:/\b(?:int|long|float|double|chararray|bytearray|boolean|datetime|biginteger|bigdecimal|tuple|bag|map)\b/,caseInsensitive:!0},{token:"support.function.storage.pig",regex:/\b(?:PigStorage|BinStorage|BinaryStorage|PigDump|HBaseStorage|JsonLoader|JsonStorage|AvroStorage|TextLoader|PigStreaming|TrevniStorage|AccumuloStorage)\b/},{token:"support.function.udf.pig",regex:/\b(?:DIFF|TOBAG|TOMAP|TOP|TOTUPLE|RANDOM|FLATTEN|flatten|CUBE|ROLLUP|IsEmpty|ARITY|PluckTuple|SUBTRACT|BagToString)\b/},{token:"support.function.udf.math.pig",regex:/\b(?:ABS|ACOS|ASIN|ATAN|CBRT|CEIL|COS|COSH|EXP|FLOOR|LOG|LOG10|ROUND|ROUND_TO|SIN|SINH|SQRT|TAN|TANH|AVG|COUNT|COUNT_STAR|MAX|MIN|SUM|COR|COV)\b/},{token:"support.function.udf.string.pig",regex:/\b(?:CONCAT|INDEXOF|LAST_INDEX_OF|LCFIRST|LOWER|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|SIZE|STRSPLIT|SUBSTRING|TOKENIZE|TRIM|UCFIRST|UPPER|LTRIM|RTRIM|ENDSWITH|STARTSWITH|TRIM)\b/},{token:"support.function.udf.datetime.pig",regex:/\b(?:AddDuration|CurrentTime|DaysBetween|GetDay|GetHour|GetMilliSecond|GetMinute|GetMonth|GetSecond|GetWeek|GetWeekYear|GetYear|HoursBetween|MilliSecondsBetween|MinutesBetween|MonthsBetween|SecondsBetween|SubtractDuration|ToDate|WeeksBetween|YearsBetween|ToMilliSeconds|ToString|ToUnixTime)\b/},{token:"support.function.command.pig",regex:/\b(?:cat|cd|copyFromLocal|copyToLocal|cp|ls|mkdir|mv|pwd|rm)\b/},{token:"variable.pig",regex:/\$[a_zA-Z0-9_]+/},{token:"constant.language.pig",regex:/\b(?:NULL|true|false|stdin|stdout|stderr)\b/,caseInsensitive:!0},{token:"constant.numeric.pig",regex:/\b\d+(?:\.\d+)?\b/},{token:"keyword.operator.comparison.pig",regex:/!=|==|<|>|<=|>=|\b(?:MATCHES|IS|OR|AND|NOT)\b/,caseInsensitive:!0},{token:"keyword.operator.arithmetic.pig",regex:/\+|\-|\*|\/|\%|\?|:|::|\.\.|#/},{token:"string.quoted.double.pig",regex:/"/,push:[{token:"string.quoted.double.pig",regex:/"/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.double.pig"}]},{token:"string.quoted.single.pig",regex:/'/,push:[{token:"string.quoted.single.pig",regex:/'/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.single.pig"}]},{todo:{token:["text","keyword.parameter.pig","text","storage.type.parameter.pig"],regex:/^(\s*)(set)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/$/,next:"pop"},{include:"$self"}]}},{token:["text","keyword.alias.pig","text","storage.type.alias.pig"],regex:/(\s*)(DEFINE|DECLARE|REGISTER)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/;?$/,next:"pop"}]}]},this.normalizeRules()};l.metaData={fileTypes:["pig"],name:"Pig",scopeName:"source.pig"},n.inherits(l,r),t.PigHighlightRules=l})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,l=e("./fold_mode").FoldMode,c=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(c,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var line=e.getLine(o);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var n=this._getFoldWidgetBase(e,t,o);return!n&&this.startRegionRe.test(line)?"start":n},this.getFoldWidgetRange=function(e,t,o,n){var r,line=e.getLine(o);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,o);if(r=line.match(this.foldingStartMarker)){var i=r.index;if(r[1])return this.openingBracketBlock(e,r[1],o,i);var l=e.getCommentFoldRange(o,i+r[0].length,1);return l&&!l.isMultiLine()&&(n?l=this.getSectionRange(e,o):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(r=line.match(this.foldingStopMarker))){i=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],o,i):e.getCommentFoldRange(o,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),o=line.search(/\S/),n=t,l=line.length,c=t+=1,d=e.getLength();++t<d;){var h=(line=e.getLine(t)).search(/\S/);if(-1!==h){if(o>h)break;var R=this.getFoldWidgetRange(e,"all",t);if(R){if(R.start.row<=n)break;if(R.isMultiLine())t=R.end.row;else if(o==h)break}c=t}}return new r(n,l,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,line,t){for(var o=line.search(/\s*$/),n=e.getLength(),l=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,d=1;++t<n;){line=e.getLine(t);var h=c.exec(line);if(h&&(h[1]?d--:d++,!d))break}if(t>l)return new r(l,o,t,line.length)}}.call(c.prototype)})),ace.define("ace/mode/pig",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pig_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,l=e("./pig_highlight_rules").PigHighlightRules,c=e("./folding/cstyle").FoldMode,d=function(){this.HighlightRules=l,this.foldingRules=new c};n.inherits(d,r),function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/pig"}.call(d.prototype),t.Mode=d})),ace.require(["ace/mode/pig"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));