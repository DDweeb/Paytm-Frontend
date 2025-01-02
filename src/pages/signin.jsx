import { useState } from "react"
import { BottomWarning } from "../components/bottomwarning"
import { CustomizeButton } from "../components/cutomizebutton"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: ""
  })
  const [touched, setTouched] = useState({
    username: false,
    password: false
  })
  const [authorizing, setAuthorising] = useState(true);


  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => {
          setInput({
            ...input,
            username: e.target.value
          })
        }} type="text" onblur={() => {
          setTouched({
            ...touched,
            username: true
          })
        }} isError={touched.username && input.username === ""} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setInput({
            ...input,
            password: e.target.value
          })
        }} type="password" onblur={() => {
          setTouched({
            ...touched,
            password: true
          })
        }} isError={touched.password && input.password === ""} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <CustomizeButton authorizing={authorizing} beforeLabel="Sign in" afterLabel="Signing in" onClick={async () => {
            if (!input.username || !input.password) {
              setTouched({
                password: true,
                username: true,
              })
              return;
            }
            setAuthorising(false);
            const response = await axios.post("https://paytm-backend-gc9f.onrender.com/api/v1/user/signin", input)
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
