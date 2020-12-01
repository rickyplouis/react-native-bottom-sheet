(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(83)),c={id:"custom-background",title:"Custom Background",slug:"/custom-background",hide_table_of_contents:!0},i={unversionedId:"custom-background",id:"custom-background",isDocsHomePage:!1,title:"Custom Background",description:"To override the default background, you will need to pass the prop backgroundComponent to the BottomSheet component.",source:"@site/docs/custom-background.md",slug:"/custom-background",permalink:"/react-native-bottom-sheet/custom-background",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/custom-background.md",version:"current",sidebar:"packages",previous:{title:"Custom Handle",permalink:"/react-native-bottom-sheet/custom-handle"},next:{title:"Troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting"}},u=[{value:"Example",id:"example",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To override the default background, you will need to pass the prop ",Object(a.b)("inlineCode",{parentName:"p"},"backgroundComponent")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheet")," component."),Object(a.b)("p",null,"When you provide your own background component, it will receive an animated prop ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the index of the current position of the sheet."),Object(a.b)("p",null,"You can extend your custom handle props interface with the provided ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheetBackgroundProps")," interface to expose ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," into your props."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Here is an example of a custom background component: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"TODO\n")))}l.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);