import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";
import { HeroBanner } from "@/components/home/HeroBanner";

export function HomePage() {
  return (
    <>



    <HeroBanner />

    {/* 3. 产品矩阵 */}
    <section className={cn("matrix-sec")} style={{background: "#fff", borderTop: "none", borderBottom: "none"}}>
      
      <div className={cn("wrap")}>
        <h2 className={cn("sec", "rv")}>三款产品，就业全场景覆盖</h2>
        <p className={cn("sec-sub", "rv")}>从校园到全职，从全职到灵活就业——同一套就业信用底座，串起一个人的完整职业路径。</p>
        <div className={cn("pmx-tabs")} id="pmxTabs">
          <button className={cn("pmx-tab", "on")} data-pmx="zp">锐兔职聘<em>核心</em></button>
          <button className={cn("pmx-tab")} data-pmx="fp">锐兔安薪</button>
          <button className={cn("pmx-tab")} data-pmx="cp">锐兔校园</button>
        </div>
        <div className={cn("pmx-panel", "on")} data-pmx="zp">
          <div className={cn("pmx-card")}>
            <div className={cn("mxa-img", "shot-zp")}>
              <div className={cn("sp-phone")}>
                <div className={cn("sp-notch")}></div>
                <div className={cn("sp-search")}>搜索职位、公司</div>
                <div className={cn("jk")}>
                  <div className={cn("jk-top")}><b>短视频运营</b><span className={cn("jk-sal")}>12-18K·14薪</span></div>
                  <div className={cn("jk-tags")}><span>本科</span><span>3年</span><span className={cn("v")}>✓ 薪资已核验</span></div>
                  <div className={cn("jk-co")}>某科技公司 · HR 张女士 · 信用 96</div>
                </div>
                <div className={cn("jk")}>
                  <div className={cn("jk-top")}><b>新媒体运营</b><span className={cn("jk-sal")}>9-13K</span></div>
                  <div className={cn("jk-tags")}><span>大专</span><span>应届可投</span><span className={cn("v")}>✓ 企业已认证</span></div>
                </div>
              </div>
            </div>
            <div className={cn("pmx-info")}>
              <span className={cn("p-badge", "core")}>全职场景</span>
              <h3>锐兔职聘</h3>
              <p>以就业信用为底座的就业服务平台。</p>
              <div className={cn("mxa-tags")}><span>职位直聊</span><span>AI 匹配</span><span>双向信用</span></div>
              <ul className={cn("mxa-feats")}>
                <li>AI 双向匹配，好岗位主动找你</li>
                <li>实时直聊，沟通即约面</li>
                <li>认证简历 + 个人信用档案</li>
                <li>企业资质与薪资真实性核验</li>
              </ul>
              <Link className={cn("mxa-btn")} to="/product/zhipin">进入产品页</Link>
            </div>
          </div>
        </div>
        <div className={cn("pmx-panel")} data-pmx="fp">
          <div className={cn("pmx-card")}>
            <div className={cn("mxa-img", "shot-fp")}>
              <div className={cn("fp-win")}>
                <div className={cn("fp-bar")}><i></i><i></i><i></i><span>锐兔安薪 · 企业版</span></div>
                <div className={cn("fp-body")}>
                  <div className={cn("fp-head")}><span>今日发薪概览</span><b className={cn("fp-amt")}>¥186,420</b></div>
                  <div className={cn("fp-stats")}><div><b>1,286</b><span>发薪人数</span></div><div><b>1,532</b><span>结算笔数</span></div><div><b>100%</b><span>准时率</span></div></div>
                  <div className={cn("fp-row")}><i>✓</i>已到账 · 产线临时工 · 日结<span>¥220</span></div>
                  <div className={cn("fp-row")}><i>✓</i>已到账 · 分拣打包 · 周结<span>¥1,120</span></div>
                </div>
              </div>
            </div>
            <div className={cn("pmx-info")}>
              <span className={cn("p-badge", "n")}>灵活就业场景</span>
              <h3>锐兔安薪</h3>
              <p>一站式灵活用工合规服务专家。</p>
              <div className={cn("mxa-tags")}><span>四流合一</span><span>智能风控</span><span>实时结算</span><span>财税一体</span></div>
              <ul className={cn("mxa-feats")}>
                <li>四流合一</li>
                <li>智能风控</li>
                <li>7×24 实时结算</li>
                <li>财税一体</li>
              </ul>
              <Link className={cn("mxa-btn")} to="/product/flexpay">进入产品页</Link>
            </div>
          </div>
        </div>
        <div className={cn("pmx-panel")} data-pmx="cp">
          <div className={cn("pmx-card")}>
            <div className={cn("mxa-img", "shot-cp")}>
              <div className={cn("sp-phone")}>
                <div className={cn("sp-notch")}></div>
                <div className={cn("cp-tabs")}><span className={cn("on")}>校招</span><span>实习</span><span>宣讲</span></div>
                <div className={cn("jk")}>
                  <div className={cn("jk-top")}><b>产品实习生</b><span className={cn("jk-sal")}>180元/天</span></div>
                  <div className={cn("jk-tags")}><span>实习</span><span>一周四天</span><span className={cn("v")}>✓ 企业已认证</span></div>
                  <div className={cn("jk-co")}>某互联网公司 · 招 3 人</div>
                </div>
                <div className={cn("cp-event")}><i>09-20</i>校招宣讲会 · 某科技集团<span>直投 →</span></div>
              </div>
            </div>
            <div className={cn("pmx-info")}>
              <span className={cn("p-badge", "n")}>校园场景</span>
              <h3>锐兔校园</h3>
              <p>第一份从校园开始的好工作。</p>
              <div className={cn("mxa-tags")}><span>校招实习</span><span>宣讲直投</span><span>校企直连</span></div>
              <ul className={cn("mxa-feats")}>
                <li>校招岗位集中发布</li>
                <li>实习岗位专区</li>
                <li>宣讲日历与一键直投</li>
                <li>校企直连合作通道</li>
              </ul>
              <Link className={cn("mxa-btn")} to="/product/campus">进入产品页</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4. 就业信用底座 · 三合一（可左右切换/滑动） */}
    <section className={cn("cred-sec")}>
      
      <div className={cn("wrap")}>
        <h2 className={cn("sec", "rv")}>信任不是口号，<br />是三套看得见的机制</h2>
        <p className={cn("sec-sub", "rv")}>双向信用档案 × 数字身份证 × 履约与监管机制——同一套就业信用基建的三个切面。</p>
        <div className={cn("cred-head")}>
          <div className={cn("cred-tabs")} id="credTabs">
            <button className={cn("cred-tab", "on")} data-cred="base">双向信用档案</button>
            <button className={cn("cred-tab")} data-cred="idcard">数字身份证</button>
            <button className={cn("cred-tab")} data-cred="flow">履约与监管机制</button>
          </div>
        </div>
        <div className={cn("cred-stagebox")}>
          <button className={cn("cred-arrow")} id="credPrev" aria-label="\u4e0a\u4e00\u4e2a"><Icon name="icon-01" /></button>
          <button className={cn("cred-arrow")} id="credNext" aria-label="\u4e0b\u4e00\u4e2a"><Icon name="icon-02" /></button>
          <div className={cn("cred-stage")} id="credStage">
          <div className={cn("cred-panel", "on")} data-cred="base">
            <div className={cn("wrap", "credit-grid")}>
              <div>
                <div className={cn("kicker")}>双向信用档案 · 就业信用</div>
                <h2 className={cn("sec", "rv")}>求职者与企业，<br />各有一份信用档案</h2>
                <p className={cn("sec-sub", "rv")} style={{marginBottom: "0"}}>虚假简历、幽灵岗位、薪资注水、面试爽约——就业市场低效的根源，是双方互不信任。锐兔把<b>就业信用做成底座</b>：双方各有档案、双向评定、全程履约约束，三款产品共用，让每一次招聘与用工决策都有据可依。</p>
                <div className={cn("pillar-list")}>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-blue")}><Icon name="icon-03" /></div>
                    <div><h4>求职者信用档案</h4><p>学历、履历、技能多源交叉认证，一次认证、三大产品通用，简历不再注水。</p></div>
                  </div>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-orange")}><Icon name="icon-04" /></div>
                    <div><h4>企业信用档案</h4><p>资质核验、薪资真实性校验、面试履约率公开，幽灵岗位与欠薪企业无处遁形。</p></div>
                  </div>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-teal")}><Icon name="icon-05" /></div>
                    <div><h4>双向信用评定</h4><p>沟通与发薪前实时计算双方信用匹配度，把「敢不敢信」变成可量化的分数。</p></div>
                  </div>
                </div>
              </div>
              <div className={cn("credit-visual")}>
                <div className={cn("credit-card", "rv")}>
                  <div>
                    <div className={cn("cc-name")}>求职者 · 李同学</div>
                    <div className={cn("cc-desc")}>信用分由认证完整度与履约行为共同决定</div>
                    <div className={cn("cc-stats")}>
                      <div><b style={{color: "var(--blue)"}}>87</b><span>信用分</span></div>
                      <div><b>98%</b><span>面试履约率</span></div>
                      <div><b>12次</b><span>守约记录</span></div>
                    </div>
                  </div>
                  <div className={cn("ring")}><i><b>87</b><span>信用分</span></i></div>
                </div>
                <div className={cn("credit-card", "rv")}>
                  <div>
                    <div className={cn("cc-name")}>企业 · 星河智能</div>
                    <div className={cn("cc-desc")}>薪资真实性、岗位有效性与履约率公开透明</div>
                    <div className={cn("cc-stats")}>
                      <div><b style={{color: "var(--orange)"}}>96</b><span>信用分</span></div>
                      <div><b>100%</b><span>薪资校验通过</span></div>
                      <div><b>0</b><span>投诉记录</span></div>
                    </div>
                  </div>
                  <div className={cn("ring", "orange")}><i><b>96</b><span>信用分</span></i></div>
                </div>
                <div className={cn("match-card", "rv")}>
                  <div className={cn("mc-head")}><b>双向信用评定</b><span className={cn("mc-live")}><i></i>每次沟通前实时计算</span></div>
                  <div className={cn("mc-body")}>
                    <div className={cn("mc-side")}><div className={cn("ring", "sm")}><i><b>87</b><span>求职者</span></i></div><span>李同学</span></div>
                    <div className={cn("mc-link")}><i></i><b>匹配度 96%</b></div>
                    <div className={cn("mc-side")}><div className={cn("ring", "sm", "orange")}><i><b>96</b><span>企业</span></i></div><span>星河智能</span></div>
                  </div>
                  <div className={cn("mc-foot")}><span>认证完整度</span><span>履约历史</span><span>薪资真实性</span><span>岗位有效性</span><span>投诉记录</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("cred-panel")} data-cred="idcard">
            <div className={cn("wrap", "side-grid")}>
              <div>
                <div className={cn("kicker")}>数字身份证 · 信用档案</div>
                <h2 className={cn("sec", "rv")}>一张数字身份证，<br />装下整个职业信用</h2>
                <p className={cn("sec-sub")}>不是一张简历，而是一份<b>可验证、可追溯、不可篡改</b>的就业信用档案。一次授权，三款产品通用，企业随时可验。</p>
                <div className={cn("feat-list")}>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-blue")}><Icon name="icon-06" /></div>
                    <div><h4>身份层 · 实名核验</h4><p>本机号码一键登录 + 实名 + 人脸核验，一人一档，账号即身份，冒用无处下手。</p></div>
                  </div>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-teal")}><Icon name="icon-07" /></div>
                    <div><h4>履历层 · 交叉认证</h4><p>学历走权威通道核验，履历与社保 / 在职记录比对，技能对接发证机构，简历不再注水。</p></div>
                  </div>
                  <div className={cn("feat", "rv")}>
                    <div className={cn("ic", "ic-orange")}><Icon name="icon-05" /></div>
                    <div><h4>信用层 · 行为累积</h4><p>面试履约、入职守约、离职评价持续沉淀为信用分，锐兔职聘、发薪平台、校园版三端通用。</p></div>
                  </div>
                </div>
              </div>
              <div className={cn("side-visual")}>
                <div style={{display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "390px"}}>
                  <div className={cn("idc")}>
                    <div className={cn("idc-top")}>
                      <div className={cn("idc-mark")}><Icon name="icon-08" /></div>
                      <div className={cn("idc-title")}>数字身份证 · 就业信用<small>RUITU DIGITAL ID</small></div>
                      <div className={cn("idc-no")}>NO. RUITU-3301****0871<br />签发：锐兔信用中心</div>
                    </div>
                    <div className={cn("idc-main")}>
                      <div className={cn("idc-ava")}>李</div>
                      <div className={cn("idc-fields")}>
                        <b>李同学</b>
                        <div className={cn("row")}><span>身份 <b>已实名</b></span><span>人脸 <b>已核验</b></span></div>
                        <div className={cn("row")}><span>学历 <b>本科 · 已认证</b></span><span>履历 <b>3 段已核</b></span></div>
                        <div className={cn("row")}><span>有效期 <b>2026.09–2029.09</b></span></div>
                      </div>
                      <div className={cn("idc-score")}><em>87</em><span>信用分 · A 级</span></div>
                    </div>
                    <div className={cn("idc-seal")}>锐兔信用<br />已核验</div>
                    <div className={cn("idc-foot")}>
                      <span className={cn("idc-tag")}>实名 ✓</span><span className={cn("idc-tag")}>学历 ✓</span><span className={cn("idc-tag")}>履历 ✓</span><span className={cn("idc-tag", "b")}>技能 ✓</span><span className={cn("idc-tag", "b")}>无失信</span>
                    </div>
                    <div className={cn("idc-hash")}><span>存证哈希 0x7f3a…c91d</span><span>上链 2026-09-14 10:22</span></div>
                  </div>
                  <div className={cn("evi-list")}>
                    <h5>谁验证了什么 · 全程留痕 <span>7 天内</span></h5>
                    <div className={cn("evi")}><i>✓</i>学信网返回学历核验结果<span>09-12 09:31</span></div>
                    <div className={cn("evi")}><i>✓</i>3 家企业查看档案（均记录在案）<span>09-13 14:02</span></div>
                    <div className={cn("evi")}><i>✓</i>面试履约凭证已存证<span>09-13 15:04</span></div>
                    <div className={cn("evi")}><i>✓</i>企业薪资真实性校验通过<span>09-14 10:22</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("cred-panel")} data-cred="flow">
            <div className={cn("wrap")}>
              <div className={cn("kicker")}>履约与监管机制 · 全流程留痕</div>
              <h2 className={cn("sec", "rv")}>从投递到入职，<br />每一步都有信用托底</h2>
              <p className={cn("sec-sub", "rv")}>把监管点前置到就业的每一个节点：<b>真实性可校验、行为可存证、违约有成本</b>，而不是出了问题再来追责。</p>
              <div className={cn("flow")}>
                <div className={cn("fl-node", "rv")}>
                  <div className={cn("fl-step")}>STEP 01</div>
                  <h4>认证简历</h4>
                  <p>实名 + 学历履历交叉核验，未通过认证的信息无法提交，简历从源头可信。</p>
                  <span className={cn("fl-tag")}>监管点：真实性校验</span>
                </div>
                <div className={cn("fl-node", "rv")}>
                  <div className={cn("fl-step")}>STEP 02</div>
                  <h4>信用匹配</h4>
                  <p>按双向信用分排序推荐，低信用岗位与企业自动降权，好机会优先给守信的人。</p>
                  <span className={cn("fl-tag")}>监管点：信用加权</span>
                </div>
                <div className={cn("fl-node", "rv")}>
                  <div className={cn("fl-step")}>STEP 03</div>
                  <h4>直聊留痕</h4>
                  <p>薪资先校验后展示，沟通记录全程存证，口头承诺可追溯、可举证。</p>
                  <span className={cn("fl-tag")}>监管点：沟通存证</span>
                </div>
                <div className={cn("fl-node", "rv")}>
                  <div className={cn("fl-step")}>STEP 04</div>
                  <h4>面约履约</h4>
                  <p>面试改约 / 爽约双向记入信用分，履约率公开可见，放鸽子开始有成本。</p>
                  <span className={cn("fl-tag", "warn")}>监管点：违约约束</span>
                </div>
                <div className={cn("fl-node", "rv")}>
                  <div className={cn("fl-step")}>STEP 05</div>
                  <h4>入职与发薪存证</h4>
                  <p>Offer、入职与灵活用工发薪记录上链留痕，信用随职业生涯持续累积。</p>
                  <span className={cn("fl-tag")}>监管点：记录沉淀</span>
                </div>
              </div>
              <div className={cn("fl-bar", "rv")}>
                <b><Icon name="icon-09" />平台监管机制</b>
                <span>真实性校验</span>
                <span>行为存证</span>
                <span>违约约束</span>
                <span>争议可追溯</span>
                <span>数据授权可撤回</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* 1.5 合作行业（八大行业 · 与锐兔安薪产品页一致） */}
    <section className={cn("case-sec")}>
      <div className={cn("case-head", "rv")}>
        <h2 className={cn("sec")} style={{marginBottom: "8px"}}>锐兔安薪携手八大行业</h2>
        <p className={cn("sec-sub")}>提供开箱即用的灵活用工结算方案<br />更多就业产品即将上线，期待解锁更多行业合作</p>
      </div>
      <div className={cn("wrap")}>
        <div className={cn("case-grid")} id="caseScroller"></div>
      </div>
    </section>

    {/* 1.6 合作企业（弹幕式 logo 墙） */}
    <section className={cn("partner-sec")}>
      <h2 className={cn("sec", "rv")} style={{textAlign: "center", marginBottom: "38px"}}>锐兔，知名政企的共同选择</h2>
      <div className={cn("mq")}><div className={cn("mq-row")} id="mqRowA"></div></div>
      <div className={cn("mq")}><div className={cn("mq-row", "rev")} id="mqRowB"></div></div>
    </section>

    {/* 7. 热门资讯（独立模块） */}
    <section className={cn("hotnews-sec")}>
      
      <div className={cn("wrap")}>
        <h2 className={cn("sec", "rv")} style={{marginBottom: "8px"}}>洞察行业趋势，了解锐兔资讯</h2>
        <div className={cn("hn-grid")} id="hnGrid">
          <div className={cn("hn-card", "rv")} data-idx="0">
            <div className={cn("hn-cover", "cov-dyn", "im-bd")}><b>500 亿招聘市场存信任短板，双向信息失真拖累招聘转化效率</b><span className={cn("hn-date")}>2026-09-21</span></div>
          </div>
          <div className={cn("hn-card", "rv")} data-idx="1">
            <div className={cn("hn-cover", "cov-dyn", "im-trend")}><b>告别流量内卷，行业探索信用体系重构招聘供需匹配规则</b><span className={cn("hn-date")}>2026-03-10</span></div>
          </div>
          <div className={cn("hn-card", "rv")} data-idx="2">
            <div className={cn("hn-cover", "cov-ins", "im-doc")}><b>金税四期全面落地，灵活用工平台进入业务真实性强监管时代</b><span className={cn("hn-date")}>2026-09-15</span></div>
          </div>
          <div className={cn("hn-card", "rv")} data-idx="3">
            <div className={cn("hn-cover", "cov-ins", "im-invoice")}><b>多地曝光灵工涉税大案，企业灵工结算亟需专业合规发薪服务</b><span className={cn("hn-date")}>2026-09-09</span></div>
          </div>
          <div className={cn("hn-card", "rv")} data-idx="4">
            <div className={cn("hn-cover", "cov-pol", "im-cp")}><b>2026 校招供需错配凸显，应届生面临低效投递与虚假岗位困扰</b><span className={cn("hn-date")}>2026-09-21</span></div>
          </div>
          <div className={cn("hn-card", "rv")} data-idx="5">
            <div className={cn("hn-cover", "cov-pol", "im-zp")}><b>2026 秋招观察：应届生求职从 “找工作” 转向 “找合适工作”</b><span className={cn("hn-date")}>2026-09-17</span></div>
          </div>
        </div>
        <Link className={cn("hn-more2")} to="/news">{"MORE >"}</Link>
      </div>
    </section>

    {/* 9. 下载 / 访问引导 */}
    <section className={cn("dl-sec")} style={{paddingTop: "20px"}}>
      
      <div className={cn("wrap")}>
        <div className={cn("dl-box")}>
          <div className={cn("dl-title")}>
            <h2>选择入口，开启就业求职之旅</h2>
            <p>三款产品各有入口，共用一套锐兔账号与就业信用体系。</p>
          </div>
          <div className={cn("dl-grid", "three")}>
            <div className={cn("dl-card")}>
              <h3>锐兔职聘</h3>
              <p className={cn("desc")}>以就业信用为底座的就业服务平台</p>
              <p className={cn("tagline")}>直聘APP | 全行业招聘求职</p>
              <div className={cn("dl-row")}>
                <span className={cn("dl-soon")}>待开发</span>
              </div>
            </div>
            <div className={cn("dl-card")}>
              <h3>锐兔安薪</h3>
              <p className={cn("desc")}>一站式灵活用工合规服务专家</p>
              <p className={cn("tagline")}>锐兔安薪 | 灵活用工就业结算</p>
              <div className={cn("dl-row")}>
                <div className={cn("dl-btns")}>
                  <button className={cn("dl-btn")}>企业版 · Web 控制台</button>
                  <button className={cn("dl-btn")}>蓝领就业者 · 小程序接单</button>
                </div>
              </div>
            </div>
            <div className={cn("dl-card")}>
              <h3>锐兔校园</h3>
              <p className={cn("desc")}>第一份从校园开始的好工作</p>
              <p className={cn("tagline")}>锐兔校园 | 校招求职与实习</p>
              <div className={cn("dl-row")}>
                <span className={cn("dl-soon")}>待开发</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
