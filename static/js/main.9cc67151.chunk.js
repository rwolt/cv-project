(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),s=t(12),l=t.n(s),i=(t(17),t(3)),r=t(1),d=t(6),o=t(7),j=t(9),b=t(8),h=t(5),m=t.n(h),u=(t(19),t.p+"static/media/cv.7838c075.png"),O=(t(20),t(0));var p=function(){return Object(O.jsx)("div",{className:"header-container",children:Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("img",{className:"logo",src:u,alt:"Logo"}),Object(O.jsx)("h1",{className:"title",children:"Resume Creator"})]})})};t(11);var x=function(e){return Object(O.jsxs)("div",{className:"person-details",children:[Object(O.jsx)("button",{className:"info-button",name:"info",onClick:e.handleSubmit,children:"Save"}),Object(O.jsxs)("form",{className:"person-entry",name:"info",children:[Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"person-name-label",htmlFor:"person-name",children:"Name:"}),Object(O.jsx)("input",{type:"text",name:"personName",className:"person-name",value:e.personName,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"person-email-label",htmlFor:"person-email",children:"Email:"}),Object(O.jsx)("input",{type:"email",name:"email",className:"person-email",value:e.email,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"person-phone-label",htmlFor:"person-phone",children:"Phone:"}),Object(O.jsx)("input",{type:"phone",name:"phone",className:"person-phone",value:e.phone,onChange:e.handleChange})]})]})]})};var N=function(e){return Object(O.jsxs)("div",{className:"person-details",children:[Object(O.jsx)("button",{className:"info-button",name:"info",onClick:e.handleSubmit,children:"Edit"}),Object(O.jsxs)("div",{className:"person-entry",name:"info",children:[Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label person-name-label",children:"Name:"}),Object(O.jsx)("span",{className:"entry person-name",children:e.personName})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label person-email-label",children:"Email:"}),Object(O.jsx)("span",{className:"entry person-email",children:e.email})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label person-phone-label",children:"Phone: "}),Object(O.jsx)("span",{className:"entry person-phone",children:e.phone})]})]})]})},y=t.p+"static/media/profile.ba422ca1.png",v=(t(22),function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target.files;console.log(a);var t=window.URL.createObjectURL(a[0]);console.log(t),document.querySelector(".profile-picture").src=t},n}return Object(o.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"profile-container",onClick:function(){return document.getElementById("image-upload").click()},children:[Object(O.jsx)("input",{type:"file",id:"image-upload",onChange:this.handleChange}),Object(O.jsx)("img",{className:"profile-picture",src:y,alt:"Default Profile"}),Object(O.jsx)("p",{className:"profile-text",children:"Edit"})]})}}]),t}(n.Component));var f=function(e){return Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("h2",{children:"Contact Information"}),Object(O.jsxs)("div",{className:"container information-container",children:[e.editable?Object(O.jsx)(x,Object(r.a)({},e)):Object(O.jsx)(N,Object(r.a)({},e)),Object(O.jsx)(v,{})]})]})};var g=function(e){var a={background:"url('".concat("/cv-project","/floppy.png') no-repeat center"),backgroundSize:"30px"};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"hidden control-buttons",children:[Object(O.jsx)("button",{className:"edit-button",name:"educationHistory",id:e.id,onClick:e.handleEdit,style:a,children:"Save"}),Object(O.jsx)("button",{className:"delete-button",name:"educationHistory",id:e.id,onClick:e.handleDelete,children:"Delete"})]}),Object(O.jsxs)("form",{className:"school-entry",name:"education",children:[Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"school-name-label",htmlFor:"school-name",children:"School:"}),Object(O.jsx)("input",{type:"text",name:"school",className:"school-name",id:e.id,value:e.school,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"degree-name-label",htmlFor:"degree-name",children:"Degree:"}),Object(O.jsx)("input",{type:"text",name:"degree",className:"degree-name",id:e.id,value:e.degree,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{htmlFor:"school-start",className:"school-start-label",children:"Start Date:"}),Object(O.jsx)("input",{type:"date",name:"startDate",className:"school-start",id:e.id,value:e.startDate,onChange:e.handleChange}),Object(O.jsx)("label",{htmlFor:"school-end",className:"school-end-label",children:"End Date:"}),Object(O.jsx)("input",{type:"date",name:"endDate",className:"school-end",id:e.id,value:e.endDate,onChange:e.handleChange})]})]})]})},C=t(4),D=t.n(C);var S=function(e){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"hidden control-buttons",children:[Object(O.jsx)("button",{className:"edit-button",name:"educationHistory",id:e.id,onClick:e.handleEdit,children:"Edit"}),Object(O.jsx)("button",{className:"delete-button",name:"educationHistory",id:e.id,onClick:e.handleDelete,children:"Delete"})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label school-name-label",children:"School:"}),Object(O.jsx)("span",{className:"entry school-name",children:e.school})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label degree-name-label",children:"Degree:"}),Object(O.jsx)("span",{className:"entry degree-name",children:e.degree})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label school-start-label",children:"Start Date:"}),Object(O.jsx)("span",{className:"entry school-start",children:e.startDate?D()(e.startDate).format("MMMM YYYY"):""}),Object(O.jsx)("span",{className:"label school-end-label",children:"End Date:"}),Object(O.jsx)("span",{className:"entry school-end",children:e.endDate?D()(e.endDate).format("MMMM YYYY"):""})]})]})};t(24);var E=function(e){return Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("h2",{children:"Education"}),e.educationHistory.map((function(a){return a.editable?Object(n.createElement)(g,Object(r.a)(Object(r.a)({},a),{},{handleEdit:e.handleSubmit,handleChange:e.handleChange,handleDelete:e.handleDelete,key:a.id})):Object(n.createElement)(S,Object(r.a)(Object(r.a)({},a),{},{handleEdit:e.handleSubmit,handleChange:e.handleChange,handleDelete:e.handleDelete,key:a.id}))})),Object(O.jsx)("button",{className:"add-button",onClick:e.handleAdd,name:"education",children:"Add Education"})]})};var H=function(e){var a={background:"url('".concat("/cv-project","/floppy.png') no-repeat center"),backgroundSize:"30px"};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"hidden control-buttons",children:[Object(O.jsx)("button",{className:"edit-button",name:"careerHistory",id:e.id,onClick:e.handleEdit,style:a,children:"Save"}),Object(O.jsx)("button",{className:"delete-button",name:"careerHistory",id:e.id,onClick:e.handleDelete,children:"Delete"})]}),Object(O.jsxs)("form",{className:"career-entry",name:"career",children:[Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"company-name-label",htmlFor:"company-name",children:"Company:"}),Object(O.jsx)("input",{className:"company-name",type:"text",name:"company",value:e.company,id:e.id,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"job-title-label",htmlFor:"job-title",children:"Job Title:"}),Object(O.jsx)("input",{type:"text",className:"job-title",name:"jobTitle",value:e.jobTitle,id:e.id,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"job-start-label",htmlFor:"job-start",children:"Start Date:"}),Object(O.jsx)("input",{type:"date",className:"job-start",name:"startDate",value:e.startDate,id:e.id,onChange:e.handleChange}),Object(O.jsx)("label",{className:"job-end-label",htmlFor:"job-end",children:"End Date:"}),Object(O.jsx)("input",{type:"date",className:"job-end",name:"endDate",value:e.endDate,id:e.id,onChange:e.handleChange})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsx)("label",{className:"job-description-label",htmlFor:"job-description",children:"Description:"}),Object(O.jsx)("textarea",{className:"job-description",name:"description",value:e.description,id:e.id,onChange:e.handleChange})]})]})]})};var k=function(e){return Object(O.jsxs)("div",{className:"container career-entry",children:[Object(O.jsxs)("div",{className:"control-buttons",children:[Object(O.jsx)("button",{className:"edit-button",name:"careerHistory",id:e.id,onClick:e.handleEdit,children:"Edit"}),Object(O.jsx)("button",{className:"delete-button",name:"careerHistory",id:e.id,onClick:e.handleDelete,children:"Delete"})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label school-name-label",children:"Company:"}),Object(O.jsx)("span",{className:"entry company-name",children:e.company})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label job-title-label",children:"Job Title:"}),Object(O.jsx)("span",{className:"entry degree-name",children:e.jobTitle})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label job-start-label",children:"Start Date:"}),Object(O.jsx)("span",{className:"entry school-start",children:e.startDate?D()(e.startDate).format("MMMM YYYY"):""}),Object(O.jsx)("span",{className:"label job-end-label",children:"End Date:"}),Object(O.jsx)("span",{className:"entry job-end",children:e.endDate?D()(e.endDate).format("MMMM YYYY"):""})]}),Object(O.jsxs)("div",{className:"entry-row",children:[Object(O.jsx)("span",{className:"label job-description-label",children:"Description:"}),Object(O.jsx)("span",{className:"entry job-description",children:e.description})]})]})};t(25);var w=function(e){return Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("h2",{children:"Experience"}),e.careerHistory.map((function(a){return a.editable?Object(n.createElement)(H,Object(r.a)(Object(r.a)({},a),{},{handleChange:e.handleChange,handleEdit:e.handleSubmit,handleDelete:e.handleDelete,key:a.id})):Object(n.createElement)(k,Object(r.a)(Object(r.a)({},a),{},{handleChange:e.handleChange,handleEdit:e.handleSubmit,handleDelete:e.handleDelete,key:a.id}))})),Object(O.jsx)("button",{className:"add-button",onClick:e.handleAdd,name:"career",children:"Add Experience"})]})},M=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a,t=e.target,c=t.name,s=t.value,l=t.id,d=e.target.parentElement.parentElement.name;"info"===d?n.setState((function(e){return Object(i.a)({},d,Object(r.a)(Object(r.a)({},e[d]),{},Object(i.a)({},c,s)))})):(a="education"===d?"educationHistory":"careerHistory",n.setState(Object(i.a)({},a,n.state[a].map((function(e){return e.id===l?Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},c,s)):e})))))},n.handleSubmit=function(e){var a=e.target,t=a.name,c=a.id;"info"===t?n.setState(Object(i.a)({},t,Object(r.a)(Object(r.a)({},n.state[t]),{},{editable:!n.state[t].editable}))):n.setState((function(e){return Object(i.a)({},t,n.state[t].map((function(e){return e.id===c?Object(r.a)(Object(r.a)({},e),{},{editable:!e.editable}):e})))}))},n.handleAdd=function(e){var a=e.target.name,t=n.state,c=t.career,s=t.careerHistory,l=t.education,i=t.educationHistory;"career"===a?n.setState({careerHistory:s.concat(c),career:{editable:!0,company:"",jobTitle:"",description:"",startDate:"",endDate:"",id:m()()}}):n.setState({educationHistory:i.concat(l),education:{editable:!0,school:"",degree:"",startDate:"",endDate:"",id:m()()}})},n.handleDelete=function(e){var a=e.target,t=a.name,c=a.id,s=n.state,l=s.educationHistory,i=s.careerHistory;"educationHistory"===t?n.setState({educationHistory:l.filter((function(e){return e.id!==c}))}):n.setState({careerHistory:i.filter((function(e){return e.id!==c}))})},n.state={info:{editable:!0,personName:"",phone:"",email:""},education:{editable:!0,school:"",degree:"",startDate:"",endDate:"",id:m()()},career:{editable:!0,company:"",jobTitle:"",description:"",startDate:"",endDate:"",id:m()()},educationHistory:[],careerHistory:[]},n}return Object(o.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{}),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(f,Object(r.a)(Object(r.a)({},this.state.info),{},{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),Object(O.jsx)(E,Object(r.a)(Object(r.a)({},this.state.education),{},{educationHistory:this.state.educationHistory,handleAdd:this.handleAdd,handleDelete:this.handleDelete,handleSubmit:this.handleSubmit,handleChange:this.handleChange})),Object(O.jsx)(w,Object(r.a)(Object(r.a)({},this.state.career),{},{careerHistory:this.state.careerHistory,handleAdd:this.handleAdd,handleDelete:this.handleDelete,handleSubmit:this.handleSubmit,handleChange:this.handleChange}))]})]})}}]),t}(n.Component);l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9cc67151.chunk.js.map