import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/button";

export default function SubmitBtn() {
  const pending = false;

  return (
    <Button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:dark:bg-cmaccent  hover:bg-cmaccent/80 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </Button>
  );
}
