"use client";
import { useState } from "react";

export default function Button() {
  const [showContent, setShowContent] = useState(0);
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Live Region Example</h1>
      <button onClick={() => setShowContent(showContent + 1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring ring-blue-600 ring-offset-2 outline-none inline-block">
        Show More Content
      </button>
      <section aria-live="polite" aria-atomic="false">
        <div className={showContent > 0 ? "text-sm text-black my-6 p-3 rounded-md border-2 border-slate-400" : ""}>
        {showContent > 0 && <p>The world’s emissions-cutting pledges are nowhere near enough to curb the effects of climate change, with Earth on track for warming a potentially catastrophic 2.9C (5.2F) this century, the United Nations has warned.</p>}
        {showContent > 1 && <p>The UN Environment Programme (UNEP)’s annual Emissions Gap report, published on Monday, assesses countries’ promises to tackle climate change against the action needed.</p>}
        {showContent > 2 && <p>The report found the world faces between 2.5C (4.5F) and 2.9C (5.2F) of warming above preindustrial levels on current commitments if governments do not take more aggressive climate action.</p>}
        {showContent > 3 && <p>At that level of warming, scientists predict the world could pass several catastrophic points of no return, from the runaway melting of ice sheets to the Amazon rainforest drying out, and leave vast swathes of the planet essentially uninhabitable for humans.</p>}
        {showContent > 4 && <p>“Leaders can’t kick the can any further. We’re out of road,” he said, condemning a “failure of leadership, a betrayal of the vulnerable, and a massive missed opportunity”.</p>}
        </div>
      </section>
    </div>
  );
}
