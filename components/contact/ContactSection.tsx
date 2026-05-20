"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ShieldAlert,
  Send,
  User,
  ChevronDown,
} from "lucide-react";

import Container from "components/shared/Container";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      alert("Message sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FFFFF] py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
          {/* LEFT SIDE */}
          <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-10">
            {/* TITLE */}
            <h2 className="text-4xl font-bold text-black md:text-5xl">
              Contact Information
            </h2>

            {/* LINE */}
            <div className="mt-5 h-[3px] w-24 rounded-full bg-primary" />

            {/* ITEMS */}
            <div className="mt-10 space-y-8">
              {/* ITEM */}
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40">
                  <MapPin size={28} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black">Our Office</h4>

                  <p className="mt-2 text-base leading-7 text-[#666]">
                    3040 NE 190th St APT 303,
                    <br />
                    Aventura, FL 33180, United States
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40">
                  <Phone size={28} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black">Phone</h4>

                  <a
                    href="tel:+19545290695"
                    className="mt-2 inline-block text-base text-[#666] transition-colors duration-300 hover:text-primary"
                  >
                    954-529-0695
                  </a>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40">
                  <Mail size={28} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black">Email</h4>

                  <a
                    href="mailto:info@melamedlawpllc.com"
                    className="mt-2 inline-block text-base text-[#666] transition-colors duration-300 hover:text-primary"
                  >
                    info@melamedlawpllc.com
                  </a>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40">
                  <Clock3 size={28} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black">
                    Business Hours
                  </h4>

                  <p className="mt-2 text-base text-[#666]">
                    Monday - Friday:
                    <br />
                    8:30AM - 5:30PM
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40">
                  <ShieldAlert size={28} className="text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black">
                    Emergency Claims Assistance
                  </h4>

                  <p className="mt-2 text-base leading-7 text-[#666]">
                    <a
                      href="tel:+19545290695"
                      className="font-semibold text-primary"
                    >
                      (954-529-0695)
                    </a>{" "}
                    We answer calls & texts 24/7.
                  </p>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <p className="mt-12 text-base leading-8 text-[#666]">
              Professionally handling Property Damage Claims, we’re committed to
              protecting both your Property and your Peace of Mind in times of
              need.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-10">
            {/* TITLE */}
            <h2 className="text-4xl font-bold text-black md:text-5xl">
              Request a Free Consultation
            </h2>

            {/* LINE */}
            <div className="mt-5 h-[3px] w-24 rounded-full bg-primary" />

            {/* TEXT */}
            <p className="mt-6 max-w-[700px] text-base leading-8 text-[#666]">
              Professionally handling Property Damage Claims, we’re committed to
              protecting both your Property and your Peace of Mind in times of
              need.
            </p>

            {/* FORM */}
            <form ref={formRef} onSubmit={handleSubmit} className="mt-10">
              {/* ROW */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* NAME */}
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Name"
                    className="h-14 w-full rounded-[12px] border border-black/10 bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter Number"
                    className="h-14 w-full rounded-[12px] border border-black/10 bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="relative mt-5">
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  className="h-14 w-full rounded-[12px] border border-black/10 bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 focus:border-primary"
                />
              </div>

              {/* SELECT */}
              <div className="relative mt-5">
                <select
                  name="claim_type"
                  required
                  className="h-14 w-full appearance-none rounded-[12px] border border-black/10 bg-[#F8F4EE] px-5 text-base outline-none transition-all duration-300 focus:border-primary"
                >
                  <option value="">Claim Type</option>

                  <option value="Hurricane Damage">Hurricane Damage</option>

                  <option value="Fire Damage">Fire Damage</option>

                  <option value="Water Damage">Water Damage</option>

                  <option value="Roof Damage">Roof Damage</option>
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-5">
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your case..."
                  className="w-full rounded-[12px] border border-black/10 bg-[#F8F4EE] p-5 text-base outline-none transition-all duration-300 focus:border-primary"
                />
              </div>

              {/* TEXT */}
              <p className="mt-5 text-sm text-[#777]">
                🔒 Your information is secure and will never be shared.
              </p>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-[12px] bg-primary px-8 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.01]"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                {loading ? "Sending..." : "Submit Your Case Review"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
