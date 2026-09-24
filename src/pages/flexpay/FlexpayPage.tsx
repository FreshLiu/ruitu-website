import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function FlexpayPage() {
  return (
    <>

  <section className={cn("pp-hero")}>
    <div className={cn("wrap", "pp-grid")}>
      <div>
        <h1 className={cn("pp")}>锐兔安薪</h1>
        <p className={cn("pp-tag")} style={{marginBottom: "14px"}}><b>一站式灵活用工合规服务专家</b></p>
        <p className={cn("pp-desc")}>面对灵活用工招工、结算、申报等全链路管理难题，锐兔安薪打造企业端 - 平台 - 用户端全链路功能矩阵。平台聚合四流合一、智能风控、实时结算、财税一体四大核心能力，覆盖业务、财资、数据、风控全模块，为企业提供一站式灵活用工解决方案，实现合规发薪，助力企业降本增效。</p>
        <div className={cn("pp-badges")}>
          <span className={cn("hot")}>四大核心能力</span><span>① 四流合一</span><span>② 智能风控</span><span>③ 财税一体</span><span>④ 实时结算</span>
        </div>
        <div className={cn("hero-ctas")}>
          <button className={cn("btn", "btn-blue", "btn-big", "dl-go")}>企业版入口</button>
          <button className={cn("btn", "btn-dark", "btn-big", "dl-go")}>就业者端 · 小程序接单</button>
        </div>
      </div>
      <div className={cn("pp-visual")}>
        <div className={cn("fx-shots", "rv")}>
          <div className={cn("fx-pc")}><img src="/images/img.jpg" alt="\u9510\u5154\u5b89\u85aa\u4f01\u4e1a\u7aef \u00b7 \u7ed3\u7b97\u5355\u7ba1\u7406\u754c\u9762" /></div>
          <div className={cn("fx-phone")}><img src="/images/img-27.jpg" alt="\u9510\u5154\u5b89\u85aa\u5c31\u4e1a\u8005\u7aef \u00b7 \u4efb\u52a1\u5927\u5385\u754c\u9762" /></div>
        </div>
      </div>
    </div>
  </section>

  <section className={cn("side-sec")} style={{paddingTop: "80px"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>合规、高效、可信赖的灵活用工底座</h2>
      <p className={cn("sec-sub", "rv")}>平台聚合四大核心能力，企业降本合规、就业者安心增收。</p>
      <div className={cn("cap-grid")}>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-blue")}><Icon name="icon-22" /></div><h4>四流合一 · 合规致远</h4><p>业务流、资金流、合同流、发票流四流匹配归一，全周期合规管理，凭证可审计、可追溯。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-orange")}><Icon name="icon-23" /></div><h4>智能风控 · 全程守护</h4><p>多模型风控算法，事前、事中、事后全周期风险防控：四流校验、异常预警、名单管控、留痕存证。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-teal")}><Icon name="icon-24" /></div><h4>实时结算 · 科技护航</h4><p>7×24 实时结算，支持日结 / 周结 / 项目结；自动化核算应付款，万人批量结算快速到账。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-purple")}><Icon name="icon-25" /></div><h4>财税一体 · 提效赋能</h4><p>项目与服务数据自动核算，财税合规一站式处理；开具 6% 增值税专用发票，进项可抵扣。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>企业端「人·事·钱」，就业者端「揽·做·结」</h2>
      <p className={cn("sec-sub", "rv")}>平台承载企业灵活用工需求与自由职业者服务供给的双向汇聚，双端闭环。</p>
      <h3 className={cn("rv")} style={{fontSize: "17px", fontWeight: "800", margin: "30px 0 6px"}}>企业端 · 合规结算</h3>
      <p className={cn("sec-sub", "rv")} style={{marginBottom: "18px"}}>从入企、项目发布到项目结算开票，全链路管理。</p>
      <div className={cn("cap-grid")}>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>业务</h4><p>注册验资 · 人员管理 · 任务管理 · 资金智算，任务订单从创建、撮合邀约到成果验收全生命周期管理。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>财资</h4><p>账户管理 · 充值提现 · 对账管理 · 智能票据，结算单全流程管理，银行回单同步下载。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>数据</h4><p>智能看板 · 人员分析 · 资金分析 · 智能预测，任务结算趋势与任务占比多维分析。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>风控</h4><p>四流校验 · 异常预警 · 名单管控 · 留痕存证，黑名单拦截与结算前置条件预检。</p></div>
      </div>
      <div className={cn("fx-wide", "rv")}><img src="/images/img-28.jpg" alt="\u9510\u5154\u5b89\u85aa\u4f01\u4e1a\u7aef \u00b7 \u7ed3\u7b97\u5355\u5168\u6d41\u7a0b\u7ba1\u7406" /></div>
      <h3 className={cn("rv")} style={{fontSize: "17px", fontWeight: "800", margin: "44px 0 6px"}}>就业者端 · 安心增收</h3>
      <p className={cn("sec-sub", "rv")} style={{marginBottom: "18px"}}>注册认证 → 承揽任务 → 收益提现 → 完税保障，一站式灵活就业闭环。</p>
      <div className={cn("cap-grid")}>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>实名注册</h4><p>安全注册 · 实名认证 · 绑卡管理 · 多维核验，完成认证与签约后解锁任务承揽等全部功能。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>任务承揽</h4><p>任务广场按技能 / 地区 / 薪资筛选，报名执行或接受企业邀约，成果提交与任务验收。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>收益 · 个税</h4><p>收益看板 · 到账明细 · 提现管理 · 个税查询与完税凭证，收益透明、完税无忧。</p></div>
        <div className={cn("cap", "rv")}><h4 style={{marginTop: "2px"}}>权益保障</h4><p>权益中心 · 保险保障 · 信息安全 · 隐私保护，数据加密存储、敏感信息多重脱敏。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>合规时代，用工的必然选择</h2>
      <p className={cn("sec-sub", "rv")}>从市场规模到合规红线，从法律依据到平台正名——四流合一、全链路留痕可追溯。</p>
      <div className={cn("comp-grid")}>
        <div className={cn("comp", "rv")}><div className={cn("num")}>COMPLIANCE 01</div><h4>四流合一 · 依法完税</h4><p>业务流、资金流、合同流、发票流四流合一，全链路留痕可追溯，符合国务院令第 810 号及税务总局 2025 年第 15 / 16 号公告要求。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>COMPLIANCE 02</div><h4>个税合规代缴</h4><p>连续劳务累计预扣：20% 费用 + 5,000 元/月减除，3%-45% 七级累进，个人前期到手现金流更高，完税凭证随时可查。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>COMPLIANCE 03</div><h4>资金与票据闭环</h4><p>账户充值提现、任务关联自动解冻、银行回单同步下载；四步向导开票申请、电子发票下载归档、可开票额度看板。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>八大行业，开箱即用的结算方案</h2>
      <p className={cn("sec-sub", "rv")}>每个行业都沉淀了对应的计费规则与合规模板，具体行业合作以商务方案为准。</p>
      <div className={cn("ind-grid")}>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-29.jpg" alt="\u4e92\u8054\u7f51\u5e73\u53f0\u7ecf\u6d4e" loading="lazy" /><figcaption><b>互联网平台经济</b><span>万人批量日结</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-30.jpg" alt="\u5185\u5bb9\u521b\u4f5c" loading="lazy" /><figcaption><b>内容创作</b><span>基础费+佣金灵活配置</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-31.jpg" alt="\u7269\u6d41\u914d\u9001" loading="lazy" /><figcaption><b>物流配送</b><span>多计费规则模板</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-32.jpg" alt="\u5bb6\u653f\u670d\u52a1" loading="lazy" /><figcaption><b>家政服务</b><span>实名签约 · 按单结算</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-33.jpg" alt="\u6559\u80b2\u57f9\u8bad" loading="lazy" /><figcaption><b>教育培训</b><span>按课程批量结算</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-34.jpg" alt="\u5171\u4eab\u51fa\u884c" loading="lazy" /><figcaption><b>共享出行</b><span>订单流水自动对账</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-35.jpg" alt="\u793e\u533a\u56e2\u8d2d" loading="lazy" /><figcaption><b>社区团购</b><span>按单/按量灵活结算</span></figcaption></figure>
        <figure className={cn("ind-card", "rv")}><img src="/images/img-36.jpg" alt="\u5feb\u6d88\u96f6\u552e" loading="lazy" /><figcaption><b>快消零售</b><span>按工时/单量计费</span></figcaption></figure>
      </div>
      <p className={cn("trust-note")}>* 行业场景为示意图片，正式版将替换为真实业务场景照片</p>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>六步接入，一站式上线</h2>
      <p className={cn("sec-sub", "rv")}>商务全程陪跑，从洽谈到正式上线一站式接入；运营客服全流程护航。</p>
      <div className={cn("steps")}>
        <div className={cn("step", "rv")}><h4>商务洽谈</h4><p>明确合作意向与用工场景，评估合作模式。</p></div>
        <div className={cn("step", "rv")}><h4>需求确认</h4><p>确认任务类型、结算方式与对接方案。</p></div>
        <div className={cn("step", "rv")}><h4>协议合同</h4><p>签订合作协议，明确权责与合规边界。</p></div>
        <div className={cn("step", "rv")}><h4>企业认证</h4><p>营业执照 OCR 核验、法人活体认证、平台合规审核。</p></div>
        <div className={cn("step", "rv")}><h4>系统配置</h4><p>SaaS 开通或 API 对接，任务与结算流程配置。</p></div>
        <div className={cn("step", "rv")}><h4>正式上线</h4><p>发布任务、批量结算、开票完税，全流程陪伴。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("pp-dl")} id="flexpay-dl">
    <div className={cn("wrap")}>
      <div className={cn("pp-dl-box")}>
        <div className={cn("pp-dl-head")}>
          <h2>立即开启灵活用工合规合作</h2>
          <p>企业在 Web 平台管理任务与结算，就业者用小程序接单提现</p>
        </div>
        <div className={cn("dl-grid")}>
          <div className={cn("dl-card")}>
            <h3>企业版 · Web 平台</h3>
            <p className={cn("desc")}>任务发布 · 批量结算 · 开票完税 · 经营看板</p>
            <div className={cn("dl-btns")}>
              <button className={cn("dl-btn")}>官方网站 · www.ruirabbit.com</button>
            </div>
          </div>
          <div className={cn("dl-card")}>
            <h3>就业者端 · 微信小程序</h3>
            <p className={cn("desc")}>任务广场 · 报名承揽 · 收益提现 · 完税凭证</p>
            <div className={cn("dl-row")}>
              <div className={cn("qr")}><Icon name="icon-26" /></div>
              <div className={cn("dl-btns")}>
                <button className={cn("dl-btn")}>微信小程序 · 灵活接单</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={cn("xsec")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")} style={{marginBottom: "0"}}>锐兔的其他产品</h2>
      <div className={cn("x-grid")}>
        <Link className={cn("x-card", "rv")} to="/product/zhipin">
          <div><b>锐兔职聘</b><span>核心 · 就业信用平台 · 求职端 + 招聘端</span></div>
          <div className={cn("go")}><Icon name="icon-21" /></div>
        </Link>
        <Link className={cn("x-card", "rv")} to="/product/campus">
          <div><b>锐兔校园版</b><span>校招实习 · 职前成长 · 信用起点</span></div>
          <div className={cn("go")}><Icon name="icon-21" /></div>
        </Link>
      </div>
    </div>
  </section>
    </>
  );
}
