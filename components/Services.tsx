import config from "../data/config.json";
import { Icon, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: any = {
  users: "users",
  instagram: "instagram",
  layout: "layout",
  image: "image",
  video: "video",
  camera: "camera",
  megaphone: "megaphone",
  mail: "mail",
  "message-circle": "message-circle",
  "dollar-sign": "dollar-sign",
  target: "target",
  "bar-chart": "bar-chart",
  user: "user",
  hexagon: "hexagon"
};

export default function Services() {
  const services = config.services;
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-[#bfb7d9] mt-2">Comprehensive offerings to grow your brand, creators and restaurants online.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {services.map((s: any) => (
            <motion.div key={s.id} whileHover={{ y: -6 }} className="glass p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-brand/10 flex items-center justify-center">
                  {/* simple icon placeholder */}
                  <div className="text-brand font-semibold">{s.title.split(" ").slice(0,1)[0][0]}</div>
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-[#cfcde0] mt-1">{s.desc}</p>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-1 text-[#bfb7d9]">
                <li>• Benefit-driven planning</li>
                <li>• Brand-focused creative</li>
                <li>• Performance tracking</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact"><a className="text-sm inline-block px-4 py-2 bg-white/6 rounded">Enquire</a></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
