import React from "react";
import Head from 'next/head'
import About from "../components/About";

export default function about() {
  return (
    <>
      <Head>
      <title>Alan Ye - About Me</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <About />
    </>
  );
}