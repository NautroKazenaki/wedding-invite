import React from 'react'
import TSStyles from './ThirdSection.module.css'

const ThirdSection = () => {
    return (
        <div className={TSStyles.mainContainer}>
            <div className={TSStyles.blackOut}>
                <div className={TSStyles.labelContainer}>
                    <h2>Свадебная программа</h2>
                </div>
                <div className={TSStyles.contentContainer}>
                    <div className={TSStyles.leftContent}>
                        <div className={TSStyles.leftLabel}>
                            <h3>Основная церемония</h3>
                        </div>
                        <hr />
                        <div className={TSStyles.leftInfo}>
                            <div className={TSStyles.firstDateContainer}>
                                <p>12:00</p>
                                <p>16:00</p>
                            </div>
                            <div className={TSStyles.secondDateContainer}>
                                <p>Вторник 15</p>
                                <p>Октябрь 2024</p>
                            </div>
                        </div>
                        <div className={TSStyles.leftDescription}>
                            <h4>Обмен кольцами, первый поцелуй <br />
                                то си бо си</h4>
                        </div>
                    </div>
                    <div className={TSStyles.rightContent}>
                        <div className={TSStyles.rightLabel}>
                            <h3>Праздничная вечеринка</h3>
                        </div>
                        <hr />
                        <div className={TSStyles.rightInfo}>
                            <div className={TSStyles.firstDateContainer}>
                                <p>17:00</p>
                                <p>00:00</p>
                            </div>
                            <div className={TSStyles.secondDateContainer}>
                                <p>Вторник 15</p>
                                <p>Октябрь 2024</p>
                            </div>
                        </div>
                        <div className={TSStyles.rightDescription}>
                            <h4>Клевый коттедж, ебейший шашлык</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection