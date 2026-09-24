import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function NewsPage() {
  return (
    <>

  <section className={cn("pp-hero")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")} style={{marginBottom: "8px"}}>锐兔动态 · 行业洞察 · 政策解读</h2>
      <p className={cn("sec-sub", "rv")} style={{marginBottom: "0"}}>了解锐兔的最新进展，读懂招聘与灵活用工行业的趋势与政策。</p>
    </div>
  </section>
  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    
    <div className={cn("wrap")}>
      <div className={cn("hn-tabs")} id="newsTabs" style={{marginBottom: "26px"}}>
        <button className={cn("hn-tab", "on")} data-cat="all">全部</button>
        <button className={cn("hn-tab")} data-cat="dyn">锐兔动态</button>
        <button className={cn("hn-tab")} data-cat="ins">行业洞察</button>
        <button className={cn("hn-tab")} data-cat="pol">政策解读</button>
      </div>
      {/* 列表时间 = 后台资讯的「创建时间」（系统自动记录，后台无「展示时间」配置项） */}
      <div className={cn("news-grid")} id="newsGrid">
        <div className={cn("news-card", "rv")} data-idx="0" data-cat="ins" data-title="500 \u4ebf\u62db\u8058\u5e02\u573a\u5b58\u4fe1\u4efb\u77ed\u677f\uff0c\u53cc\u5411\u4fe1\u606f\u5931\u771f\u62d6\u7d2f\u62db\u8058\u8f6c\u5316\u6548\u7387" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-09-21" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-bd")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>双向信息失真拖累招聘转化</b></div>
          <div className={cn("news-body")}><h4>500 亿招聘市场存信任短板，双向信息失真拖累招聘转化效率</h4><p>当前线上招聘市场规模持续扩大，但信任赤字成为行业核心痛点：企业端虚假挂岗、钓鱼招聘屡禁不止，求职者简历美化、经历虚标，持续增加 HR 筛选成本。</p><span>2026-09-21 · CSDN 博客</span></div>
        </div>
        <div className={cn("news-card", "rv")} data-idx="1" data-cat="ins" data-title="\u544a\u522b\u6d41\u91cf\u5185\u5377\uff0c\u884c\u4e1a\u63a2\u7d22\u4fe1\u7528\u4f53\u7cfb\u91cd\u6784\u62db\u8058\u4f9b\u9700\u5339\u914d\u89c4\u5219" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-03-10" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-trend")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>信用体系重构供需匹配规则</b></div>
          <div className={cn("news-body")}><h4>告别流量内卷，行业探索信用体系重构招聘供需匹配规则</h4><p>平台预付费模式与招聘结果割裂，难以根治双边信息造假。行业共识逐步形成：需引入双向信用评价体系，依托实名制与履约行为数据建立信用画像。</p><span>2026-03-10 · 新浪新闻</span></div>
        </div>
        <div className={cn("news-card", "rv")} data-idx="2" data-cat="ins" data-title="\u91d1\u7a0e\u56db\u671f\u5168\u9762\u843d\u5730\uff0c\u7075\u6d3b\u7528\u5de5\u5e73\u53f0\u8fdb\u5165\u4e1a\u52a1\u771f\u5b9e\u6027\u5f3a\u76d1\u7ba1\u65f6\u4ee3" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-09-15" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-doc")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>灵活用工进入强监管时代</b></div>
          <div className={cn("news-body")}><h4>金税四期全面落地，灵活用工平台进入业务真实性强监管时代</h4><p>税务监管由事后稽查转向实时数据预警，资金流、发票、合同、业务数据自动交叉比对，行业明确“六真原则”作为合规底线。</p><span>2026-09-15 · 灵工头条</span></div>
        </div>
        <div className={cn("news-card", "rv")} data-idx="3" data-cat="ins" data-title="\u591a\u5730\u66dd\u5149\u7075\u5de5\u6d89\u7a0e\u5927\u6848\uff0c\u4f01\u4e1a\u7075\u5de5\u7ed3\u7b97\u4e9f\u9700\u4e13\u4e1a\u5408\u89c4\u53d1\u85aa\u670d\u52a1" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-09-09" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-invoice")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>灵工涉税大案频发</b></div>
          <div className={cn("news-body")}><h4>多地曝光灵工涉税大案，企业灵工结算亟需专业合规发薪服务</h4><p>私户发放灵工报酬、业务与合同脱节、委托代征资质不合规，都是企业高频风险点；市场需求转向具备完整合规链路的灵工发薪服务商。</p><span>2026-09-09 · 手机搜狐网</span></div>
        </div>
        <div className={cn("news-card", "rv")} data-idx="4" data-cat="ins" data-title="2026 \u6821\u62db\u4f9b\u9700\u9519\u914d\u51f8\u663e\uff0c\u5e94\u5c4a\u751f\u9762\u4e34\u4f4e\u6548\u6295\u9012\u4e0e\u865a\u5047\u5c97\u4f4d\u56f0\u6270" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-09-21" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-cp")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>校招供需错配凸显</b></div>
          <div className={cn("news-body")}><h4>2026 校招供需错配凸显，应届生面临低效投递与虚假岗位困扰</h4><p>校招平台约 22% 岗位存在虚假挂岗，应届生平均投递 20 份简历仅获 1-2 次面试机会；校园垂直招聘产品成为解题方向。</p><span>2026-09-21 · 36 氪</span></div>
        </div>
        <div className={cn("news-card", "rv")} data-idx="5" data-cat="ins" data-title="2026 \u79cb\u62db\u89c2\u5bdf\uff1a\u5e94\u5c4a\u751f\u6c42\u804c\u4ece \u201c\u627e\u5de5\u4f5c\u201d \u8f6c\u5411 \u201c\u627e\u5408\u9002\u5de5\u4f5c\u201d" data-catname="\u884c\u4e1a\u6d1e\u5bdf" data-date="2026-09-17" data-clscat="cat-ins">
          <div className={cn("news-cover", "cov-ins", "im-zp")}><span className={cn("cat", "cat-ins")}>行业洞察</span><b>从“找工作”到“找合适工作”</b></div>
          <div className={cn("news-body")}><h4>2026 秋招观察：应届生求职从 “找工作” 转向 “找合适工作”</h4><p>校招呈现招聘周期前置、岗位冷热分化特征，应届生痛点从“找不到岗位”转为难以甄别企业真实情况与岗位适配度。</p><span>2026-09-17 · 搜狐</span></div>
        </div>
      </div>
      {/* 空状态：分类下暂无资讯 */}
      <div className={cn("news-empty")} id="newsEmpty">
        <Icon name="icon-32" />
        <h4>该分类下暂无资讯</h4>
        <p>相关内容正在筹备中，敬请期待</p>
      </div>
    </div>
  </section>
    </>
  );
}
