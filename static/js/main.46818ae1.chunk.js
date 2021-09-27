(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={container:"container_container__1-pko"}},2:function(t,e,n){t.exports={contact__wrapper:"phonebook_contact__wrapper__3mjuN",title:"phonebook_title__1Z3C9",contacts__count:"phonebook_contacts__count__3GCO9",form:"phonebook_form__1m5_-",contact__name:"phonebook_contact__name__WP18D",contact__number:"phonebook_contact__number__32GUg",input__name:"phonebook_input__name__1sWgB",input__tel:"phonebook_input__tel__1e67j",add__button:"phonebook_add__button__3iB7g"}},23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(6),r=n.n(o),s=(n(23),n(17)),i=n(11),_=n(12),u=n(13),l=n(14),b=n(18),j=n(16),p=n(2),h=n.n(p),m=n(3),d=n(1),f=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(_.a)({},c,a))},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.onResetForm()},t.onResetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.contactsCount,e=this.state,n=e.name,c=e.number;return Object(d.jsxs)("div",{className:h.a.contact__wrapper,children:[Object(d.jsx)("h2",{className:h.a.title,children:"Phonebook"}),Object(d.jsxs)("p",{className:h.a.contacts__count,children:["In your phone book: ",t.length," contacts"]}),Object(d.jsxs)("form",{className:h.a.form,onSubmit:this.onSubmit,children:[Object(d.jsxs)("label",{className:h.a.contact__name,children:[Object(d.jsx)(m.a,{})," Name",Object(d.jsx)("input",{className:h.a.input__name,placeholder:"Whats you're name?",type:"text",name:"name",value:n,onChange:this.onInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"",required:!0})]}),Object(d.jsxs)("label",{className:h.a.contact__number,children:[Object(d.jsx)(m.b,{})," Number",Object(d.jsx)("input",{className:h.a.input__tel,placeholder:"Your phone number",type:"tel",name:"number",value:c,onChange:this.onInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"",required:!0})]}),Object(d.jsx)("button",{className:h.a.add__button,type:"submit",children:"Add contacts"})]})]})}}]),n}(c.Component),O=f,x=n(4),g=n.n(x),v=function(t){var e=t.contacts,n=t.deleteContact;return Object(d.jsx)("ul",{className:g.a.contact__list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(d.jsxs)("li",{className:g.a.contact__item,children:[Object(d.jsxs)("p",{className:g.a.contact__name,children:[Object(d.jsx)("span",{className:g.a.contact__icon,children:Object(d.jsx)(m.a,{})}),c]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:g.a.contact__icon,children:Object(d.jsx)(m.b,{})}),a]}),Object(d.jsxs)("button",{className:g.a.delete__button,onClick:function(){return n(e)},children:["delete",Object(d.jsx)("span",{children:Object(d.jsx)(m.c,{})})]})]},e)}))})},C=n(8),N=n.n(C),k=function(t){var e=t.value,n=t.filterChange;return Object(d.jsx)("div",{className:N.a.search__wrapper,children:Object(d.jsxs)("label",{className:N.a.search__label,children:["All your contacts here",Object(d.jsx)("input",{placeholder:"Enter contact to search . . .",type:"text",className:N.a.search__input,value:e,onChange:n})]})})},w=n(15),S=n.n(w),y=function(t){var e=t.children;return Object(d.jsx)("div",{className:S.a.container,children:e})},L=n(28),A=n(9);n(25);function I(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),_=r[0],u=r[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var l=function(){return A.b.error("\ud83e\udd84 The contact already exists in the phone book",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},b=function(){return A.b.success("\ud83e\udd84Added new contact",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},j=function(){var t=_.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A.a,{}),Object(d.jsxs)(y,{children:[Object(d.jsx)(O,{onSubmit:function(t){var e,c=t.name,o=t.number;if(e=c,!n.find((function(t){return t.name===e}))){var r={id:Object(L.a)(),name:c,number:o};return a((function(t){return[r].concat(Object(s.a)(t))})),void b()}l()},contactsCount:n}),Object(d.jsx)(k,{value:_,filterChange:function(t){u(t.currentTarget.value)}}),Object(d.jsx)(v,{contacts:j,deleteContact:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})]})}var F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),F()},4:function(t,e,n){t.exports={contact__list:"contactList_contact__list__3SBIy",contact__item:"contactList_contact__item__1_jEm",delete__button:"contactList_delete__button__NFj7L",contact__icon:"contactList_contact__icon__ZVAGJ",contact__name:"contactList_contact__name__2AXZ3"}},8:function(t,e,n){t.exports={search__wrapper:"filter_search__wrapper__261u-",search__label:"filter_search__label__1Ys7x",search__input:"filter_search__input__2reSC"}}},[[26,1,2]]]);
//# sourceMappingURL=main.46818ae1.chunk.js.map