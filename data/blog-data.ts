export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  image: string;
  homeImage?: string;
  date: string;
  category: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Who Is Responsible for Water Damage in a Florida Condo?",
    slug: "water-damage-florida-condo",
    description:
      "Water moves fast inside shared walls, which is why the question of who is liable for water damage in a Florida condo becomes incredibly important.",
    image: "/images/blogs/blog1.webp",
    homeImage: "/images/home/blogs/blog1.png",
    date: "May 15, 2026",
    category: "Water Damage",
    sections: [
      {
        heading: "Who Is Responsible for Water Damage in a Florida Condo? Tips for Protecting Your Property",
        paragraphs: [
          "Water moves fast inside shared walls, which is why the question of who is responsible for water damage in a Florida condo becomes urgent as soon as a ceiling spot appears. Liability can shift depending on the source of the leak, the condition of the building, and the language inside the insurance policies.",
          "Condo claims often involve several parties at once, including owners, associations, neighbors, contractors, and insurance carriers. Clear documentation and early legal guidance can help protect your claim before confusion turns into a denial.",
        ],
      },
      {
        heading: "Common Water Damage Scenarios",
        bullets: [
          "A pipe bursts inside one unit and damages walls, flooring, or personal property.",
          "A roof, common pipe, or shared building system fails and sends water into multiple units.",
          "A neighbor's appliance, sink, or plumbing fixture causes damage to your unit.",
          "Storm-driven rain or flooding creates overlapping policy questions.",
        ],
      },
      {
        heading: "What Challenges You Might Face",
        bullets: [
          "Insurance companies may dispute where the water started.",
          "The association and unit owner policies may point at each other.",
          "Delayed reporting can weaken evidence and slow payment.",
          "Hidden moisture can create mold, structural damage, and larger repair costs.",
        ],
      },
    ],
  },
  {
    title: "How Much Does a Lawyer Cost for a Water Damage Insurance Claim?",
    slug: "water-damage-lawyer-cost",
    description:
      "The question of how much a lawyer costs for a water damage insurance claim in Florida deserves a direct answer.",
    image: "/images/blogs/blog2.webp",
    homeImage: "/images/home/blogs/blog2.png",
    date: "May 15, 2026",
    category: "Insurance Claims",
    sections: [
      {
        heading: "How Much Does a Lawyer Cost for a Water Damage Insurance Claim?",
        paragraphs: [
          "Many property owners hesitate to contact a lawyer because they worry about upfront costs. In many insurance claim matters, attorneys may work on a contingency fee basis, which means the fee is tied to the recovery instead of a large payment at the start.",
          "The right fee structure depends on the facts of the claim, the insurance policy, and whether the carrier has denied, delayed, or underpaid the loss.",
        ],
      },
      {
        heading: "When Legal Help May Be Worth It",
        bullets: [
          "Your insurance company denied the claim.",
          "The settlement offer does not cover real repair costs.",
          "The carrier is asking for repeated documents without moving the claim forward.",
          "There is mold, structural damage, or a dispute over the cause of the water loss.",
        ],
      },
      {
        heading: "Why Early Review Matters",
        paragraphs: [
          "A legal review can help you understand whether the policy language supports coverage, what evidence is missing, and how to respond before deadlines become a problem.",
        ],
      },
    ],
  },
  {
    title: "Can You Claim Wind Damage on Home Insurance in Florida?",
    slug: "wind-damage-home-insurance",
    description:
      "Florida's stormy wind does not knock. It sneaks through loose screens, rattles windows, and presses the air deeper into your home.",
    image: "/images/blogs/blog3.webp",
    homeImage: "/images/home/blogs/blog3.png",
    date: "May 15, 2026",
    category: "Wind Damage",
    sections: [
      {
        heading: "Can You Claim Wind Damage on Home Insurance in Florida?",
        paragraphs: [
          "Wind damage can look obvious from the outside, but insurance carriers often study the details closely. A missing shingle, lifted roof edge, broken window, or water stain may raise questions about whether wind, wear and tear, or another cause created the damage.",
          "Florida homeowners should document the damage quickly and review their policy before accepting a low estimate or denial.",
        ],
      },
      {
        heading: "Signs of Wind Damage",
        bullets: [
          "Lifted, missing, or creased shingles.",
          "Damaged soffit, fascia, gutters, fences, or screens.",
          "Interior staining after wind-driven rain.",
          "Broken windows, doors, or exterior openings caused by debris.",
        ],
      },
      {
        heading: "How to Protect Your Claim",
        bullets: [
          "Take photos and videos before temporary repairs begin.",
          "Save invoices, estimates, and communications with the carrier.",
          "Avoid signing broad releases before the full loss is understood.",
          "Get legal help if the claim is delayed, underpaid, or denied.",
        ],
      },
    ],
  },
  {
    title: "What To Do After a Property Damage Claim Is Denied",
    slug: "property-damage-claim-denied",
    description:
      "A denial letter does not always mean the claim is over. The next steps can decide whether your recovery stays alive.",
    image: "/images/blogs/blog4.webp",
    date: "May 15, 2026",
    category: "Denied Claims",
    sections: [
      {
        heading: "What To Do After a Property Damage Claim Is Denied",
        paragraphs: [
          "A denied claim can feel final, but many denials depend on the carrier's interpretation of the facts and policy language. Before walking away, review the denial letter carefully and compare it to your evidence.",
        ],
      },
      {
        heading: "Important Next Steps",
        bullets: [
          "Request the specific policy language used to deny coverage.",
          "Collect photos, estimates, receipts, and expert reports.",
          "Avoid missing appeal or lawsuit deadlines.",
          "Speak with an attorney before accepting the denial as final.",
        ],
      },
    ],
  },
  {
    title: "How To Document Roof Damage After a Storm",
    slug: "document-roof-damage-after-storm",
    description:
      "Good documentation can make the difference between a fair roof claim and a frustrating underpayment.",
    image: "/images/blogs/blog5.webp",
    date: "May 15, 2026",
    category: "Roof Damage",
    sections: [
      {
        heading: "How To Document Roof Damage After a Storm",
        paragraphs: [
          "Roof damage is often disputed because the damage may not be visible from the ground. A careful record helps show what changed after the storm and why repairs are necessary.",
        ],
      },
      {
        heading: "What To Save",
        bullets: [
          "Date-stamped photos and videos.",
          "Temporary repair invoices.",
          "Contractor estimates and inspection notes.",
          "All letters and emails from the insurance company.",
        ],
      },
    ],
  },
  {
    title: "Why Fast Action Matters After Smoke or Fire Damage",
    slug: "fast-action-smoke-fire-damage",
    description:
      "Smoke and fire losses can spread beyond what is visible, especially when odor, soot, and hidden residue remain.",
    image: "/images/blogs/blog6.webp",
    date: "May 15, 2026",
    category: "Fire Damage",
    sections: [
      {
        heading: "Why Fast Action Matters After Smoke or Fire Damage",
        paragraphs: [
          "Fire damage can leave a property unsafe, and smoke can settle into walls, vents, furniture, and belongings. A claim should account for cleanup, repairs, replacement, and temporary living or business interruption costs when covered.",
        ],
      },
      {
        heading: "Common Claim Problems",
        bullets: [
          "The carrier undervalues smoke remediation.",
          "The estimate leaves out hidden damage.",
          "The cause of the fire is disputed.",
          "Payment delays keep repairs from moving forward.",
        ],
      },
    ],
  },
];
