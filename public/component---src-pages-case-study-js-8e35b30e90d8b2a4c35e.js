(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5Oyn":function(e,a,t){"use strict";var l=t("o0o1"),n=t.n(l),c=(t("ls82"),t("HaE+")),r=t("q1tI"),s=t.n(r),m=t("vDqi"),i=t.n(m),o=t("w4X8"),u=t("NKCw"),d=t("2BYM"),E=t.n(d),p=t("PSD3"),v=t.n(p),g=E()(v.a),b={name:"",email:"",number:"",subject:"",text:""};a.a=function(){var e=Object(r.useState)(b),a=e[0],t=e[1],l=Object(u.a)(),m=l.register,d=l.handleSubmit,E=l.errors,p=function(e){var a=e.target,l=a.name,n=a.value;t((function(e){var a;return Object.assign({},e,((a={})[l]=n,a))}))},v=function(){var e=Object(c.a)(n.a.mark((function e(l){var c,r,s,m,u,d,E;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=o.a+"/api/contact",r=a.name,s=a.email,m=a.number,u=a.subject,d=a.text,E={name:r,email:s,number:m,subject:u,text:d},e.next=6,i.a.post(c,E);case 6:t(b),g.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement("form",{id:"contactForm",onSubmit:d(v)},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:a.name,onChange:p,ref:m({required:!0})}),s.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.name&&"Name is required."))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:p,ref:m({required:!0,pattern:/^\S+@\S+$/i})}),s.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.email&&"Email is required."))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject",value:a.subject,onChange:p,ref:m({required:!0})}),s.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.subject&&"Subject is required."))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"number",className:"form-control",placeholder:"Phone",value:a.number,onChange:p,ref:m({required:!0})}),s.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.number&&"Number is required."))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{name:"text",className:"form-control",cols:"30",rows:"6",placeholder:"Write message",value:a.text,onChange:p,ref:m({required:!0})}),s.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},E.text&&"Text body is required.")))),s.a.createElement("button",{type:"submit",className:"btn common-btn"},"Send Message ",s.a.createElement("span",null)))}},"72qL":function(e,a,t){e.exports=t.p+"static/case-study3-4024b17247eb6123928ff326d984b32b.jpg"},GBA2:function(e,a,t){e.exports=t.p+"static/case-study2-4834e48de67c71b3a791418405c34d38.jpg"},GZMc:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("Wbzz"),r=t("hd9/"),s=t.n(r);a.a=function(){return n.a.createElement("div",{className:"top-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"logo"},n.a.createElement(c.Link,{to:"/"},n.a.createElement("img",{src:s.a,alt:"Logo"})))))))}},Hr5K:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l);a.a=function(){var e=(new Date).getFullYear();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"copyright-area seven"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"copyright-item"},n.a.createElement("p",null,"©",e," Design & Developed by ",n.a.createElement("a",{href:"#",target:"_blank",rel:"noreferrer"},"Engage"))))))}},"hd9/":function(e,a,t){e.exports=t.p+"static/engage-small-logo-d21c8bde197bd48f1c215a32dc585ff7.svg"},mSrY:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("GZMc"),r=t("s8IH"),s=t("Wbzz"),m=t("yAkU"),i=t.n(m),o=t("GBA2"),u=t.n(o),d=t("72qL"),E=t.n(d),p=function(){return n.a.createElement("div",{className:"case-study-area pb-200"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title four pt-100 pb-100"},n.a.createElement("h2",null,"Some In Depth ",n.a.createElement("span",null,"Case Study")," Of Our Successful Projects")),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-img"},n.a.createElement("div",{className:"overlay"},n.a.createElement("img",{src:i.a,alt:"Work"}),n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/projects/case-study-details"},"Saas Webdevelopment")),n.a.createElement("span",null,"Logo"))))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-content"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/projects/case-study-details"},"Saas Webdevelopment Logo Design")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"),n.a.createElement(s.Link,{to:"/projects/case-study-details",className:"case-study-btn"},"Explore More ",n.a.createElement("i",{className:"flaticon-right-arrow"})))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-content"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/projects/case-study-details"},"ERP Software Logo")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"),n.a.createElement(s.Link,{to:"/projects/case-study-details",className:"case-study-btn"},"Explore More ",n.a.createElement("i",{className:"flaticon-right-arrow"})))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-img"},n.a.createElement("div",{className:"overlay"},n.a.createElement("img",{src:u.a,alt:"Work"}),n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/projects/case-study-details"},"ERP Website")),n.a.createElement("span",null,"ERP"))))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-img"},n.a.createElement("div",{className:"overlay"},n.a.createElement("img",{src:E.a,alt:"Work"}),n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/projects/case-study-details"},"Restaurant Website Logo Design")),n.a.createElement("span",null,"Restaurant"))))),n.a.createElement("div",{className:"col-sm-6 col-lg-6"},n.a.createElement("div",{className:"case-study-content"},n.a.createElement("h3",null,n.a.createElement(s.Link,{to:"/case-study-details"},"Restaurant Website Design")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"),n.a.createElement(s.Link,{href:"/case-study-details",className:"case-study-btn"},"Explore More ",n.a.createElement("i",{className:"flaticon-right-arrow"}))))),n.a.createElement("div",{className:"text-center pb-100 pt-100"},n.a.createElement(s.Link,{to:"/case-study",className:"common-btn three"},"Explore More"))))},v=t("Hr5K");t("5Oyn"),t("qQpL"),a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null),n.a.createElement(r.a,{bgText:"Our Works",pageTitle:"Our Works",homePageUrl:"/",homePageText:"Home",activePageText:"Our Works"}),n.a.createElement(p,null),n.a.createElement(v.a,null))}},qQpL:function(e,a,t){e.exports=t.p+"static/case-study-details1-84410363afad0c9bd3cf3e79675fc593.jpg"},s8IH:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("Wbzz");a.a=function(e){var a=e.bgText,t=e.pageTitle,l=e.homePageUrl,r=e.homePageText,s=e.activePageText;return n.a.createElement("div",{className:"page-title-area"},n.a.createElement("div",{className:"d-table"},n.a.createElement("div",{className:"d-table-cell"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-content"},n.a.createElement("span",null,a),n.a.createElement("h1",null,t),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c.Link,{to:l},r)),n.a.createElement("li",null,s)))))),n.a.createElement("div",{className:"lines"},n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"})))}},yAkU:function(e,a,t){e.exports=t.p+"static/case-study1-15f0cd249bbb564602ab478a2264f38f.jpg"}}]);
//# sourceMappingURL=component---src-pages-case-study-js-8e35b30e90d8b2a4c35e.js.map