// Traduction du site, alignée sur l'application.
//
// Mêmes 7 langues et mêmes codes que app/src/i18n.tsx : un invité qui arrive par
// le QR code doit trouver le site dans la langue où il trouvera l'app. C'est
// pour ces publics que l'app parle tagalog, hindi et arabe.
//
// Choix de la langue : préférence enregistrée, sinon la langue du navigateur,
// sinon le français. L'arabe bascule la page en écriture droite-à-gauche.
(function () {
  var LANGS = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
    { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
    { code: 'ar', flag: '🇰🇼', label: 'العربية' },
    { code: 'tl', flag: '🇵🇭', label: 'Tagalog' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'hi', flag: '🇮🇳', label: 'हिन्दी' }
  ];

  var T = {
    fr: {
      'tagline': "Partagez l'instant, en direct.",
      'join.title': "Rejoindre l'événement",
      'join.code': "Code de l'événement (6 caractères)",
      'join.pseudo': "Votre pseudo (facultatif)",
      'join.pseudoPh': "Ex. Tante Leïla",
      'join.cta': "Rejoindre",
      'join.in': "Vous participez à cet événement 🎉",
      'join.room': "Choisissez votre salle",
      'join.tapHere': "Touchez ici",
      'join.tapRest': "pour choisir vos photos et vidéos",
      'join.drop': "ou déposez-les dans cette zone",
      'join.limits': "Photos illimitées en taille (recompressées) · vidéos : 30 s et 60 Mo max",
      'join.caption': "Légende (facultative, appliquée à la première photo)",
      'join.captionPh': "Un petit mot avec vos photos…",
      'join.more': "← En savoir plus sur EventLens"
    },
    en: {
      'tagline': "Share the moment, live.",
      'join.title': "Join the event",
      'join.code': "Event code (6 characters)",
      'join.pseudo': "Your nickname (optional)",
      'join.pseudoPh': "e.g. Aunt Leila",
      'join.cta': "Join",
      'join.in': "You're in this event 🎉",
      'join.room': "Choose your room",
      'join.tapHere': "Tap here",
      'join.tapRest': "to choose your photos and videos",
      'join.drop': "or drop them in this area",
      'join.limits': "Unlimited photo size (recompressed) · videos: 30 s and 60 MB max",
      'join.caption': "Caption (optional, applied to the first photo)",
      'join.captionPh': "A few words with your photos…",
      'join.more': "← Learn more about EventLens"
    },
    nl: {
      'tagline': "Deel het moment, live.",
      'join.title': "Deelnemen aan het evenement",
      'join.code': "Evenementcode (6 tekens)",
      'join.pseudo': "Je bijnaam (optioneel)",
      'join.pseudoPh': "Bv. Tante Leila",
      'join.cta': "Deelnemen",
      'join.in': "Je doet mee aan dit evenement 🎉",
      'join.room': "Kies je zaal",
      'join.tapHere': "Tik hier",
      'join.tapRest': "om je foto's en video's te kiezen",
      'join.drop': "of sleep ze naar dit vak",
      'join.limits': "Onbeperkte fotogrootte (gecomprimeerd) · video's: max. 30 s en 60 MB",
      'join.caption': "Tekst (optioneel, bij de eerste foto)",
      'join.captionPh': "Een woordje bij je foto's…",
      'join.more': "← Meer over EventLens"
    },
    ar: {
      'tagline': "شارك اللحظة، مباشرةً.",
      'join.title': "الانضمام إلى المناسبة",
      'join.code': "رمز المناسبة (٦ أحرف)",
      'join.pseudo': "اسمك المستعار (اختياري)",
      'join.pseudoPh': "مثال: خالتي ليلى",
      'join.cta': "انضم",
      'join.in': "أنت مشارك في هذه المناسبة 🎉",
      'join.room': "اختر القاعة",
      'join.tapHere': "اضغط هنا",
      'join.tapRest': "لاختيار صورك ومقاطعك",
      'join.drop': "أو أفلتها في هذه المنطقة",
      'join.limits': "حجم الصور غير محدود (يُعاد ضغطها) · الفيديو: ٣٠ ثانية و٦٠ ميغابايت كحد أقصى",
      'join.caption': "تعليق (اختياري، يُضاف إلى الصورة الأولى)",
      'join.captionPh': "كلمة مع صورك…",
      'join.more': "← اعرف المزيد عن EventLens"
    },
    tl: {
      'tagline': "Ibahagi ang sandali, live.",
      'join.title': "Sumali sa event",
      'join.code': "Code ng event (6 na karakter)",
      'join.pseudo': "Palayaw mo (opsyonal)",
      'join.pseudoPh': "Hal. Tita Leila",
      'join.cta': "Sumali",
      'join.in': "Kasali ka sa event na ito 🎉",
      'join.room': "Piliin ang inyong silid",
      'join.tapHere': "Pindutin dito",
      'join.tapRest': "para piliin ang mga litrato at video",
      'join.drop': "o i-drop sila sa bahaging ito",
      'join.limits': "Walang limitasyon sa laki ng litrato (kinokompress) · video: 30 s at 60 MB max",
      'join.caption': "Caption (opsyonal, para sa unang litrato)",
      'join.captionPh': "Isang mensahe kasama ang litrato…",
      'join.more': "← Alamin pa ang EventLens"
    },
    es: {
      'tagline': "Comparte el momento, en directo.",
      'join.title': "Unirse al evento",
      'join.code': "Código del evento (6 caracteres)",
      'join.pseudo': "Tu apodo (opcional)",
      'join.pseudoPh': "Ej. Tía Leila",
      'join.cta': "Unirse",
      'join.in': "Ya participas en este evento 🎉",
      'join.room': "Elige tu sala",
      'join.tapHere': "Toca aquí",
      'join.tapRest': "para elegir tus fotos y vídeos",
      'join.drop': "o suéltalos en esta zona",
      'join.limits': "Tamaño de fotos sin límite (se recomprimen) · vídeos: 30 s y 60 MB máx.",
      'join.caption': "Texto (opcional, en la primera foto)",
      'join.captionPh': "Unas palabras con tus fotos…",
      'join.more': "← Más sobre EventLens"
    },
    hi: {
      'tagline': "पल को साझा करें, लाइव।",
      'join.title': "इवेंट में शामिल हों",
      'join.code': "इवेंट कोड (6 अक्षर)",
      'join.pseudo': "आपका उपनाम (वैकल्पिक)",
      'join.pseudoPh': "जैसे लीला आंटी",
      'join.cta': "शामिल हों",
      'join.in': "आप इस इवेंट में शामिल हैं 🎉",
      'join.room': "अपना कक्ष चुनें",
      'join.tapHere': "यहाँ टैप करें",
      'join.tapRest': "अपनी फ़ोटो और वीडियो चुनने के लिए",
      'join.drop': "या उन्हें इस क्षेत्र में छोड़ें",
      'join.limits': "फ़ोटो का आकार असीमित (पुनः संपीड़ित) · वीडियो: 30 स., 60 MB तक",
      'join.caption': "कैप्शन (वैकल्पिक, पहली फ़ोटो पर)",
      'join.captionPh': "आपकी फ़ोटो के साथ कुछ शब्द…",
      'join.more': "← EventLens के बारे में और जानें"
    }
  };

  // Chaque page enregistre son dictionnaire : join.html ne charge pas le
  // marketing, ce qui compte pour des invités sur un Wi-Fi saturé.
  function register(extra) {
    Object.keys(extra).forEach(function (code) {
      T[code] = T[code] || {};
      var d = extra[code];
      Object.keys(d).forEach(function (k) { T[code][k] = d[k]; });
    });
    if (mounted) apply(current);
  }

  var mounted = false;
  var current = 'fr';

  function pick() {
    try {
      var saved = localStorage.getItem('el_lang');
      if (saved && T[saved]) return saved;
    } catch (e) { /* navigation privée : on retombe sur le navigateur */ }
    var nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return T[nav] ? nav : 'fr';
  }

  function apply(lang) {
    current = lang;
    var d = T[lang] || T.fr;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v) el.textContent = v;
    });
    // Phrases dont le découpage en balises fait partie du sens : on remplace le
    // contenu entier, sinon l'ordre des mots serait figé sur le français — ce qui
    // donne du charabia en arabe et en hindi. Valeurs statiques, jamais de saisie.
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-html]'), function (el) {
      var v = d[el.getAttribute('data-i18n-html')];
      if (v) el.innerHTML = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-ph]'), function (el) {
      var v = d[el.getAttribute('data-i18n-ph')];
      if (v) el.setAttribute('placeholder', v);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-switcher] [data-lang]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  function mount() {
    var host = document.querySelector('[data-i18n-switcher]');
    if (host && !host.children.length) {
      LANGS.forEach(function (l) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('data-lang', l.code);
        b.setAttribute('aria-label', l.label);
        b.textContent = l.flag;
        b.addEventListener('click', function () {
          try { localStorage.setItem('el_lang', l.code); } catch (e) {}
          apply(l.code);
        });
        host.appendChild(b);
      });
    }
    mounted = true;
    apply(pick());
  }

  window.ELI18N = { register: register, apply: function () { apply(pick()); }, langs: LANGS };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
