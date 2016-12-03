module.exports = (config) => {

  let colors = {
    black       : '#090b0d',
    blue        : '#4f397c',
    colorCubes  : '#ffffff',
    cyan        : '#519aba',
    grayscale   : '#7494a3',
    green       : '#8dc149',
    magenta     : '#f55385',
    red         : '#cc3e44',
    yellow      : '#cbcb41',
    white       : '#d4d7d6',
    lightBlack  : '#0e1112',
    lightRed    : '#7c1c20',
    lightGreen  : '#436b24',
    lightYellow : '#a2852f',
    lightBlue   : '#519aba',
    lightMagenta: '#63213f',
    lightCyan   : '#519aba'
  }

  // IMPORTED SETTINGS
  const themeOptions = config.themeOptions || {}
  const css = config.css || ''

  // CUSTOM SETTINGS
  const foregroundColor = themeOptions.foregroundColor || colors.white;
  const backgroundColor = themeOptions.backgroundColor || colors.lightBlack;
  const themeColor = themeOptions.themeColor || colors.cyan;
  const borderColor = colors.cyan;
  const cursorColor = colors.cyan;

  const tabColors = {
    active: {
      background: themeOptions.activeTabBackground || '#111213',
      border: themeOptions.activeTabBorder || themeColor,
      color: themeOptions.activeTabColor || colors.white
    },
    inactive: {
      background: themeOptions.inactiveTabBackground || '#1f2326',
      border: themeOptions.inactiveTabBorder || '#111418',
      color: themeOptions.inactiveTabColor || colors.white
    }
  }

  return {
    foregroundColor: foregroundColor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    cursorColor: cursorColor,
    colors: colors,
    css: `
      ${css}
      .tab_tab {
        background-color: ${tabColors.inactive.background};
        border-bottom-color: ${tabColors.inactive.border} !important;
        border-left-color: ${tabColors.active.background} !important;
        border-bottom-width: 2px;
        color: ${tabColors.inactive.color};
        height: 40px;
      }
      .tab_tab.tab_active {
        background-color: ${tabColors.active.background};
        border-bottom-color: ${tabColors.active.border} !important;
        border-bottom-width: 2px;
        color: ${tabColors.active.color};
      }
      .tabs_title {
        border-bottom: solid 2px ${tabColors.inactive.border} !important;
      }
      .tab_text {
        color: ${colors.white};
        height: 40px;
      }
      .header_header {
        background: ${tabColors.inactive.background};
        border: 0;
        top: 0;
        right: 0;
        left: 0;
      }
      .hyper_main {
        border: 0;
      }
      .tabs_nav {
        height: 40px;
        line-height: 40px;
      }
      .tabs_borderShim {
        border-bottom: solid 2px ${tabColors.inactive.border} !important;
      }
    `
  }
}
