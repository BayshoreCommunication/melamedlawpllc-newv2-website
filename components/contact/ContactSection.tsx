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
  CheckCircle2,
  XCircle,
  X,
} from "lucide-react";

import Container from "components/shared/Container";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    claim_type: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "success" | "error" | null;
    message: string;
  }>({
    isOpen: false,
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formValues.claim_type)
      newErrors.claim_type = "Please select a claim type";
    if (!formValues.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_wj7yeey",
        "template_u74l3rr",
        formRef.current,
        "2kczyCyop9k9pMsa-",
      );

      // Show Success Modal
      setModal({
        isOpen: true,
        type: "success",
        message:
          "Your case review request has been sent successfully! We will get back to you shortly.",
      });

      // Reset values
      setFormValues({
        name: "",
        phone: "",
        email: "",
        claim_type: "",
        message: "",
      });

      // Auto-close modal after 5 seconds
      setTimeout(() => {
        setModal((prev) => ({ ...prev, isOpen: false }));
      }, 5000);
    } catch (error) {
      console.error(error);

      // Show Failure Modal
      setModal({
        isOpen: true,
        type: "error",
        message:
          "Something went wrong while sending your request. Please try again later.",
      });

      // Auto-close modal after 5 seconds
      setTimeout(() => {
        setModal((prev) => ({ ...prev, isOpen: false }));
      }, 5000);
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
            <h2 className="text-3xl font-bold text-black md:text-5xl">
              Contact Information
            </h2>

            {/* LINE */}
            <div className="mt-5 h-[3px] w-24 rounded-full bg-primary" />

            {/* ITEMS */}
            <div className="mt-10 space-y-8">
              {/* ITEM */}
              <div className="group flex gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,166,78,0.25)]">
                  <MapPin size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
                    Our Office
                  </h4>

                  <p className="mt-2 text-base leading-7 text-[#666]">
                    3040 NE 190th St APT 303,
                    <br />
                    Aventura, FL 33180, United States
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="group flex gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,166,78,0.25)]">
                  <Phone size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
                    Phone
                  </h4>

                  <a
                    href="tel:+19545290695"
                    className="mt-2 inline-block text-base text-[#666] transition-colors duration-300 hover:text-primary"
                  >
                    954-529-0695
                  </a>
                </div>
              </div>

              {/* ITEM */}
              <div className="group flex gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,166,78,0.25)]">
                  <Mail size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
                    Email
                  </h4>

                  <a
                    href="mailto:info@melamedlawpllc.com"
                    className="mt-2 inline-block text-base text-[#666] transition-colors duration-300 hover:text-primary"
                  >
                    info@melamedlawpllc.com
                  </a>
                </div>
              </div>

              {/* ITEM */}
              <div className="group flex gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,166,78,0.25)]">
                  <Clock3 size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
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
              <div className="group flex gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,166,78,0.25)]">
                  <ShieldAlert size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
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
            <h2 className="text-3xl font-bold text-black md:text-5xl">
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="mt-10"
            >
              {/* ROW */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* NAME */}
                <div>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      className={`h-14 w-full rounded-[12px] border bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-black/10 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <span className="mt-1.5 block text-xs text-red-500 font-semibold pl-2">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="Enter Number"
                      className={`h-14 w-full rounded-[12px] border bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-black/10 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="mt-1.5 block text-xs text-red-500 font-semibold pl-2">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* EMAIL */}
              <div className="mt-5">
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className={`h-14 w-full rounded-[12px] border bg-[#F8F4EE] pl-14 pr-5 text-base outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-black/10 focus:border-primary"
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className="mt-1.5 block text-xs text-red-500 font-semibold pl-2">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* SELECT */}
              <div className="mt-5">
                <div className="relative">
                  <select
                    name="claim_type"
                    value={formValues.claim_type}
                    onChange={handleChange}
                    className={`h-14 w-full appearance-none rounded-[12px] border bg-[#F8F4EE] px-5 text-base outline-none transition-all duration-300 ${
                      errors.claim_type
                        ? "border-red-500 focus:border-red-500"
                        : "border-black/10 focus:border-primary"
                    }`}
                  >
                    <option value="">Claim Type</option>
                    <option value="Hurricane Damage">Hurricane Damage</option>
                    <option value="Windstorm Damage">Windstorm Damage</option>
                    <option value="Roof Damage">Roof Damage</option>
                    <option value="Storm Damage">Storm Damage</option>
                    <option value="Water Damage">Water Damage</option>
                    <option value="Fire Damage">Fire Damage</option>
                    <option value="Mold Damage">Mold Damage</option>
                    <option value="Hail Damage">Hail Damage</option>
                    <option value="Plumbing Damage">Plumbing Damage</option>
                    <option value="Smoke Damage">Smoke Damage</option>
                    <option value="Bad Faith Claims">Bad Faith Claims</option>
                    <option value="Vandalism And Theft">
                      Vandalism And Theft
                    </option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
                  />
                </div>
                {errors.claim_type && (
                  <span className="mt-1.5 block text-xs text-red-500 font-semibold pl-2">
                    {errors.claim_type}
                  </span>
                )}
              </div>

              {/* MESSAGE */}
              <div className="mt-5">
                <textarea
                  name="message"
                  rows={6}
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Tell us about your case..."
                  className={`w-full rounded-[12px] border bg-[#F8F4EE] p-5 text-base outline-none transition-all duration-300 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-black/10 focus:border-primary"
                  }`}
                />
                {errors.message && (
                  <span className="mt-1.5 block text-xs text-red-500 font-semibold pl-2">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* TEXT */}
              <p className="mt-5 text-sm text-[#777]">
                🔒 Your information is secure and will never be shared.
              </p>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-8 inline-flex h-11 w-full items-center justify-center gap-3 rounded-[3px] bg-primary px-6 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_10px_26px_rgba(220,166,78,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7B862] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                {loading ? "Sending..." : "Submit Your Case Review"}
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* SUCCESS/FAILURE MODAL */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
          <style>{`
            @keyframes modalProgress {
              from { width: 100%; }
              to { width: 0%; }
            }
            .animate-modal-progress {
              animation: modalProgress 5000ms linear forwards;
            }
          `}</style>

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
          />

          {/* Modal Content Card */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-[24px] border border-black/5 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 scale-100 flex flex-col items-center text-center animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
              className="absolute right-4 top-4 text-black/40 hover:text-black transition-colors duration-300"
            >
              <X size={20} />
            </button>

            {/* Status Icon Wrapper */}
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full mb-6 ${
                modal.type === "success"
                  ? "bg-emerald-50 text-emerald-500 border border-emerald-100 shadow-[0_10px_30px_rgba(16,185,129,0.15)] animate-pulse"
                  : "bg-rose-50 text-rose-500 border border-rose-100 shadow-[0_10px_30px_rgba(244,63,94,0.15)]"
              }`}
            >
              {modal.type === "success" ? (
                <CheckCircle2 size={40} />
              ) : (
                <XCircle size={40} />
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-2">
              {modal.type === "success" ? "Thank You!" : "Submission Failed"}
            </h3>

            {/* Message */}
            <p className="text-[#666] text-sm leading-relaxed mb-6">
              {modal.message}
            </p>

            {/* Action Button */}
            <button
              onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
              className={`w-full py-3 rounded-[12px] text-sm font-bold tracking-wide uppercase transition duration-300 ${
                modal.type === "success"
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_4px_14px_rgba(16,185,129,0.3)]"
                  : "bg-rose-500 text-white hover:bg-rose-600 shadow-[0_4px_14px_rgba(244,63,94,0.3)]"
              }`}
            >
              Dismiss
            </button>

            {/* Progress Bar (5s Countdown indicator) */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/5">
              <div
                className={`h-full animate-modal-progress ${
                  modal.type === "success" ? "bg-emerald-500" : "bg-rose-500"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
