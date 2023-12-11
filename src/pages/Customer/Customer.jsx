import CustomerForm from "../../components/customers/CustomerForm";
import CustomerLogin from "../../components/customers/CustomerLogin";
import CustomerProducts from "../../components/customers/CustomerProducts";
import CustomerSignup from "../../components/customers/CustomerSignup";
function customer() {
  return (
    <>
      <CustomerSignup />
      <CustomerLogin />
      <CustomerProducts />
    </>
  );
}

export default customer;
