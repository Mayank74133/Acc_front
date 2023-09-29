import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconX } from "@tabler/icons-react";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Switch from "@mui/material/Switch";
import "./addproduct.scss";
import { UserContext } from "../../../context/UserIdContext";
import axios from "axios";
const AddProduct = (props) => {
  const { changeChange } = useContext(UserContext);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [result, setResult] = useState([]);
  axios
    .get(`http://localhost:8000/api/auth/fetchProductUnits`)
    .then((response) => {
      setResult(response.data);
    });

  const [result2, setResult2] = useState([]);
  axios
    .get(`http://localhost:8000/api/auth/fetchProductHsnCodes`)
    .then((response) => {
      setResult2(response.data);
    });

  const units = [
    {
      value: "pieces",
      label: "Pieces - PCS",
    },
    {
      value: "numbers",
      label: "Numbers - NOS",
    },
    {
      value: "Days",
      label: "Days - DAY",
    },
    {
      value: "hours",
      label: "Hours - HRS",
    },
  ];
  const gst = [
    {
      value: "taxExempted",
      label1: "Tax Exempted",
      label2: "(NO GST)",
    },
    {
      value: "gst0",
      label1: "GST@ 0%",
      label2: "(NO GST)",
    },
    {
      value: "gst0_1", // 0_1 => 0.1
      label1: "GST@ 0.1%",
      label2: "(0.05% CSGT + 0.05% SGST/UT GST ; 0.1% IGST )",
    },
    {
      value: "gst0_25", // 0_25 => 0.25
      label1: "GST@ 0.25%",
      label2: "(0.125% CSGT + 0.125% SGST/UT GST ; 0.25% IGST )",
    },
    {
      value: "gst3",
      label1: "GST@ 3%",
      label2: "(1.5% CSGT + 1.5% SGST/UT GST ; 3% IGST )",
    },
    {
      value: "gst5",
      label1: "GST@ 5%",
      label2: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      value: "gst6",
      label1: "GST@ 6%",
      label2: "(3% CSGT + 3% SGST/UT GST ; 6% IGST )",
    },
    {
      value: "gst7_5", // 7_5  =>  7.5
      label1: "GST@ 7.5%",
      label2: "(3.75% CSGT + 3.75% SGST/UT GST ; 7.5% IGST )",
    },
    {
      value: "gst12",
      label1: "GST@ 12%",
      label2: "(6% CSGT + 6% SGST/UT GST ; 12% IGST )",
    },
    {
      value: "gst18",
      label1: "GST@ 18%",
      label2: "(9% CSGT + 9% SGST/UT GST ; 18% IGST )",
    },
    {
      value: "gst28",
      label1: "GST@ 28%",
      label2: "(14% CSGT + 14% SGST/UT GST ; 28% IGST )",
    },
  ];
  const hsn = [
    {
      hsn_code: "21",
      product_name:
        "LITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "5 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "212",
      product_name:
        "AITE BITE FOODS PVT LTD Classic ab cd  ef Vegetable Momo's 09 Pcs 9 Each",
      tax: "6 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "213",
      product_name:
        "MITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "7 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "226",
      product_name:
        "BITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "8 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "271",
      product_name:
        "EITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "9 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "22",
      product_name:
        "BITE BITE FOODS PVT LTD Classic ab cd  ef Vegetable Momo's 09 Pcs 9 Each",
      tax: "10 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "23",
      product_name:
        "MITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "11 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "27",
      product_name:
        "LITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "12 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
  ];
  const [isOn, setIsOn] = useState(false);
  const handleOnChange1 = () => {
    setIsOn(!isOn);
  };

  const [isOn2, setIsOn2] = useState(false);
  const handleOnChange2 = () => {
    setIsOn2(!isOn2);
    
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleOnChange3 = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
  };

  const handleOnChange4 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(false);
  };

  const [gstValue1, setGstValue1] = useState("GST %");
  const [gstValue2, setGstValue2] = useState("");

  const [hsnCode, setHsnCode] = useState("HSN Code");
  const [hsnValue1, setHsnValue1] = useState(null);

  const [searchValue, setSearchValue] = useState("0");

  const [customGst, setcustomGst] = useState("");
  const [customeCess, setCustomeCess] = useState("");
  const custom_gst_details =
    "(" +
    customGst / 2 +
    "% CSTS + " +
    customGst / 2 +
    "% SGST/UT GST ; " +
    customGst +
    "% IGST ; " +
    customeCess +
    "% CESS )";

  const [igst, setIgst] = useState(null);
  const [stategst, setStategst] = useState(null);
  const [cgst, setCgst] = useState(null);
  const [cess, setCess] = useState(null);


  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const todaysDate = dayjs(current_date);
  const [transactionDate, setTransactionDate] = useState(todaysDate);

  var date1 = transactionDate.$d;
  var filteredDate = date1.toString().slice(4, 16);

  const [fileSizeExceeded, setFileSizeExceeded] = React.useState(false);
  const maxFileSize = 20000;
  const [file, setFile] = useState("File Name");
  const [fileExists, setFileExists] = useState(false);

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [primaryUnitValue, setPrimaryUnitValue] = useState(null);
  const [secondaryUnitValue , setSecondaryUnitValue] = useState(null);

  const [productData, setProductData] = useState({
    product_name: "",
    primary_unit: null,
    secondary_unit: "",
    sale_price: null,
    purchase_price: null,
    tax: "",
    opening_stock: 0,
    low_stock: 0,
    balance_stock: 0,
    entry_date: "",
    hsn_code: null,
    hsn_desc: "",
    sgst: null,
    igst: null,
    cess: null,
    conversion: null,
    cgst: null,
  });
  const handleChange = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //console.log("secondaryUnitValue : ",primaryUnitValue,secondaryUnitValue)
  const [err, setErr] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      productData.entry_date = filteredDate;
      productData.sgst = stategst;
      productData.igst = igst;
      productData.cgst = cgst;
      productData.hsn_desc = hsnValue1;
      productData.hsn_code =  typeof(hsnCode) === "number" ? hsnCode : null ;
      productData.tax = isOn2 ? "yes" : "no";
      var arr = primaryUnitValue.split("-");
      productData.primary_unit = arr[1];
      productData.balance_stock = productData.opening_stock;
      if (secondaryUnitValue !== "null" && secondaryUnitValue !== "") {
        console.log("secondaryUnitValue : ",secondaryUnitValue , typeof(secondaryUnitValue))
        var arr = secondaryUnitValue.split("-");
        productData.secondary_unit = arr[1];
      } else {
        productData.secondary_unit = null;
      }
      console.log(productData.secondary_unit)
      await axios.post(
        "http://localhost:8000/api/auth/addProduct",
        productData
      );
      console.log("values : ", productData);
      changeChange();
      props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <div>
      <div>
        <Box
          sx={{
            width: 400,
          }}
        >
          <h1 className="text_left heading">Add Product</h1>

          <div className="add-product-section-wrapper">
            <div className="section-2">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "97%" },
                }}
                noValidate
                autoComplete="off"
              >
                <Box className="box-sec">
                  <TextField
                    label="Product Name"
                    name="product_name"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full"
                    size="small"
                    onChange={handleChange}
                    required
                  />
                </Box>

                <div>
                  <div className=" w-full">
                    <input
                      type="file"
                      id="file-1"
                      className="hidden sr-only w-full"
                      accept="image/x-png,image/gif,image/jpeg"
                      onChange={(event) => {
                        setFile(event.target.value);
                        setFileExists(true);
                        const get_file_size = event.target.files[0];
                        if (get_file_size.size > maxFileSize) {
                          setFileSizeExceeded(true);
                          return;
                        } else {
                          setFileSizeExceeded(false);
                        }
                      }}
                    />
                    <label
                      htmlFor="file-1"
                      id="file-1"
                      className="relative flex  items-center justify-center rounded-md text-center border border-dashed border-[#e0e0e0] py-8 px-16"
                    >
                      <div>
                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                          Drop Product Image
                        </span>
                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                          Or
                        </span>
                        <span className="img-browse-btn inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                  {fileExists ? (
                    <div class=" rounded-md bg-[#F5F7FB] py-4 px-8">
                      <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                          {file}
                        </span>
                        <button
                          class="text-[#07074D]"
                          onClick={(e) => {
                            e.preventDefault(), setFile("");
                            setFileExists(false);
                            setFileSizeExceeded(false);
                          }}
                        >
                          <IconX />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {fileSizeExceeded && (
                    <>
                      <p className="error">
                        File size exceeded the limit of {maxFileSize / 1000} KB
                      </p>
                    </>
                  )}
                </div>
                <Autocomplete
                  // const filterOptions = createFilterOptions({
                  //   matchFrom: 'start',
                  //   stringify: option => option.title,
                  // })
                  options={result.map(
                    (item) => item.unit_name + "- " + item.unit_code
                  )}
                  id="disable-close-on-select"
                  className="box-sec margin-bottom-zero "
                  onChange={(event, newValue) => {
                    setPrimaryUnitValue(newValue);
                  }}
                  
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="outlined-basic"
                      variant="outlined"
                      label="Units"
                      className="w-full my-0 "
                      size="small"
                      name="primary_unit"
                      
                    />
                  )} 
                />

                <Box className="box-sec margin-top-zero margin-bottom-zero">
                  <label className="pl-3">Add Secondary Unit</label>
                  <Switch
                    {...label}
                    color="success"
                    onChange={handleOnChange1}
                  />
                </Box>
                {isOn ? (
                  <Box className="box-sec margin-top-zero">
                    <Autocomplete
                      options={result.map(
                        (item) => item.unit_name + "- " + item.unit_code
                      )}
                      onChange={(event, newValue) => {
                        setSecondaryUnitValue(newValue);
                      }}
                      id="disable-close-on-select"
                      className="w-full sec-1 mt-0 pl-3 pb-3"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="outlined-basic"
                          variant="outlined"
                          label="Units"
                          className="w-full"
                          size="small"
                          name="secondary_unit" 
                        />
                      )}
                    />
                    <div className="pr-3 pb-3 w-full">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Conversion"
                        className="sec-2 w-full pr-3 pb-3"
                        size="small"
                        name="conversion"
                        onChange={handleChange}
                      />
                    </div>
                  </Box>
                ) : (
                  <span></span>
                )}

                <Box className="box-sec margin-bottom-zero">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Sale Price"
                    name="sale_price"
                    onChange={handleChange}
                    className="sec-1 w-full"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Purchase Price"
                    className="sec-2 w-full"
                    size="small"
                    name="purchase_price"
                    onChange={handleChange}
                  />
                </Box>
                <Box className="box-sec margin-top-zero ">
                  <label className="pl-2 ">Tax included</label>
                  <Switch
                    {...label}
                    color="success"
                    onChange={handleOnChange2}
                  />
                </Box>

                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Opening stock"
                    className="sec-1 w-full"
                    size="small"
                    onChange={handleChange}
                    name="opening_stock"
                  />

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Low stock"
                    className="sec-2 w-full"
                    size="small"
                    onChange={handleChange}
                    name="low_stock"
                  />
                </Box>

                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Date"
                        value={todaysDate}
                        format="LL"
                        className="w-full"
                        size="small"
                        maxDate={todaysDate}
                        onChange={(e)=>setTransactionDate(e)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                <Box className="box-sec box-sex-1 ">
                  <TextField
                    id="outlined-read-only-input"
                    value={hsnCode}
                    helperText={hsnValue1}
                    className="sec-1 w-full"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => {
                      handleOnChange3();
                    }}
                  />

                  <TextField
                    id="outlined-read-only-input"
                    value={gstValue1}
                    helperText={gstValue2}
                    className="sec-2 w-full"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => {
                      handleOnChange4();
                    }}
                  />
                </Box>

                <>
                  {isClicked ? (
                    <>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Search By"
                        className=" my-0 z-0"
                        size="small"
                        placeholder="HSN Code or Product Name "
                        onChange={(e) => {
                          setSearchValue(e.target.value);
                        }}
                      />

                      {result2
                        .filter(
                          (code) =>
                            code.hsn_code.toString().startsWith(searchValue) ||
                            code.hsn_desc.startsWith(searchValue)
                        )
                        .map((filteredItem) => (
                          <div
                            key={filteredItem.hsn_code}
                            className="flex card-sec"
                            onClick={() => {
                              setIgst(filteredItem.igst),
                                setCgst(filteredItem.cgst),
                                setStategst(filteredItem.sgst),
                                
                                setHsnCode(filteredItem.hsn_code),
                                setHsnValue1(filteredItem.hsn_desc),
                                setGstValue1(filteredItem.igst),
                                setGstValue2(
                                  "( " +
                                    filteredItem.cgst +
                                    "% CGST + " +
                                    filteredItem.sgst +
                                    "% SGST/UT GST ; " +
                                    filteredItem.igst +
                                    "% IGST )"
                                );
                              setIsClicked(false);
                            }}
                          >
                            <div className="gst-card-text cursor-pointer hover:bg-slate-100 p-3 rounded">
                              <div className="flex gap-6 pb-4">
                                <h2 className=" rounded bg-slate-300 px-6 py-1 ">
                                  {filteredItem.hsn_code}
                                </h2>
                                <h2 className=" rounded bg-slate-300 px-4 py-1 ">
                                  {filteredItem.igst + "% GST"}
                                </h2>
                              </div>
                              <p>{filteredItem.hsn_desc}</p>
                            </div>
                          </div>
                        ))}
                    </>
                  ) : (
                    <span className=" m-0"></span>
                  )}
                </>
                {isClicked2 ? (
                  <>
                    <Box className="box-sec">
                      <div className="gst-section-wrapper">
                        <div className="gst-section">
                          {gst.map((item, index) => (
                            <div className="flex card-sec" key={index}>
                              <div className="gst-card-text">
                                <h2 className=" font-medium">{item.label1}</h2>
                                <p>{item.label2}</p>
                              </div>
                              <div className="customer-info-icon-wrapper">
                                <input
                                  type="radio"
                                  id="gst_on_selected_item"
                                  name="gst"
                                  onChange={() => {
                                    console.log("clicked on gst rate");
                                    //setGstOnItem(item.value),
                                    setGstValue1(item.label1),
                                      setGstValue2(item.label2);
                                    setIsClicked2(false);
                                    console.log(gstValue2);
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Box>
                    <div>Custom Tax %</div>
                    <Box className="box-sec">
                      <TextField
                        label="GST"
                        id="outlined-basic"
                        variant="outlined"
                        className="sec-1 w-full"
                        size="small"
                        required
                        onChange={(e) => {
                          setcustomGst(e.target.value);
                        }}
                      />
                      <TextField
                        label="CESS"
                        id="outlined-basic"
                        variant="outlined"
                        className="sec-2 w-full"
                        size="small"
                        required
                        onChange={(e) => {
                          setCustomeCess(e.target.value);
                        }}
                      />
                    </Box>
                    <Box className="box-sec">
                      <button
                        onClick={(e) => {
                          e.preventDefault(),
                            setGstValue1(customGst),
                            setGstValue2(custom_gst_details);
                          setIsClicked2(false);
                        }}
                      >
                        Add Custome Gst
                      </button>
                    </Box>
                  </>
                ) : (
                  <div></div>
                )}
              </Box>
            </div>
          </div>
        </Box>
      </div>
      <div className="add-customer-btn-wrapper1">
        <button
          //disabled={submitDisabled}
          className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
          onClick={handleClick}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
