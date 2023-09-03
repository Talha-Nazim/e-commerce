"use client";
import React, { useContext } from "react";
import Section from './Section'
import { SectionContext } from "./page";

const Header = () => {
    const state = useContext(SectionContext);
  return (
    <div className="bg-green-400 p-5">
      Header<div className="bg-red-400">section- Header {state}</div>
      <Section />
      
      
      
    </div>
  );
};

export default Header;