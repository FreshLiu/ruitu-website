import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function ZhipinPage() {
  return (
    <>

  <section className={cn("pp-hero")}>
    <div className={cn("wrap", "pp-grid")}>
      <div>
        <h1 className={cn("pp")}>锐兔职聘</h1>
        <p className={cn("pp-tag")} style={{marginBottom: "14px"}}><b>以就业信用为底座的就业服务平台</b></p>
        <p className={cn("pp-desc")}>为求职者打造轻量化、高效率择业体验，支持岗位实时直聊、AI 智能精准匹配，快速筛选适配自身资质、需求的优质岗位，大幅缩短求职周期。</p>
        <p className={cn("pp-desc")}>为企业提升人力资源管理效率，依托精准智能匹配能力，打通企业与人才高效对接通道，精准筛选适配人才，有效提升面试精准度、入职录用率及人员在岗稳定性，助力企业将传统人力资本管理升级为人力资产管理模式。</p>
        <div className={cn("pp-badges")}>
          <span className={cn("hot")}>核心产品</span><span>① AI 双向匹配</span><span>② 实时直聊</span><span>③ 双向信用档案</span><span>④ 数字身份证</span><span>⑤ 履约监管</span>
        </div>
        <p className={cn("pp-soon")}>产品开发中，即将上线，敬请期待</p>
      </div>
      <div className={cn("pp-visual")}>
        <div className={cn("stack-visual")}>
          <div className={cn("hv-card", "float-a")} style={{position: "relative", width: "320px", padding: "20px", border: "1px solid var(--line)", borderRadius: "20px", background: "#fff", boxShadow: "var(--shadow)"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px"}}>
              <span style={{fontSize: "13.5px", fontWeight: "700"}}>为你推荐</span>
              <span style={{fontSize: "10px", background: "#FFF0EA", color: "#FF6B3D", borderRadius: "6px", padding: "2px 8px", fontWeight: "600"}}>匹配度 96% · 企业信用 96</span>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "11px"}}>
              <div style={{border: "1.5px solid #2B5CFF", background: "var(--blue-soft)", borderRadius: "13px", padding: "13px 15px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px"}}>
                  <b style={{fontSize: "13.5px"}}>产品经理（AI 方向）</b>
                  <b style={{fontSize: "13px", color: "#FF6B3D"}}>18-28K</b>
                </div>
                <div style={{fontSize: "11.5px", color: "var(--muted)"}}>星河智能 · 5-10 年 · 本科 · 杭州滨江</div>
                <div style={{marginTop: "8px", display: "flex", gap: "6px", flexWrap: "wrap"}}>
                  <span style={{fontSize: "10px", background: "#fff", borderRadius: "5px", padding: "2px 7px", color: "#0E8A72", fontWeight: "600"}}>✓ 薪资已校验</span>
                  <span style={{fontSize: "10px", background: "#fff", borderRadius: "5px", padding: "2px 7px", color: "var(--blue)", fontWeight: "600"}}>你的认证匹配 8/10</span>
                </div>
              </div>
              <div style={{border: "1px solid var(--line)", borderRadius: "13px", padding: "13px 15px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px"}}>
                  <b style={{fontSize: "13.5px"}}>高级产品经理</b>
                  <b style={{fontSize: "13px", color: "var(--ink-2)"}}>20-30K</b>
                </div>
                <div style={{fontSize: "11.5px", color: "var(--muted)"}}>云舟科技 · 5-10 年 · 本科 · 杭州西湖</div>
              </div>
            </div>
          </div>
          <div className={cn("hv-card", "hv-credit", "float-b")} style={{width: "320px"}}>
            <div className={cn("cr-head")}><span className={cn("cr-title")}>我的信用档案</span><span className={cn("cr-badge")}>已认证</span></div>
            <div className={cn("cr-body")}>
              <div className={cn("ring")}><i><b>87</b><span>信用分</span></i></div>
              <div className={cn("cr-meta")}><b>李同学 · 求职者</b>学历、履历、技能已交叉认证<div className={cn("cr-chips")}><span>学历 ✓</span><span>履历 ✓</span><span>技能 ✓</span></div></div>
            </div>
            <div className={cn("cr-foot")}><span>面试履约率 <b>98%</b></span><span>权益：优先推荐 · 免审直聊</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 求职端 */}
  <section className={cn("side-sec")} style={{paddingTop: "90px"}}>
    <div className={cn("wrap", "side-grid")}>
      <div className={cn("side-visual")}>
        <div className={cn("hv-card", "float-a")} style={{position: "relative", width: "320px", padding: "20px", border: "1px solid var(--line)", borderRadius: "20px", background: "#fff", boxShadow: "var(--shadow)"}}>
          <div className={cn("ph-notch")}></div>
          <div className={cn("ph-top")}>
            <div className={cn("ph-ava")}>锐</div>
            <div className={cn("ph-name")}>张女士<small>某科技公司 · HR 负责人 · 信用 96</small></div>
            <span className={cn("ph-status")}>在线</span>
          </div>
          <div className={cn("bub", "bub-l")}>你好，看了你的认证简历，短视频运营岗和你的经历很匹配，方便聊聊吗？</div>
          <div className={cn("bub", "bub-r")}>您好！可以，我目前在职，看新机会~</div>
          <div className={cn("bub", "bub-salary")}>💰 该岗位 12K–18K · 14薪，已通过薪资真实性校验</div>
          <div className={cn("bub", "bub-l")}>明天上午 10 点视频初面，可以吗？</div>
          <div className={cn("ph-input")}>输入消息…<span className={cn("send")}></span></div>
        </div>
      </div>
      <div>
        <h2 className={cn("sec")}>求职，就该这么直接</h2>
        <p className={cn("sec-sub")}>认证简历替你背书，5 分钟完成一次有效沟通，<b>不海投、不石沉大海</b>。</p>
        <div className={cn("feat-list")}>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-blue")}><Icon name="icon-10" /></div>
            <div><h4>本机号码一键登录</h4><p>一次授权即完成注册，5 秒开始找工作，不用记密码。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-orange")}><Icon name="icon-11" /></div>
            <div><h4>认证简历 + 信用档案</h4><p>学历、履历、技能一次认证，信用分越高，被优先推荐的机会越多。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-teal")}><Icon name="icon-12" /></div>
            <div><h4>老板 / HR 在线直聊</h4><p>薪资先校验、再展示，聊清楚再投递，拒绝黑箱。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-purple")}><Icon name="icon-13" /></div>
            <div><h4>App 与小程序双入口</h4><p>同一账号实时同步，沟通记录、投递进度一个都不少。</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 招聘端 */}
  <section className={cn("side-sec", "dark-sec")}>
    <div className={cn("wrap", "side-grid")}>
      <div>
        <h2 className={cn("sec")}>招聘，回到可控的节奏</h2>
        <p className={cn("sec-sub")}>候选人有信用档案，招聘效果有数据抓手。<b>PC 扫码登录、团队子账号协同</b>，谁在推进、推进到哪，一目了然。</p>
        <div className={cn("feat-list")}>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-blue")}><Icon name="icon-14" /></div>
            <div><h4>智能简历初筛</h4><p>按岗位画像自动打分排序，认证信息让筛选更快更准。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-teal")}><Icon name="icon-15" /></div>
            <div><h4>招聘漏斗看板</h4><p>简历→约面→Offer 全链路转化实时可见，卡在哪一环立刻知道。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-orange")}><Icon name="icon-16" /></div>
            <div><h4>人才库激活</h4><p>历史候选人不再沉睡，新岗位发布一键触达匹配过的人。</p></div>
          </div>
          <div className={cn("feat", "rv")}>
            <div className={cn("ic", "ic-purple")}><Icon name="icon-17" /></div>
            <div><h4>三端协同 + 子账号</h4><p>App 随时处理、PC 深度管理、小程序轻量跟进，团队多人分工不冲突。</p></div>
          </div>
        </div>
      </div>
      <div className={cn("side-visual")}>
        <div className={cn("big-dash", "rv")}>
          <div className={cn("bd-head")}>
            <div><div className={cn("bd-title")}>招聘运营看板</div><div className={cn("bd-sub")}>2026 年 9 月 · 全部岗位</div></div>
            <span className={cn("bd-select")}>本周 ▾</span>
          </div>
          <div className={cn("bd-kpis")}>
            <div className={cn("bd-kpi")}><b>486</b><span>新简历 <i className={cn("up")}>+18%</i></span></div>
            <div className={cn("bd-kpi")}><b>62%</b><span>初筛通过率 <i className={cn("up")}>+5%</i></span></div>
            <div className={cn("bd-kpi")}><b>7.2天</b><span>平均招聘周期 <i className={cn("up")}>-1.5天</i></span></div>
          </div>
          <div className={cn("bd-chart")}>
            <div className={cn("bd-col")} style={{height: "45%"}}><i></i></div>
            <div className={cn("bd-col", "thin")} style={{height: "58%"}}><i></i></div>
            <div className={cn("bd-col")} style={{height: "70%"}}><i></i></div>
            <div className={cn("bd-col", "thin")} style={{height: "52%"}}><i></i></div>
            <div className={cn("bd-col")} style={{height: "88%"}}><i></i></div>
            <div className={cn("bd-col", "thin")} style={{height: "64%"}}><i></i></div>
            <div className={cn("bd-col")} style={{height: "100%"}}><i></i></div>
          </div>
          <div className={cn("bd-cols-label")}><span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span><span>周日</span></div>
        </div>
      </div>
    </div>
  </section>

  {/* 核心能力 4 卡 */}
  <section className={cn("cap-sec")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>信用基建之上的匹配效率</h2>
      <p className={cn("sec-sub", "rv")}>四个核心能力，覆盖求职与招聘双方的关键痛点。</p>
      <div className={cn("cap-grid")}>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-blue")}><Icon name="icon-18" /></div><h4>AI 双向匹配</h4><p>基于简历、行为与岗位画像建模，双向推荐而非单向搜索。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-orange")}><Icon name="icon-03" /></div><h4>就业信用体系</h4><p>双向认证 + 双向信用分，每一次沟通都有据可依。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-teal")}><Icon name="icon-19" /></div><h4>薪资真实性校验</h4><p>先亮价、再沟通，岗位薪资与实际发放一致性校验。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-purple")}><Icon name="icon-20" /></div><h4>全流程留痕</h4><p>沟通、面试、Offer 进度实时可见，机会不被辜负。</p></div>
      </div>
    </div>
  </section>

  {/* 交叉推荐 */}
  <section className={cn("xsec")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")} style={{marginBottom: "0"}}>锐兔的其他产品</h2>
      <div className={cn("x-grid")}>
        <Link className={cn("x-card", "rv")} to="/product/flexpay">
          <div><b>锐兔安薪</b><span>任务撮合 · 一键发薪 · 合规保障</span></div>
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
