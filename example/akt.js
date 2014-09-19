/*
         _                   _            _                  _        _        
        / /\                /\_\         /\ \               /\ \     / /\      
       / /  \              / / /  _      \_\ \              \ \ \   / /  \     
      / / /\ \            / / /  /\_\    /\__ \             /\ \_\ / / /\ \__  
     / / /\ \ \          / / /__/ / /   / /_ \ \           / /\/_// / /\ \___\ 
    / / /  \ \ \        / /\_____/ /   / / /\ \ \ _       / / /   \ \ \ \/___/ 
   / / /___/ /\ \      / /\_______/   / / /  \/_//\ \    / / /     \ \ \       
  / / /_____/ /\ \    / / /\ \ \     / / /       \ \_\  / / /  _    \ \ \      
 / /_________/\ \ \  / / /  \ \ \   / / /_       / / /_/ / /  /_/\__/ / /      
/ / /_       __\ \_\/ / /    \ \ \ /_/ //\_\    / / /__\/ /   \ \/___/ /       
\_\___\     /____/_/\/_/      \_\_\\_\/ \/_/    \/_______/     \_____\/    


akt.js | version 0.0.1
(c) Travis Loncar (https://github.com/tbloncar)

*/

// javascript object literal parser (https://github.com/mbest/js-object-literal-parse)
(function(e,t){if(typeof exports==="object"){module.exports=t()}else if(typeof define==="function"&&define.amd){define(t)}else{e.parseObjectLiteral=t()}})(this,function(e){function l(e){return e==null?"":e.trim?e.trim():e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}var t='"(?:[^"\\\\]|\\\\.)*"',n="'(?:[^'\\\\]|\\\\.)*'",r="/(?:[^/\\\\]|\\\\.)*/w*",i=",\"'{}()/:[\\]",s="[^\\s:,/][^"+i+"]*[^\\s"+i+"]",o="[^\\s]",u=RegExp(t+"|"+n+"|"+r+"|"+s+"|"+o,"g"),a=/[\])A-Za-z0-9_$]$/,f=/(in|return|typeof)$/;return function(t){var n=l(t);if(n.charCodeAt(0)===123)n=n.slice(1,-1);var r=[],i=n.match(u),s,o,c=0;if(i){i.push(",");for(var h=0,p;p=i[h];++h){var d=p.charCodeAt(0);if(d===44){if(c<=0){if(s)r.push([s,o?o.join(""):e]);s=o=c=0;continue}}else if(d===58){if(!o)continue}else if(d===47&&h&&p.length>1){if(a.test(i[h-1])&&!f.test(i[h-1])){n=n.substr(n.indexOf(p)+1);i=n.match(u);i.push(",");h=-1;p="/"}}else if(d===40||d===123||d===91){++c}else if(d===41||d===125||d===93){--c}else if(!s&&!o){s=d===34||d===39?p.slice(1,-1):p;continue}if(o)o.push(p);else o=[p]}}return r}});

var Akt = (function(jQ, pOL, undefined) {

  // Parse akt data string
  function parseDataStr(str) {
    var dataAry = pOL(str), data = {}; 

    for(var i = 0, l = dataAry.length; i < l; i++) {
      data[dataAry[i][0]] = dataAry[i][1];
    }

    return data;
  }

  return {
    $: function(slctr) {
      return jQ('[data-akt-s="' + slctr + '"]'); 
    },

    on: function(slctr, evnt, cb) {
      this.$(slctr).on(evnt, function(e) {
        var dataStr = $(this).data('aktD');

        cb.call(this, e, parseDataStr(dataStr)); 
      }); 
    }
  };

}(jQuery, parseObjectLiteral));