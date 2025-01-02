import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
    const [balance, setBalance] = useState("")
    useEffect(() => {
        axios.get("https://paytm-backend-gc9f.onrender.com/api/v1/account/balance", {
            headers: {
                Authorization: "bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            setBalance(res.data.balance)
        })

    }, [])
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}