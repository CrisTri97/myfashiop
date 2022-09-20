import React, { useEffect } from "react";
import styled from "styled-components";
import LayoutAmin from "../../layout/LayoutAdmin";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { TextareaAutosize } from "@mui/material";
import { getAllCategory } from "../../services/productService";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export default function ManageProduct({ data }) {
  console.log("check data manage product", data);
  useEffect(() => {}, []);
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
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
            <TextField
              id="outlined-select-currency-native"
              select
              label="CategoryId"
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your category"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField required id="outlined-required" label="Title" />
            <TextField required id="outlined-required" label="Price" />
            <TextField required id="outlined-required" label="Discount" />
            <div className="flex justify-between">
              <div className="w-[40%] ">
                <label htmlFor="img-input">
                  Choose picture
                  <input
                    className="border-[1px] border-gray-400"
                    id="img-input"
                    type="file"
                    class="file:border file:border-solid"
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
                />
              </div>
            </div>
          </div>
        </Box>
        <Button className="bg-green-400 text-black hover:bg-green-700 mt-12 px-7">
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
