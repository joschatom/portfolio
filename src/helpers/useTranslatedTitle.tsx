import type { FlatNamespace, TFunction } from "i18next";
import { useEffect } from "react";

function useTranslatedTitle(
  t: TFunction<Exclude<FlatNamespace, "shared">>,
  values: Record<string, string> = {},
) {
  useEffect(() => {
    document.title = `Portfolio - ${t((k) => k.title, values)}`;
  }, [values, t]);
}

export default useTranslatedTitle;
