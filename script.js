/* =========================================
   تحديث سنة حقوق النشر - بشكل آمن
   ========================================= */

const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* =========================================
   نموذج طلب الاستشارة وإرساله إلى واتساب
   ========================================= */

const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const name = (data.get('name') || '').trim();
    const phone = (data.get('phone') || '').trim();
    const service = (data.get('service') || '').trim();
    const message = (data.get('message') || '').trim();

    const text =
      `طلب استشارة قانونية%0A%0A` +
      `الاسم: ${encodeURIComponent(name)}%0A` +
      `رقم الجوال: ${encodeURIComponent(phone)}%0A` +
      `نوع الخدمة: ${encodeURIComponent(service)}%0A` +
      `تفاصيل الطلب: ${encodeURIComponent(message)}`;

    window.open(
      `https://wa.me/966557776043?text=${text}`,
      '_blank'
    );

    const formMessage = document.querySelector('.form-msg');

    if (formMessage) {
      formMessage.textContent =
        'سيتم تحويلك مباشرة إلى واتساب لإرسال طلب الاستشارة.';
    }
  });
}


/* =========================================
   إزالة حالة active من روابط التنقل الداخلية
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelectorAll('nav a').forEach(function (navLink) {
      navLink.classList.remove('active');
    });
  });
});


/* =========================================
   أزرار صفحات خدمات الأفراد
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* الصفحات التي نريد تطبيق الأزرار عليها فقط */

  const servicePages = [
    'criminal-cases.html',
    'personal-status-cases.html',
    'labor-cases.html',
    'civil-cases.html',
    'real-estate-cases.html',
    'administrative-cases.html'
  ];

  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  /* لا يتم تنفيذ شيء في الصفحة الرئيسية
     أو صفحة الخدمات أو المقالات وغيرها */

  if (!servicePages.includes(currentPage)) {
    return;
  }


  /* =====================================
     زر احجز استشارتك في أعلى الصفحة
     ===================================== */

  const nav = document.querySelector('header nav');

  if (nav) {

    const existingConsultButton =
      nav.querySelector('a.btn[href="contact.html"]');

    if (!existingConsultButton) {

      const consultButton = document.createElement('a');

      consultButton.href = 'contact.html';
      consultButton.className = 'btn';
      consultButton.textContent = 'احجز استشارتك';
      consultButton.setAttribute(
        'aria-label',
        'احجز استشارتك'
      );

      nav.appendChild(consultButton);
    }
  }


  /* =====================================
     حاوية واتساب والاتصال
     ===================================== */

  let floatingGroup =
    document.querySelector('.floating-contact-group');

  if (!floatingGroup) {

    floatingGroup = document.createElement('div');

    floatingGroup.className =
      'floating-contact-group';

    floatingGroup.setAttribute(
      'aria-label',
      'وسائل التواصل'
    );

    document.body.appendChild(floatingGroup);
  }


  /* =====================================
     زر واتساب
     ===================================== */

  if (!floatingGroup.querySelector('.floating-wa')) {

    const whatsappButton =
      document.createElement('a');

    whatsappButton.className = 'floating-wa';

    whatsappButton.href =
      'https://wa.me/966557776043';

    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener';
    whatsappButton.title = 'واتساب';

    whatsappButton.setAttribute(
      'aria-label',
      'واتساب'
    );

    whatsappButton.innerHTML = `
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.1 4.8a10.9 10.9 0 0 0-9.3 16.6L5.3 27l5.8-1.5a10.9 10.9 0 1 0 5-20.7zm0 19.8c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3a8.8 8.8 0 1 1 7.7 4.2zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.8-.6z">
        </path>
      </svg>
    `;

    floatingGroup.appendChild(whatsappButton);
  }


  /* =====================================
     زر الاتصال
     ===================================== */

  if (!floatingGroup.querySelector('.floating-call')) {

    const callButton =
      document.createElement('a');

    callButton.className = 'floating-call';

    callButton.href =
      'tel:+966557776043';

    callButton.title = 'اتصال';

    callButton.setAttribute(
      'aria-label',
      'اتصال مباشر'
    );

    callButton.innerHTML = `
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true">
        <path
          fill="currentColor"
          d="M9.15 4.25c-.86-.32-1.83.08-2.2.92L4.67 10.3c-.33.75-.2 1.63.34 2.25l3.23 3.68c2.06 2.34 4.55 4.32 7.36 5.86l4.42 2.42c.72.4 1.62.31 2.25-.22l4.19-3.48c.74-.62.89-1.7.34-2.49l-2.37-3.43c-.5-.73-1.46-.99-2.27-.62l-3.6 1.64c-.54.25-1.18.18-1.65-.19l-1.98-1.56a18.2 18.2 0 0 1-3.1-3.1l-1.56-1.98c-.37-.47-.44-1.11-.19-1.65l1.64-3.6c.37-.81.11-1.77-.62-2.27L9.15 4.25z">
        </path>
      </svg>

      <span>+966557776043</span>
    `;

    floatingGroup.appendChild(callButton);
  }

});



/* =========================================
   قائمة التنقل للجوال
   ========================================= */
document.addEventListener('DOMContentLoaded', function () {
  const headerNav = document.querySelector('.header .nav');
  const navMenu = headerNav ? headerNav.querySelector('nav') : null;

  if (!headerNav || !navMenu) return;

  let menuButton = headerNav.querySelector('.mobile-menu-toggle');

  if (!menuButton) {
    menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'mobile-menu-toggle';
    menuButton.setAttribute('aria-label', 'فتح القائمة الرئيسية');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'mobile-main-navigation');
    menuButton.innerHTML = '<span></span><span></span><span></span>';

    if (!navMenu.id) navMenu.id = 'mobile-main-navigation';
    headerNav.insertBefore(menuButton, navMenu);
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'فتح القائمة الرئيسية');
  }

  menuButton.addEventListener('click', function () {
    const willOpen = !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? 'إغلاق القائمة الرئيسية' : 'فتح القائمة الرئيسية');
  });

  navMenu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', function (event) {
    if (!headerNav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) closeMenu();
  });
});


/* =========================================
   طبقة تتبع Google Analytics 4
   تسجل التفاعلات المهمة دون تغيير واجهة الموقع
   ========================================= */
(function () {
  'use strict';

  const individualServicePages = new Set([
    'criminal-cases.html',
    'personal-status-cases.html',
    'labor-cases.html',
    'civil-cases.html',
    'real-estate-cases.html',
    'administrative-cases.html'
  ]);

  const corporateServicePages = new Set([
    'commercial-corporate-law.html',
    'contracts-agreements.html',
    'commercial-disputes.html',
    'corporate-labor-cases.html',
    'real-estate-construction.html',
    'corporate-administrative-cases.html',
    'enforcement-debt-collection.html'
  ]);

  function currentPageName() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function destinationPageName(link) {
    try {
      const url = new URL(link.href, window.location.href);
      return url.pathname.split('/').pop() || 'index.html';
    } catch (error) {
      return '';
    }
  }

  function cleanLabel(link) {
    return (
      link.getAttribute('aria-label') ||
      link.getAttribute('title') ||
      link.textContent ||
      ''
    ).replace(/\s+/g, ' ').trim().slice(0, 100);
  }

  function linkArea(link) {
    if (link.closest('nav')) return 'navigation';
    if (link.closest('.floating-contact-group')) return 'floating_contact';
    if (link.closest('footer')) return 'footer';
    if (link.closest('.hero-actions')) return 'hero';
    if (link.closest('.final-cta')) return 'final_cta';
    if (link.closest('.hotspot')) return 'hotspot';
    return 'content';
  }

  function sendAnalyticsEvent(eventName, params) {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', eventName, Object.assign({
      page_path: window.location.pathname,
      page_title: document.title,
      source_page: currentPageName()
    }, params || {}));
  }

  function isConsultationLink(link) {
    const label = cleanLabel(link);
    const classes = link.className || '';
    const href = (link.getAttribute('href') || '').toLowerCase();

    return (
      href.includes('contact.html') &&
      (
        /استشار/.test(label) ||
        /استشار/.test(link.textContent || '') ||
        /nav-cta|book-top/.test(classes)
      )
    );
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const rawHref = (link.getAttribute('href') || '').trim();
    const hrefLower = rawHref.toLowerCase();
    const label = cleanLabel(link);
    const area = linkArea(link);
    const destination = destinationPageName(link);

    const common = {
      link_text: label,
      link_url: link.href,
      link_area: area,
      destination_page: destination
    };

    if (
      hrefLower.startsWith('https://wa.me/') ||
      hrefLower.startsWith('http://wa.me/') ||
      hrefLower.includes('api.whatsapp.com')
    ) {
      sendAnalyticsEvent('whatsapp_click', common);
      return;
    }

    if (hrefLower.startsWith('tel:')) {
      sendAnalyticsEvent('phone_click', common);
      return;
    }

    if (hrefLower.startsWith('mailto:')) {
      sendAnalyticsEvent('email_click', common);
      return;
    }

    if (isConsultationLink(link)) {
      sendAnalyticsEvent('consultation_click', common);
      return;
    }

    if (individualServicePages.has(destination)) {
      sendAnalyticsEvent('individual_service_click', common);
      return;
    }

    if (corporateServicePages.has(destination)) {
      sendAnalyticsEvent('corporate_service_click', common);
      return;
    }

    if (/^article-.*\.html$/i.test(destination)) {
      sendAnalyticsEvent('article_click', common);
      return;
    }

    if (link.closest('nav')) {
      sendAnalyticsEvent('navigation_click', common);
    }
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    if (currentPageName() === 'contact.html') {
      sendAnalyticsEvent('contact_page_view', {
        page_section: 'contact'
      });
    }
  });
})();
