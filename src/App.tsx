import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Toast } from "@/components/feedback/Toast";
import { Masks } from "@/components/overlay/Masks";
import { mountSiteInteractions } from "@/features/site-interactions";
import { cn } from "@/styles/cn";
import { AboutPage } from "@/pages/about/AboutPage";
import { CampusPage } from "@/pages/campus/CampusPage";
import { CasesPage } from "@/pages/cases/CasesPage";
import { ContactPage } from "@/pages/contact/ContactPage";
import { FlexpayPage } from "@/pages/flexpay/FlexpayPage";
import { HelpPage } from "@/pages/help/HelpPage";
import { HomePage } from "@/pages/home/HomePage";
import { NewsPage } from "@/pages/news/NewsPage";
import { ZhipinPage } from "@/pages/zhipin/ZhipinPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const anchor = pathname === "/help/faq" ? "help-faq" : pathname === "/help/manual" ? "help-manual" : "";
    if (anchor) {
      window.scrollTo(0, 0);
      const timer = window.setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 76);
      }, 60);
      return () => window.clearTimeout(timer);
    }
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    mountSiteInteractions();
  }, [pathname]);

  return (
    <div className={cn("ruitu-root")}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/zhipin" element={<ZhipinPage />} />
        <Route path="/product/flexpay" element={<FlexpayPage />} />
        <Route path="/product/campus" element={<CampusPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/help/manual" element={<HelpPage />} />
        <Route path="/help/faq" element={<HelpPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Masks />
      <Toast />
      <BackToTop />
    </div>
  );
}
