import React from "react";
import styles from './connectors.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import { TypographyTitleGroup } from "../../components/Typography";
import AddIcon from '@mui/icons-material/Add';
import Card from "./component/card/card";


const options = [
    {
        id: 1,
        title: "Google Analytics 4",
        subTitle: "Connect your GA4",
        src: "",

    },
    {
        id: 2,
        title: "Facebook Ads",
        subTitle: "Connect your Facebook ADs",
        src: ""

    },
    {
        id: 3,
        title: "Google Ads",
        subTitle: "Connect your Google Ads",
        src: ""

    },
    {
        id: 4,
        title: "LinkedIn Ads",
        subTitle: "Connect your LinkedIn Ads",
        src: ""

    },
]

const Connectors = () => {
    const onCardClick = () => {

    }
    return (
        <div className={styles.connectors_root} >
            <div className={styles.connectors_titleDiv} >
                <FolderIcon className={styles.folder_icon} />
                <TypographyTitleGroup>Our Connectors</TypographyTitleGroup>
                <div className={styles.add_icon_div}>
                    <AddIcon className={styles.add_icon} />
                </div>
            </div>
            <div className={styles.connector_card_root}>
                {options.map(item => (
                    <Card src={item.src} key={item.id} onClick={() => onCardClick()} title={item.title} subTitle={item.subTitle} />
                ))}
            </div>
        </div>
    )
}
export default React.memo(Connectors)