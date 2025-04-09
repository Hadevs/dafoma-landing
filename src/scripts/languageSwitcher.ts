import type { Translations } from '../i18n/translations';

export function initLanguageSwitcher(translations: Translations) {
  console.log('Language switcher script starting');

  function updateContent(lang: 'ru' | 'en') {
    console.log(`Changing language to: ${lang}`);
    const t = translations[lang];
    
    // Update hero section
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.innerHTML = t.hero_title;
      console.log('Updated h1');
    } else {
      console.log('H1 element not found');
    }
    
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
      subtitle.textContent = t.hero_subtitle;
      console.log('Updated subtitle');
    } else {
      console.log('Subtitle element not found');
    }
    
    // Update all elements with data-i18n attribute
    const i18nElements = document.querySelectorAll('[data-i18n]');
    console.log(`Found ${i18nElements.length} elements with data-i18n`);
    
    i18nElements.forEach(el => {
      const key = el.dataset.i18n;
      if (key && t[key as keyof typeof t]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          (el as HTMLInputElement | HTMLTextAreaElement).placeholder = t[key as keyof typeof t];
        } else {
          el.innerHTML = t[key as keyof typeof t];
        }
        console.log(`Updated element with key: ${key}`);
      } else {
        console.log(`Translation missing for key: ${key}`);
      }
    });

    // Update pricing plan features
    const featureElements = document.querySelectorAll('[data-i18n-feature]');
    console.log(`Found ${featureElements.length} elements with data-i18n-feature`);
    
    featureElements.forEach(el => {
      const key = el.dataset.i18nFeature;
      if (key && t[key as keyof typeof t]) {
        el.textContent = t[key as keyof typeof t];
        console.log(`Updated feature with key: ${key}`);
      } else {
        console.log(`Translation missing for feature key: ${key}`);
      }
    });
  }

  // Initialize language switcher
  const buttons = document.querySelectorAll('.language-btn');
  console.log(`Found ${buttons.length} language buttons`);
  
  if (buttons.length > 0) {
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.dataset.lang as 'ru' | 'en';
        console.log(`Button clicked: ${lang}`);
        
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        updateContent(lang);
      });
      console.log(`Added click listener to ${btn.dataset.lang} button`);
    });
    
    // Set initial language
    const defaultLang = 'ru';
    updateContent(defaultLang);
    console.log(`Set initial language to ${defaultLang}`);
  } else {
    console.error('No language buttons found!');
  }
}