import axios from "axios";
import React from "react";

function ProductPage({ data }) {
  return <div>ProductPage</div>;
}

export default ProductPage;

export async function getStaticProps(context) {
  console.log(context.params.productId);
  let data = [];
  try {
    // const agent = new https.Agent({ rejectUnauthorized: false });
    const response = await axios.get(
      `${process.env.MY_API}:5000/product/${context.params.productId}`
    );

    data = response.data; // Assign the data from the response
  } catch (error) {
    console.error(error);
  }
  return { props: { data } };
}

export async function getStaticPaths() {
  let data = [];
  try {
    // const agent = new https.Agent({ rejectUnauthorized: false });
    const response = await axios.get(`${process.env.MY_API}:5000/products`);

    data = response.data.products; // Assign the data from the response
  } catch (error) {
    console.error(error);
  }
  const paths = data.map((product) => `/product/${product.id}`);

  return {
    paths,
    fallback: false,
  };
}
