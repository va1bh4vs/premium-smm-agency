import { motion } from "framer-motion";
import config from "../data/config.json";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block">{config.site.tagline}</span>
          </motion.h1>
          <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}} className="mt-6 text-muted text-lg md:text-xl text-[#cfcde0]">
            {config.site.description}
          </motion.p>

          <div className="mt-8 flex gap-4">
            <Link href="/contact"><a className="px-5 py-3 bg-brand rounded-md font-semibold">Book a Free Consultation</a></Link>
            <Link href="/portfolio"><a className="px-5 py-3 border border-white/10 rounded-md">Explore Our Work</a></Link>
          </div>

          <div className="mt-8 flex gap-6">
            <div className="glass p-4 rounded-md">
              <div className="text-2xl font-bold">+125</div>
              <div className="text-sm text-[#bfb7d9]">Campaigns Delivered</div>
            </div>
            <div className="glass p-4 rounded-md">
              <div className="text-2xl font-bold">+8M</div>
              <div className="text-sm text-[#bfb7d9]">Impressions (demo)</div>
            </div>
            <div className="glass p-4 rounded-md">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-[#bfb7d9]">On-time Delivery</div>
            </div>
          </div>
        </div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="flex justify-center">
          {/* Animated showcase of posts — simplified demo */}
          <div className="grid grid-cols-2 gap-4">
            <div className="post-mock glass flex items-end p-3" role="img" aria-label="Instagram post mock">
              <div className="text-sm">
                <div className="font-semibold">Menu Spotlight</div>
                <div className="text-xs text-[#bfb7d9]">Reel • 45k views</div>
              </div>
            </div>
            <div className="post-mock glass flex items-end p-3">
              <div className="text-sm">
                <div className="font-semibold">Launch Teaser</div>
                <div className="text-xs text-[#bfb7d9]">Carousel • 12 posts</div>
              </div>
            </div>
            <div className="post-mock glass flex items-end p-3">
              <div className="text-sm">
                <div className="font-semibold">Creator Collab</div>
                <div className="text-xs text-[#bfb7d9]">IG Live • 1.2k</div>
              </div>
            </div>
            <div className="post-mock glass flex items-end p-3">
              <div className="text-sm">
                <div className="font-semibold">Analytic Snapshot</div>
                <div className="text-xs text-[#bfb7d9]">Engagement +38%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
