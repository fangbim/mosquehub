"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function OnGoing() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row justify-center items-center">
      <div>
        <Image src="/cone.png" alt="Cone SVG" width={200}  height={200} style={{ width: '100%', height: 'auto' }}/>
      </div>
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900">
            Under Development
          </h1>
          <p className="text-xl">
            This feature is on its way! <br /> Thanks for your patience.
          </p>
        </div>
        <div>
          <a href="/">
            <Button className="rounded-full"> Go Home</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
