import { FaReact, FaJava, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiSpring } from 'react-icons/si';
import { Paragraph } from 'src/components/shared';
import styles from './TechnologiesCard.module.css';

export const TechnologiesCard = () => {
  const technologies = [
    
    {
      name: 'Spring',
      icon: <SiSpring color="#6DB33F" size="4em" />,
      id: 1,
    },
    
    {
      name: 'Java',
      icon: <FaJava color="#007396" size="4em" />,
      id: 2,
    },
    {
      name: 'React',
      icon: <FaReact color="#58C4DC" size="4em" />,
      id: 3,
    },
    {
      name: 'Angular',
      icon: <FaAngular color="#DD0031" size="4em" />,
      id: 4,
    },
  ];

  return (
    <ul className={styles.technologiesCardContainer}>
      {technologies.map(({ id, icon, name }) => (
        <li key={id} className={styles.card}>
          <div className={styles.cardContent}>
            <div>{icon}</div>
            <Paragraph>{name}</Paragraph>
          </div>
        </li>
      ))}
    </ul>
  );
};
