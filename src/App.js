import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, addNewPost } from "./store/testSlice";
import {
  useGetProductsQuery,
  useAddNewProductMutation,
} from "./store/apiSlice";

function App() {
  const productId = 1;
  const [
    addNewProduct,
    {
      isLoading: productLoading,
      isSuccess: productSuccess,
      isError: productError,
    },
  ] = useAddNewProductMutation(productId);

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetProductsQuery();

  const handleAddPost = async () => {
    const product = await addNewProduct({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    });
  };

  let content, buttonContent;

  // if (newPostStatus === "loading") buttonContent = "...";
  // else if (newPostStatus === "succeeded") buttonContent = "✔";
  // else if (newPostStatus === "failed") buttonContent = "❌";

  if (isLoading) content = <p>loading...</p>;
  else if (isSuccess) content = <p>fetch data succesfully</p>;
  else if (isError) content = <p>fetch data failed {error.toString()}</p>;

  if (productLoading) buttonContent = "...";
  else if (productSuccess) buttonContent = "✔";
  else if (productError) buttonContent = "❌";

  return (
    <div>
      {content}
      <button onClick={handleAddPost}>add post {buttonContent}</button>
      <button onClick={refetch}>Refetch Products</button>
    </div>
  );
}

export default App;
