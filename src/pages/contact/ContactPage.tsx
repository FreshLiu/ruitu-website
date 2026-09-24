import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function ContactPage() {
  return (
    <>

  <section className={cn("ct-hero")}>
    <div className={cn("wrap")}>
      <h1>联系我们</h1>
      <p>您可以通过以下方式联系我们。</p>
    </div>
  </section>

  <section className={cn("ct-wrap")}>
    <div className={cn("wrap")}>
      <div className={cn("ct-split", "rv")}>
        <aside className={cn("ct-side")}>
          <h3>联系方式</h3>
          <p className={cn("sub")}>工作日 9:00 – 18:00 · 欢迎咨询合作</p>
          <div className={cn("cts")}>
            <div className={cn("ic")}><Icon name="icon-29" /></div>
            <div className={cn("ctb")}><h5>电话咨询 <span>了解产品详情、定制方案</span></h5><span className={cn("v")} data-copy="024-83661205"><em>企业联系我们</em>024-83661205</span><span className={cn("v")} data-copy="024-83664010"><em>用户联系我们</em>024-83664010</span></div>
          </div>
          <div className={cn("cts")}>
            <div className={cn("ic")}><Icon name="icon-30" /></div>
            <div className={cn("ctb")}><h5>邮箱咨询 <span>市场活动、商务合作</span></h5><span className={cn("v")} data-copy="jiaozi@neusoft.com">jiaozi@neusoft.com</span><span className={cn("v")} data-copy="1234awerf@163.com">1234awerf@163.com</span></div>
          </div>
          <div className={cn("cts")}>
            <div className={cn("ic")}><Icon name="icon-31" /></div>
            <div className={cn("ctb")}><h5>公司地址 <span>辽宁 · 沈阳</span></h5><span className={cn("v")} data-copy="\u8fbd\u5b81\u7701\u6c88\u9633\u5e02\u4e1c\u8f6f\u8f6f\u4ef6\u56edA2\u697c">辽宁省沈阳市东软软件园A2楼</span></div>
          </div>
          <p className={cn("more")}>使用中遇到问题？先看看 <Link to="/help">帮助中心 →</Link></p>
        </aside>
        <div className={cn("ct-main")}>
          <h3>在线留言，期待您的合作</h3>
          <p className={cn("hint")}>提交后 1-3 个工作日内，会有专业人员与您联系（原型演示：仅本地记录，不会真实发送）。</p>
          <form id="ctForm">
            <div className={cn("f-row")}>
              <div className={cn("f-field")}><label>您的姓名 <i>*</i></label><input type="text" id="fName" placeholder="\u8bf7\u8f93\u5165\u59d3\u540d" /></div>
              <div className={cn("f-field")}><label>联系电话 <i>*</i></label><input type="text" id="fPhone" placeholder="\u8bf7\u8f93\u5165\u7535\u8bdd" /></div>
            </div>
            <div className={cn("f-row")}>
              <div className={cn("f-field")}><label>公司名称</label><input type="text" id="fCompany" placeholder="\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0" /></div>
              <div className={cn("f-field")}><label>职位</label><input type="text" id="fRole" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u804c\u4f4d" /></div>
            </div>
            <div className={cn("f-field")}><label>留言内容 <i>*</i></label><textarea id="fMsg" placeholder="\u8bf7\u7b80\u8981\u63cf\u8ff0\u60a8\u7684\u5408\u4f5c\u610f\u5411\u6216\u95ee\u9898"></textarea></div>
            <button type="submit" className={cn("btn", "btn-blue", "btn-big")} style={{width: "100%"}}>提交留言</button>
            <p className={cn("f-note")}>提交即表示同意《隐私政策》，我们承诺不向第三方泄露你的信息。</p>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
