import styles from './DesignContainer.module.scss';

const DesignContainer = ({children,heading}) => {
    return (
      <div className={styles.responsive_design}>
        <div className={styles.heading_design}>{heading}</div>
        {children}
      </div>
    );
};

export default DesignContainer;