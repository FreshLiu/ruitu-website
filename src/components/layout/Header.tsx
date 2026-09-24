import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/styles/cn";

const PRODUCTS = [
  { to: "/product/zhipin", title: "锐兔职聘", desc: "全行业招聘求职 · 求职端 + 招聘端", badge: "核心" },
  { to: "/product/flexpay", title: "锐兔安薪", desc: "灵活用工发薪平台 · 四流合一合规结算" },
  { to: "/product/campus", title: "锐兔校园版", desc: "在校大学生 · 校招与实习岗位" },
];

const HELP = [
  { to: "/help/manual", title: "操作手册", desc: "锐兔安薪 / 锐兔职聘 / 锐兔校园" },
  { to: "/help/faq", title: "常见问题", desc: "高频问题分类解答 · 支持关键词搜索" },
];

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const over = onHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const productOn = pathname.startsWith("/product");
  const helpOn = pathname.startsWith("/help");

  return (
    <nav id="nav" className={cn("nav", over && "over", scrolled && "scrolled")}>
      <div className={cn("nav-in")}>
        <Link className={cn("logo")} to="/">
          <img className={cn("mark")} src="/images/mark.png" alt="锐兔 logo" />
          锐兔
        </Link>
        <div className={cn("nav-links", open && "nav-open")} id="navLinks">
          <NavLink to="/" data-nav="home" className={({ isActive }) => cn(isActive && "on")}>
            首页
          </NavLink>
          <div className={cn("nav-drop", productOn && "on")} data-nav="product">
            <span className={cn("nav-parent")}>产品介绍</span>
            <div className={cn("drop-menu")}>
              {PRODUCTS.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.badge ? <span className={cn("dm-badge")}>{item.badge}</span> : null}
                  <b>{item.title}</b>
                  <small>{item.desc}</small>
                </Link>
              ))}
            </div>
          </div>
          <div className={cn("nav-drop", helpOn && "on")} data-nav="help">
            <span className={cn("nav-parent")}>帮助中心</span>
            <div className={cn("drop-menu")}>
              {HELP.map((item) => (
                <Link key={item.to} to={item.to}>
                  <b>{item.title}</b>
                  <small>{item.desc}</small>
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/news" className={({ isActive }) => cn(isActive && "on")}>
            资讯中心
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => cn(isActive && "on")}>
            关于锐兔
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => cn(isActive && "on")}>
            联系我们
          </NavLink>
        </div>
        <div className={cn("nav-cta")}>
          <button className={cn("burger")} aria-label="菜单" onClick={() => setOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
