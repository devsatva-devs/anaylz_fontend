import React from 'react';
import styles from './card.module.css'
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export type cardProps = { title: string, subTitle: string, key: any, onClick: React.MouseEventHandler<HTMLDivElement>, src: any }

const Card = ({ title, subTitle, key, onClick, src }: cardProps) => {
    return (

            <div onClick={onClick} key={key} className={styles.main}>
                <div className={`${styles.imgDiv}`}>
                    <img className={styles.img} src={src} alt={title} />
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.titletextDiv}>
                        <Typography className={styles.title}>{title}</Typography>
                        <KeyboardArrowRightIcon className={styles.icon} />
                    </div>
                      <div className={styles.subTitleDiv}>
                    <Typography className={styles.subTitle}>{subTitle}</Typography>
                </div>
                </div>
            </div>

    )
}

export default React.memo(Card)
