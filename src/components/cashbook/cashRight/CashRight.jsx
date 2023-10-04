import {
  IconAlertOctagonFilled,
  IconAlignJustified,
  IconEdit,
  IconPhoto,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import "./cashright.scss";
import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { UserContext } from "../../../context/UserIdContext";

const CashRight = (props) => {
  const { cashId } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cash/fetchDataid/${cashId}`)
      .then((res) => {
        setData(res.data);
      });
  });
  return (
    <div className="cashright">
      <div className="cashCard">
        <div className="grid grid-cols-3 p-4 border-b border-slate-100 cnt">
          <div className="flex col-span-2 gap-4">
            <div className="notes rounded-full bg-green-200 p-3">
              <IconPlus className="text-green-600" />
            </div>
            <div className="details flex flex-col gap-2 ">
              <div className="date font-semibold flex items-center gap-2 text-slate-900">
                IN
              </div>
              <div className="text-sm text-slate-500 font-semibold">
                10:12 AM , 10 Sep 2023
              </div>
            </div>
          </div>
          <div className="editndel flex justify-center gap-20 self-center">
            <button
              className="edit flex items-center gap-2 p-2 rounded text-blue-700 hover:text-white hover:bg-blue-700"
              onClick={props.editOut}
            >
              <IconEdit className="w-5 h-5" /> Edit
            </button>
            <button
              className="flex items-center gap-2 del p-2 rounded text-red-600 hover:text-white hover:bg-red-600"
              onClick={handleClickOpen}
            >
              <IconTrash className="w-5 h-5" /> Delete
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="flex">
                <div className="pt-5 pl-3">
                  <IconAlertOctagonFilled size={60} className="text-red-600" />
                </div>
                <div>
                  <DialogTitle id="alert-dialog-title">
                    Are You Sure ?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You are about to delete this Entry This action cannot be
                      undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions className="flex gap-4">
                    <button className="pb-3" onClick={handleClose}>
                      Cancel
                    </button>
                    <button
                      className="delete-btn text-red-600 pb-3 pr-3"
                      onClick={handleClose}
                      autoFocus
                    >
                      Delete Entry
                    </button>
                  </DialogActions>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-1 border-b border-slate-200 py-3">
        <div className="justify-self-end flex justify-end flex-col items-end text-lg font-semibold text-slate-600 ">
          ₹ 200
          <div className="text-blue-600 text-sm">ONLINE</div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-3 border-b border-slate-200 text-slate-600">
        <IconAlignJustified className="h-8 w-8" />
        <div className="flex flex-col gap-2">
          <div className="text-lg">Description</div>
          <div className="text-xl text-slate-800">Wheat</div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-3 border-b border-slate-200 text-slate-600">
        <IconPhoto className="h-8 w-8" />
        <div className="flex flex-col gap-2">
          <div className="text-lg">Photo Attachment</div>
          <div className="text-xl text-slate-800">-</div>
        </div>
      </div>
    </div>
  );
};

export default CashRight;
