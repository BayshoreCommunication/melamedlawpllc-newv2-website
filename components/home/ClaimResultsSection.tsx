// "use client";

// import CountUp from "react-countup";
// import { Building2, Wind, Shield, MapPin } from "lucide-react";

// import Container from "components/shared/Container";
// import FloatingStats from "./FloatingStats";

// const claimCards = [
//   {
//     icon: Building2,
//     amount: 4250000,
//     subtitle: "Hurricane Damage",
//   },
//   {
//     icon: Wind,
//     amount: 4250000,
//     subtitle: "Hurricane Damage",
//   },
//   {
//     icon: Building2,
//     amount: 4250000,
//     subtitle: "Hurricane Damage",
//   },
//   {
//     icon: Shield,
//     amount: 4250000,
//     subtitle: "Hurricane Damage",
//   },
// ];

// export default function ClaimResultsSection() {
//   return (
//     <section className="relative overflow-visible bg-[#031735] pb-10 pt-16 sm:pb-12 lg:pb-44 lg:pt-24">
//       <Container>
//         {/* HEADING */}
//         <div className="mx-auto max-w-[1100px] text-center">
//           <h2 className="text-5xl font-bold leading-[1.16] tracking-normal text-white lg:text-6xl xl:text-7xl">
//             Your Insurance Company Frequently Delays, Denies, or Underpays Valid
//             Claims
//           </h2>
//         </div>

//         {/* CARDS */}
//         <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {claimCards.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="group rounded-[18px] border border-white/10 bg-[#071E44] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-[#031735]">
//                   <Icon size={34} />
//                 </div>

//                 <h3 className="mt-7 text-4xl font-bold text-primary">
//                   <CountUp
//                     end={4250000}
//                     duration={2.4}
//                     separator=","
//                     prefix="$"
//                     enableScrollSpy
//                     scrollSpyOnce
//                   />
//                 </h3>

//                 <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-white">
//                   Hurricane Damage
//                 </p>

//                 <p className="mt-5 text-sm leading-7 text-white/60">
//                   Maximum policy recovery secured for a homeowner after the
//                   insurance company wrongfully delayed and denied coverage.
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </Container>

//       {/* FLOATING COMPONENT */}
//       <div className="relative mt-8 w-full lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:translate-y-1/2">
//         <FloatingStats />
//       </div>
//     </section>
//   );
// }
"use client";

import {
  House,
  Wind,
  Home,
  CloudLightning,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Container from "components/shared/Container";
import FloatingStats from "./FloatingStats";
import Link from "next/link";

const claimCards = [
  {
    icon: House,
    title: "Hurricane Damage",
    link: "/practice-areas/hurricane-damage",
    subtitle:
      "Was your home damaged by a hurricane, flood, or severe storm? We help homeowners recover the compensation they deserve.",
  },
  {
    icon: Wind,
    title: "Windstorm Damage",
    link: "/practice-areas/windstorm-damage",
    subtitle:
      "Strong winds can cause significant structural and property damage. We fight denied or underpaid windstorm claims.",
  },
  {
    icon: Home,
    title: "Roof Damage",
    link: "/practice-areas/roof-damage",
    subtitle:
      "From missing shingles to major roof failures, we help property owners secure fair insurance settlements.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    link: "/practice-areas/storm-damage",
    subtitle:
      "Whether caused by hail, heavy rain, or severe storms, our team works to maximize your insurance recovery.",
  },
];

export default function ClaimResultsSection() {
  return (
    <section className="relative overflow-visible bg-[#031735] pb-10 pt-16 sm:pb-12 lg:pb-44 lg:pt-24">
      <Container>
        {/* HEADING */}

        {/* HEADING */}
        <div className="mx-auto max-w-[1300px] text-center">
          <h2 className="text-5xl font-bold leading-[1.16] tracking-normal text-white lg:text-6xl xl:text-7xl">
            Your Insurance Company Frequently Delays, Denies, or Underpays Valid
            Claims
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {claimCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[18px] border border-white/10 bg-[#071E44] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-[#031735]">
                  <Icon size={34} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-white/65">
                  {item.subtitle}
                </p>

                <Link
                  href={item.link}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary transition-all duration-300 hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>

      {/* FLOATING COMPONENT */}
      <div className="relative mt-8 w-full lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:translate-y-1/2">
        <FloatingStats />
      </div>
    </section>
  );
}
