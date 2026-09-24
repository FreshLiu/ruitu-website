import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function CampusPage() {
  return (
    <>

  <section className={cn("pp-hero")}>
    <div className={cn("wrap", "pp-grid")}>
      <div>
        <h1 className={cn("pp")}>锐兔校园</h1>
        <p className={cn("pp-tag")} style={{marginBottom: "14px"}}><b>第一份从校园开始的好工作</b></p>
        <p className={cn("pp-desc")}>{"\u9510\u5154\u6821\u56ed\u7248\u662f\u9762\u5411\u5728\u6821\u5927\u5b66\u751f\u7684\u6821\u62db & \u5b9e\u4e60\u5c97\u4f4d\u670d\u52a1\u5e73\u53f0\u3002\u5e73\u53f0\u96c6\u4e2d\u6c47\u805a\u6821\u62db\u5168\u804c\u4e0e\u5b9e\u4e60\u5c97\u4f4d\u8d44\u6e90\uff0c\u914d\u5957\u5ba3\u8bb2\u4f1a\u65e5\u5386\u3001\u4e13\u573a\u5c97\u4f4d\u76f4\u6295\u3001\u804c\u524d\u6210\u957f\u5de5\u5177\uff0c\u52a9\u529b\u5728\u6821\u5b66\u751f\u6536\u83b7\u7b2c\u4e00\u4efd\u53ef\u4fe1\u7684\u6b63\u5f0f\u804c\u573a\u7ecf\u5386\u3002"}</p>
        <div className={cn("pp-badges")}>
          <span>① 校招岗位集中发布</span><span>② 实习岗位专区</span><span>③ 宣讲日历与一键直投</span><span>④ 校企直连合作通道</span>
        </div>
        <p className={cn("pp-soon")}>产品开发中，即将上线，敬请期待</p>
      </div>
      <div className={cn("pp-visual")}>
        <div className={cn("camp-card", "rv", "float-a")}>
          <div className={cn("camp-head")}>
            <div className={cn("ph-ava")}>校</div>
            <div className={cn("ph-name")}>锐兔校园版<small>校招 · 实习 · 职前成长</small></div>
          </div>
          <div className={cn("camp-row")}>
            <div className={cn("em")} style={{background: "#FFF0EA"}}>🎯</div>
            <div><b>秋招专场 · 互联网 / 智能制造</b><span>1,860 个校招岗位 · 96 家企业已认证</span></div>
            <span className={cn("go")}>进入</span>
          </div>
          <div className={cn("camp-row")}>
            <div className={cn("em")} style={{background: "#E4F6F1"}}>🧰</div>
            <div><b>实习岗位专区 · 本周新增 428 个</b><span>可转正实习 · 企业已认证</span></div>
            <span className={cn("go")}>查看</span>
          </div>
          <div className={cn("camp-row")}>
            <div className={cn("em")} style={{background: "#EBF0FF"}}>📅</div>
            <div><b>宣讲日历 · 本周 12 场</b><span>线下一对一投递通道已开启</span></div>
            <span className={cn("go")}>查看</span>
          </div>
          <div className={cn("camp-credit")} style={{marginTop: "14px"}}>
            <div className={cn("ring")}><i><b>72</b></i></div>
            <div><b>你的职业信用起点</b><span>完成首份实习并守约，信用分将升至 80+</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={cn("side-sec")} style={{paddingTop: "80px"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>把校招、实习与成长放进一个平台</h2>
      <p className={cn("sec-sub", "rv")}>面向学生、高校与企业三方，各取所需。</p>
      <div className={cn("cap-grid")}>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-orange")}><Icon name="icon-27" /></div><h4>校招岗位信息</h4><p>按行业与学校组织专场，岗位先认证后上架，信息真实可查。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-teal")}><Icon name="icon-28" /></div><h4>实习岗位专区</h4><p>日常实习与可转正实习集中发布，配套投递进度跟踪。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-blue")}><Icon name="icon-05" /></div><h4>宣讲日历与直投</h4><p>宣讲会日程集中展示，线上一对一投递通道一键直达。</p></div>
        <div className={cn("cap", "rv")}><div className={cn("ic", "ic-purple")}><Icon name="icon-16" /></div><h4>校企直连</h4><p>高校就业办与企业直接对接，岗位真实、流程透明。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>从投递到入职的陪伴</h2>
      <p className={cn("sec-sub", "rv")}>校园版把工具做在学生需要的地方，而不只是把岗位堆上来。</p>
      <div className={cn("comp-grid")}>
        <div className={cn("comp", "rv")}><div className={cn("num")}>GROWTH 01</div><h4>AI 简历工坊</h4><p>按岗位要求诊断简历得分并给出修改建议，投递前先把简历打磨好。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>GROWTH 02</div><h4>模拟面试</h4><p>常见校招面试题演练与复盘，第一次面试不再手足无措。</p></div>
        <div className={cn("comp", "rv")}><div className={cn("num")}>GROWTH 03</div><h4>信用档案起点</h4><p>从第一份实习经历开始认证与积累，毕业时档案随行，衔接锐兔职聘。</p></div>
      </div>
    </div>
  </section>

  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")}>三步入驻，全程陪伴</h2>
      <p className={cn("sec-sub", "rv")}>高校就业办与企业均可发起合作，平台提供专属客户成功团队。</p>
      <div className={cn("steps")}>
        <div className={cn("step", "rv")}><h4>高校入驻</h4><p>就业办开通管理后台，导入院系与毕业年级，审核学生认证材料。</p></div>
        <div className={cn("step", "rv")}><h4>专场共建</h4><p>按行业 / 区域共建校招专场与宣讲日历，企业岗位先认证后上架。</p></div>
        <div className={cn("step", "rv")}><h4>数据复盘</h4><p>投递、面试、签约转化全程可量化，就业质量报告一键导出。</p></div>
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
        <Link className={cn("x-card", "rv")} to="/product/flexpay">
          <div><b>锐兔安薪</b><span>任务撮合 · 一键发薪 · 合规保障</span></div>
          <div className={cn("go")}><Icon name="icon-21" /></div>
        </Link>
      </div>
    </div>
  </section>
    </>
  );
}
