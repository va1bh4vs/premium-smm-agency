import config from "../data/config.json";

export default function Pricing() {
  const { pricing } = config;
  const pack = (title: string, data: any) => (
    <div className="glass p-6 rounded-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="text-3xl font-bold mt-2">{data.currency} {data.price.toLocaleString()}</div>
      <ul className="mt-4 space-y-2 text-sm text-[#bfb7d9]">
        {data.items.map((it: string, idx: number) => <li key={idx}>• {it}</li>)}
      </ul>
      <div className="mt-6 flex gap-3">
        <a href="/contact" className="px-4 py-2 bg-brand rounded">Get Custom Quote</a>
        <a href="/contact" className="px-4 py-2 border rounded">Contact Sales</a>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Pricing & Packages</h2>
        <p className="text-[#bfb7d9] mt-2">Transparent packages for small businesses, growth brands and enterprise-level campaigns.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {pack("Starter Package", pricing.starter)}
          {pack("Growth Package", pricing.growth)}
          {pack("Premium Package", pricing.premium)}
        </div>

        <div className="text-sm text-[#bfb7d9] mt-4">{pricing.note}</div>
      </div>
    </section>
  );
}
