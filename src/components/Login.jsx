import Register from './Register.jsx'
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
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Link className='text-right'>Login</Link>
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
            <Input id="username" value={username} className="col-span-3 rounded" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Password
            </Label>
            <Input id="name" value={password} className="col-span-3 rounded" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <DialogFooter className="dark:text-[#fafafa]">
          <Button type="submit" className="border-[1px] border-white dark:text-[#fafafa] rounded">Cancel</Button>
          <Button type="submit" className="dark:bg-[#fafafa] dark:text-[#09090b] rounded">Login</Button>
        </DialogFooter>
        <Register />
      </DialogContent>
    </Dialog>
  )
}
