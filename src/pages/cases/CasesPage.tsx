import { cn } from "@/styles/cn";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icon/Icon";
import { showToast } from "@/components/feedback/toast-bus";

export function CasesPage() {
  return (
    <>

  <section className={cn("pp-hero")}>
    <div className={cn("wrap")}>
      <h2 className={cn("sec", "rv")} style={{marginBottom: "8px"}}>合作案例</h2>
      <p className={cn("sec-sub", "rv")} style={{marginBottom: "0"}}>三款产品在各行业的落地实践——每一份合作都沉淀为可查证的履约记录（原型为示意内容）。</p>
    </div>
  </section>
  <section className={cn("cap-sec")} style={{paddingTop: "0"}}>
    <div className={cn("wrap")}>
      <div className={cn("cases-grid")} id="casesGrid"></div>
    </div>
  </section>
    </>
  );
}
