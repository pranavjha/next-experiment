import {Suspense, use} from "react";

export default function DynamicSubFragment({value}: {value: Promise<string>}) {
  console.log("DynamicSubFragment rendered");
  const val = use(value) as string;

  return (
    <div className="container">
        <Suspense fallback={<div>Loading response...</div>}>
            <code>{val}</code>
        </Suspense>
    </div>
  );
}