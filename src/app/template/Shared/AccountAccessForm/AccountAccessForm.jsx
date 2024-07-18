import styles from './AccountAccessForm.module.scss';

const AccountAccessForm = ({ fields, role, submit_value }) => {
  return (
    <div className={styles.accessform_page_design}>
      <form>
        {fields.map((each, index) => (
          <div key={index}>
            <label htmlFor={each.field_label}>{each.field_name}</label>
            <input
              type={each.field_type}
              name={each.field_name}
              id={each.field_label}
            />
          </div>
        ))}
        <input type="submit" value={submit_value} />
      </form>
    </div>
  );
};

export default AccountAccessForm;