import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function AboutPage() {
  return (
    <>

  <section className={cn("pp-hero")} style={{paddingBottom: "34px"}}>
    <div className={cn("wrap")}>
      <div className={cn("ab-hero-grid")}>
        <div>
          <h1 className={cn("pp")}>我们相信，<br />信任是就业市场的基建</h1>
          <p className={cn("pp-tag")} style={{maxWidth: "560px"}}>锐兔是一家以就业信用为底座的就业服务公司。旗下锐兔职聘、锐兔安薪与锐兔校园版，分别服务全职招聘求职、灵活用工合规结算与大学生校招实习，用同一套信用体系串联起职业生涯的每个阶段。</p>
          <div className={cn("pp-badges")}><span className={cn("hot")}>总部 · 沈阳</span><span>东软集团全资控股</span></div>
        </div>
        <figure className={cn("ab-fig")}>
          <img src="/images/img.webp" alt="\u9510\u5154\u56e2\u961f\u534f\u4f5c" />
          <figcaption className={cn("ab-chip")}>锐兔（沈阳）· 办公区实景</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "30px"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>三款产品，一个底座</h2>
      <p className={cn("sec-sub", "rv")}>业务覆盖全职、灵活用工与校园三大就业场景。三款产品，共用一个信用底座。</p>
      <div className={cn("comp-grid")}>
        <div className={cn("comp", "rv")}><div className={cn("num")}>PRODUCT 01</div><h4>锐兔职聘</h4><p>锐兔职聘，以就业信用为底座的就业服务平台，针对全行业招聘求职，帮助企业和个人高效匹配，降低时间成本。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>PRODUCT 02</div><h4>锐兔安薪</h4><p>灵活用工智能服务平台：聚合四流合一、智能风控、实时结算、财税一体四大核心能力，助力企业合规降本、灵工就业者任务增收。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>PRODUCT 03</div><h4>锐兔校园</h4><p>面向在校大学生的校招与实习岗位平台，第一份好工作，从校园开始！</p></div>
      </div>
    </div>
  </section>

  <section className={cn("mv-sec", "dark-sec")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>我们为什么做这件事</h2>
      <p className={cn("sec-sub", "rv")}>从一份简历的可信度出发，我们想把「信任」变成就业市场里最基础的那块砖。</p>
      <div className={cn("mv-grid")}>
        <div className={cn("mv-card", "rv")}>
          <div className={cn("mv-lbl")}>MISSION · 使命</div>
          <h3>让真实被看见，让每一次相遇都值得信任</h3>
          <p>让求职者不必靠包装换一次面试，让企业不必靠反复试错找一个对的人。我们把信用做成基础设施，把双方的时间还给真正重要的事。</p>
          <div className={cn("mv-tags")}><span>真实可验证</span><span>双向负责</span><span>长期陪伴</span></div>
        </div>
        <div className={cn("mv-card", "vision", "rv")}>
          <div className={cn("mv-lbl")}>VISION · 愿景</div>
          <h3>成为中国最值得信任的就业服务平台</h3>
          <p>让每个就业者都拥有一份可携带、可验证的就业信用档案——从第一份实习到每一次职业转身，都有据可依、有据可查。</p>
          <div className={cn("mv-tags")}><span>可携带</span><span>可验证</span><span>贯穿职业全周期</span></div>
        </div>
      </div>
      <div className={cn("mv-quote", "rv")}>信任不该靠感觉，而应有据可查 —— <b>这是锐兔团队的共识</b></div>
    </div>
  </section>

  <section className={cn("val-sec")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>坚持长期主义，以就业信任为底座</h2>
      <p className={cn("sec-sub", "rv")}>文化不是墙上的标语，而是落在每一次需求评审、每一笔收益结算、每一次客服响应里。我们以就业信用为底层理念，把信任贯穿产品设计、服务交付全流程。</p>
      <div className={cn("val-grid", "rv")}>
        <div className={cn("val")}><div className={cn("n")}>01</div><h5>真实第一</h5><p>坚守信息真实性原则，数据不夸大、岗位不注水、简历不包装。所有对外披露的信息，均做到可核验、可追溯，杜绝虚假信息，夯实就业市场信任基础。</p></div>
        <div className={cn("val")}><div className={cn("n")}>02</div><h5>用户视角</h5><p>产品研发前，先代入求职者与企业 HR 的真实身份完整走通业务全流程，站在双方痛点思考问题，再定义、迭代产品功能，避免脱离实际场景的设计。</p></div>
        <div className={cn("val")}><div className={cn("n")}>03</div><h5>长期主义</h5><p>信用建设是长期工程。我们优先打磨、筑牢就业信用基础设施，深耕就业服务赛道，不追逐短期一次性流量，持续沉淀可信的职业信用资产。</p></div>
        <div className={cn("val")}><div className={cn("n")}>04</div><h5>极致效率</h5><p>在保障信息真实合规的前提下，力求求职者短期内获取面试邀约，并高效匹配，降低求职者与企业的时间成本。</p></div>
        <div className={cn("val")}><div className={cn("n")}>05</div><h5>开放透明</h5><p>平台规则清晰公开，评价体系双向中立。岗位履约、信用评价相关记录均可追溯，建立规范的申诉渠道，保障各方合法权益。</p></div>
        <div className={cn("val")}><div className={cn("n")}>06</div><h5>一起成长</h5><p>求职者职业发展、企业经营发展，以及团队员工自身成长，都是锐兔长期发展的核心资产。我们伴随用户职业生涯持续迭代产品，与用户共生成长。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("about-sec")} style={{paddingTop: "20px"}}>
    <div className={cn("wrap")}>
      <div className={cn("about-copy")} style={{maxWidth: "780px"}}>
        <h2 className={cn("sec", "rv")}>为什么从「信用」切入</h2>
        <p className={cn("rv")}>招聘市场长期存在一个悖论：<b>企业说招不到人，求职者说找不到工作</b>。缺的从来不是人，也不是岗位，而是双方之间那份「信任」。</p>
        <p className={cn("rv")}>锐兔从锐兔职聘出发，用双向认证与信用分把「真实」变成可验证的能力；再延伸到蓝领灵活用工与校园招聘，<b>让信用贯穿一个人的整个职业生涯</b>。</p>
        <p className={cn("rv")}>我们不做信息的搬运工，而做<b>信任的基建方</b> —— 每一次匹配、每一笔收益背后，都有认证、履约与数据在支撑。</p>
      </div>
    </div>
  </section>
    </>
  );
}
