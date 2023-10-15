import MenuTab from "@/components/home/MenuTab";
import React from "react";

function Test() {
  const list = [
    {
      id: "0",
      label: "랜덤뽑기",
    },
    { id: "1", label: "추천받기" },
  ];
  const onClick = (e: any) => {
    console.log(e.target.id);
  };
  return <MenuTab list={list} onClick={onClick} />;
}

export default Test;
