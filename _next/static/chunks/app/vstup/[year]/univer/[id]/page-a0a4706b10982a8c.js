(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{539:function(e,t,r){Promise.resolve().then(r.bind(r,3350)),Promise.resolve().then(r.bind(r,6556)),Promise.resolve().then(r.bind(r,2291))},3350:function(e,t,r){"use strict";r.r(t),r.d(t,{facultiesColumns:function(){return c},offersColumns:function(){return u}});var n=r(4357),a=r(9126),o=r(111),s=r.n(o),i=r(1237);let l=(0,a.Cl)(),d=(0,a.Cl)(),c=[d.accessor("name",{header:"Факультет"}),d.accessor("budgetRequestCount",{header:e=>{let{column:t}=e;return(0,n.jsx)(i.l,{column:t,header:"Заяв на бюджет"})}}),d.accessor("desire",{header:e=>{let{column:t}=e;return(0,n.jsx)(i.l,{column:t,header:"Пріоритетність*"})}})],u=[l.accessor("usn",{header:"Освітня програма",cell:e=>(0,n.jsx)(s(),{href:"https://vstup.edbo.gov.ua/offer/".concat(e.row.original.usid,"/"),className:"underline",target:"_blank",children:e.getValue()})}),l.accessor("ssc",{header:"Спеціальність",cell:e=>(0,n.jsx)(s(),{href:"/vstup/2023/spec/".concat(e.row.original.ssc,"/"),className:"underline",children:e.getValue()})}),l.accessor("ufn",{header:"Факультет"}),l.accessor("budgetRequestCount",{header:e=>{let{column:t}=e;return(0,n.jsx)(i.l,{column:t,header:"Заяв на бюджет"})}}),l.accessor("st.c.rm",{header:e=>{let{column:t}=e;return(0,n.jsx)(i.l,{column:t,header:"Мін. бал на бюджет"})}}),l.accessor("desire",{header:e=>{let{column:t}=e;return(0,n.jsx)(i.l,{column:t,header:"Пріоритетність*"})}})]},6187:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(4357),a=r(6439),o=r(1137),s=r(8786),i=r(7791);let l=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:s,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:s,className:r})),ref:t,...c})});d.displayName="Button"},6556:function(e,t,r){"use strict";r.r(t),r.d(t,{DataTable:function(){return h}});var n=r(4357),a=r(6439),o=r(6667),s=r(9126),i=r(7791);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",r),...a})})});l.displayName="Table";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",r),...a})});d.displayName="TableHeader";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",r),...a})});c.displayName="TableBody";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,i.cn)("bg-primary font-medium text-primary-foreground",r),...a})});u.displayName="TableFooter";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});f.displayName="TableRow";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...a})});m.displayName="TableHead";let b=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...a})});b.displayName="TableCell";let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",r),...a})});function h(e){var t;let{columns:r,data:i}=e,[u,g]=a.useState([]),h=(0,o.b7)({data:i,columns:r,getCoreRowModel:(0,s.sC)(),onSortingChange:g,getSortedRowModel:(0,s.tj)(),state:{sorting:u}});return(0,n.jsx)("div",{className:"rounded-md border mt-5",children:(0,n.jsxs)(l,{children:[(0,n.jsx)(d,{children:h.getHeaderGroups().map(e=>(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{children:"#"}),e.headers.map(e=>(0,n.jsx)(m,{children:e.isPlaceholder?null:(0,o.ie)(e.column.columnDef.header,e.getContext())},e.id))]},e.id))}),(0,n.jsx)(c,{children:(null===(t=h.getRowModel().rows)||void 0===t?void 0:t.length)?h.getRowModel().rows.map((e,t)=>(0,n.jsxs)(f,{"data-state":e.getIsSelected()&&"selected",children:[(0,n.jsx)(b,{children:t+1}),e.getVisibleCells().map(e=>(0,n.jsx)(b,{children:(0,o.ie)(e.column.columnDef.cell,e.getContext())},e.id))]},e.id)):(0,n.jsx)(f,{children:(0,n.jsx)(b,{colSpan:r.length,className:"h-24 text-center",children:"No results."})})})]})})}g.displayName="TableCaption"},1237:function(e,t,r){"use strict";r.d(t,{l:function(){return s}});var n=r(4357),a=r(288),o=r(6187);function s(e){let{header:t,column:r}=e;return(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>r.toggleSorting("asc"===r.getIsSorted()),children:[t,(0,n.jsx)(a.Z,{className:"ml-2 h-4 w-4"})]})}},2291:function(e,t,r){"use strict";r.r(t),r.d(t,{Tabs:function(){return _},TabsContent:function(){return V},TabsList:function(){return k},TabsTrigger:function(){return M}});var n=r(4357),a=r(6439),o=r(8973),s=r(1036),i=r(4706),l=r(9387),d=r(8100),c=r(4850),u=r(9770),f=r(4952),m=r(9392);let b="Tabs",[g,h]=(0,i.b)(b,[l.Pc]),v=(0,l.Pc)(),[p,x]=g(b),y=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:s,defaultValue:i,orientation:l="horizontal",dir:d,activationMode:b="automatic",...g}=e,h=(0,u.gm)(d),[v,x]=(0,f.T)({prop:n,onChange:s,defaultProp:i});return(0,a.createElement)(p,{scope:r,baseId:(0,m.M)(),value:v,onValueChange:x,orientation:l,dir:h,activationMode:b},(0,a.createElement)(c.WV.div,(0,o.Z)({dir:h,"data-orientation":l},g,{ref:t})))}),j=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:r,loop:n=!0,...s}=e,i=x("TabsList",r),d=v(r);return(0,a.createElement)(l.fC,(0,o.Z)({asChild:!0},d,{orientation:i.orientation,dir:i.dir,loop:n}),(0,a.createElement)(c.WV.div,(0,o.Z)({role:"tablist","aria-orientation":i.orientation},s,{ref:t})))}),w=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:r,value:n,disabled:i=!1,...d}=e,u=x("TabsTrigger",r),f=v(r),m=C(u.baseId,n),b=R(u.baseId,n),g=n===u.value;return(0,a.createElement)(l.ck,(0,o.Z)({asChild:!0},f,{focusable:!i,active:g}),(0,a.createElement)(c.WV.button,(0,o.Z)({type:"button",role:"tab","aria-selected":g,"aria-controls":b,"data-state":g?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:m},d,{ref:t,onMouseDown:(0,s.M)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():u.onValueChange(n)}),onKeyDown:(0,s.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&u.onValueChange(n)}),onFocus:(0,s.M)(e.onFocus,()=>{let e="manual"!==u.activationMode;g||i||!e||u.onValueChange(n)})})))}),N=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:r,value:n,forceMount:s,children:i,...l}=e,u=x("TabsContent",r),f=C(u.baseId,n),m=R(u.baseId,n),b=n===u.value,g=(0,a.useRef)(b);return(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.createElement)(d.z,{present:s||b},({present:r})=>(0,a.createElement)(c.WV.div,(0,o.Z)({"data-state":b?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":f,hidden:!r,id:m,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0}}),r&&i))});function C(e,t){return`${e}-trigger-${t}`}function R(e,t){return`${e}-content-${t}`}var T=r(7791);let _=y,k=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(j,{ref:t,className:(0,T.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...a})});k.displayName=j.displayName;let M=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(w,{ref:t,className:(0,T.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...a})});M.displayName=w.displayName;let V=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(N,{ref:t,className:(0,T.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...a})});V.displayName=N.displayName},7791:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(3501),a=r(2701);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,n.W)(t))}}},function(e){e.O(0,[481,874,606,702,431,744],function(){return e(e.s=539)}),_N_E=e.O()}]);