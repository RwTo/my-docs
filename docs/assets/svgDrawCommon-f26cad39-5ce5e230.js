import{n as a}from"./mermaid.core-33fab989.js";const l=function(e,t){const r=e.append("rect");if(r.attr("x",t.x),r.attr("y",t.y),r.attr("fill",t.fill),r.attr("stroke",t.stroke),r.attr("width",t.width),r.attr("height",t.height),r.attr("rx",t.rx),r.attr("ry",t.ry),t.attrs!=="undefined"&&t.attrs!==null)for(let n in t.attrs)r.attr(n,t.attrs[n]);return t.class!=="undefined"&&r.attr("class",t.class),r},c=function(e,t){l(e,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"}).lower()},x=function(e,t){const r=t.text.replace(/<br\s*\/?>/gi," "),n=e.append("text");n.attr("x",t.x),n.attr("y",t.y),n.attr("class","legend"),n.style("text-anchor",t.anchor),t.class!==void 0&&n.attr("class",t.class);const s=n.append("tspan");return s.attr("x",t.x+t.textMargin*2),s.text(r),n},d=function(e,t,r,n){const s=e.append("image");s.attr("x",t),s.attr("y",r);var i=a(n);s.attr("xlink:href",i)},f=function(e,t,r,n){const s=e.append("use");s.attr("x",t),s.attr("y",r);const i=a(n);s.attr("xlink:href","#"+i)},h=function(){return{x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}},g=function(){return{x:0,y:0,width:100,height:100,fill:void 0,anchor:void 0,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0,valign:void 0}};export{c as a,f as b,d as c,l as d,g as e,x as f,h as g};
