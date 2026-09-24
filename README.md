# 锐兔官网

由原型页面还原的公司官网。技术栈：React、TypeScript、Vite、Tailwind CSS、Swiper。

```bash
npm install
npm run dev
```

## 目录

- `src/pages`：首页、三款产品、帮助中心、资讯、关于、联系、合作案例
- `src/components`：导航、页脚、轮播、图标、弹层
- `src/assets/icons`：页面用到的 SVG，由 `src/components/icon/Icon.tsx` 统一引用
- `src/styles/breakpoints/desktop`：PC（默认）
- `src/styles/breakpoints/tablet`：iPad，768–1023px
- `src/styles/breakpoints/mobile`：手机，767px 及以下
- `public/images`：从原型中拆出的图片

样式使用 CSS Modules，类名按端分文件，避免写进同一个全局样式表。Tailwind 提供设计令牌和工具类，并关闭了 Preflight，以免覆盖还原后的视觉。
