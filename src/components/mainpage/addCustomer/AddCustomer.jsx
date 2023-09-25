import { Box, TextField } from "@mui/material";
import "./addcustomer.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserIdContext";
const AddCustomer = (props) => {
  const { changeChange } = useContext(UserContext);
  const [values, setValues] = useState({
    cust_name: "",
    cust_number: "",
    cust_amt: "",
    amt_type: "",
    cust_gstin: "",
    cust_sflat: "",
    cust_sarea: "",
    cust_spin: "",
    cust_scity: "",
    cust_sstate: "",
    cust_bflat: "",
    cust_barea: "",
    cust_bpin: "",
    cust_bcity: "",
    cust_bstate: "",
  });
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [err, setErr] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/send", values);
      changeChange();
      props.snack();
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const [select, setSelect] = useState(false);

  return (
    <div>
      <form method="post">
        <Box sx={{ width: 400 }} role="presentation">
          <h1 className="text_left heading font-semibold text-2xl flex justify-between items-center">
            Add Customer
          </h1>

          <div className="section-wrapper-2">
            <div className="section-2">
              <div className="forms">
                <div className="box-sec">
                  <TextField
                    label="Full Name"
                    name="cust_name"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full"
                    size="small"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="box-sec flex-col">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Phone Number"
                    name="cust_number"
                    type="text"
                    className="w-full"
                    size="small"
                    inputProps={{ maxLength: 10 }}
                    onChange={handleChange}
                    required
                  />
                  <div className="text-red-600 text-sm ml-2">{err && err}</div>
                </div>

                <div className="box-sec ">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Opening Balance"
                    name="cust_amt"
                    className="sec-1"
                    size="small"
                    onChange={handleChange}
                    required
                  />
                  <select
                    className={
                      select
                        ? "text-green-600 bg-white p-1 border border-slate-400 rounded"
                        : "text-red-600 bg-white p-1 border border-slate-400 rounded"
                    }
                    name="amt_type"
                    onChange={handleChange}
                  >
                    <option
                      value="pay"
                      onClick={() => setSelect(false)}
                      selected
                    >
                      Pay
                    </option>
                    <option value="receive" onClick={() => setSelect(true)}>
                      Receive
                    </option>
                  </select>
                </div>
              </div>
              <div className="box-sec check-box-sec">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 cursor-pointer"
                  onChange={handleOnChange}
                />
                <span>Add GSTIN & GST</span>
              </div>

              {isChecked ? (
                <>
                  <div className="box-sec-2 forms">
                    <div className="box-sec ">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="GST IN"
                        className="w-full"
                        size="small"
                        name="cust_gstin"
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-left mt-2">Shipping Address</p>
                    <div className="box-sec">
                      <TextField
                        id="outlined-basic"
                        label="Flat / Building Number"
                        variant="outlined"
                        className="w-full"
                        size="small"
                        name="cust_sflat"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="box-sec">
                      <TextField
                        id="outlined-basic"
                        label="Area / Locality"
                        variant="outlined"
                        className="w-full"
                        size="small"
                        name="cust_sarea"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="box-sec">
                      <TextField
                        id="outlined-basic"
                        label="PIN Code"
                        variant="outlined"
                        className="w-full"
                        size="small"
                        name="cust_spin"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="box-sec">
                      <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        className="sec-1 w-full"
                        size="small"
                        name="cust_scity"
                        onChange={handleChange}
                      />

                      <TextField
                        id="outlined-basic"
                        label="State"
                        variant="outlined"
                        className="sec-2"
                        size="small"
                        name="cust_sstate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="box-sec check-box-sec text-center">
                    <input
                      type="checkbox"
                      onChange={handleOnChange2}
                      className="w-4 h-4 mr-2 cursor-pointer"
                      defaultChecked
                    />
                    <span>Billing Address same as Shipping Address</span>
                  </div>

                  {isChecked2 ? (
                    <div className="box-sec-2 forms">
                      <p className="text_left">Billing Address</p>
                      <div className="box-sec">
                        <TextField
                          id="outlined-basic"
                          label="Flat / Building Number"
                          variant="outlined"
                          className="w-full"
                          size="small"
                          name="cust_bflat"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box-sec">
                        <TextField
                          id="outlined-basic"
                          label="Area / Locality"
                          variant="outlined"
                          className="w-full"
                          size="small"
                          name="cust_barea"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box-sec">
                        <TextField
                          id="outlined-basic"
                          label="PIN Code"
                          variant="outlined"
                          className="w-full"
                          size="small"
                          name="cust_bpin"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="box-sec">
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          className="sec-1"
                          size="small"
                          name="cust_bcity"
                          onChange={handleChange}
                        />

                        <TextField
                          id="outlined-basic"
                          label="State"
                          variant="outlined"
                          className="sec-2"
                          size="small"
                          name="cust_bstate"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="add-customer-btn-wrapper1">
            <button
              className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
              onClick={handleClick}
            >
              Add Customer
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default AddCustomer;
