import { useContext } from "react";

import { useRouter } from "next/dist/client/router";

import { LanguageContext, defaultLocale } from "./LanguageProvider";
import { LangStrings } from "./Strings";

export default function useTranslation() {
  const router = useRouter();
  const locale = router.locale;

  function t(key) {
    console.log("daaa", LangStrings[locale], key);
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || "";
  }

  return { t, locale };
}
