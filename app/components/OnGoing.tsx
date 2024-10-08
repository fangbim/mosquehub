"use client";
import { Button } from "@material-tailwind/react";

export default function OnGoing() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row justify-center items-center">
      <div>
        <img src="/cone.png" alt="Cone SVG" />
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
