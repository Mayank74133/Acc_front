import { IconNotes } from "@tabler/icons-react";
import "./cashtran.scss";
import { useContext } from "react";
import { UserContext } from "../../../context/UserIdContext";

const CashTran = (props) => {
  const { changeCashId, cashId } = useContext(UserContext);
  const time1 = new Date(props.data.cash_time);
  const hours = time1.getHours();
  const minutes = time1.getMinutes();
  const fminutes = minutes < 10 ? "0" + minutes : minutes;
  const fhours = hours > 12 ? hours - 12 : hours;
  const AMPM = hours > 12 ? "PM" : "AM";

  return (
    <div
      className={
        props.data.cash_id === cashId
          ? "grid grid-cols-4 cursor-pointer p-4 border-b border-slate-100 cashtran bg-[#fff9e1]"
          : "grid grid-cols-4 cursor-pointer p-4 border-b border-slate-100 cashtran"
      }
      onClick={() => changeCashId(props.data.cash_id)}
    >
      <div className="flex col-span-2 gap-3">
        <div className="notes rounded-full bg-yellow-200 p-3">
          <IconNotes className="text-yellow-600" />
        </div>
        <div className="details flex flex-col gap-1 ">
          <div className="date font-semibold flex items-center gap-2 text-slate-600">
            {fhours + ":" + fminutes + " " + AMPM}
            <div className="cashonline p-[2px] text-[10px] text-blue-600 bg-blue-100 rounded font-semibold uppercase">
              {props.data.cash_mode}
            </div>
          </div>
          <div className="text-sm text-slate-500 font-semibold">
            Description : {props.data.cash_description}
          </div>
        </div>
      </div>
      <div className="text-red-600 justify-self-center ml-10">
        {props.data.cash_pay ? "₹ " + props.data.cash_pay : "-"}
      </div>
      <div className="text-green-600 justify-self-end">
        {props.data.cash_receive ? "₹ " + props.data.cash_receive : "-"}
      </div>
    </div>
  );
};

export default CashTran;
