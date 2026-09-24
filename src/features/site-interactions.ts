import { closestClass, cn, queryClass, setClass } from "@/styles/cn";
import { showToast } from "@/components/feedback/toast-bus";
import { CASES, FAQ_DATA, MANUAL_DOCS, NEWS_ALL } from "@/features/content";

const INDUSTRIES = [
  { img: "im-ind1", name: "互联网平台经济", text: "万人批量日结" },
  { img: "im-ind2", name: "内容创作", text: "基础费+佣金灵活配置" },
  { img: "im-ind3", name: "物流配送", text: "多计费规则模板" },
  { img: "im-ind4", name: "家政服务", text: "实名签约 · 按单结算" },
  { img: "im-ind5", name: "教育培训", text: "按课程批量结算" },
  { img: "im-ind6", name: "共享出行", text: "订单流水自动对账" },
  { img: "im-ind7", name: "社区团购", text: "按单/按量灵活结算" },
  { img: "im-ind8", name: "快消零售", text: "按工时/单量计费" },
];

const PARTNERS_A = ["华信数据", "云帆物流", "盛泰制造", "恒安人力", "中科智联", "新程教育", "星澜传媒", "丰盛食品"];
const PARTNERS_B = ["鲁信建设", "启明机械", "康和医药", "聚能新能源", "锦程贸易", "悦活零售", "安捷出行", "天工精密"];
const COLORS = ["#2B5CFF", "#FF6B3D", "#00B8A9", "#7B61FF", "#23B26D", "#E02E24", "#0AA5C9", "#E6438C"];
const MASKS = ["artMask", "docMask", "caseMask", "vMask"];
const FAQ_PAGE_SIZE = 5;

let listenersReady = false;
let faqCat = "fp";
let faqPage = 1;
let revealObserver: IntersectionObserver | null = null;

function once(el: Element, run: () => void) {
  const node = el as HTMLElement;
  if (node.dataset.bound === "1") return;
  node.dataset.bound = "1";
  run();
}

function text(id: string, value: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setMask(id: string, open: boolean) {
  const mask = document.getElementById(id);
  if (!mask) return;
  setClass(mask, "open", open);
  mask.setAttribute("data-open", open ? "1" : "");
  const anyOpen = MASKS.some((item) => document.getElementById(item)?.getAttribute("data-open") === "1");
  document.body.style.overflow = anyOpen ? "hidden" : "";
}

function plainText(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|h[1-6]|li|ul|ol)>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function bindGroup(tabName: string, panelName: string, key: string) {
  const tabs = queryClass<HTMLElement>(tabName);
  const panels = queryClass<HTMLElement>(panelName);
  tabs.forEach((tab) => {
    once(tab, () => {
      tab.addEventListener("click", () => {
        if ((tab as HTMLButtonElement).disabled) return;
        const value = tab.dataset[key];
        tabs.forEach((item) => setClass(item, "on", item === tab));
        panels.forEach((panel) => setClass(panel, "on", panel.dataset[key] === value));
      });
    });
  });
}

function fillIndustries() {
  const grid = document.getElementById("caseScroller");
  if (!grid || grid.childElementCount) return;
  grid.innerHTML = INDUSTRIES.map(
    (item) =>
      `<div class="${cn("cs-card", "ind", item.img)}"><div class="${cn("cs-info")}"><span class="${cn("cs-tag")}">${item.name}</span><b>${item.text}</b></div></div>`,
  ).join("");
}

function logo(name: string, index: number) {
  const color = COLORS[index % COLORS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 150 40"><rect x="2" y="3" width="34" height="34" rx="10" fill="${color}"/><text x="46" y="26" font-family="PingFang SC,Microsoft YaHei,sans-serif" font-size="16" font-weight="700" fill="#39415A">${name}</text></svg>`;
  return `<span class="${cn("plg")}"><img class="${cn("plg-img")}" alt="${name}" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}" /></span>`;
}

function fillPartners() {
  (["mqRowA", "mqRowB"] as const).forEach((id, row) => {
    const el = document.getElementById(id);
    if (!el || el.childElementCount) return;
    const names = row === 0 ? PARTNERS_A : PARTNERS_B;
    const html = names.map((name, index) => logo(name, index + row * 3)).join("");
    el.innerHTML = html + html;
  });
}

function reveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setClass(entry.target, "in", true);
          revealObserver?.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
  }
  queryClass("rv").forEach((el) => {
    const node = el as HTMLElement;
    if (node.dataset.revealed === "1") return;
    node.dataset.revealed = "1";
    revealObserver?.observe(el);
  });
}

function openNews(index: number) {
  const item = NEWS_ALL[index] ?? NEWS_ALL[0];
  const cat = document.getElementById("artCat");
  if (cat) cat.className = cn("cat", item.cls);
  text("artTitle", item.title);
  text("artMeta", `${item.source} · ${item.date}`);
  text("artP1", item.body);
  text("artP2", "（原型示意正文 · 正式版由 CMS 发布文章全文，支持配图、相关推荐与分享。）");
  setMask("artMask", true);
}

function openDoc(id: string) {
  const doc = MANUAL_DOCS[id];
  if (!doc) return;
  text("docCat", doc.cat);
  text("docTitle", doc.t);
  text("docMeta", doc.meta);
  const body = document.getElementById("docBody");
  if (body) {
    body.innerHTML = doc.secs
      .map((section) => {
        const heading = section.h ? `<h4>${escapeHtml(section.h)}</h4>` : "";
        const list = section.ul ? `<ul>${section.ul.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
        const tip = section.tip ? `<div class="${cn("tip")}">${escapeHtml(section.tip)}</div>` : "";
        return heading + list + tip;
      })
      .join("");
  }
  setMask("docMask", true);
}

function openCase(index: number) {
  const item = CASES[index];
  if (!item) return;
  const hero = document.getElementById("caseHero");
  if (hero) hero.className = cn("case-hero", item.img);
  text("caseTitle", item.title);
  text("caseMeta", `${item.co} · ${item.tag}`);
  const stats = document.getElementById("caseStats");
  if (stats) {
    stats.innerHTML = item.tags.map((tag) => `<span class="${cn("cs-pill")}">${escapeHtml(tag)}</span>`).join("");
  }
  const body = document.getElementById("caseBody");
  if (body) body.innerHTML = item.body;
  setMask("caseMask", true);
}

function renderCases() {
  const grid = document.getElementById("casesGrid");
  if (!grid || grid.childElementCount) return;
  grid.innerHTML = CASES.map(
    (item, index) =>
      `<div class="${cn("ccard", "in")}" data-ci="${index}"><div class="${cn("cv", item.img)}"><span class="${cn("cs-tag")}">${escapeHtml(item.co)} · ${escapeHtml(item.tag)}</span></div><div class="${cn("cb")}"><b>${escapeHtml(item.title)}</b><p>${escapeHtml(plainText(item.body))}</p><div class="${cn("cc-stats")}">${item.tags
        .slice(0, 2)
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("")}</div></div></div>`,
  ).join("");
}

function faqFiltered() {
  const keyword = (document.getElementById("faqSearch") as HTMLInputElement | null)?.value.trim().toLowerCase() ?? "";
  return FAQ_DATA.filter((item) => {
    const categoryOk = faqCat === "all" || item.cat === faqCat;
    const text = `${item.q} ${item.a} ${item.keys}`.toLowerCase();
    return categoryOk && (!keyword || text.includes(keyword));
  });
}

function renderFaq() {
  const listEl = document.getElementById("faqList");
  const empty = document.getElementById("faqEmpty");
  const pager = document.getElementById("faqPgn");
  if (!listEl || !empty || !pager) return;
  const list = faqFiltered();
  const pages = Math.max(1, Math.ceil(list.length / FAQ_PAGE_SIZE));
  if (faqPage > pages) faqPage = pages;
  const slice = list.slice((faqPage - 1) * FAQ_PAGE_SIZE, faqPage * FAQ_PAGE_SIZE);
  listEl.innerHTML = slice
    .map(
      (item) =>
        `<details><summary>${escapeHtml(item.q)}</summary><div class="${cn("ans")}"><span class="${cn("cat-mini", "cat-dyn")}" style="color:#fff">${escapeHtml(item.catName)}</span><br>${escapeHtml(item.a)}</div></details>`,
    )
    .join("");
  empty.style.display = list.length ? "none" : "block";
  if (list.length <= FAQ_PAGE_SIZE) {
    pager.style.display = "none";
    return;
  }
  pager.style.display = "";
  const buttons = Array.from({ length: pages }, (_, index) => {
    const page = index + 1;
    return `<button class="${cn("pgn-b", page === faqPage && "on")}" data-fp="${page}">${page}</button>`;
  }).join("");
  pager.innerHTML = `<span class="${cn("pgn-info")}">共 ${list.length} 条 · 第 ${faqPage} / ${pages} 页</span><div class="${cn("pgn-bts")}"><button class="${cn("pgn-b")}" data-fp="${faqPage - 1}" ${faqPage === 1 ? "disabled" : ""}>‹ 上一页</button>${buttons}<button class="${cn("pgn-b")}" data-fp="${faqPage + 1}" ${faqPage === pages ? "disabled" : ""}>下一页 ›</button></div>`;
}

function bindFaq() {
  const search = document.getElementById("faqSearch");
  if (search) {
    once(search, () => {
      search.addEventListener("input", () => {
        faqPage = 1;
        renderFaq();
      });
    });
  }
  queryClass<HTMLButtonElement>("faq-cat").forEach((button) => {
    once(button, () => {
      button.addEventListener("click", () => {
        if (button.disabled) return;
        queryClass("faq-cat").forEach((item) => setClass(item, "on", item === button));
        faqCat = button.dataset.fcat || "all";
        faqPage = 1;
        renderFaq();
      });
    });
  });
  if (document.getElementById("faqList")) renderFaq();
}

function bindHelpNav() {
  document.querySelectorAll<HTMLAnchorElement>("#helpNav a").forEach((link) => {
    once(link, () => {
      link.addEventListener("click", (event) => {
        const id = link.dataset.target;
        const section = id ? document.getElementById(id) : null;
        if (!section) return;
        event.preventDefault();
        window.scrollTo(0, section.getBoundingClientRect().top + window.scrollY - 76);
      });
    });
  });
}

function bindForm() {
  const form = document.getElementById("ctForm");
  if (!form) return;
  once(form, () => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = (document.getElementById("fName") as HTMLInputElement | null)?.value.trim();
      const phone = (document.getElementById("fPhone") as HTMLInputElement | null)?.value.trim();
      if (!name || !phone) {
        showToast("请填写称呼和联系方式");
        return;
      }
      (event.currentTarget as HTMLFormElement).reset();
      showToast("已记录（原型示意）· 正式版将通知对应团队跟进");
    });
  });
}

function bindNewsTabs() {
  queryClass<HTMLElement>("hn-tab").forEach((tab) => {
    once(tab, () => {
      tab.addEventListener("click", () => {
        const cat = tab.dataset.cat;
        if (!cat) return;
        queryClass("hn-tab").forEach((item) => setClass(item, "on", item === tab));
        const grid = document.getElementById("newsGrid");
        let count = 0;
        if (grid) {
          queryClass<HTMLElement>("news-card", grid).forEach((card) => {
            const show = cat === "all" || card.dataset.cat === cat;
            card.style.display = show ? "" : "none";
            if (show) count += 1;
          });
        }
        const empty = document.getElementById("newsEmpty");
        if (empty) setClass(empty, "on", count === 0);
      });
    });
  });
}

function bindDocument() {
  if (listenersReady) return;
  listenersReady = true;
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const copy = target.closest<HTMLElement>("[data-copy]");
    if (copy?.dataset.copy) {
      const value = copy.dataset.copy;
      navigator.clipboard?.writeText(value).then(
        () => showToast("已复制：" + value),
        () => showToast(value),
      );
    }

    if (closestClass(target, "dl-btn")) {
      showToast("原型示意：正式版将跳转至下载页 / 应用商店 / 对应平台");
    }

    const newsCard = target.closest<HTMLElement>("[data-idx]");
    if (newsCard?.closest("#hnGrid, #newsGrid")) {
      openNews(Number(newsCard.dataset.idx));
    }

    const doc = closestClass<HTMLElement>(target, "doc-item");
    if (doc?.dataset.doc) openDoc(doc.dataset.doc);

    const caseCard = target.closest<HTMLElement>("[data-ci]");
    if (caseCard?.closest("#casesGrid")) openCase(Number(caseCard.dataset.ci));

    const pageButton = target.closest<HTMLButtonElement>("#faqPgn [data-fp]");
    if (pageButton && !pageButton.disabled) {
      faqPage = Number(pageButton.dataset.fp);
      renderFaq();
      document.getElementById("help-faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    MASKS.forEach((id) => {
      if (target.id === id) setMask(id, false);
    });
    if (target.id === "artClose" || target.closest("#artClose")) setMask("artMask", false);
    if (target.id === "docClose" || target.closest("#docClose")) setMask("docMask", false);
    if (target.id === "caseClose" || target.closest("#caseClose")) setMask("caseMask", false);
    if (target.id === "vClose" || target.closest("#vClose")) setMask("vMask", false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    MASKS.forEach((id) => setMask(id, false));
  });
}

export function mountSiteInteractions() {
  fillIndustries();
  fillPartners();
  renderCases();
  reveal();
  bindGroup("pmx-tab", "pmx-panel", "pmx");
  bindGroup("cred-tab", "cred-panel", "cred");
  bindGroup("man-tab", "man-panel", "man");
  bindFaq();
  bindHelpNav();
  bindForm();
  bindNewsTabs();
  bindDocument();
}
