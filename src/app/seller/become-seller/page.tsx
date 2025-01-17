import AccountAccessForm from '../../template/Shared/AccountAccessForm/AccountAccessForm';
import DesignContainer from '../../template/Shared/DesignContainer/DesignContainer';
import Footer from '../../template/Shared/Footer/Footer';
import Header from '../../template/Shared/Header/Header';
import PageNavigation from '../../template/Shared/PageNavigation/PageNavigation';
import styles from './BecomeSeller.module.scss';


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
        <Header />
        <PageNavigation main={"Seller"} sub={"Become Seller"} />
        <DesignContainer heading={"Seller Registration"}>
          <AccountAccessForm
            fields={fields}
            role={"seller"}
            activity={"signup"}
            submit_value={"Register as Seller"}
          />
        </DesignContainer>
        <Footer />
      </div>
    );
};

export default page;