(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{8986:function(e,r,t){Promise.resolve().then(t.bind(t,7749)),Promise.resolve().then(t.bind(t,6556))},7749:function(e,r,t){"use strict";t.r(r),t.d(r,{columns:function(){return d}});var n=t(4357),o=t(1237),s=t(9126),a=t(111),l=t.n(a);let i=(0,s.Cl)(),d=[i.accessor("university_short_name",{header:"Назва ВНЗ",cell:e=>(0,n.jsx)(l(),{href:"/vstup/2023/univer/".concat(e.row.original.university_id),className:"underline",prefetch:!1,children:e.getValue()})}),i.accessor("desire",{header:e=>{let{column:r}=e;return(0,n.jsx)(o.l,{column:r,header:"Пріоритетність*"})}})]},6187:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(4357),o=t(6439),s=t(1137),a=t(8786),l=t(7791);let i=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef((e,r)=>{let{className:t,variant:o,size:a,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(i({variant:o,size:a,className:t})),ref:r,...c})});d.displayName="Button"},6556:function(e,r,t){"use strict";t.r(r),t.d(r,{DataTable:function(){return b}});var n=t(4357),o=t(6439),s=t(6667),a=t(9126),l=t(7791);let i=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:r,className:(0,l.cn)("w-full caption-bottom text-sm",t),...o})})});i.displayName="Table";let d=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("thead",{ref:r,className:(0,l.cn)("[&_tr]:border-b",t),...o})});d.displayName="TableHeader";let c=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...o})});c.displayName="TableBody";let u=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,l.cn)("bg-primary font-medium text-primary-foreground",t),...o})});u.displayName="TableFooter";let f=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("tr",{ref:r,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...o})});f.displayName="TableRow";let m=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("th",{ref:r,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...o})});m.displayName="TableHead";let h=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("td",{ref:r,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...o})});h.displayName="TableCell";let g=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("caption",{ref:r,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",t),...o})});function b(e){var r;let{columns:t,data:l}=e,[u,g]=o.useState([]),b=(0,s.b7)({data:l,columns:t,getCoreRowModel:(0,a.sC)(),onSortingChange:g,getSortedRowModel:(0,a.tj)(),state:{sorting:u}});return(0,n.jsx)("div",{className:"rounded-md border",children:(0,n.jsxs)(i,{children:[(0,n.jsx)(d,{children:b.getHeaderGroups().map(e=>(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{children:"#"}),e.headers.map(e=>(0,n.jsx)(m,{children:e.isPlaceholder?null:(0,s.ie)(e.column.columnDef.header,e.getContext())},e.id))]},e.id))}),(0,n.jsx)(c,{children:(null===(r=b.getRowModel().rows)||void 0===r?void 0:r.length)?b.getRowModel().rows.map((e,r)=>(0,n.jsxs)(f,{"data-state":e.getIsSelected()&&"selected",children:[(0,n.jsx)(h,{children:r+1}),e.getVisibleCells().map(e=>(0,n.jsx)(h,{children:(0,s.ie)(e.column.columnDef.cell,e.getContext())},e.id))]},e.id)):(0,n.jsx)(f,{children:(0,n.jsx)(h,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})})}g.displayName="TableCaption"},1237:function(e,r,t){"use strict";t.d(r,{l:function(){return a}});var n=t(4357),o=t(288),s=t(6187);function a(e){let{header:r,column:t}=e;return(0,n.jsxs)(s.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:[r,(0,n.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},7791:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(3501),o=t(2701);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.m)((0,n.W)(r))}}},function(e){e.O(0,[481,874,702,431,744],function(){return e(e.s=8986)}),_N_E=e.O()}]);