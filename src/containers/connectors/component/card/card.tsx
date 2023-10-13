import React from "react";
import styles from "./card.module.scss";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TypographyBodyDefault } from "../../../../components/Typography";

export type cardProps = {
  title: string;
  subTitle: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  src: any;
};

const Card = ({ title, subTitle, onClick, src }: cardProps) => {
  return (
    <div onClick={onClick} className={styles.main}>
      <div className={`${styles.imgDiv}`}>
        <img className={styles.img} src={src} alt={title} />
      </div>
      <div className={styles.textDiv}>
        <div className={styles.titletextDiv}>
          <Typography className={styles.title}>{title}</Typography>
          <div className={styles.connector_status_div}>
            <div className={styles.connector_success} />
            <TypographyBodyDefault>Inactive</TypographyBodyDefault>
          </div>
        </div>
        <div className={styles.subTitleDiv}>
          <Typography className={styles.subTitle}>{subTitle}</Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
