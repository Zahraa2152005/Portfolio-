// عرض السنة الحالية في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// تغيير اللغة بين العربي والإنجليزي
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'ar';

languageToggle.addEventListener('click', function () {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';

  // تغيير اتجاه ولغة الصفحة
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === 'ar' ? 'rtl' : 'ltr';

  // تغيير نوع الخط
  document.body.classList.toggle(
    'english',
    currentLanguage === 'en'
  );

  // تغيير النصوص في الصفحة
  document.querySelectorAll('[data-ar][data-en]').forEach(function (element) {
    element.textContent = element.getAttribute(
      currentLanguage === 'ar' ? 'data-ar' : 'data-en'
    );
  });

  // تغيير نص زر اللغة
  languageToggle.textContent =
    currentLanguage === 'ar' ? 'English' : 'العربية';
});

// إغلاق قائمة التنقل بعد اختيار أي قسم
document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.getElementById('navMenu');

    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});