import { useState } from "react"
import { BottomWarning } from "../components/bottomwarning"
import { CustomizeButton } from "../components/cutomizebutton"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/subheading"
import axios from 'axios';
import { useNavigate } from "react-router-dom"



export const Signup = () => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorizing, setAuthorising] = useState(true);
  const [touched, setTouched] = useState({
    username: false,
    firstname: false,
    lastname: false,
    password: false,
  });

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox type="text" is onChange={e => {
          setFirstname(e.target.value)
        }} onblur={() => {
          setTouched({
            ...touched,
            firstname: true
          })
        }} isError={touched.firstname && firstname === ""} placeholder="John" label={"First Name"} />
        <InputBox type="text" onChange={e => {
          setLastname(e.target.value)
        }} onblur={() => {
          setTouched({
            ...touched,
            lastname: true
          })
        }} isError={touched.lastname && lastname === ""} placeholder="Doe" label={"Last Name"} />
        <InputBox type="text" onChange={e => {
          setUsername(e.target.value)
        }} onblur={() => {
          setTouched({
            ...touched,
            username: true
          })
        }} isError={touched.username && username === ""} placeholder="example@gmail.com" label={"Email"} />
        <InputBox type="password" onChange={e => {
          setPassword(e.target.value)
        }} onblur={() => {
          setTouched({
            ...touched,
            password: true
          })
        }} isError={touched.password && password === ""} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <CustomizeButton authorizing={authorizing} beforeLabel="Sign up" afterLabel="Signing up" onClick={async () => {
            if (!username || !password || !firstname || !lastname) {
              setTouched({
                password: true,
                username: true,
                firstname: true,
                lastname: true
              })
              return;
            }
            setAuthorising(false);
            const response = await axios.post("https://paytm-backend-gc9f.onrender.com/api/v1/user/signup", {
              username,
              firstname,
              lastname,
              password
            })
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}