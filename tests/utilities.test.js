import mojoCore from "../src/core/index.js";
import config from "../src/interop/mojo.config.js";

describe('MojoCore:: Check Utilities Results', () => {
  beforeAll(() => {
    config.options.minify = true;
    mojoCore.setConfig(config);
  });

  let utilities = {
    "bg-alpha-10": "--m-bg-c-alpha: 0.1",
    "text-alpha-15": "--m-text-c-alpha: 0.15",
    "border-alpha-20": "--m-border-c-alpha: 0.2",
    "border-alpha-25": "--m-border-c-alpha: 0.25",
    "outline-alpha-30": "--m-outline-c-alpha: 0.3",
    "shadow-alpha-35": "--m-shadow-c-alpha: 0.35000000000000003",
    "fill-alpha-40": "--m-fill-c-alpha: 0.4",
    "stroke-alpha-45": "--m-stroke-c-alpha: 0.45",
    "start-alpha-50": "--m-start-c-alpha: 0.5",
    "end-alpha-55": "--m-end-c-alpha: 0.55",
    "mid-alpha-60": "--m-mid-c-alpha: 0.6",
    "accent-alpha-65": "--m-accent-c-alpha: 0.65",
    "caret-alpha-70": "--m-caret-c-alpha: 0.7000000000000001",
    "placeholder-alpha-75": "--m-placeholder-c-alpha: 0.75",
    "top-4": "top: 1rem",
    "left-6": "left: 1.5rem",
    "right-2": "right: 0.5rem",
    "bottom-8": "bottom: 2rem",
    "border-2": "border-width: 2px",
    "border-top-1": "border-top-width: 1px",
    "border-left-2": "border-left-width: 2px",
    "border-right-3": "border-right-width: 3px",
    "border-bottom-4": "border-bottom-width: 4px",
    "border-s-dotted": "border-style: dotted",
    "border-top-s-dashed": "border-top-style: dashed",
    "border-left-s-solid": "border-left-style: solid",
    "border-right-s-double": "border-right-style: double",
    "border-bottom-s-groove": "border-bottom-style: groove",
    "border-c-primary": "--m-border-c-alpha: 1;\n    border-color: rgba(var(--m-color-primary),var(--m-border-c-alpha))",
    "border-top-c-green": "--m-border-top-c-alpha: 1;\n    border-top-color: rgba(var(--m-color-green),var(--m-border-top-c-alpha))",
    "border-left-c-white": "--m-border-left-c-alpha: 1;\n    border-left-color: rgba(var(--m-color-white),var(--m-border-left-c-alpha))",
    "border-right-c-white": "--m-border-right-c-alpha: 1;\n    border-right-color: rgba(var(--m-color-white),var(--m-border-right-c-alpha))",
    "border-bottom-c-red": "--m-border-bottom-c-alpha: 1;\n    border-bottom-color: rgba(var(--m-color-red),var(--m-border-bottom-c-alpha))",
    "blur-4": "--m-f-blur: blur(4px);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "brightness-50": "--m-f-brightness: brightness(0.5);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "contrast-125": "--m-f-contrast: contrast(1.25);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "hue-rotate-85": "--m-f-hue-rotate: hue-rotate(85deg);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "grayscale-100": "--m-f-grayscale: grayscale(1);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "invert-30": "--m-f-invert: invert(0.3);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "saturate-60": "--m-f-saturate: saturate(0.6);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "sepia-0": "--m-f-sepia: sepia(0);\n    filter: var(--m-f-blur) var(--m-f-brightness) var(--m-f-contrast) var(--m-f-grayscale) var(--m-f-hue-rotate) var(--m-f-invert) var(--m-f-saturate) var(--m-f-sepia) var(--m-f-drop-shadow)",
    "backdrop-opacity-20": "--m-bf-opacity: opacity(0.2);\n    -webkit-backdrop-filter: var(--m-bf-blur) var(--m-bf-brightness) var(--m-bf-contrast) var(--m-bf-grayscale) var(--m-bf-hue-rotate) var(--m-bf-invert) var(--m-bf-saturate) var(--m-bf-sepia) var(--m-bf-opacity);\n    backdrop-filter: var(--m-bf-blur) var(--m-bf-brightness) var(--m-bf-contrast) var(--m-bf-grayscale) var(--m-bf-hue-rotate) var(--m-bf-invert) var(--m-bf-saturate) var(--m-bf-sepia) var(--m-bf-opacity)",
    "transform-o-top-left": "transform-origin: top left",
    "all-initial": "all: initial",
    "appearance-none": "appearance: none",
    "overflow-hidden": "overflow: hidden",
    "overflow-x-visible": "overflow-x: visible",
    "overflow-y-scroll": "overflow-y: scroll",
    "content-''": "content: ''",
    "resize-both": "resize: both",
    "order-last": "order: 99999",
    "cursor-pointer": "cursor: pointer",
    "float-left": "float: left",
    "pointer-events": "pointer-events: NaNrem",
    "opacity-50": "opacity: 0.5",
    "flex-grow-1": "flex-grow: 1",
    "flex-shrink-1": "flex-shrink: 1",
    "flex-auto-auto": "flex: 1 1 auto",
    "visibility-visible": "visibility: visible",
    "outline-4": "outline-width: 4px;\n    outline-style:solid",
    "outline-s-dotted": "outline-style: dotted",
    "outline-c-red": "--m-outline-c-alpha: 1;\n    outline-color: rgba(var(--m-color-red),var(--m-outline-c-alpha))",
    "outline-o-5": "outline-offset: 1.25rem",
    "dir-rtl": "direction: rtl",
    "font-default": "font-family: system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    "p-absolute": "position: absolute",
    "d-flex": "display: flex;\n    --m-box-start: flex-start;\n    --m-box-end: flex-end",
    "transform-o-top-right": "transform-origin: top right",
    "transform-s-preserve-3d": "transform-style: preserve-3d",
    "perspective-o-left": "perspective-origin: left",
    "perspective-20": "perspective: 5rem",
    "fill-c-cyan": "--m-fill-c-alpha: 1;\n    fill: rgba(0, 255, 255, var(--m-fill-c-alpha))",
    "stroke-c-blue": "--m-stroke-c-alpha: 1;\n    stroke: rgba(var(--m-color-blue),var(--m-stroke-c-alpha))",
    "list-style-none": "list-style-type: none",
    "list-style-p-outside": "list-style-position: outside",
    "scroll-contain": "scroll-behavior: contain",
    "mix-blend-lighten": "mix-blend-mode: lighten",
    "obj-f-cover": "object-fit: cover",
    "box-s-border-box": "box-sizing: border-box-box",
    "bg-none": "background: none",
    "bg-c-red": "--m-bg-c-alpha: 1;\n    background-color: rgba(var(--m-color-red),var(--m-bg-c-alpha))",
    "bg-s-cover": "background-size: cover",
    "bg-p-center": "background-position: center",
    "bg-o-border": "background-origin: border-box",
    "bg-clip-border": "background-clip: border-box",
    "bg-r-repeat": "background-repeat: repeat",
    "bg-a-fixed": "background-attachment: fixed",
    "ma-4": "margin: 1rem",
    "-ma-3": "margin: -0.75rem",
    "mt-6": "margin-top: 1.5rem",
    "-mt-12": "margin-top: -3rem",
    "ml-1": "margin-left: 0.25rem",
    "-ml-5": "margin-left: -1.25rem",
    "mr-7": "margin-right: 1.75rem",
    "mb-18": "margin-bottom: 4.5rem",
    "-mb-28": "margin-bottom: -7rem",
    "mx-4": "margin-left: 1rem;\n    margin-right: 1rem",
    "-mx-6": "margin-left: -1.5rem;\n    margin-right: -1.5rem",
    "my-5": "margin-top: 1.25rem;\n    margin-bottom: 1.25rem",
    "-my-7": "margin-top: -1.75rem;\n    margin-bottom: -1.75rem",
    "pa-4": "padding: 1rem",
    "pt-5": "padding-top: 1.25rem",
    "pr-6": "padding-right: 1.5rem",
    "pl-1": "padding-left: 0.25rem",
    "pb-2": "padding-bottom: 0.5rem",
    "px-3": "padding-left: 0.75rem;\n    padding-right: 0.75rem",
    "py-7": "padding-top: 1.75rem;\n    padding-bottom: 1.75rem",
    "gap-5": "gap: 1.25rem",
    "gap-x-8": "column-gap: 2rem;\n    grid-column-gap: 8",
    "gap-y-0": "row-gap: 0rem;\n    grid-row-gap: 0",
    "w-8": "width: 2rem",
    "h-8": "height: 2rem",
    "min-w-4": "min-width: 1rem",
    "min-h-4": "min-height: 1rem",
    "max-w-16": "max-width: 4rem",
    "max-h-16": "max-height: 4rem",
    "inset-0": "top: 0rem;\n    right: 0rem;\n    bottom: 0rem;\n    left: 0rem",
    "inset-x-0": "right: 0rem;\n    left: 0rem",
    "inset-y-0": "top: 0rem;\n    bottom: 0rem",
    "rounded-full": "border-radius: 999rem",
    "rounded-8": "border-radius: 1rem",
    "rounded-top-4": "border-top-right-radius: 0.5rem;\n    border-top-left-radius: 0.5rem",
    "rounded-bottom-5": "border-bottom-right-radius: 0.625rem;\n    border-bottom-left-radius: 0.625rem",
    "rounded-right-6": "border-top-right-radius: 0.75rem;\n    border-bottom-right-radius: 0.75rem",
    "rounded-left-7": "border-top-left-radius: 0.875rem;\n    border-bottom-left-radius: 0.875rem",
    "rounded-top-r-8": "border-top-right-radius: 1rem",
    "rounded-top-l-9": "border-top-left-radius: 1.125rem",
    "rounded-bottom-r-10": "border-bottom-right-radius: 1.25rem",
    "rounded-bottom-l-11": "border-bottom-left-radius: 1.375rem",
    "text-200": "font-size: 2rem",
    "text-c-orange": "--m-text-c-alpha: 1;\n    color: rgba(var(--m-color-orange),var(--m-text-c-alpha))",
    "text-a-center": "text-align: center",
    "text-ls-loose": "letter-spacing: 0.05em",
    "text-lh-open": "line-height: 2",
    "text-ws-nowrap": "white-space: nowrap",
    "text-d-none": "text-decoration: none",
    "text-s-italic": "font-style: italic",
    "text-t-uppercase": "text-transform: uppercase",
    "v-align-middle": "vertical-align: middle",
    "z-100": "z-index: 100",
    "accent-c-red": "--m-accent-c-alpha: 1;\n    accent-color: rgba(var(--m-color-red),var(--m-accent-c-alpha))",
    "caret-c-blue": "--m-caret-c-alpha: 1;\n    caret-color: rgba(var(--m-color-blue),var(--m-caret-c-alpha))",
    "gd-dir-bottom-right": "--m-gd-dir: to bottom right",
    "end-c-red": "--m-end-c-alpha: 1;\n    --m-gd-end-color: rgba(var(--m-color-red),var(--m-end-c-alpha))",
    "start-c-blue": "--m-start-c-alpha: 1;\n    --m-gd-start-color: rgba(var(--m-color-blue),var(--m-start-c-alpha))",
    "mid-c-green": "--m-mid-c-alpha: 1;\n    --m-gd-mid-color: rgba(var(--m-color-green),var(--m-mid-c-alpha)),",
    "shadow-solid-1": "box-shadow: 0 0 0 1px var(--m-shadow-color, #000)",
    "shadow-c-red": "--m-shadow-c-alpha: 1;\n    --m-shadow-color: rgba(var(--m-color-red),var(--m-shadow-c-alpha))",
    "translate-x-12": "--m-t-translate-x: 3rem;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "-translate-x-12": "--m-t-translate-x: -3rem;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "-translate-x-(5px)": "--m-t-translate-x: translate-x(-(5px));\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "translate-y-12": "--m-t-translate-y: 3rem;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "-translate-y-12": "--m-t-translate-y: -3rem;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "-translate-y-(5px)": "--m-t-translate-y: translate-y(-(5px));\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "rotate-45": "--m-t-rotate: 45deg;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "-rotate-45": "--m-t-rotate: -45deg;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "scale-80": "--m-t-scale: 0.8;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "scale-x-80": "--m-t-scale-x: 0.8;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "scale-y-80": "--m-t-scale-y: 0.8;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "scale-z-80": "--m-t-scale-z: 0.8;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "skew-x-20": "--m-t-skew-x: 20deg;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "skew-y-20": "--m-t-skew-y: 20deg;\n    transform: translateX(var(--m-t-translate-x)) translateY(var(--m-t-translate-y)) translateZ(var(--m-t-translate-z)) rotate(var(--m-t-rotate)) rotateX(var(--m-t-rotate-x)) rotateY(var(--m-t-rotate-y)) rotateZ(var(--m-t-rotate-z)) skewX(var(--m-t-skew-x)) skewY(var(--m-t-skew-y)) scale3d(var(--m-t-scale),var(--m-t-scale),var(--m-t-scale)) scaleX(var(--m-t-scale-x)) scaleY(var(--m-t-scale-y)) scaleZ(var(--m-t-scale-z))",
    "p-self-start": "place-self: var(--m-box-start)",
    "p-items-end": "place-items: var(--m-box-end)",
    "p-content-around": "place-content: space-around",
    "a-self-end": "align-self: var(--m-box-end)",
    "a-items-center": "align-items: center",
    "a-content-around": "align-content: space-around",
    "j-self-start": "justify-self: var(--m-box-start)",
    "j-items-stretch": "justify-items: stretch",
    "j-content-evenly": "justify-content: space-evenly",
    "r-end-2": "grid-row-end: 2",
    "r-start-7": "grid-row-start: 7",
    "c-end-5": "grid-column-end: 5",
    "c-start-12": "grid-column-start: 12",
    "c-span-5": "grid-column: auto / span 5",
    "col-offset-4": "grid-column-start: 5",
    "col-5": "grid-column: auto / span 5",
    "rows-7": "grid-template-rows: repeat(7, minmax(0, 1fr))",
    "cols-8": "grid-template-columns: repeat(8, minmax(0, 1fr))",
    "tsm-p-opacity": "-webkit-transition-property: opacity;\n    -o-transition-property: opacity;\n    transition-property: opacity",
    "tsm-f-linear": "-webkit-transition-timing-function: linear;\n    -o-transition-timing-function: linear;\n    transition-timing-function: linear",
    "tsm-d-150": "-webkit-transition-delay: 150ms;\n    -o-transition-delay: 150ms;\n    transition-delay: 150ms",
    "tsm-450": "-webkit-transition-duration: 450ms;\n    -o-transition-duration: 450ms;\n    transition-duration: 450ms",
    "ts-p-opacity": "-mojo-delay--webkit-transition-property: opacity;\n    -mojo-delay--o-transition-property: opacity;\n    -mojo-delay-transition-property: opacity",
    "ts-f-linear": "-mojo-delay--webkit-transition-timing-function: linear;\n    -mojo-delay--o-transition-timing-function: linear;\n    -mojo-delay-transition-timing-function: linear",
    "ts-d-150": "-mojo-delay--webkit-transition-delay: 150ms;\n    -mojo-delay--o-transition-delay: 150ms;\n    -mojo-delay-transition-delay: 150ms",
    "ts-450": "-mojo-delay--webkit-transition-duration: 450ms;\n    -mojo-delay--o-transition-duration: 450ms;\n    -mojo-delay-transition-duration: 450ms",
    "bg-gradient": "--m-gd-dir: to bottom;\n    --m-gd-start-color: ;\n    --m-gd-mid-color: ;\n    --m-gd-end-color: ;\n    background-image: linear-gradient(var(--m-gd-dir), var(--m-gd-start-color), var(--m-gd-mid-color) var(--m-gd-end-color))",
    "filter-none": "filter: none;\n    -webkit-filter: none",
    "backdrop-filter-none": "backdrop-filter: none;\n    -webkit-backdrop-filter: none",
    "transform-none": "transform: none;\n    -webkit-transform: none;\n    -ms-transform: none",
    "transition": "-mojo-delay-transition-property: all;\n    -webkit--mojo-delay-transition-property: all;\n    -o--mojo-delay-transition-property: all;\n    -mojo-delay-transition-duration: 100ms;\n    -webkit--mojo-delay-transition-duration: 100ms;\n    -o--mojo-delay-transition-duration: 100ms;\n    -mojo-delay-transition-timing-function: ease;\n    -webkit--mojo-delay-transition-timing-function: ease;\n    -o--mojo-delay-transition-timing-function: ease",
    "transition-none": "-mojo-delay-transition-property: none;\n    -webkit--mojo-delay-transition-property: none;\n    -o--mojo-delay-transition-property: none",
    "grid": "display: grid;\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n    grid-gap: 1rem;\n    --m-box-start: start;\n    --m-box-end: end",
    "cols-auto": "grid-template-columns: repeat(auto-fit, minmax(0, 1fr))",
    "rows-auto": "grid-template-rows: repeat(auto-fit, minmax(0, 1fr))",
    "col-auto": "grid-column: auto",
    "col-offset-auto": "grid-column-start: auto",
    "flex-fluid": "flex: 1 1 0%",
    "flex-auto": "flex: 1 1 auto",
    "flex-none": "flex: none",
    "flex-wrap": "flex-wrap: wrap",
    "flex-nowrap": "flex-wrap: nowrap",
    "flex-wrap-reverse": "flex-wrap: wrap-reverse",
    "flex-col": "flex-direction: column",
    "flex-row": "flex-direction: row",
    "flex-col-reverse": "flex-direction: column-reverse",
    "flex-row-reverse": "flex-direction: row-reverse",
    "text-wb-normal": "word-break: normal;\n    overflow-wrap: normal",
    "text-wb-words": "overflow-wrap: break-word",
    "text-wb-all": "word-break: break-all",
    "text-wb-keep": "word-break: keep-all",
    "text-truncate": "overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap",
    "hidden": "visibility: hidden",
    "visible": "visibility: visible",
    "resize-xy": "resize: both",
    "resize-x": "resize: horizontal",
    "resize-y": "resize: vertical",
    "outline-none": "outline:none",
  }

  utilities = Object.fromEntries(
    Object.entries(utilities)
      .sort(([a], [b]) => {
        const keyA = a.startsWith("-") ? a.substring(1) : a;
        const keyB = b.startsWith("-") ? b.substring(1) : b;
        return keyA.localeCompare(keyB);
      })
  );


  for (let i in utilities) {
    test('Check utility: ' + i, () => {
      const css = mojoCore.init({
        isExtend: true,
        classes: [i],
      }).getStyles().css;

      expect(css).toBe(utilities[i]);
    });
  }
});
