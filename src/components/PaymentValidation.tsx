"use client";

import { useMemo, useState } from "react";
import "./PaymentValidation.css";
import { 
  isCardNumberValid,
  isNameValid,
  isMonthValid,
  isYearValid,
  isCvvValid,
} from "@/utils/helper";
import { CardProps } from "@/utils/type";

export const PaymentValidation = () => {
  const [isFormValid, setIsFormValid] = useState({
    cardNumber: false,
    name: false,
    month: false,
    year: false,
    cvv: false,
  });
  const [form, setForm] = useState<CardProps>({
    cardNumber: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });

  const isButtonDisabled = useMemo(() => {
    return !isFormValid.cardNumber || !isFormValid.name || !isFormValid.month || !isFormValid.year || !isFormValid.cvv;
  }, [isFormValid]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "cardNumber") {
      setIsFormValid({ ...isFormValid, cardNumber: isCardNumberValid(e.target.value) });
    } else if (e.target.name === "name") {
      setIsFormValid({...isFormValid, name: isNameValid(e.target.value) });
    } else if (e.target.name === "month") {
      setIsFormValid({...isFormValid, month: isMonthValid(e.target.value) });
    } else if (e.target.name === "year") {
      setIsFormValid({...isFormValid, year: isYearValid(e.target.value) });
    } else if (e.target.name === "cvv") {
      setIsFormValid({...isFormValid, cvv: isCvvValid(e.target.value) });
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form, "form");
  };


  console.log(isFormValid, "isFormValid");

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "650px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">{form.cardNumber}</p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">{form.name}</span>
              <span className="debit-card-date">{`${form.month}/${form.year}`}</span>
              <span className="debit-card-cvv">{form.cvv}</span>
            </p>
          </div>
        </div>

        <section>
          <div className="pa-50">
            <form onSubmit={onSubmit}>
              <div className="layout-column mb-15">
                <input
                  placeholder="Card Number"
                  data-testid="cardNumberInput"
                  onChange={onChange}
                  value={form.cardNumber}
                  name="cardNumber"
                />
                <p className={`invalid-text ${isFormValid.cardNumber ? "hidden" : ""}`} data-testid="numberInputError">
                  Invalid Card Number
                </p>
              </div>
              <div className="layout-column mb-15">
                <input 
                  placeholder="Name On Card" 
                  data-testid="nameInput" 
                  onChange={onChange}
                  value={form.name}
                  name="name"
                />
                <p className={`invalid-text ${isFormValid.name ? "hidden" : ""}`} data-testid="nameInputError">
                  Invalid Card Name
                </p>
              </div>
              <div className="flex justify-content-around align-items-center">
                <div className="layout-column mb-30">
                  <input 
                    placeholder="Expiry Month" 
                    data-testid="monthInput" 
                    onChange={onChange}
                    value={form.month}
                    name="month"
                  />
                  <p className={`invalid-text ${isFormValid.month ? "hidden" : ""}`} data-testid="monthInputError">
                    Invalid Month
                  </p>
                </div>
                <div className="layout-column mb-30">
                  <input 
                    placeholder="Expiry Year" 
                    data-testid="yearInput" 
                    onChange={onChange}
                    value={form.year}
                    name="year"
                  />
                  <p className={`invalid-text ${isFormValid.year ? "hidden" : ""}`} data-testid="yearInputError">
                    Invalid Year
                  </p>
                </div>
                <div className="layout-column mb-30">
                  <input 
                    placeholder="CVV" 
                    data-testid="cvvInput" 
                    onChange={onChange}
                    value={form.cvv}
                    name="cvv"
                  />
                  <p className={`invalid-text ${isFormValid.cvv ? "hidden" : ""}`} data-testid="cvvInputError">
                    Invalid CVV
                  </p>
                </div>
              </div>
              <div className="layout-column mb-30">
                <button
                  type="submit"
                  className="mx-0"
                  data-testid="submitButton"
                  disabled={isButtonDisabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
