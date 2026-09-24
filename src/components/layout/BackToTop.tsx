import { useEffect, useState } from "react";
import { Icon } from "@/components/icon/Icon";
import { cn } from "@/styles/cn";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={cn("to-top", show && "show")}
      aria-label="返回顶部"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="icon-39" />
    </button>
  );
}
