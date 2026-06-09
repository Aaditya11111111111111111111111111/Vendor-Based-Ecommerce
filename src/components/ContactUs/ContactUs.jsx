import { useState } from "react";
import { FiSend } from "react-icons/fi";
import heroBg from "../../assets/images/banners/hero.png";

const label = "block text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 transition-colors " +
  "text-white/60 lg:text-gray-400 group-focus-within:text-pink-400";

const input = "w-full border-0 border-b-2 outline-none px-0 py-2.5 text-sm transition-colors duration-200 " +
  "bg-transparent border-white/30 text-white placeholder-white/30 " +
  "lg:border-gray-200 lg:text-gray-800 lg:placeholder-gray-300 " +
  "focus:border-pink-400";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden py-10"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      {/* Mobile bg image */}
      <div className="lg:hidden absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2
                      lg:shadow-xl lg:overflow-hidden mx-4 sm:mx-8 lg:mx-0">

        {/* Left — desktop image */}
        <div className="relative hidden lg:block">
          <img src={heroBg} alt="Contact" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-10 pb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-pink-400 block" />
              <span className="text-pink-400 text-[10px] font-semibold uppercase tracking-[0.3em]">StyleHub</span>
            </div>
            <h2 className="text-white font-bold leading-tight text-3xl xl:text-4xl"
                style={{ fontFamily: "Georgia, serif" }}>
              We'd love to<br />
              <span className="text-pink-400 italic font-light">hear from you.</span>
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Reach out for collaborations, vendor inquiries, or just a good conversation about fashion.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-transparent lg:bg-white px-8 sm:px-10 py-10 flex flex-col justify-center">

          <div className="mb-8">
            <p className="text-pink-400 text-[10px] uppercase tracking-[0.35em] font-semibold mb-2">
              Drop us a line
            </p>
            <h3 className="text-white lg:text-gray-900 font-bold leading-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Let's Start a<br />
              <span className="italic font-light text-pink-400">Conversation.</span>
            </h3>
            <div className="mt-3 w-8 h-0.5 bg-pink-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group">
                <label className={label}>Full Name</label>
                <input type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your name" required className={input} />
              </div>
              <div className="group">
                <label className={label}>Email Address</label>
                <input type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com" required className={input} />
              </div>
            </div>

            <div className="group">
              <label className={label}>Subject</label>
              <input type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="What's this about?" required className={input} />
            </div>

            <div className="group">
              <label className={label}>Your Message</label>
              <textarea name="message" value={form.message}
                onChange={handleChange} placeholder="Tell us what's on your mind..."
                required rows={4} className={`${input} resize-none`} />
            </div>

            <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
              <p className="text-white/40 lg:text-gray-300 text-[10px] uppercase tracking-wider">
                We reply within 24 hrs
              </p>
              <button type="submit"
                className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700
                           text-white font-semibold text-xs uppercase tracking-wider
                           px-8 py-3.5 transition-all duration-200 shadow-md shadow-pink-900/30">
                {sent ? "Sent ✓" : "Send Message"}
                {!sent && <FiSend size={12} />}
              </button>
            </div>

            {sent && (
              <p className="text-pink-400 text-sm font-medium italic" style={{ fontFamily: "Georgia, serif" }}>
                Thank you — we'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
