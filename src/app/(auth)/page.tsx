"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@radix-ui/react-context-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
import {} from "recharts";

export default function AuthPage() {
  const [shwPsswd, setshwPsswd] = React.useState(false);
  const togglePsswd = () => setshwPsswd(!shwPsswd);

  const [isLoading, setIsLoading] = React.useState(false);
  function login() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
        Continue with
      </h2>
      <div className="flex gap-4">
        <RadioGroup defaultValue="comfortable">
          {/* <div className="flex items-center space-x-2"> */}
          <RadioGroupItem value="default" id="r1" />
          {/* <Label htmlFor="r1">Default</Label> */}
          {/* </div> */}
          {/* <div className="flex items-center space-x-2"> */}
          <RadioGroupItem value="comfortable" id="r2" />
          {/* <Label htmlFor="r2">Comfortable</Label> */}
          {/* </div> */}
          {/* <div className="flex items-center space-x-2"> */}
          <RadioGroupItem value="compact" id="r3" />
          {/* <Label htmlFor="r3">Compact</Label> */}
          {/* </div> */}
        </RadioGroup>
        <Button
          variant="ghost"
          size="icon"
          disabled={isLoading}
          onClick={login}
        >
          {isLoading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="h-4 w-4" />
          )}
          {/* Continue with Google */}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          disabled={isLoading}
          onClick={login}
        >
          {isLoading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="h-4 w-4" />
          )}
          {/* Continue with Github */}
        </Button>
      </div>
    </div>
  );
}
