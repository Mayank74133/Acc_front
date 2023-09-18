import { Box, TextField} from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "./pay.scss"
const Pay = (props) => {
    const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
const value =dayjs(current_date);

  return (
    <div>
          <h1 className="text_left heading text-red-500 font-semibold text-lg">Add New Entry</h1>

          <div className="section-wrapper-2">
            <div className="section-2">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "95%" },
                }}
                noValidate
                autoComplete="off"
className="w-full"
              >
                <Box className="box-sec">
                  <TextField
                    label="Amount"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full m-0"
size="small"
                    required
                  />
                </Box>

                <Box className="box-sec">
                  <TextField
                    fullWidth
                    multiline
                    id="outlined-basic"
                    variant="outlined"
                    label="Description"
                    type="text"
                    placeholder="Enter Details"
                    InputProps={{
                      rows: 5,
                    }}
                    className="w-full"
                  />
                </Box>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Date"
                        value={value}
                        format="LL"
                        className="w-full"
                        maxDate={value}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Box>
            </div>
          </div>
        
      
      <div className="add-customer-btn-wrapper1">
        <button className="add_btn2 text-red-600" onClick={props.snack}>
          You Pay
        </button>
      </div>
    </div>
  )
}

export default Pay