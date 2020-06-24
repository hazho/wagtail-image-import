!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=window.React,i=window.ReactDOM,o=window.wagtail.components.Icon;function r(e){const[t,i]=n.useState([]);return t&&t.length?n.createElement(c,null):n.createElement(a,{appId:e.appId,pickerApiKey:e.pickerApiKey,clientId:e.clientId,scope:"https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/drive.readonly",onGetImageData:i})}function c(e){const[t,i]=n.useState([]);return t&&t.length?n.createElement("p",null,"Found duplicates"):n.createElement(l,{message:"Identifying duplicates"})}function a(e){const[t,i]=n.useState(!1);function o(e,t,n){return e.type==google.picker.Type.PHOTO}function r(e,t,n){return e.type==google.picker.Type.jG}async function c(t){if(t.action==google.picker.Action.PICKED){const n=t.docs.filter(o),i=t.docs.filter(r);let c=new Array;if(i&&i.length){const e=`(mimeType contains 'image/') and (${i.reduce((e,t)=>e+`('${t.id}' in parents) or `,"").slice(0,-4)})`;let t=await gapi.client.drive.files.list({q:e,pageSize:1e3,fields:"nextPageToken, files(id, name, thumbnailLink, fileExtension, md5Checksum, size, imageMediaMetadata)"});c.push(...t.result.files)}n&&n.length&&n.forEach(async e=>{let t=await gapi.client.drive.files.get({fileId:e.id,fields:"id, name, thumbnailLink, fileExtension, md5Checksum, size, imageMediaMetadata"});c.push(t.result)}),e.onGetImageData(c)}}return n.useEffect(()=>{gapi.load("client:auth2:picker",()=>{gapi.client.init({apiKey:e.pickerApiKey,clientId:e.clientId,discoveryDocs:["https://docs.googleapis.com/$discovery/rest?version=v1","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:e.scope}).then(()=>{i(!0)}).catch(e=>{console.error(e)})})},[]),t?n.createElement("button",{class:"button bicolor icon icon-plus",onClick:function(){(function(){const t=gapi.auth2.getAuthInstance();return t.isSignedIn.get()?Promise.resolve(t.currentUser.get().getAuthResponse()):t.signIn({scope:e.scope}).then(e=>e.getAuthResponse())})().then(t=>function(t,n){let i=new google.picker.DocsView(google.picker.ViewId.DOCS_IMAGES);i.setSelectFolderEnabled(!0),i.setIncludeFolders(!0),i.setParent("root"),(new google.picker.PickerBuilder).setAppId(e.appId).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).setDeveloperKey(e.pickerApiKey).setOAuthToken(t).addView(i).setCallback(n).build().setVisible(!0)}(t.access_token,c))}},"Select an image or folder in Drive"):n.createElement(l,{message:"Loading Google API"})}const l=e=>n.createElement("span",null,n.createElement(o,{name:"spinner",className:"c-spinner"}),e.message),s=document.querySelector("#importer");i.render(n.createElement(r,{appId:s.dataset.appId,pickerApiKey:s.dataset.pickerApiKey,clientId:s.dataset.clientId}),s)}]);