import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function Login() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Link className='text-right'>Login</Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-[#fafafa]">
        <DialogHeader>
          <DialogTitle>{isRegistering ? 'Register' : 'Login'}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              User Name
            </Label>
            <Input id="username" value={username} className="col-span-3 rounded" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Password
            </Label>
            <Input id="name" value={password} className="col-span-3 rounded" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {isRegistering &&
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" value={email} className="col-span-3 rounded" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </>
          }
        </div>
        <DialogFooter className="dark:text-[#fafafa]">
          <DialogClose asChild>
            <Button type="submit" className="border-[1px] border-white dark:text-[#fafafa] rounded">Cancel</Button>
          </DialogClose>
          <Button type="submit" className="dark:bg-[#fafafa] dark:text-[#09090b] rounded">{isRegistering ? 'Register' : 'Login'}</Button>
        </DialogFooter>
        <Button onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</Button>
      </DialogContent>
    </Dialog>
  )
}
