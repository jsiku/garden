# 🪴 My Digital Garden (Quartz v4 Custom)

This repository is a personal Digital Garden built on [Quartz v4](https://quartz.jzhao.xyz/). Going beyond the default theme, various custom components and CSS deep-dive modifications have been applied to match personal usability and design preferences.

## ✨ Major Changes

### 🖼️ 1. Custom Profile Image (`Profile.tsx`)

- Instead of a simple image insertion, a dedicated custom component (`Profile.tsx`) utilizing SVG was created and applied to represent the site's identity, resulting in a more personalized and optimized UI.

### 🧩 2. Custom Component Development: `GlobalTagList.tsx`

Directly implemented and layout-optimized the `GlobalTagList.tsx` component, which gathers and displays all tags within the site.

- **Scroll Fade-out Effect**: Integrated Quartz's internal `OverflowListFactory` with the Intersection Observer API to generate a scrollbar for long tag lists while naturally fading out the bottom of the list.
- **Responsive SCSS Separation (`globaltaglist.scss`)**: Applied media queries to automatically switch from right-aligned (`flex-end`) for the desktop right sidebar to left-aligned (`flex-start`) for mobile screens where it sits at the bottom center.
- **Resolved CSS Conflicts & Visibility Logic**: Properly combined `displayClass` and `"flex-component"` to the top-level tag, ensuring Quartz's `MobileOnly` / `DesktopOnly` features work perfectly with Flexbox layouts without conflicts.

### 🛠️ 3. Basic Component Structure & CSS Tuning

Directly modified the code of default Quartz components to achieve the desired layout.

- **Breadcrumbs Customization**
  - **Reversed Rendering Order**: Applied `.reverse()` to the array rendering logic inside `Breadcrumbs.tsx` to change the default `Home > Account` structure to a reversed `Account < Home` order.
  - **Right Alignment**: After reversing the array, reverted to `flex-direction: row;` and applied `justify-content: flex-end;` in CSS to implement a perfect right alignment without text breaking or messing up the spacer symbols.

- **Explorer Detail Adjustments**
  - Modified `explorer.scss` to consistently right-align (`justify-content: flex-end;`) the folder and file lists within the explorer.
  - Fixed a bug on mobile where the fullscreen explorer menu shifted to the right due to inherited parent padding by using `left: -2rem;` (negative positioning) and `transform` adjustments to cover the screen perfectly.
