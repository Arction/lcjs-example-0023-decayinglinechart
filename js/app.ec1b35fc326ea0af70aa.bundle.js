(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const l=a(377),{lightningChart:r,emptyFill:s,SolidFill:n,SolidLine:o,ColorRGBA:i,Themes:h}=l,c=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Decaying Line Chart").setCursorMode(void 0),d=c.getTheme(),g=(c.getDefaultAxisX(),c.getDefaultAxisY().setInterval({start:-1.05,end:1.05}),new Array(75).fill(0).map(((e,t)=>c.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setAreaFillStyle(s).setPointFillStyle(s)))),m=g[0].getStrokeStyle().getFillStyle().getColor(),u=new Array(75).fill(0).map(((e,t)=>{const a=t/75,l=(e,t,a)=>e*(1-a)+t*a;return new o({thickness:1,fillStyle:new n({color:i(l(m.getR(),d.isDark?0:255,a),l(m.getG(),d.isDark?0:255,a),l(m.getB(),d.isDark?0:255,a),l(255,0,a))})})})),S=[];for(let e=0;e<300;e+=1){const t=[],a=Math.cos(2*e*Math.PI/300);for(let l=0;l<1280;l+=1){let r=Math.cos(.01*e+5*l*Math.PI/1280)*a;r+=.02*Math.random(),t.push({x:l,y:r})}S.push(t)}let k=0;const p=()=>{const e=S[k%300],t=k%g.length;g[t].clear().appendJSON(e),g.forEach(((e,a)=>{let l=t-a;l<0&&(l=u.length+l);const r=u[l];e.setStrokeStyle(r)})),k+=1,requestAnimationFrame(p)};p()}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);