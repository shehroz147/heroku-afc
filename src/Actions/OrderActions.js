import server from "../apis/server";

export const placeOrder = (
  resetForm,
  setActiveStep,
  activeStep,
  values,
  setLoading
) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("hamzaFlawsToken");
    setActiveStep(activeStep + 1);
    await server.post(
      `/checkout`,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        shippingAddress: values.shippingAddress,
        contactDetails: values.contactDetails,
        city: values.city,

        province: values.province || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "CHECKOUT",
    });
    resetForm({
      values: "",
    });

    setLoading(false);
  } catch (e) {
    console.log(e.message);
    setActiveStep(activeStep - 1);
    alert(
      `We are working on server that's why your order cannot be placed. Try few moments later`
    );

    setLoading(false);
    // setLoading(false);
  }
};
