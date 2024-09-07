// FirstSection.js
import React from 'react';
import FSStyles from './FirstSection.module.css';
import { motion } from 'framer-motion';

const FirstSection = ({ timeLeft }) => {
  const pulseVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } },
  };

  const units = [
    { key: 'days', label: 'дней', endings: ['день', 'дня', 'дней'] },
    { key: 'hours', label: 'часов', endings: ['час', 'часа', 'часов'] },
    { key: 'minutes', label: 'минут', endings: ['минуту', 'минуты', 'минут'] },
    { key: 'seconds', label: 'секунд', endings: ['секунду', 'секунды', 'секунд'] },
  ];

  const getCorrectEnding = (number, endings) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return endings[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  return (
    <div className={FSStyles.firstSection}>
      <div className={FSStyles.middleInfoForm}>
        <span>Свадьба у Бека</span>
        <p>Мы женимся примерно через:</p>
        <div className={FSStyles.countdown}>
          {units.map((unit) => (
            <motion.div
              key={unit.key}
              className={FSStyles.countdownCircle}
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            >
              <span>{timeLeft[unit.key]}</span>
              <p>{getCorrectEnding(timeLeft[unit.key], unit.endings)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;