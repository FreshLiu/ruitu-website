import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function HelpPage() {
  return (
    <>

  <section className={cn("pp-hero")} style={{paddingBottom: "56px"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")} style={{marginBottom: "8px"}}>用得更顺手，找得更容易</h2>
      <p className={cn("sec-sub", "rv")} style={{marginBottom: "0"}}>操作手册与常见问题，帮助灵工就业者与企业管理者快速上手锐兔安薪。</p>
    </div>
  </section>
  <section className={cn("help-shell-sec")}>
    <div className={cn("wrap")}>
      <div className={cn("help-shell")}>
        <aside className={cn("help-side")}>
          <div className={cn("help-side-cap")}>帮助中心</div>
          <nav className={cn("help-nav")} id="helpNav">
            <a href="#help-manual" data-target="help-manual" className={cn("on")}><b>操作手册</b><span>分产品图文操作文档</span></a>
            <a href="#help-faq" data-target="help-faq"><b>常见问题</b><span>高频问题分类解答</span></a>
          </nav>
        </aside>
        <div className={cn("help-body")}>

  {/* 操作手册 */}
  <section id="help-manual" className={cn("hb-block")}>
    
    <div className={cn("hb-in")}>
      <h2 className={cn("sec", "rv")} style={{fontSize: "28px"}}>操作手册</h2>
      <div className={cn("man-shell", "rv")}>
        <div className={cn("man-tabs")} id="manIndex">
          <button className={cn("man-tab")} data-man="zp" disabled={true} aria-disabled="true"><b>锐兔职聘</b><span className={cn("man-soon")}>待开发</span></button>
          <button className={cn("man-tab", "on")} data-man="fp"><b>锐兔安薪</b></button>
          <button className={cn("man-tab")} data-man="cp" disabled={true} aria-disabled="true"><b>锐兔校园</b><span className={cn("man-soon")}>待开发</span></button>
        </div>
        <div id="manPanels">
          <div className={cn("man-panel")} data-man="zp">
            <div className={cn("doc-list")}>
              <button className={cn("doc-item")} data-doc="zp1"><span className={cn("doc-no")}>01</span><div className={cn("doc-tx")}><b>注册与实名认证指南</b><span>本机号码一键登录、人脸实名认证与数字身份证的生成规则</span><em>更新 2026-08-12 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zp2"><span className={cn("doc-no")}>02</span><div className={cn("doc-tx")}><b>完善简历与技能认证指南</b><span>学历 / 履历 / 技能多源交叉认证，提升信用分与曝光权重</span><em>更新 2026-08-12 · 约 6 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zp3"><span className={cn("doc-no")}>03</span><div className={cn("doc-tx")}><b>投递与在线沟通指南</b><span>岗位筛选、一键投递、直聊 HR 与面试邀约管理</span><em>更新 2026-08-05 · 约 6 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zp4"><span className={cn("doc-no")}>04</span><div className={cn("doc-tx")}><b>信用分与曝光权重说明</b><span>信用分构成、扣分规则与信用提升方法</span><em>更新 2026-07-28 · 约 4 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zh1"><span className={cn("doc-no")}>05</span><div className={cn("doc-tx")}><b>企业注册与资质认证指南</b><span>营业执照 + 招聘者身份双认证、PC 端扫码登录与子账号开通</span><em>更新 2026-08-12 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zh2"><span className={cn("doc-no")}>06</span><div className={cn("doc-tx")}><b>发布职位与薪资核验指南</b><span>职位创建流程、薪资真实性核验与发布规范</span><em>更新 2026-08-12 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zh3"><span className={cn("doc-no")}>07</span><div className={cn("doc-tx")}><b>简历筛选与面试管理指南</b><span>按信用分筛选候选人、PC 看板批量管理与在线约面</span><em>更新 2026-08-05 · 约 6 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="zh4"><span className={cn("doc-no")}>08</span><div className={cn("doc-tx")}><b>子账号与团队协作指南</b><span>子账号开通、权限分级与简历归属规则</span><em>更新 2026-07-28 · 约 4 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
            </div>
          </div>
          <div className={cn("man-panel", "on")} data-man="fp">
            <div className={cn("doc-list")}>
              <button className={cn("doc-item")} data-doc="fp1"><span className={cn("doc-no")}>01</span><div className={cn("doc-tx")}><b>企业签约与开通指南</b><span>电子协议签署、风控准入与 SaaS / API 两种接入模式</span><em>更新 2026-08-12 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="fp2"><span className={cn("doc-no")}>02</span><div className={cn("doc-tx")}><b>任务化创建与结算指南</b><span>用工任务化创建、验收结算与日结 / 周结配置</span><em>更新 2026-08-12 · 约 6 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="fp3"><span className={cn("doc-no")}>03</span><div className={cn("doc-tx")}><b>发薪、个税与开票指南</b><span>批量代发、个税代扣代缴与增值税专票开具</span><em>更新 2026-08-05 · 约 6 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="fp4"><span className={cn("doc-no")}>04</span><div className={cn("doc-tx")}><b>四流合一与凭证审计说明</b><span>合同流 / 业务流 / 资金流 / 发票流留痕与凭证下载</span><em>更新 2026-07-28 · 约 4 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
            </div>
          </div>
          <div className={cn("man-panel")} data-man="cp">
            <div className={cn("doc-list")}>
              <button className={cn("doc-item")} data-doc="cp1"><span className={cn("doc-no")}>01</span><div className={cn("doc-tx")}><b>学生注册与校园认证指南</b><span>校园身份认证、校招与实习专区解锁</span><em>更新 2026-08-12 · 约 4 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="cp2"><span className={cn("doc-no")}>02</span><div className={cn("doc-tx")}><b>实习与校招岗位投递指南</b><span>按学校 / 专业 / 城市筛选与投递状态跟踪</span><em>更新 2026-08-12 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="cp3"><span className={cn("doc-no")}>03</span><div className={cn("doc-tx")}><b>宣讲日历与一键直投指南</b><span>宣讲会订阅提醒、简历一键直投企业招聘端</span><em>更新 2026-08-05 · 约 5 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
              <button className={cn("doc-item")} data-doc="cp4"><span className={cn("doc-no")}>04</span><div className={cn("doc-tx")}><b>校企合作对接指南</b><span>面向高校就业办：合作登记、宣讲会与实习基地共建</span><em>更新 2026-07-28 · 约 4 分钟读完</em></div><span className={cn("doc-arrow")}>→</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 常见问题 FAQ */}
  <section id="help-faq" className={cn("hb-block")}>
    
    <div className={cn("hb-in")}>
      <h2 className={cn("sec", "rv")} style={{fontSize: "28px"}}>高频问题，快速解答</h2>
      <div className={cn("faq-tools", "rv")}>
        <div className={cn("faq-search")}>🔍<input type="text" id="faqSearch" placeholder="\u641c\u7d22\u95ee\u9898\uff0c\u5982\uff1a\u53d1\u85aa\u3001\u5b9e\u540d\u8ba4\u8bc1\u3001\u4fe1\u7528\u5206\u2026" /></div>
        <button className={cn("faq-cat")} data-fcat="all">全部</button>
        <button className={cn("faq-cat")} data-fcat="zp" disabled={true} aria-disabled="true">锐兔职聘<i className={cn("cat-soon")}>待开发</i></button>
        <button className={cn("faq-cat", "on")} data-fcat="fp">锐兔安薪</button>
        <button className={cn("faq-cat")} data-fcat="cp" disabled={true} aria-disabled="true">锐兔校园<i className={cn("cat-soon")}>待开发</i></button>
      </div>
      <div className={cn("faq-list", "rv")} id="faqList"></div>
      <div className={cn("pgn", "rv")} id="faqPgn" style={{display: "none"}}></div>
      <div className={cn("faq-empty")} id="faqEmpty">没有找到相关问题，试试换个关键词，或 <Link to="/contact">联系我们</Link> 提交你的问题。</div>
    </div>
  </section>
        </div>{/* /help-body */}
      </div>{/* /help-shell */}
    </div>
  </section>

  <section className={cn("xsec")}>
    <div className={cn("wrap")} style={{textAlign: "center"}}>
      <h2 className={cn("sec", "rv")} style={{fontSize: "24px"}}>还有其他问题？</h2>
      <div className={cn("rv")} style={{display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px"}}>
        <Link to="/contact"><button className={cn("btn", "btn-blue", "btn-big")}>联系我们</button></Link>
        <Link to="/news"><button className={cn("btn", "btn-line", "btn-big")}>浏览资讯中心</button></Link>
      </div>
    </div>
  </section>
    </>
  );
}
