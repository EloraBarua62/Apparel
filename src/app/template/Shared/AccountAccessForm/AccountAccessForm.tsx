"use client";
import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import styles from "./AccountAccessForm.module.scss";
import { useAppDispatch } from "../../../../lib/hooks/hooks";
import { userSignup } from "../../../../lib/slices/authSlice";

type FieldsProps = {
  field_name: string;
  field_type: string;
  field_label: string;
};
type CredentialProps = {
  fields: FieldsProps[];
  role: string;
  activity: string;
  submit_value: string;
};
// export interface CredentialProps {
//   credential: CredentialModel;
// }

const AccountAccessForm = ({
  fields, role, activity, submit_value
}: CredentialProps) => {
  
  const dispatch = useAppDispatch();
  const handleSignupForm = (event: any) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value || '';

    console.log(email, password)
    if(activity === 'signup'){
      dispatch(userSignup({email, password, role}));
    }
    
    event.preventDefault();
  }
  return (
    <div className={styles.accessform_page_design}>
      <form onSubmit={handleSignupForm}>
        {fields.map((each, index) =>
          activity === "login" && each.field_name === "confirm_password" ? (
            ""
          ) : (
            <div key={index}>
              <label htmlFor={each.field_label}>{each.field_name}</label>
              <input
                type={each.field_type}
                name={each.field_name}
                id={each.field_label}
              />
            </div>
          )
        )}
        <button type="submit" name="action" className={styles.submit_button}>
          {submit_value}
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "black" }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            OR
          </div>
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "black" }}
          ></div>
        </div>
      </form>

      <LoginButton />
    </div>
  );
};

export default AccountAccessForm;
