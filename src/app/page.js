'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AutoFocusInput from "./autoFocusInput";
import CounterRef from "./counterRef";
import Timer from "./timer";
import RenderCounter from "./renderCounter";
import PreviousValue from "./previousValue";
import ColorSlider from "./colorSlider";
import TextEditor from "./textEditor";
import FormValidator from "./formValidator";

export default function Home() {
  return (
    <div>
      <AutoFocusInput/>
      <br/>
      <CounterRef/>
      <br/>
      <Timer/>
      <br/>
      <RenderCounter/>
      <br/>
      <PreviousValue/>
      <br/>
      <ColorSlider/>
      <br/>
      <TextEditor/>
      <br/>
      <FormValidator/>
    </div>
  );
}
