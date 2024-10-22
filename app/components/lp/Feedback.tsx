"use client"
import { useState } from "react";
import BTNPrimary from "../button/BtnPrimary";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export default function Feedback() {
  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(!open);

  return (
    <section className=" ">
      <div className="grid bg-[#F5F5F5] py-14 md:py-28 justify-center items-center gap-6">
        <h1 className="text-xl md:text-4xl font-bold text-center text-wh">Bantu Kami Mengembangkan{<br/>}Layanan Lebih Baik Lagi</h1>
        <div className="flex justify-center">
          <button onClick={handleOpen}>
            <BTNPrimary >Send Feedback</BTNPrimary> 
          </button>
        </div>
      </div>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
            Kami ingin mendengar pendapat Anda!{" "}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="small">
          Bagikan pengalamanmu menggunakan <span className="font-semibold">MosqueHub</span> 
          </Typography>
          <div className="grid gap-6">
            <Input label="Username" />
            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleOpen}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
