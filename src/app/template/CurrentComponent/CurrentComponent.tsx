import styles from "./CurrentComponent.module.scss";

const CurrentComponent = ({ holdState }) => {
  return <div className={styles.current_state_design}>{holdState}</div>;
};

export default CurrentComponent;
