const viewer=document.querySelector('#viewer');
const large=document.querySelector('#large-image');
document.querySelectorAll('.artwork').forEach(link=>link.addEventListener('click',event=>{
 if(!viewer.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)return;
 event.preventDefault();large.src=link.href;large.alt=link.querySelector('img').alt;
 document.querySelector('#viewer-title').textContent=link.dataset.title;
 document.querySelector('#original').href=link.href;viewer.showModal();document.body.classList.add('viewing');
}));
document.querySelector('#close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('close',()=>document.body.classList.remove('viewing'));
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
