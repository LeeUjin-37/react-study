// 미디어 사이즈 정의하는 파일

const size = {
  mobile : "480px",
  tablet : "768px",
  laptop : "1024px",
  desktop : "1280px"
}

export const media = {
  mobile : `(max-width : ${size.mobile} )`,
  tablet : `(max-width : ${size.tablet} )`,
  laptop : `(max-width : ${size.laptop} )`,
  desktop : `(max-width : ${size.desktop} )`
}