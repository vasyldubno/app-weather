import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { useEffect, useState } from "react";

export const useDebaunce = (value: string, delay: number = 300): string => {
  const [debaunced, setDebaunced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebaunced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debaunced;
};
