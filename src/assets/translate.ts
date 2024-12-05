import gr from '../..//gr.json';


const translations = {
  en,
  es
};

export const t = (key: string, lang: string) => {
  return translations[lang]?.[key] || key;
};