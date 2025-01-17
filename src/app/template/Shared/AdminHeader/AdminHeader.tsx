import Image from 'next/image';
import React from 'react';
import styles from './AdminHeader.module.scss';
import logo from "../../../../../public/apparel_logo.png";

const AdminHeader = () => {
    return (
      <div className={styles.admin_header_container}>
        <div className={styles.logo_container}>
          <Image
            src={logo}
            alt=""
            priority={true}
            className={styles.logo_design}
          />
        </div>
      </div>
    );
};

export default AdminHeader;