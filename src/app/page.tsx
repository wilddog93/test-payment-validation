import { PaymentValidation } from "@/components/PaymentValidation";

export default function Home() {

  const title = "Payment Validation";

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="layout-row justify-content-center mt-30">
        <PaymentValidation />
      </div>
    </div>
  );
}
