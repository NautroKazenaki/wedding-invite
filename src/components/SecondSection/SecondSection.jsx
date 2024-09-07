import React, { useState } from 'react';
import SSStyles from './SecondSection.module.css';
import Bek from '../../images/Bek.jpg';
import Zhena from '../../images/Zhena.png';
import Heart from '../../images/heart.svg';
import { Modal, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SecondSection = () => {
    const [openBek, setOpenBek] = useState(false);
    const [openZhena, setOpenZhena] = useState(false);

    const handleOpenBek = () => setOpenBek(true);
    const handleCloseBek = () => setOpenBek(false);

    const handleOpenZhena = () => setOpenZhena(true);
    const handleCloseZhena = () => setOpenZhena(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const pulseVariants = {
        initial: { scale: 1 },
        animate: { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } },
    };

    return (
        <div className={SSStyles.mainContainer}>
            <div className={SSStyles.labelsContainer}>
                <h1>Привет!</h1>
                <h3>15 сентября 2024, Ресторан Чито Гврито, Санкт-Петербург</h3>
                <h4>Приглашаем вас отпраздновать нашу свадьбу</h4>
            </div>
            <div className={SSStyles.infoContainer}>
                <div className={SSStyles.left}>
                    <div className={SSStyles.leftInfo}>
                        <h3>Мистер Бек</h3>
                        <motion.button
                            onClick={handleOpenBek}
                            className={SSStyles.customButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Что мы знаем о Беке
                        </motion.button>
                        <Modal
                            open={openBek}
                            onClose={handleCloseBek}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Что мы знаем о Беке
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <ul>
                                        <li><h4>Первый иностранный специалист в МФЦ</h4></li>
                                        <li><h4>Второй мужчина жены после отчима</h4></li>
                                        <li><h4>Третий раз в жизни завязывает галстук</h4></li>
                                        <li><h4>Четвертое место района в Русском Медвежонке</h4></li>
                                        <li><h4>Пятый Power Ranger</h4></li>
                                        <li><h4>Шестой невидимый игрок в литрбол</h4></li>
                                        <li><h4>Седьмой (потом допишу)</h4> </li>
                                        <li><h4>Восьмой в списке чудес света</h4></li>
                                        <li><h4>Девятый (потом допишу)</h4></li>
                                        <li><h4>Десятый в списке подозреваемых, кто убил Марка</h4></li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                    <div className={SSStyles.leftImg}>
                        <img src={Bek} alt="Bek" />
                    </div>
                </div>
                <div className={SSStyles.middle}>
                    <motion.img
                        src={Heart}
                        alt="Heart"
                        className={SSStyles.heartImg}
                        variants={pulseVariants}
                        initial="initial"
                        animate="animate"
                    />
                </div>
                <div className={SSStyles.right}>
                    <div className={SSStyles.rightImg}>
                        <img src={Zhena} alt="Zhena" />
                    </div>
                    <div className={SSStyles.rightInfo}>
                        <h3>Жена Бека</h3>
                        <motion.button
                            onClick={handleOpenZhena} 
                            className={SSStyles.customButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Что мы знаем о жене Бека 
                        </motion.button>
                        <Modal
                            open={openZhena}
                            onClose={handleCloseZhena}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Что мы знаем о жене Бека
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <ul>
                                        <li><h4>Первая жена Бека</h4></li>
                                        <li><h4>В основном нихуя</h4></li>
                                        {/* <li><h4>Третья (потом допишу)</h4></li>
                                        <li><h4>Четвертая (потом допишу)</h4></li>
                                        <li><h4>Пятая (потом допишу)</h4></li>
                                        <li><h4>Шестая (потом допишу)</h4></li>
                                        <li><h4>Седьмая (потом допишу)</h4> </li>
                                        <li><h4>Восьмая (потом допишу)</h4></li>
                                        <li><h4>Девятая (потом допишу)</h4></li>
                                        <li><h4>Десятая (потом допишу)</h4></li> */}
                                    </ul>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;