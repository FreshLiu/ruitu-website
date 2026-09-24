import { useEffect, useState } from "react";
import { bindToast } from "./toast-bus";
import { cn } from "@/styles/cn";

export function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer = 0;
    return bindToast((next) => {
      setMessage(next);
      setVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setVisible(false), 2400);
    });
  }, []);

  return (
    <div className={cn("toast", visible && "show")} role="status">
      {message}
    </div>
  );
}
