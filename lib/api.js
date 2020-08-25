import axios from "axios";

const baseUrl = "https://spendwell-api.herokuapp.com";

export const PostBarcode = (product) => {
  axios
    .post(`${baseUrl}/barcode`, product)
    .then((res) => console.log(res.data))
    .catch((err) => console.log("There was a problem adding a product", err));
};
