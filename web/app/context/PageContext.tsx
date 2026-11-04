"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
// import { getSettings } from "../utils/sanity-queries";

const PageContext = createContext({});

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = (props: PageContextProps) => {
  const { children } = props;
  const pathname = usePathname();
  const settings = {
    pathname,
  };

  const _format = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const header = document.querySelector("header");
    let headerBounding = { height: 50 };
    if (header) {
      headerBounding = header.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--header-h",
        headerBounding.height + "px",
      );
    }
    const footer = document.querySelector("footer");
    let footerBounding = { height: 50 };
    if (footer) {
      footerBounding = footer.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--footer-h",
        footerBounding.height + "px",
      );
    }
  };

  useEffect(() => {
    _format();
    window.addEventListener("resize", _format);

    return () => {
      window.removeEventListener("resize", _format);
    };
  }, []);

  useEffect(() => {
    _format();
  }, [pathname]);

  return (
    <PageContext.Provider value={{ settings }}>{children}</PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
