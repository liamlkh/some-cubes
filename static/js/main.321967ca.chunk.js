(this["webpackJsonpsome-cubes"]=this["webpackJsonpsome-cubes"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(34),s=n.n(i),r=n(5),c=n(9),o=n(16),a=n(24),u=n(32),l=n(0),j=n(12),b=function(e){var t=e.pos,n=Object(a.b)((function(){return{mass:1,args:[.8,.8,.8],position:[t.x+10*(2*Math.random()-1),t.y+10*(2*Math.random()-1),5*(2*Math.random()-1)],rotation:[2*Math.PI*Math.random(),2*Math.PI*Math.random(),2*Math.PI*Math.random()]}})),i=Object(c.a)(n,2),s=i[0],o=i[1],u=new l.Vector3(0,0,0),b=new l.Vector3;return Object(r.useEffect)((function(){o.position.subscribe((function(e){b.set(e[0],e[1],0);var t=5-b.distanceTo(u),n=b.normalize().multiplyScalar(3*t).toArray();n[2]=0-3*e[2],o.applyForce(n,[0,0,0])}))}),[o]),Object(j.jsxs)("mesh",{ref:s,children:[Object(j.jsx)("boxBufferGeometry",{attach:"geometry",args:[.8,.8,.8]}),Object(j.jsx)("meshPhysicalMaterial",{clearcoat:.8,clearcoatRoughness:0,roughness:1,metalness:.7})]})};function h(){var e=new l.EllipseCurve(0,0,5,5,0,2*Math.PI,!0,0).getPoints(120).slice(0,-1),t=Object(r.useRef)(),n=Object(o.d)(),i=(n.camera,n.mouse),s=Object(r.useMemo)((function(){return[new l.Euler,new l.Quaternion]}),[]),a=Object(c.a)(s,2),u=a[0],h=a[1];return Object(o.b)((function(){u.set(-i.y*Math.PI*.02,i.x*Math.PI*.08,0),t.current.quaternion.slerp(h.setFromEuler(u),.1)})),Object(j.jsx)("group",{ref:t,children:e.map((function(e,t){return Object(j.jsx)(b,{pos:e},t)}))})}var p=function(){var e=Object(o.d)((function(e){return e.viewport})),t=Object(a.c)((function(){return{type:"Kinematic",args:1}})),n=Object(c.a)(t,2),i=(n[0],n[1]);return Object(o.b)((function(t){i.position.set(t.mouse.x*e.width/2,t.mouse.y*e.height/2,0)})),null},m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(o.a,{dpr:1.5,gl:{alpha:!0,stencil:!1,depth:!1,antialias:!1},camera:{position:[0,0,30],fov:35},onCreated:function(e){return e.gl.toneMappingExposure=1.5},children:[Object(j.jsx)("ambientLight",{intensity:.75}),Object(j.jsx)("directionalLight",{position:[0,5,4],intensity:4}),Object(j.jsx)("directionalLight",{position:[0,-15,0],intensity:4,color:"#a87ea0"}),Object(j.jsx)("pointLight",{position:[-30,0,20],color:"blue",intensity:.8}),Object(j.jsx)("pointLight",{position:[30,0,20],color:"red",intensity:.8}),Object(j.jsxs)(a.a,{gravity:[0,0,0],iterations:1,broadphase:"SAP",children:[Object(j.jsx)(p,{}),Object(j.jsx)(h,{})]}),Object(j.jsxs)(u.a,{multisampling:0,children:[Object(j.jsx)(u.b,{samples:11,radius:30,intensity:30,luminanceInfluence:.6,color:"#9c6892"}),Object(j.jsx)(u.b,{samples:21,radius:5,intensity:30,luminanceInfluence:.6,color:"#9c6892"})]})]}),Object(j.jsxs)("footer",{children:["three.js sketch by ",Object(j.jsx)("a",{target:"_blank",href:"https://liamlkh.github.io/portfolio-site/",children:"liamlkh"})]})]})};n(44);s.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.Suspense,{fallback:null,children:Object(j.jsx)(m,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.321967ca.chunk.js.map