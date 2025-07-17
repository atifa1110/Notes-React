import enUS from '@/i18n/en-US.json';
import idID from '@/i18n/id-ID.json';

import { useLocale } from "./use-locale";

export function useTranslation() {
  const { locale } = useLocale();

  const locales = {
    'en-US': enUS,
    'id-ID': idID,
  };

  return locales[locale];
}