import React, { useState } from 'react';
import Footer from './commom/footer';
import Navigation from './commom/Navigation';
import s from "/pages/styles.module.css";
import { mockDataTitle } from '/data/mockData/missionVisionValues';
import { mockDataText } from '/data/mockData/missionVisionValues.js';

const dataTitle = mockDataTitle;
const dataText = mockDataText;

function MissionVisionValues() {
    return <div>
        <Navigation />
        <div className={s.mainContent}>
            <Cards dataTitle={dataTitle} dataText={dataText} />
        </div>
        <Footer />
    </div>
}

function Cards({ dataTitle, dataText }) {
    return (
        <div style={{ marginTop: "2%" }} className={s.mainContent}>
            {dataTitle?.length ? (
                <>
                    {dataTitle.map((item) => {
                        const filteredText = dataText.filter(
                            (itemText) => itemText.idTitle === item.id
                        );

                        return (
                            <div key={item.id}>
                                <Card item={item} />

                                {filteredText.map((textItem) => (
                                    <Card
                                        item={textItem}
                                    />
                                ))}
                                <br />
                            </div>
                        );
                    })}
                </>
            ) : (
                <h2 className={`${s.hMessage} ${s.hErrorMessage} ${s.centerDiv}`}>No data available</h2>
            )}
        </div>
    );
}


function Card({ item }) {

    return <div className={item.title != undefined ? 
            `${s.cardTitle} ${s.card}  ${s.w40}` 
            : `${s.card}`}>
        
        <div  className={item.image != undefined ?  `${s.w75}`: `${s.w100}`}>
        {item.title != undefined ? (            
        
            <h1>{(item.title)}</h1>
        
        )
            : (
                <h2 style={{width : "95%"}}>{(item.text)}</h2>
            )
        }
        </div>

        {item.image != undefined ? 
                <div className={ item.title != undefined ? `${s.cardTitle} ${s.cardImage} ${s.card} ${s.w25}` : `${s.cardImage} ${s.card} ${s.w25}`}>
                    <img src={item.image} alt="Image" />
                </div>
            : null
        }
    </div>
}

export default MissionVisionValues;