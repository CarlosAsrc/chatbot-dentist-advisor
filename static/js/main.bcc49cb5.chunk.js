(this["webpackJsonpchatbot-dentist-advisor"]=this["webpackJsonpchatbot-dentist-advisor"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),s=n(7),c=n.n(s),o=(n(13),n(4)),l=n.n(o),d=(n(19),n(8)),u=n(2),p=n(5),h=n(6),b=n.p+"static/media/pling-sound.af210ab9.mp3",m=function(){function e(t,n){var a=this;Object(p.a)(this,e),this.state={audio:new Audio(b)},this.handlePrinciples=function(){a.sendBotMessage("Esses princ\xedpios s\xe3o ....",{}),a.sendBotMessage("Que saber mais? Confira esses resumos que preparamos para voc\xea!",{widget:"summariesPDF"}),a.handleBackToOptions()},this.handleMentalMap=function(){a.sendBotMessage("Preparamos um brinde para voc\xea, que tal um mapa mental para te ajudar? Assim fica moleza n\xe9?!",{widget:"mentalMap"}),a.handleBackToOptions()},this.handleQuizRequest=function(){a.sendBotMessage("Agora, que tal testar os seus conhecimentos sobre os princ\xedpios do preparo radicular?",{widget:"quizOptions"}),a.handleBackToOptions()},this.handleBibliographicTips=function(){a.sendBotMessage("Confira as dicas de sites que ir\xe3o de ajudar:",{widget:"bibliographicTipsOptions"})},this.handleVideoLessonsTips=function(){a.sendBotMessage("Ent\xe3o saca s\xf3 esse canal que traz uma abordagem completa sobre o assunto:",{widget:"videoLessonsLinks"})},this.handleBooksTips=function(){a.sendBotMessage("Segue algumas dicas de livros refer\xeancias sobre o assunto:",{widget:"booksLinks"})},this.handleArticlesTips=function(){a.sendBotMessage("Segue algumas dicas de artigos para se manter atualizado:",{widget:"articlesLinks"})},this.handleThanks=function(){a.sendBotMessage("Espero que tenha te ajudado, obrigada!",{})},this.handleBackToOptions=function(){a.sendBotMessage("Escolha uma das op\xe7\xf5es para que eu possa continuar lhe ajudando:",{widget:"learningOptions",delay:2e3})},this.sendBotMessage=function(e,t){a.updateChatbotState(a.createChatBotMessage(e,t)),setTimeout((function(){return a.state.audio.play()}),1e3)},this.createChatBotMessage=t,this.setState=n}return Object(h.a)(e,[{key:"greet",value:function(){this.sendBotMessage("Ol\xe1! \ud83d\ude03",{}),this.handleBackToOptions()}},{key:"cannotUnderstandMessage",value:function(){this.sendBotMessage("N\xe3o entendi \ud83d\ude15",{}),this.handleBackToOptions()}},{key:"yourNameQuestion",value:function(){this.sendBotMessage("O meu nome \xe9 Estrela! \ud83e\udd70",{}),this.handleBackToOptions()}},{key:"updateChatbotState",value:function(e){this.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{messages:[].concat(Object(d.a)(t.messages),[e])})}))}}]),e}(),g=function(){function e(t){Object(p.a)(this,e),this.actionProvider=t}return Object(h.a)(e,[{key:"parse",value:function(e){var t=e.toLowerCase();t.includes("oi")||t.includes("ola")||t.includes("ol\xe1")||t.includes("opa")?this.actionProvider.greet():t.includes("seu nome")?this.actionProvider.yourNameQuestion():t.includes("mapa mental")?this.actionProvider.handleMentalMap():t.includes("quiz")?this.actionProvider.handleQuizRequest():t.includes("principios")||t.includes("princ\xedpios")?this.actionProvider.handlePrinciples():t.includes("videoaula")||t.includes("video aula")?this.actionProvider.handleVideoLessonsTips():t.includes("livro")?this.actionProvider.handleBooksTips():t.includes("artigo")?this.actionProvider.handleArticlesTips():this.actionProvider.cannotUnderstandMessage()}}]),e}(),f=(n(20),n(1)),j=function(e){var t=[{text:"Quais princ\xedpios s\xe3o esses?",handler:e.actionProvider.handlePrinciples,id:1},{text:"Testar meus conhecimentos",handler:e.actionProvider.handleQuizRequest,id:2},{text:"Mapa mental",handler:e.actionProvider.handleMentalMap,id:3},{text:"Dicas bibliogr\xe1ficas",handler:e.actionProvider.handleBibliographicTips,id:4}].map((function(e){return Object(f.jsx)("button",{className:"learning-option-button",onClick:e.handler,children:e.text},e.id)}));return Object(f.jsx)("div",{className:"learning-options-container",children:t})},O=(n(22),["title","titleId"]);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e,t){var n=e.title,r=e.titleId,s=w(e,O);return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},s),n?i.createElement("title",{id:r},n):null,a||(a=i.createElement("path",{d:"M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"})))}var y,E=i.forwardRef(x),M=(n.p,function(e){console.log(e);var t=e.options.map((function(e){return Object(f.jsx)("li",{className:"link-list-item",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"link-list-item-url",children:[Object(f.jsx)(E,{className:"url-icon"}),Object(f.jsx)("h1",{className:"url-header",children:e.text})]})},e.id)}));return Object(f.jsx)("ul",{className:"link-list",children:t})}),k=function(e){return Object(f.jsx)("div",{className:"image-viewer-mental-map",children:Object(f.jsx)("img",{src:"https://chatbot-dentist-advisor-resources.s3.amazonaws.com/1200px-2019_Lamborghini_Urus%2C_front_7.20.19.jpg"})})},B=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function L(e,t){var n=e.title,a=e.titleId,r=N(e,B);return i.createElement("svg",C({width:"64px",height:"64px",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,y||(y=i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("rect",{width:31.874,height:33,x:17.001,y:17,fill:"#BD7575"}),i.createElement("path",{fill:"#5B68C0",d:"M9,49.9206814 C9,47.707202 10.7750001,45.6994337 12.9692715,45.4356406 L32.875,43.0425936 L52.7807285,45.4356406 C54.9728966,45.6991808 56.75,47.7006188 56.75,49.9206814 L56.75,62.0425936 L9,62.0425936 L9,49.9206814 Z"}),i.createElement("path",{fill:"#FFDD95",d:"M26.6704545,41.4906185 C21.7663848,38.0068513 18.375,30.9212508 18.375,25.1331692 C18.375,17.1250403 24.8668711,10.6331692 32.875,10.6331692 C40.8831289,10.6331692 47.375,17.1250403 47.375,25.1331692 C47.375,30.9212508 43.9836152,38.0068513 39.0795455,41.4906185 L39.0795455,48.9058965 C39.0795455,48.9058965 34.8734611,50.8154815 32.875,50.8154815 C30.8765389,50.8154815 26.6704545,48.9058965 26.6704545,48.9058965 L26.6704545,41.4906185 Z"}),i.createElement("circle",{cx:19.875,cy:28,r:3,fill:"#FFDD95"}),i.createElement("circle",{cx:45.875,cy:28,r:3,fill:"#FFDD95"}),i.createElement("path",{fill:"#BD7575",d:"M17,14.5 C17,10.9101491 19.9153211,8 23.4935409,8 L42.4047379,8 C45.9910215,8 48.8982788,10.9174538 48.8982788,14.5 L48.8982788,21 L33,12.079188 L17,21 L17,14.5 Z"}),i.createElement("path",{fill:"#ECECEC",d:"M20.5968619 34.0000009C23.1635951 39.2569987 27.7030812 43.6331692 32.875 43.6331692 38.0469191 43.6331692 42.5864054 39.2569982 45.1531385 34L20.59686 34zM17 4C17 4 26 2 33 2 40 2 48.9608987 4 48.9608987 4L48.9608987 21C48.9608987 21 40 16 33 16 26 16 17 21 17 21L17 4z"}),i.createElement("circle",{cx:33,cy:16,r:5,fill:"#5EA7FF"}),i.createElement("circle",{cx:33,cy:16,r:2,fill:"#B4DFFB"}))))}var P,F,z,T,S,A,I,q,D,Q,R,V,_,U,K,Z=i.forwardRef(L),H=(n.p,function(){return Object(f.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar",children:Object(f.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar-container",children:Object(f.jsx)(Z,{className:"react-chatbot-kit-chat-bot-avatar-icon"})})})}),J=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function W(e,t){var n=e.title,a=e.titleId,r=X(e,J);return i.createElement("svg",G({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 392.598 392.598",style:{enableBackground:"new 0 0 392.598 392.598"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,i.createElement("path",{style:{fill:"#FFC10D"},d:"M214.949,191.16l37.689-23.337c2.263-1.422,5.042-1.939,7.628-1.487 c6.465,1.164,12.994,1.681,19.459,1.681c50.23,0,91.022-32.84,91.022-73.18s-40.792-73.115-90.958-73.115 s-91.022,32.84-91.022,73.18c0,19.523,9.568,38.012,27.022,51.911c3.038,2.392,4.59,6.206,4.008,10.02L214.949,191.16z"}),i.createElement("g",null,i.createElement("path",{style:{fill:"#194F82"},d:"M94.319,251.281c32.582,0,59.216-26.57,59.216-59.216s-26.57-59.152-59.216-59.152 s-59.216,26.57-59.216,59.216S61.737,251.281,94.319,251.281z M94.319,154.699c20.622,0,37.43,16.743,37.43,37.43 s-16.743,37.43-37.43,37.43s-37.43-16.743-37.43-37.43C57.018,171.442,73.762,154.699,94.319,154.699z"}),i.createElement("path",{style:{fill:"#194F82"},d:"M127.935,268.994c-4.008,0-7.628,2.133-9.568,5.689l-24.048,44.218l-23.984-44.218 c-1.939-3.491-5.56-5.689-9.568-5.689C27.216,268.994,0,296.275,0,329.762v51.911c0,6.012,4.848,10.925,10.925,10.925h166.853 c6.012,0,10.925-4.848,10.925-10.925v-51.911C188.703,296.275,161.422,268.994,127.935,268.994z M166.917,370.747H21.851v-41.051 c0-19.329,14.158-35.362,32.711-38.4l30.19,55.725c4.267,6.982,14.481,8.21,19.135,0l30.19-55.725 c18.554,3.038,32.711,19.071,32.711,38.4v41.051H166.917z"})),i.createElement("path",{style:{fill:"#FFFFFF"},d:"M94.319,154.699c-20.622,0-37.43,16.743-37.43,37.43s16.743,37.43,37.43,37.43 s37.43-16.743,37.43-37.43S114.941,154.699,94.319,154.699z"}),i.createElement("path",{style:{fill:"#56ACE0"},d:"M21.851,370.747h144.937v-41.051c0-19.329-14.158-35.362-32.711-38.4l-30.19,55.661 c-4.719,8.21-14.933,6.982-19.135,0l-30.19-55.661c-18.554,3.038-32.711,19.071-32.711,38.4V370.747z"}),i.createElement("g",null,i.createElement("path",{style:{fill:"#194F82"},d:"M249.471,54.562c-2.392,5.495,0.065,11.96,5.56,14.352c5.495,2.392,11.96-0.065,14.352-5.56 c4.849-9.632,17.067-7.111,19.459,1.616c1.293,5.689-1.875,10.02-5.495,11.83c-9.374,4.59-15.386,14.675-15.386,25.665 c0,0-0.84,13.317,10.925,13.317s10.925-13.317,10.925-13.317c0-2.715,1.293-5.107,3.168-6.012 c13.511-6.594,20.558-21.463,17.131-36.331C303.063,30.966,263.887,25.341,249.471,54.562z"}),i.createElement("path",{style:{fill:"#194F82"},d:"M278.885,125.285c-6.012,0-10.925,4.848-10.925,10.925v7.37c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-7.434C289.745,130.133,284.897,125.285,278.885,125.285z"}),i.createElement("path",{style:{fill:"#194F82"},d:"M279.725,0c-62.19,0-112.873,42.602-112.873,94.966c0,24.436,10.731,47.192,30.448,64.84 l-7.24,51.329c-1.422,8.339,7.37,16.162,16.549,10.796l54.044-33.358c6.335,0.905,12.735,1.422,19.071,1.422 c62.19,0,112.873-42.602,112.873-94.966S341.98,0,279.725,0z M279.725,168.081c-6.465,0-12.994-0.517-19.459-1.681 c-2.65-0.453-5.301,0.065-7.628,1.487l-37.689,23.337l4.784-34.327c0.517-3.814-1.034-7.628-4.008-10.02 c-17.455-13.899-27.022-32.323-27.022-51.911c0-40.339,40.857-73.18,91.022-73.18s91.022,32.84,91.022,73.18 C370.812,135.305,329.956,168.081,279.725,168.081z"})),P||(P=i.createElement("g",null)),F||(F=i.createElement("g",null)),z||(z=i.createElement("g",null)),T||(T=i.createElement("g",null)),S||(S=i.createElement("g",null)),A||(A=i.createElement("g",null)),I||(I=i.createElement("g",null)),q||(q=i.createElement("g",null)),D||(D=i.createElement("g",null)),Q||(Q=i.createElement("g",null)),R||(R=i.createElement("g",null)),V||(V=i.createElement("g",null)),_||(_=i.createElement("g",null)),U||(U=i.createElement("g",null)),K||(K=i.createElement("g",null)))}var Y=i.forwardRef(W),$=(n.p,function(){return Object(f.jsx)("div",{className:"react-chatbot-kit-user-avatar",children:Object(f.jsx)("div",{className:"react-chatbot-kit-user-avatar-container",style:{backgroundColor:"#d8d8d8"},children:Object(f.jsx)(Y,{className:"react-chatbot-kit-user-avatar-icon"})})})}),ee=(n(23),function(e){var t=[{text:"Quero assistir videoaulas sobre o assunto.",handler:e.actionProvider.handleVideoLessonsTips,id:1},{text:"Quero dicas de livros refer\xeancias sobre o assunto",handler:e.actionProvider.handleBooksTips,id:2},{text:"Quero artigos para se manter atualizado",handler:e.actionProvider.handleArticlesTips,id:3}].map((function(e){return Object(f.jsx)("button",{className:"bibliographic-tips-option-button",onClick:e.handler,children:e.text},e.id)}));return Object(f.jsx)("div",{className:"bibliographic-tips-options-container",children:t})}),te=(n(24),function(e){var t=[{text:"Me sinto pronto para os estudos!",handler:e.actionProvider.handleThanks,id:1},{text:"Quero mais dicas bibliogr\xe1ficas",handler:e.actionProvider.handleBibliographicTips,id:2}].map((function(e){return Object(f.jsx)("button",{className:"bibliographic-tips-finalization-option-button",onClick:e.handler,children:e.text},e.id)}));return Object(f.jsx)("div",{className:"bibliographic-tips-finalization-options-container",children:t})}),ne={botName:"Assistente virtual Estrela",initialMessages:[Object(o.createChatBotMessage)("Ol\xe1, aqui \xe9 a Estrela, assistente virtual inteligente, especialista em princ\xedpios do preparo radicular. O que voc\xea deseja?",{widget:"learningOptions"})],customStyles:{botMessageBox:{backgroundColor:"#ff0095"},chatButton:{backgroundColor:"#ff0095"}},customComponents:{botAvatar:function(e){return Object(f.jsx)(H,Object(u.a)({},e))},userAvatar:function(e){return Object(f.jsx)($,Object(u.a)({},e))}},widgets:[{widgetName:"learningOptions",widgetFunc:function(e){return Object(f.jsx)(j,Object(u.a)({},e))}},{widgetName:"summariesPDF",widgetFunc:function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(M,Object(u.a)({},e))})},props:{options:[{text:"Baixar resumo sobre os objetivos (limpeza e modelagem) + princ\xedpios de Schilder.",url:"https://www.google.com.br",id:1},{text:"Baixar resumo Medidas+instrumentais e produtos irrigadores.",url:"https://www.google.com.br",id:2}]}},{widgetName:"mentalMap",widgetFunc:function(e){return Object(f.jsx)(k,{})}},{widgetName:"quizOptions",widgetFunc:function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(M,Object(u.a)({},e))})},props:{options:[{text:"Abrir o quiz",url:"https://www.google.com.br",id:1}]}},{widgetName:"bibliographicTipsOptions",widgetFunc:function(e){return Object(f.jsx)(ee,Object(u.a)({},e))}},{widgetName:"videoLessonsLinks",widgetFunc:function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(M,Object(u.a)({},e)),Object(f.jsx)(te,Object(u.a)({},e))]})},props:{options:[{text:"LINK VIDEOSAULA ENDOSCIENCE",url:"https://www.google.com.br",id:1}]}},{widgetName:"booksLinks",widgetFunc:function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(M,Object(u.a)({},e)),Object(f.jsx)(te,Object(u.a)({},e))]})},props:{options:[{text:"LINKS LIVROS",url:"https://www.google.com.br",id:1}]}},{widgetName:"articlesLinks",widgetFunc:function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(M,Object(u.a)({},e)),Object(f.jsx)(te,Object(u.a)({},e))]})},props:{options:[{text:"LINKS ARTIGOS",url:"https://www.google.com.br",id:1}]}},{widgetName:"complementaryMaterialLinks",widgetFunc:function(e){return Object(f.jsx)(M,Object(u.a)({},e))},props:{options:[{text:"Material 1",url:"https://www.google.com.br",id:1},{text:"Material 2",url:"https://www.google.com.br",id:2},{text:"Material 3",url:"https://www.google.com.br",id:3}]}}]};var ae=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(l.a,{config:ne,actionProvider:m,messageParser:g})})})};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ae,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.bcc49cb5.chunk.js.map