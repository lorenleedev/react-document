"use strict";(self.webpackChunkreact_document=self.webpackChunkreact_document||[]).push([[9117],{1756:e=>{function n(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var s=n[a],t=[];/^\w+$/.test(a)||t.push(/\w+/.exec(a)[0]),"diff"===a&&t.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+s+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:t,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(a)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(e)}e.exports=n,n.displayName="diff",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.478eb63c.chunk.js.map