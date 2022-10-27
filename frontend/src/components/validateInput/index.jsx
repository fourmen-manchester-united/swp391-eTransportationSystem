import styles from "./validate.module.css";
function Validate(props) {
  const errors = props.errors;
  return (
    errors && (
      <div className={styles.MuiTooltipPopper}>
        <div className={styles.validation}>
          {errors}
          <span className={styles.MuiTooltipArrow} />
        </div>
      </div>
    )
  );
}
export default Validate;
