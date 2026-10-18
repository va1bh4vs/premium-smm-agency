import { useEffect, useState } from "react";
import Header from "../../components/Header";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  company?: string;
};

export default function Admin() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    async function load() {
      setLoading(true);
      const res = await fetch('/api/enquiries');
      const j = await res.json();
      setEnquiries(j);
      setLoading(false);
    }
    load();
  }, []);

  async function remove(id:string) {
    // In this demo storage is local file — no delete API implemented. This is a placeholder to show admin actions.
    if (!confirm('Delete this enquiry (demo)?')) return;
    // Ideally call DELETE /api/enquiries/:id
    alert('Delete in demo: remove entry from data/enquiries.json or implement a DELETE API.');
  }

  return (
    <div>
      <Header />
      <main className="p-6 md:p-12">
        <h1 className="text-2xl font-bold">Admin — Enquiries (demo)</h1>
        <p className="text-[#bfb7d9] mt-2">This admin is a lightweight demo. Protect with environment secrets and use a DB in production.</p>

        <div className="mt-6">
          {loading ? <div>Loading…</div> : (
            <div className="space-y-4">
              {enquiries.length === 0 && <div className="text-[#bfb7d9]">No enquiries yet (demo).</div>}
              {enquiries.map(e => (
                <div key={e.id} className="glass p-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">{e.name} <span className="text-sm text-[#bfb7d9]">• {e.company}</span></div>
                      <div className="text-sm text-[#bfb7d9]">{e.email} • {new Date(e.createdAt).toLocaleString()}</div>
                      <div className="mt-2 text-sm">{e.message}</div>
                    </div>
                    <div>
                      <button className="px-3 py-2 border" onClick={()=>remove(e.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
