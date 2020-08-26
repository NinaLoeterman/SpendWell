import axios from "axios";

const baseUrl = "https://spendwell-api.herokuapp.com";

export const PostBarcode = (product) => {
  return axios
    .post(`${baseUrl}/barcode`, product);
};
