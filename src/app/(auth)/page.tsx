"use client";

import { Icons } from "@/components/ui/icons";
import React from "react";

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

  const styles = {
    card: "aspect-square border shadow rounded-lg p-4 flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-gray-50 active:scale-95 transition-all",
    icon: "w-5 h-5"
  }

  return (
    // <div>
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <h4>
        Continue with
      </h4>
      <div className="flex gap-2">
        <div className={`${styles.card} px-5`}>
          <Icons.apple className={styles.icon} />
          <p>Apple</p>
        </div>
        <div className={styles.card}>
          <Icons.google className={styles.icon} />
          <p>Google</p>
        </div>
        <div className={styles.card}>
          <Icons.gitHub className={styles.icon} />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}




{/* <Button
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
        Continue with Google
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
        Continue with Github
      </Button> */}
