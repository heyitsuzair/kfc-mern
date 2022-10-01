import React, { useEffect } from "react";
import cookies from "js-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function LanguageSwitch() {
  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ur-PK",
      name: "اردو",
    },
  ];
  const currentLangCode = cookies.get("i18next") || "en";

  const { t } = useTranslation();

  useEffect(() => {}, [t]);

  return (
    <div className="language-switcher">
      {languages.map((lang) => {
        return (
          <div
            key={lang.code}
            onClick={() => i18next.changeLanguage(lang.code)}
            className={`switch-${lang.code} ${
              currentLangCode === lang.code && "switch-active"
            }`}
          >
            {lang.name}
          </div>
        );
      })}
    </div>
  );
}
