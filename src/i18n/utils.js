import { ui, defaultLang } from "@i18n/ui";

export function getLangFromUrl(url) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang;
    return defaultLang;
}

/**
 * Returns a function that takes a key and returns the translation for
 * that key in the specified language.
 * @param {string} lang ["en"|"es"]
 * @returns {string}
 */
export function useTranslations(lang) {
    return function t(key) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
