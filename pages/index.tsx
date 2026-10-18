import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-[#bfb7d9] mt-2">Let's talk about your goals. Fill the form and we’ll get back within one business day.</p>
            <div className="mt-6 glass p-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 md:px-12 text-sm text-[#bfb7d9]">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div>© {new Date().getFullYear()} Velvet Social — Demo site</div>
          <div>Made with care • <a href="/admin" className="underline">Admin</a></div>
        </div>
      </footer>
    </div>
  );
}
