ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},l.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};r.inherits(l,o),l.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},l.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},l.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=l})),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,l=e("./text_highlight_rules").TextHighlightRules,c="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",d=function(e){var t=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),n="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[o.getStartRule("doc-start"),h("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+c+")(\\.)(prototype)(\\.)("+c+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+c+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"from(?=\\s*('|\"))"},{token:"keyword",regex:"(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:t,regex:c},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:c},{regex:"",token:"empty",next:"no_regex"}],start:[o.getStartRule("doc-start"),h("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:c},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:n},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:n},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},e&&e.noES6||(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,t,n){if(this.next="{"==e?this.nextState:"","{"==e&&n.length)n.unshift("start",t);else if("}"==e&&n.length&&(n.shift(),this.next=n.shift(),-1!=this.next.indexOf("string")||-1!=this.next.indexOf("jsx")))return"paren.quasi.end";return"{"==e?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:n},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),e&&0==e.jsx||x.call(this)),this.embedRules(o,"doc-",[o.getEndRule("no_regex")]),this.normalizeRules()};function x(){var e=c.replace("\\d","\\d\\-"),t={onMatch:function(e,t,n){var r="/"==e.charAt(1)?2:1;return 1==r?(t!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):2==r&&t==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(1==r?"":"end-")+"tag-open.xml",value:e.slice(0,r)},{type:"meta.tag.tag-name.xml",value:e.substr(r)}]},regex:"</?"+e,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(t);var n={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[n,t,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,t,n){return t==n[0]&&n.shift(),2==e.length&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},n,h("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:e},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},t],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function h(e){return[{token:"comment",regex:/\/\*/,next:[o.getTagRule(),{token:"comment",regex:"\\*\\/",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[o.getTagRule(),{token:"comment",regex:"$|^",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}r.inherits(d,l),t.JavaScriptHighlightRules=d})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,l=e.findMatchingBracket({row:t,column:o});if(!l||l.row==t)return 0;var c=this.$getIndent(e.getLine(l.row));e.replace(new r(t,0,t,o-1),c)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("../../range").Range,l=e("./fold_mode").FoldMode,c=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(c,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(line)?"start":r},this.getFoldWidgetRange=function(e,t,n,r){var o,line=e.getLine(n);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,n);if(o=line.match(this.foldingStartMarker)){var i=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,i);var l=e.getCommentFoldRange(n,i+o[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(o=line.match(this.foldingStopMarker))){i=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,i):e.getCommentFoldRange(n,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),n=line.search(/\S/),r=t,l=line.length,c=t+=1,d=e.getLength();++t<d;){var x=(line=e.getLine(t)).search(/\S/);if(-1!==x){if(n>x)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=r)break;if(h.isMultiLine())t=h.end.row;else if(n==x)break}c=t}}return new o(r,l,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),r=e.getLength(),l=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,d=1;++t<r;){line=e.getLine(t);var x=c.exec(line);if(x&&(x[1]?d--:d++,!d))break}if(t>l)return new o(l,n,t,line.length)}}.call(c.prototype)})),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,l=e("./javascript_highlight_rules").JavaScriptHighlightRules,c=e("./matching_brace_outdent").MatchingBraceOutdent,d=e("../worker/worker_client").WorkerClient,x=e("./behaviour/cstyle").CstyleBehaviour,h=e("./folding/cstyle").FoldMode,m=function(){this.HighlightRules=l,this.$outdent=new c,this.$behaviour=new x,this.foldingRules=new h};r.inherits(m,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(e,line,t){var n=this.$getIndent(line),r=this.getTokenizer().getLineTokens(line,e),o=r.tokens,l=r.state;if(o.length&&"comment"==o[o.length-1].type)return n;if("start"==e||"no_regex"==e)(c=line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/))&&(n+=t);else if("doc-start"==e){if("start"==l||"no_regex"==l)return"";var c;(c=line.match(/^\s*(\/?)\*/))&&(c[1]&&(n+=" "),n+="* ")}return n},this.checkOutdent=function(e,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new d(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(m.prototype),t.Mode=m})),ace.define("ace/mode/sjs_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/javascript_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./javascript_highlight_rules").JavaScriptHighlightRules,l=e("./text_highlight_rules").TextHighlightRules,c=function(){var e=new o({noES6:!0}),t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",n=function(e){return e.isContextAware=!0,e},r=function(e){return{token:e.token,regex:e.regex,next:n((function(t,n){return 0===n.length&&n.unshift(t),n.unshift(e.next),e.next}))}},l=function(e){return{token:e.token,regex:e.regex,next:n((function(e,t){return t.shift(),t[0]||"start"}))}};this.$rules=e.$rules,this.$rules.no_regex=[{token:"keyword",regex:"(waitfor|or|and|collapse|spawn|retract)\\b"},{token:"keyword.operator",regex:"(->|=>|\\.\\.)"},{token:"variable.language",regex:"(hold|default)\\b"},r({token:"string",regex:"`",next:"bstring"}),r({token:"string",regex:'"',next:"qqstring"}),r({token:"string",regex:'"',next:"qqstring"}),{token:["paren.lparen","text","paren.rparen"],regex:"(\\{)(\\s*)(\\|)",next:"block_arguments"}].concat(this.$rules.no_regex),this.$rules.block_arguments=[{token:"paren.rparen",regex:"\\|",next:"no_regex"}].concat(this.$rules.function_arguments),this.$rules.bstring=[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",next:"bstring"},r({token:"paren.lparen",regex:"\\$\\{",next:"string_interp"}),r({token:"paren.lparen",regex:"\\$",next:"bstring_interp_single"}),l({token:"string",regex:"`"}),{defaultToken:"string"}],this.$rules.qqstring=[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",next:"qqstring"},r({token:"paren.lparen",regex:"#\\{",next:"string_interp"}),l({token:"string",regex:'"'}),{defaultToken:"string"}];for(var c=[],i=0;i<this.$rules.no_regex.length;i++){var d=this.$rules.no_regex[i];-1!=String(d.token).indexOf("paren")||d.next&&!d.next.isContextAware||c.push(d)}this.$rules.string_interp=[l({token:"paren.rparen",regex:"\\}"}),r({token:"paren.lparen",regex:"{",next:"string_interp"})].concat(c),this.$rules.bstring_interp_single=[{token:["identifier","paren.lparen"],regex:"(\\w+)(\\()",next:"bstring_interp_single_call"},l({token:"identifier",regex:"\\w*"})],this.$rules.bstring_interp_single_call=[r({token:"paren.lparen",regex:"\\(",next:"bstring_interp_single_call"}),l({token:"paren.rparen",regex:"\\)"})].concat(c)};r.inherits(c,l),t.SJSHighlightRules=c})),ace.define("ace/mode/sjs",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/sjs_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./javascript").Mode,l=e("./sjs_highlight_rules").SJSHighlightRules,c=e("./matching_brace_outdent").MatchingBraceOutdent,d=e("./behaviour/cstyle").CstyleBehaviour,x=e("./folding/cstyle").FoldMode,h=function(){this.HighlightRules=l,this.$outdent=new c,this.$behaviour=new d,this.foldingRules=new x};r.inherits(h,o),function(){this.createWorker=function(e){return null},this.$id="ace/mode/sjs"}.call(h.prototype),t.Mode=h})),ace.require(["ace/mode/sjs"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));