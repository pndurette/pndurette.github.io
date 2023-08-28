function quote(quotes) {
    // Write a random quote from an array of quotes
    // Args:
    //   * quotes: a string that can be evaled as an array of string
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.write(quote)
}

function i18n_str(phrase_key, lang = null) {
    // Simple i18n function to return a value based on the navigator language.
    // It falls back to english if the language is not supported.
    // Args:
    //   * phrase_key: a string that is the key to the language object
    //   * lang: a 2-letter string language code (e.g. "en", "fr")

    // If lang is not specified, use the navigator language
    if (lang == null) {
        lang = navigator.language.split("-")[0];
    }

    // If the language is supported, return the value
    if (lang in translations) {
        if (phrase_key in translations[lang]) {
            return translations[lang][phrase_key];
        } else {
            console.log(`i18n: key error for '${phrase_key}' in ${lang}`);
        }
    } else {
        // If the language is not supported, return the value in english
        console.log("i18n: language not supported: " + lang);
        return i18n_str(phrase_key, "en");
    }
}

function i18n(class_name) {
    // Replace contents of elements of class <class_name>, using the id as key
    // Args:
    //   * class_name: a string that is the class of the elements to replace
    for (const element of document.getElementsByClassName(class_name)) {
        element.innerHTML = i18n_str(element.id);
    }
}

// Translations
var translations = {
    "en": {
        "intro": "Hello! I'm a platform engineer in Montréal",
        "touch_screens": "touch screens",
        "vintage_macs": "vintage Macs",
        "3d_printing": "3D printing",
        "open source": "open source",
        "schnauzers": "schnauzers",
    },
    "fr": {
        "intro": "Salut! Je suis un ingénieur de plate-forme (platform engineer) à Montréal",
        "touch_screens": "écrans tactiles",
        "vintage_macs": "Macs vintage",
        "3d_printing": "impression 3D",
        "open source": "open source",
        "schnauzers": "schnauzers",
    }
}