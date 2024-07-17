"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

export default function LoginPage() {
  const [shwPsswd, setshwPsswd] = React.useState(false);
  const togglePsswd = () => setshwPsswd(!shwPsswd);

  const [shwCnfrmPsswd, setshwCnfrmPsswd] = React.useState(false);
  const toggleCnfrmPsswd = () => setshwCnfrmPsswd(!shwCnfrmPsswd);

  return (
    <form className="flex flex-col gap-2 w-full max-w-xs">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Register
      </h2>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        {/* <Input type="password" id="password" placeholder="Password" /> */}
        <div className="flex relative">
          <Input
            type={shwPsswd ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="pr-8 border"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0"
            onClick={togglePsswd}
          >
            {shwPsswd ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        {/* <Input type="password" id="password" placeholder="Password" /> */}
        <div className="flex relative">
          <Input
            type={shwCnfrmPsswd ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirm Password"
            className="pr-8 border"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0"
            onClick={toggleCnfrmPsswd}
          >
            {shwCnfrmPsswd ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      {/* <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={shwPsswd} />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          onClick={togglePsswd}
        >
          Show Password
        </Label>
      </div> */}
      <Button className="mt-4">Register</Button>

      {/* <Button variant="link">Login</Button> */}
      {/* <div></div> */}
    </form>
  );
}
