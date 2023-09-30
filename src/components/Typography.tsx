import { Typography, styled } from "@mui/material";


export const TypographyCTA1 = styled(Typography)(() => {
  return {
    color: "var(--neutral-white, #FFF)",
    textAlign: "center",

    /* Typography/CTA/1/Medium */
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
  };
});


export const TypographyCTA2 = styled(Typography)(() => {
  return {
    color: "var(--neutral-white, #FFF)",
    textAlign: "center",

    /* Typography/CTA/2/Medium */
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16px",
  };
});


export const TypographyTitle = styled(Typography)(() => {
  return {
    color: "var(--neutral-white, #FFF)",

    /* Title/Section */
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "32px",
    letterSpacing: "-0.36px",
  };
});


export const TypographyTitleGroup = styled(Typography)(() => {
  return {
    color: "var(--neutral-white, #FFF)",

    /* Title/Section */
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "20px",
    letterSpacing: "0.21px",
  };
});


export const TypographyBodyLarge = styled(Typography)(() => {
  return {
    color: "var(--color-palette-gray-400, #AEB6C4)",
    // textAlign: "center",

    /* Title/Body */
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "-0.18px",
  };
});


export const TypographyBodyMedium = styled(Typography)(() => {
  return {
    color: "var(--color-palette-gray-500, #7D899C)",
    // whiteSpace: "nowrap", (add this property in Typography for textOverflow with width specified)
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    wordBreak: "break-word",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",

    /* Body/Small/Medium */
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "0.12px",
  };
});


export const TypographyBodyDefault = styled(Typography)(() => {
  return {
    color: "var(--color-palette-gray-400, #AEB6C4)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    wordBreak: "break-word",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",

    /* Body/Default/Normal */
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "0.14px",

    /* Body/Default/Normal */
    // fontFamily: "Inter",
    // fontSize: "13px",
    // fontStyle: "normal",
    // fontWeight: "400",
    // lineHeight: "18px",
    // letterSpacing: "0.14px",
  };
});


export const TypographyBodySmallNormal = styled(Typography)(() => {
  return {
    color: "var(--color-palette-gray-400, #AEB6C4)",

    /* Body/Small/Normal */
    fontFamily: "Inter",
    fontSize: "12px",
    // fontSize: "11px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    // lineHeight: "16px",
    letterSpacing: "0.12px",
  };
});

