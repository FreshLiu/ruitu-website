import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function Footer() {
  return (
    <>
<footer>
  <div className={cn("wrap")}>
    <div className={cn("ft-grid", "v2")}>
      <div className={cn("ft-brand")}>
        <Link className={cn("logo")} to="/" style={{color: "#fff"}}>
          <img className={cn("mark")} src="/images/mark.png" alt="\u9510\u5154" />
          锐兔
        </Link>
        <p>让真实被看见，让每一次相遇都值得信任！</p>
      </div>
      <div className={cn("ft-col")}>
        <b>主要产品</b>
        <Link to="/product/zhipin">锐兔职聘</Link>
        <Link to="/product/flexpay">灵活用工发薪平台</Link>
        <Link to="/product/campus">锐兔校园版</Link>
      </div>
      <div className={cn("ft-col")}>
        <b>公司</b>
        <Link to="/about">关于锐兔</Link>
      </div>
      <div className={cn("ft-col")}>
        <b>更多支持</b>
        <Link to="/contact">联系我们</Link>
        <Link to="/help">帮助中心</Link>
        <a onClick={() => showToast("\u539f\u578b\u793a\u610f\uff1a\u670d\u52a1\u534f\u8bae\u5f85\u89c4\u5212")}>服务协议</a>
        <a onClick={() => showToast("\u539f\u578b\u793a\u610f\uff1a\u9690\u79c1\u653f\u7b56\u5f85\u89c4\u5212")}>隐私政策</a>
      </div>
      <div className={cn("ft-qr")}>
        <Icon name="icon-33" />
        <b>客服二维码</b><span>扫码在线咨询</span>
      </div>
    </div>
    <div className={cn("ft-bottom", "v2")}>
      <span>©锐兔（沈阳）数据信息技术有限公司版权所有</span>
      <span><Icon name="icon-34" className={cn("ft-ico")} /><Icon name="icon-35" className={cn("ft-ico")} />辽ICP备2026007794号-1 · 辽公网安备21011202001247号</span>
    </div>
  </div>
</footer>
    </>
  );
}
