import { useState } from "react"
import { Link } from "react-router-dom"

import Login from './Login.jsx'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Register() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  console.log(username, password)
  return (
    <Dialog className="rounded-md">
      <DialogTrigger asChild>
        <Link className="text-right">Register Now!</Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-[#fafafa]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value={username} className="col-span-3" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Password
            </Label>
            <Input id="name" value={password} className="col-span-3" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <DialogFooter className="dark:text-[#fafafa]">
          <Button type="submit" className="dark:bg-[#fafafa] dark:text-[#09090b] rounded">Save changes</Button>
        </DialogFooter>
        <Login />
      </DialogContent>
    </Dialog>
  )
}
