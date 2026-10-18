import config from "../data/config.json";
import { useState } from "react";

export default function Portfolio() {
  const items = config.portfolio;
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(items.map((i:any)=>i.category)))];

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Portfolio & Case Studies</h2>
        <p className="text-[#bfb7d9] mt-2">Demo projects — replace with your real portfolio when ready.</p>

        <div className="mt-4 flex gap-3">
          {categories.map(c => <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded ${filter===c ? 'bg-brand' : 'bg-white/4'}`}>{c}</button>)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {items.filter((it:any)=> filter==='All' || it.category===filter).map((it:any)=>(
            <div key={it.id} className="glass p-4">
              <div className="h-44 bg-[#0b0710] rounded overflow-hidden flex items-end p-3" style={{backgroundImage:`url(${it.image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-xs text-[#bfb7d9]">{it.summary}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-[#cfcde0]">{it.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
