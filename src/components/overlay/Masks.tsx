import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function Masks() {
  return (
    <>
{/* 视频播放弹层（点击视频在本页弹层播放，不跳转页面） */}
<div className={cn("vmask")} id="vMask" aria-hidden="true">
  <div className={cn("vbox")}>
    <div className={cn("vhead")}>
      <div className={cn("vtitle")} id="vTitle">视频标题</div>
      <button className={cn("vclose")} id="vClose" aria-label="\u5173\u95ed">✕</button>
    </div>
    <div className={cn("vstage")} id="vStage">
      <button className={cn("vplay")} id="vPlay" aria-label="\u64ad\u653e / \u6682\u505c">▶</button>
      <span className={cn("vnote")} id="vNote">原型示意：正式版在此播放视频文件</span>
      <div className={cn("vbar")} id="vBar"><div className={cn("vbar-in")}><i className={cn("vfill")} id="vFill"></i><b className={cn("vthumb")} id="vThumb"></b></div></div>
      <div className={cn("vctrl")}>
        <button className={cn("vcbtn")} id="vBtn" aria-label="\u64ad\u653e / \u6682\u505c"><Icon name="icon-36" /></button>
        <span className={cn("vtime")} id="vTime">00:00 / 00:00</span>
        <span className={cn("vspacer")}></span>
        <button className={cn("vcbtn")} id="vMute" aria-label="\u9759\u97f3 / \u53d6\u6d88\u9759\u97f3"><Icon name="icon-37" /></button>
        <button className={cn("vcbtn")} id="vFs" aria-label="\u5168\u5c4f / \u9000\u51fa\u5168\u5c4f"><Icon name="icon-38" /></button>
      </div>
    </div>
  </div>
</div>

{/* 文章详情弹层 */}
<div className={cn("art-mask")} id="artMask">
  <div className={cn("art-box")}>
    <button className={cn("art-close")} id="artClose" aria-label="\u5173\u95ed">✕</button>
    <span className={cn("cat")} id="artCat">锐兔动态</span>
    <h2 id="artTitle">文章标题</h2>
    <div className={cn("meta")} id="artMeta">2026-09-02 · 锐兔（沈阳）数据信息技术有限公司</div>
    <div className={cn("body")}>
      <p id="artP1"></p>
      <p id="artP2"></p>
      <p>关于锐兔：锐兔（沈阳）数据信息技术有限公司（东软集团全资控股）以就业信用为底座，旗下拥有锐兔职聘、锐兔安薪（灵活用工发薪平台）与锐兔校园版三款产品，让每一次就业求职都值得信任。</p>
    </div>
    <div className={cn("art-note")}>原型示意：正式版由 CMS 发布文章全文，此处为占位正文。</div>
  </div>
</div>

{/* 操作手册文档阅读弹层 */}
<div className={cn("art-mask")} id="docMask">
  <div className={cn("art-box")}>
    <button className={cn("art-close")} id="docClose" aria-label="\u5173\u95ed">✕</button>
    <span className={cn("cat")} id="docCat" style={{background: "var(--blue)"}}>操作手册</span>
    <h2 id="docTitle">文档标题</h2>
    <div className={cn("meta")} id="docMeta"></div>
    <div className={cn("body", "doc-body")} id="docBody"></div>
    <div className={cn("art-note")}>原型示意：正式版操作文档由帮助中心后台维护，支持图文步骤、视频嵌入与版本更新记录。</div>
  </div>
</div>


{/* 合作案例详情弹层 */}
<div className={cn("art-mask")} id="caseMask">
  <div className={cn("art-box")}>
    <button className={cn("art-close")} id="caseClose" aria-label="\u5173\u95ed">✕</button>
    <div className={cn("case-hero")} id="caseHero"></div>
    <h2 id="caseTitle">案例标题</h2>
    <div className={cn("meta")} id="caseMeta"></div>
    <div className={cn("case-stats")} id="caseStats"></div>
    <div className={cn("body")}><div id="caseBody"></div><p>关于锐兔：锐兔（沈阳）数据信息技术有限公司（东软集团全资控股）以就业信用为底座，旗下拥有锐兔职聘、锐兔安薪（灵活用工发薪平台）与锐兔校园版三款产品，让每一次就业求职都值得信任。</p></div>
    <div className={cn("art-note")}>原型示意：正式版案例内容由运营维护，含项目背景、解决方案与效果数据。</div>
  </div>
</div>

{/* ================= Footer ================= */}{/* ================= Footer ================= */}

    </>
  );
}
