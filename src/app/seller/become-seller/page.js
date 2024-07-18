import PageNavigation from '@/app/template/Shared/PageNavigation/PageNavigation';
import styles from './BecomeSeller.module.scss';
import DesignContainer from '@/app/template/Shared/DesignContainer/DesignContainer';
import AccountAccessForm from '@/app/template/Shared/AccountAccessForm/AccountAccessForm';

const page = () => {
    const fields = [
        {
            field_name: 'email',
            field_type: 'email',
            field_label: 'seller_email'
        },
        {
            field_name: 'password',
            field_type: 'password',
            field_label: 'seller_password'
        },
        {
            field_name: 'confirm_password',
            field_type: 'password',
            field_label: 'seller_confirm_password'
        },
    ];
        
    return (
      <div className={styles.become_seller_page_setup}>
        <PageNavigation main={"Seller"} sub={"Become Seller"} />
        <DesignContainer>
          <AccountAccessForm fields={fields} role={'seller'} submit_value={'Register as Seller'}/>
        </DesignContainer>
      </div>
    );
};

export default page;