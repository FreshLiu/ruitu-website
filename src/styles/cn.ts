import desktop from "./breakpoints/desktop/index.module.css";
import tablet from "./breakpoints/tablet/index.module.css";
import mobile from "./breakpoints/mobile/index.module.css";

const sheets = [desktop, tablet, mobile] as Array<Record<string, string>>;

/** 组合 PC / iPad / 手机三套作用域类名。某一端没有对应规则时自动跳过。 */
export function cn(...names: Array<string | false | null | undefined>) {
  return names
    .filter((name): name is string => Boolean(name))
    .flatMap((name) => name.split(/\s+/))
    .map((name) => sheets.map((sheet) => sheet[name]).filter(Boolean).join(" "))
    .join(" ");
}

/** 运行时切换状态类（on / open / in / show），三端哈希类名一起处理。 */
export function setClass(el: Element, name: string, on: boolean) {
  sheets.forEach((sheet) => {
    const token = sheet[name];
    if (token) el.classList.toggle(token, on);
  });
}

function tokenOf(name: string) {
  return sheets.map((sheet) => sheet[name]).find(Boolean)?.split(" ")[0];
}

export function queryClass<T extends Element = Element>(name: string, parent: ParentNode = document) {
  const token = tokenOf(name);
  if (!token) return [] as T[];
  return Array.from(parent.querySelectorAll<T>("." + CSS.escape(token)));
}

export function closestClass<T extends Element = Element>(el: Element, name: string) {
  const token = tokenOf(name);
  if (!token) return null;
  return el.closest<T>("." + CSS.escape(token));
}
