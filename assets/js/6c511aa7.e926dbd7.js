"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9562],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(4137));const o={title:"How to report a website",sidebar_position:3},i=void 0,l={unversionedId:"miscellaneous/guides/report-website",id:"miscellaneous/guides/report-website",title:"How to report a website",description:"When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:",source:"@site/docs/miscellaneous/guides/report-website.md",sourceDirName:"miscellaneous/guides",slug:"/miscellaneous/guides/report-website",permalink:"/KnowledgeBase/miscellaneous/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to report a website",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to install a proxy certificate",permalink:"/KnowledgeBase/miscellaneous/guides/install-certificate"},next:{title:"How to take a screenshot",permalink:"/KnowledgeBase/miscellaneous/guides/take-screenshot"}},s={},d=[{value:"Report a website",id:"report",level:2},{value:"Browser extension",id:"extension",level:3},{value:"Windows",id:"windows",level:3},{value:"Android",id:"android",level:3},{value:"Mac",id:"mac",level:3},{value:"iOS",id:"ios",level:3},{value:"Filling in the form",id:"form",level:2},{value:"Diagnosis of an issue",id:"issue",level:2},{value:"<strong>Filters</strong>",id:"filters",level:3},{value:"<strong>Stealth Mode</strong>",id:"stealth-mode",level:3},{value:"<strong>Extensions</strong>",id:"extensions",level:3},{value:"<strong>Third-party blockers</strong>",id:"third-party-blockers",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Incorrect user rules;"),(0,n.kt)("li",{parentName:"ul"},"Modified algorithms of adding ads;"),(0,n.kt)("li",{parentName:"ul"},"Added filters/extensions from third-party developers;"),(0,n.kt)("li",{parentName:"ul"},"The authors of one of the filters made a mistake when creating the rule;"),(0,n.kt)("li",{parentName:"ul"},"Advertising reinsertion. Find more about this method in our ",(0,n.kt)("a",{parentName:"li",href:"https://adguard.com/ru/blog/ad-reinsertion.html"},"blog"),". ")),(0,n.kt)("p",null,"You can help us by filling in an application form with examples of ads you faced with. To do it, please, use instructions for your OS."),(0,n.kt)("h2",{id:"report"},"Report a website"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a ",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"direct link"),", you\u2019ll need to enter data manually.")),(0,n.kt)("p",null,"To report a reinsertion of an ad or incorrect displaying of a website, you need to:"),(0,n.kt)("h3",{id:"extension"},"Browser extension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser extension settings by clicking on the corresponding icon;"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/extension_issue.png",alt:"extension"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After you've filled in the form, an issue on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://kb.adguard.com/en/windows/features/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,n.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/browser-assistant.png",alt:"windows"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,n.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open AdGuard settings;"),(0,n.kt)("li",{parentName:"ul"},"\u0421hoose ",(0,n.kt)("strong",{parentName:"li"},"Support"),", then ",(0,n.kt)("strong",{parentName:"li"},"Send Feedback")," -> ",(0,n.kt)("strong",{parentName:"li"},"Missed ad"),"/",(0,n.kt)("strong",{parentName:"li"},"Incorrect blocking"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/android.png",alt:"android"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After you've filled in the form, an issue on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,n.kt)("h3",{id:"mac"},"Mac"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://kb.adguard.com/en/macos/overview/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,n.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/browser-assistant-mac.png",alt:"mac"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,n.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open AdGuard settings;"),(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Support"),", then ",(0,n.kt)("strong",{parentName:"li"},"Report incorrect blocking"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/ios_issue.png",alt:"ios"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,n.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,n.kt)("h2",{id:"form"},"Filling in the form"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a ",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/en/new_issue.html"},"direct link"),", you\u2019ll need to enter data manually.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Filling in the form starts with detailing the type and version of a product;\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma1en.png",alt:"forma1"})),(0,n.kt)("li",{parentName:"ol"},"Specify the type of problem and additional information on using third-party software (antivirus, VPN);\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma2en.png",alt:"forma2"})),(0,n.kt)("li",{parentName:"ol"},"Enter the address of the page where you have encountered the problem (or full download link in case of an app), and the browser where you've encountered a problem;\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma3en.png",alt:"forma3"})),(0,n.kt)("li",{parentName:"ol"},"Application configuration must be specified:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filters you use;"),(0,n.kt)("li",{parentName:"ul"},"Stealth mode settings, if this function is enabled.\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma4en.png",alt:"forma4"}))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/KnowledgeBase/miscellaneous/guides/take-screenshot"},"Provide a screenshot")," that captures the essence of a problem;")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Important"),": Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma5en.png",alt:"forma5"}))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Provide additional information that will help filter developers understand the situation;\nAlso enter your account on ",(0,n.kt)("strong",{parentName:"li"},"GitHub"),", if available (it's necessary for developers to be able to reach you in case they need some additional details);\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma6en.png",alt:"forma6"})),(0,n.kt)("li",{parentName:"ol"},"Check each step before sending the form;\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma7en.png",alt:"forma7"})),(0,n.kt)("li",{parentName:"ol"},"You'll be provided with a link to track progress on your task.\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.adguard.com/content/Kb/ad_blocker/guides/forma8en.png",alt:"forma8"}))),(0,n.kt)("h2",{id:"issue"},"Diagnosis of an issue"),(0,n.kt)("p",null,"This option is suitable for those who aren\u2019t afraid of difficulties and don\u2019t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS."),(0,n.kt)("p",null,"For example, you are faced with a situation that your favorite website won\u2019t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:"),(0,n.kt)("h3",{id:"filters"},(0,n.kt)("strong",{parentName:"h3"},"Filters")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Ad Blocker"),";"),(0,n.kt)("li",{parentName:"ol"},'If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,n.kt)("li",{parentName:"ol"},"If turning off all the filters hasn't produced any results, apply rule\n",(0,n.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),";\nwhere ",(0,n.kt)("strong",{parentName:"li"},"example.com")," is an example site name that needs to be replaced by your own option;"),(0,n.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),".")),(0,n.kt)("h3",{id:"stealth-mode"},(0,n.kt)("strong",{parentName:"h3"},"Stealth Mode")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),";"),(0,n.kt)("li",{parentName:"ol"},"If this solved the problem, turn the module on and turn off the ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),' options one by one. This is done to detect which filters are "breaking" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,n.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),".")),(0,n.kt)("h3",{id:"extensions"},(0,n.kt)("strong",{parentName:"h3"},"Extensions")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),";"),(0,n.kt)("li",{parentName:"ol"},"If this solved the problem, turn on the module and turn off ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),' settings one by one. This is done to find out which setting "breaks" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.')),(0,n.kt)("h3",{id:"third-party-blockers"},(0,n.kt)("strong",{parentName:"h3"},"Third-party blockers")),(0,n.kt)("p",null,"Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites.\nIf you use such programs, make sure that the problem is on the side of ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),": disable ",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser.\nIf the problem is caused by ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),", follow the steps described in the previous paragraphs."))}p.isMDXComponent=!0}}]);