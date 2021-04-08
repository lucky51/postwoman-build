ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],(function(e,t,n){"use strict";var o=e("../lib/event");t.contextMenuHandler=function(e){var t=e.target,text=t.textInput.getElement();if(t.selection.isEmpty()){var n=t.getCursorPosition(),r=t.session.getWordRange(n.row,n.column),c=t.session.getTextRange(r);if(t.session.tokenRe.lastIndex=0,t.session.tokenRe.test(c)){var l=c+" ";text.value=l,text.setSelectionRange(c.length,c.length+1),text.setSelectionRange(0,0),text.setSelectionRange(0,c.length);var d=!1;o.addListener(text,"keydown",(function e(){o.removeListener(text,"keydown",e),d=!0})),t.textInput.setInputHandler((function(e){if(e==l)return"";if(0===e.lastIndexOf(l,0))return e.slice(l.length);if(e.substr(text.selectionEnd)==l)return e.slice(0,-l.length);if(""==e.slice(-2)){var n=e.slice(0,-2);if(" "==n.slice(-1))return d?n.substring(0,text.selectionEnd):(n=n.slice(0,-1),t.session.replace(r,n),"")}return e}))}}};var r=e("../editor").Editor;e("../config").defineOptions(r.prototype,"editor",{spellcheck:{set:function(e){this.textInput.getElement().spellcheck=!!e,e?this.on("nativecontextmenu",t.contextMenuHandler):this.removeListener("nativecontextmenu",t.contextMenuHandler)},value:!0}})})),ace.require(["ace/ext/spellcheck"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));