
import Fragment from "@/components/fragments/Fragment";
import { Suspense } from "react";
export default async function SlowPage({params}:{params: Promise<{frags: number}>}) {
    const {frags} = await params;
    const fragDefers:Array<Promise<string>> = [];
    for(let i = 0; i < frags; i++) {
        fragDefers.push(new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Fragment content for fragment ${i}`);
            }, i*1000);
        }));
    }
    
    return (
        <div className="container">
            <h2> Slow fragmented render </h2>
            <code>This should render immediately</code>
            {fragDefers.map((defer, i) => {
                return <Suspense fallback={<div>Loading... {i}</div>} key={i}>
                    <Fragment value={defer} />
                </Suspense>;
            })}
            
        </div>
    );
}