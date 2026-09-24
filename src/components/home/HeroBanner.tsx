import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Icon } from "@/components/icon/Icon";
import { cn } from "@/styles/cn";
import desktop from "./styles/desktop.module.css";
import tablet from "./styles/tablet.module.css";
import mobile from "./styles/mobile.module.css";
import "swiper/css";

const SLIDES = [
  {
    image: "im-zp",
    to: "/product/zhipin",
    title: "锐兔职聘，\n以就业信用为底座的就业服务平台",
    cta: "了解锐兔职聘",
  },
  {
    image: "im-trend",
    to: "/product/flexpay",
    title: "锐兔安薪，\n一站式灵活用工合规服务专家",
    cta: "了解锐兔安薪",
  },
  {
    image: "im-flag",
    to: "/product/campus",
    title: "锐兔校园，\n第一份从校园开始的好工作",
    cta: "了解锐兔校园",
  },
];

export function HeroBanner() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <section
      className={cn("banner-sec")}
      aria-label="轮播图"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        className={`${desktop.swiper} ${tablet.swiper} ${mobile.swiper}`}
        modules={[Autoplay]}
        loop
        speed={650}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(instance) => {
          swiperRef.current = instance;
        }}
        onSlideChange={(instance) => setIndex(instance.realIndex)}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.to}>
            <div
              className={cn("bn-slide", slide.image)}
              onClick={() => navigate(slide.to)}
            >
              <div className={cn("bn-txt")}>
                <h2>
                  {slide.title.split("\n").map((line, lineIndex, lines) => (
                    <span key={line}>
                      {line}
                      {lineIndex < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h2>
                <span className={cn("bn-cta")}>{slide.cta}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={cn("bn-arr", "bn-prev")}
        aria-label="上一张"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Icon name="icon-01" />
      </button>
      <button
        className={cn("bn-arr", "bn-next")}
        aria-label="下一张"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Icon name="icon-02" />
      </button>
      <div className={cn("bn-dots")}>
        {SLIDES.map((slide, dot) => (
          <button
            key={slide.to}
            className={cn(dot === index && "on")}
            aria-label={`第 ${dot + 1} 张`}
            onClick={() => swiperRef.current?.slideToLoop(dot)}
          />
        ))}
      </div>
    </section>
  );
}
