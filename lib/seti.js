module.exports = (config) => {

  // colorCubes  : '#ffffff',

  let colors = {
    black:        '#090b0d',
    red:          '#cc3e44',
    green:        '#8dc149',
    yellow:       '#cbcb41',
    blue:         '#519aba',
    magenta:      '#f55385',
    cyan:         '#1d5b91',
    white:        '#d4d7d6',
    lightBlack:   '#4d5a5e',
    lightRed:     '#7c1c20',
    lightGreen:   '#436b24',
    lightYellow:  '#a2852f',
    lightBlue:    '#519aba',
    lightMagenta: '#63213f',
    lightCyan:    '#519aba',
    lightWhite:   '#ffffff'
  }

  // IMPORTED SETTINGS
  const themeOptions = config.themeOptions || {}
  const css = config.css || ''

  // CUSTOM SETTINGS
  const foregroundColor = themeOptions.foregroundColor || colors.white;
  const backgroundColor = themeOptions.backgroundColor || colors.black;
  const themeColor      = themeOptions.themeColor || colors.blue;
  const borderColor     = themeOptions.borderColor || colors.blue;
  const cursorColor     = themeOptions.cursorColor || colors.lightBlack;

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
