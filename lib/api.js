import axios from "axios";

const baseUrl = "https://spendwell-api.herokuapp.com";

export const postBarcode = (product) => {
    axios.post(`${baseUrl}/barcode`, product)
    .then((res) => console.log(res))
    .catch((err) => console.log("There was a problem adding a student", err));
};