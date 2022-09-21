import React, { useEffect } from "react";
import styled from "styled-components";
import LayoutAmin from "../../layout/LayoutAdmin";

import { getAllCategory, createProduct } from "../../services/productService";
import CommonUtils from "../../utility/CommonUtils";

const Container = styled.div`
  input {
    outline: none;
    height: 30px;
    padding: 0 10px;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
  select {
    outline: none;
    height: 30px;
    padding: 0 10px;
    border-radius: 5px;
  }
`;

export default function ManageProduct({ data }) {
  const dataUrlImg = "";
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [urlImg, setUrlImg] = React.useState("");
  const [description, setDescription] = React.useState("");

  const arrCategory = data.data;

  const [currency, setCurrency] = React.useState("");

  const handleOnchangeImage = async (e) => {
    const data = e.target.files;
    const file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);

      const URLFile = URL.createObjectURL(file);
      setUrlImg(base64);
    }
  };
  const handleClickButton = async () => {
    let data = {
      categoryId: currency,
      title: title,
      price: price,
      discount: discount,
      thumbnail: urlImg,
      description: description,
    };
    await createProduct(data);
    clearState();
  };
  const clearState = () => {
    setCurrency(arrCategory[0]._id);
    setDescription("");
    setDiscount("");
    setUrlImg("");
    setPrice("");
    setTitle("");
  };

  return (
    <>
      <LayoutAmin />
      <div className="w-[100%] py-[20px] h-[100vh] bg-red-100 m-auto">
        <Container>
          <div className="w-[95%] m-auto">
            <p className="text-center text-[1.5rem] py-5 font-semibold text-green-400">
              MANAGE PRODUCT
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* Category */}
              <div className="flex-col flex">
                <label>Choose Category</label>
                <select
                  className="outline-none"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {arrCategory &&
                    arrCategory.length > 0 &&
                    arrCategory.map((category, index) => {
                      return (
                        <option key={index} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              {/* Product */}
              <div className="flex-col flex">
                <label>Name Product</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* Price */}
              <div className="flex-col flex">
                <label>Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              {/* Discount */}
              <div className="flex flex-col">
                <label>Discount</label>
                <input
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              {/* Picture */}
              <div className="flex flex-col">
                <label>Picture</label>
                <input type="file" onChange={(e) => handleOnchangeImage(e)} />
              </div>
              {/* Deleted */}
              <div className="flex flex-col">
                <label>Deleted</label>
                <input />
              </div>
              {/* Description */}
              <div className="flex flex-col col-span-3 ">
                <label>Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* Button submit */}
            <div className="mt-5 ">
              <button
                className="text-white hover:bg-green-700 bg-green-500 min-w-[100px] py-1 rounded-md font-semibold"
                onClick={() => handleClickButton()}
              >
                Create
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getAllCategory();

  // Pass data to the page via props
  return { props: { data } };
}
