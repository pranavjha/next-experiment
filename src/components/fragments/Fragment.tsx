"use client";

import { use, useState } from 'react';
import DynamicSubFragment from './DynamicSubFragment';
async function fetchEcho(v:string) {
  console.log('fetching....');
    const resp = await fetch(`https://echo.zuplo.io/?a=${v}`);
    return await resp.text();
}

export default function Fragment({value}:{value: Promise<string>}) {
console.log("Fragment rendered");
  const val = use(value);
  const [echoResp, setEcho] = useState(Promise.resolve('hello'));
  return (
    <div className="container">
      <h2> Fragment </h2>
      <code>{val}</code>
      <button onClick={() => setEcho(fetchEcho(val))}>Refetch</button>
      <DynamicSubFragment value={echoResp} />
    </div>
  );
}