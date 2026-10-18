import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', whatsapp: '', website: '', services: '', budget: '', message: '', hp: ''
  });
  const [status, setStatus] = useState<{type?: string,msg?: string}>({});

  async function submit(e:any) {
    e.preventDefault();
    setStatus({});
    // honeypot spam field
    if (form.hp) {
      setStatus({type:'error', msg:'Spam detected.'});
      return;
    }

    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    const j = await res.json();
    if (res.ok) {
      setStatus({type:'success', msg:'Thanks! We received your enquiry.'});
      setForm({name:'', company:'', email:'', whatsapp:'', website:'', services:'', budget:'', message:'', hp:''});
    } else {
      setStatus({type:'error', msg:j.error || 'Submission failed'});
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input required placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder="Company / Brand" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input required placeholder="Email address" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder="WhatsApp number" value={form.whatsapp} onChange={(e)=>setForm({...form, whatsapp:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder="Website or social profile" value={form.website} onChange={(e)=>setForm({...form, website:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder="Services required" value={form.services} onChange={(e)=>setForm({...form, services:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder="Monthly marketing budget (INR)" value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} className="p-3 rounded bg-[#09060b] border border-white/6" />
      <input placeholder=" " value={form.hp} onChange={(e)=>setForm({...form, hp:e.target.value})} className="hidden" aria-hidden="true" />
      <textarea required placeholder="Project description" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="p-3 rounded md:col-span-2 bg-[#09060b] border border-white/6" />
      <div className="md:col-span-2 flex items-center gap-3">
        <button type="submit" className="px-4 py-2 bg-brand rounded">Send Enquiry</button>
        <a className="px-4 py-2 border rounded" href="mailto:hello@example.com">Email</a>
        <a href="https://wa.me/919876543210" className="px-4 py-2 border rounded">WhatsApp</a>
      </div>

      {status.msg && <div className={`md:col-span-2 mt-2 ${status.type==='error'?'text-red-400':'text-green-400'}`}>{status.msg}</div>}
    </form>
  );
}
