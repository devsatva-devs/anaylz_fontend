import React, { useCallback } from "react"
import styles from './home.module.css'
import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Card from "./component/card/card"


const options = [
    {
        id: 1,
        title: "Google Analytics 4",
        subTitle: "Connect your GA4",
        src:""
   
    },
    {
        id: 2,
        title: "Facebook Ads",
        subTitle: "Connect your Facebook ADs",
        src:""
      
    },
    {
        id: 3,
        title: "Google Ads",
        subTitle: "Connect your Google Ads",
        src:""
      
    },
    {
        id: 4,
        title: "LinkedIn Ads",
        subTitle: "Connect your LinkedIn Ads",
        src:""
      
    },
]


const Home = () => {


    const navigate = useNavigate();

    const onCardClick = ()=>{
        
    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.cardWrapper}>
                    <Typography className={styles.titleText}>Get Started</Typography>
                    <div className={styles.cardRow}>
                        {options.map(item => (
                            <Card  src={item.src} key={item.id} onClick={() => onCardClick()}  title={item.title} subTitle={item.subTitle} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Home);
