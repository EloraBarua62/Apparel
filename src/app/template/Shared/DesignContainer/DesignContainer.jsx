import styles from './DesignContainer.module.scss';

const DesignContainer = ({children}) => {
    return (
        <div className={styles.responsive_design}>
            {children}
        </div>
    );
};

export default DesignContainer;