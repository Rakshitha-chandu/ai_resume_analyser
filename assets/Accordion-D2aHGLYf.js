import{a as u,p as s}from"./chunk-OIYGIGL5-BqXurzTp.js";import{c as h}from"./utils-LCX7tCys.js";const x=u.createContext(void 0),m=()=>{const t=u.useContext(x);if(!t)throw new Error("Accordion components must be used within an Accordion");return t},p=({children:t,defaultOpen:o,allowMultiple:n=!1,className:r=""})=>{const[c,a]=u.useState(o?[o]:[]),l=e=>{a(i=>n?i.includes(e)?i.filter(f=>f!==e):[...i,e]:i.includes(e)?[]:[e])},d=e=>c.includes(e);return s.jsx(x.Provider,{value:{activeItems:c,toggleItem:l,isItemActive:d},children:s.jsx("div",{className:`space-y-2 ${r}`,children:t})})},j=({id:t,children:o,className:n=""})=>s.jsx("div",{className:`overflow-hidden border-b border-gray-200 ${n}`,children:o}),w=({itemId:t,children:o,className:n="",icon:r,iconPosition:c="right"})=>{const{toggleItem:a,isItemActive:l}=m(),d=l(t),e=s.jsx("svg",{className:h("w-5 h-5 transition-transform duration-200",{"rotate-180":d}),fill:"none",stroke:"#98A2B3",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),i=()=>{a(t)};return s.jsxs("button",{onClick:i,className:`
        w-full px-4 py-3 text-left
        focus:outline-none
        transition-colors duration-200 flex items-center justify-between cursor-pointer
        ${n}
      `,children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[c==="left"&&(r||e),s.jsx("div",{className:"flex-1",children:o})]}),c==="right"&&(r||e)]})},g=({itemId:t,children:o,className:n=""})=>{const{isItemActive:r}=m(),c=r(t);return s.jsx("div",{className:`
        overflow-hidden transition-all duration-300 ease-in-out
        ${c?"max-h-fit opacity-100":"max-h-0 opacity-0"}
        ${n}
      `,children:s.jsx("div",{className:"px-4 py-3 ",children:o})})};export{p as A,j as a,w as b,g as c};
