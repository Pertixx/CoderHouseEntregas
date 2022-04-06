export const COLORS = {
  darkGreen: "#229879",
  darkLime: "#1A8871",
  lightLime: "#BBD6C5",
  lime: "#2AD699",
  lightGreen: "#E7F9EF",
  lightGreen1: "#8EbCA0",
}

export const SIZES = {
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  body: 14,

  padding: 15,
}

export const FONTS = {
  h1: { fontFamily: "Heebo", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "HeeboBold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "HeeboBold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "HeeboBold", fontSize: SIZES.h3, lineHeight: 22 },
  h5: { fontFamily: "Courgette", fontSize: SIZES.h4, lineHeight: 22 },
  body: {fontFamily: "Heebo", fontSize: SIZES.body, lineHeight: 22},
  bodyBold: {fontFamily: "HeeboBold", fontSize: SIZES.body, lineHeight: 22},
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme