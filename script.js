document.getElementById('year').textContent=new Date().getFullYear();
const form=document.querySelector('.form');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=(data.get('name')||'').trim();
  const phone=(data.get('phone')||'').trim();
  const service=(data.get('service')||'').trim();
  const message=(data.get('message')||'').trim();
  const text=`طلب استشارة قانونية%0A%0Aالاسم: ${encodeURIComponent(name)}%0Aرقم الجوال: ${encodeURIComponent(phone)}%0Aنوع الخدمة: ${encodeURIComponent(service)}%0Aتفاصيل الطلب: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/966557776043?text=${text}`,'_blank');
  const m=document.querySelector('.form-msg');
  if(m)m.textContent='سيتم تحويلك مباشرة إلى واتساب لإرسال طلب الاستشارة.';
});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));}));
