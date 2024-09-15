import { useState, useEffect } from "react"
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

export default function AuthDialog() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    id: '',
  })
  const [isRegistering, setIsRegistering] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsRegistering(false)
      setFormData({
        email: '',
        password: '',
        name: '',
        id: '',
      })
    }
  }, [isOpen])

  const handleDialogOpen = () => setIsOpen(true)
  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = () => {
    if (isRegistering) {
      console.log('Registering with data:', formData)
    } else {
      console.log('Logging in with data:', formData)
    }
    handleDialogClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Link onClick={handleDialogOpen} className='text-right'>Login</Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-[#fafafa]">
        <DialogHeader>
          <DialogTitle>{isRegistering ? 'Register' : 'Login'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        {isRegistering &&
            <div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  className="col-span-3 rounded"
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mt-4">
                <Label htmlFor="id" className="text-right">
                  ID
                </Label>
                <Input
                  id="id"
                  value={formData.id}
                  className="col-span-3 rounded"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          }
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={formData.email}
              className="col-span-3 rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              value={formData.password}
              className="col-span-3 rounded"
              type="password"
              onChange={handleInputChange}
            />
          </div>
          
        </div>
        <DialogFooter className="dark:text-[#fafafa]">
          <DialogClose asChild>
            <Button type="button" className="border-[1px] border-white dark:text-[#fafafa] rounded" onClick={handleDialogClose}>Cancel</Button>
          </DialogClose>
          <Button type="button" className="dark:bg-[#fafafa] dark:text-[#09090b] rounded" onClick={handleSubmit}>
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </DialogFooter>
        <Button type="button" onClick={() => setIsRegistering(!isRegistering)} className='justify-end'>
          {isRegistering ? 'Already account Login' : 'Register Now!..'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
