import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutAmin from "../../layout/LayoutAdmin";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { OutlinedInput, TextareaAutosize } from "@mui/material";
import { getAllCategory } from "../../services/productService";
import CommonUtils from "../../utility/CommonUtils";
import { Category } from "@mui/icons-material";

export default function ManageProduct({ data }) {
  const dataUrlImg = "";
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [urlImg, setUrlImg] = React.useState("");
  const [description, setDescription] = React.useState("");

  const arrCategory = data.data;
  const [currency, setCurrency] = React.useState("");

  const handleChange = (e) => {
    console.log(e.target);
    setCurrency(e.target.value);
  };

  const handleOnchangeImage = async (e) => {
    const data = e.target.files;
    const file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);

      const URLFile = URL.createObjectURL(file);
      setUrlImg(base64);
    }
  };
  const handleClickButton = () => {
    let data = {
      categoryId: currency,
      title: title,
      price: price,
      discount: discount,
      thumbnail: dataUrlImg,
      description: description,
    };
    console.log("check data send server:", data);
  };

  console.log("check change category:", currency);
  return (
    <>
      <LayoutAmin />
      <div className="m-auto w-[90%]">
        <p className="text-center text-[2rem] text-green-500">MANAGE PRODUCT</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <select onChange={(e) => handleChange(e)}>
              {arrCategory.map((category, index) => (
                <option key={index} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <TextField
            required
            id="outlined-required"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <div className="flex justify-between">
            <div className="w-[40%] ">
              <label htmlFor="img-input">
                Choose picture
                <input
                  className="border-[1px] border-gray-400"
                  id="img-input"
                  type="file"
                  onChange={(e) => handleOnchangeImage(e)}
                />
              </label>
            </div>
            <div className="flex flex-col w-[60%] ">
              <label> Description</label>
              <TextareaAutosize
                className="border-[1px] border-gray-500 outline-hidden"
                aria-label="empty textarea"
                placeholder=""
                minRows={1}
                style={{ width: "100%" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </Box>
        <Button
          className="bg-green-400 text-black hover:bg-green-700 mt-12 px-7"
          onClick={() => handleClickButton()}
        >
          Create
        </Button>
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
