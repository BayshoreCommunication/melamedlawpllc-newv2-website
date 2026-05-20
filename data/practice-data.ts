export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  details_img: string;
  content: string;
};

export type PracticeArea = {
  title: string;
  services: Service[];
};

export const PRACTICE_DATA: Record<string, PracticeArea> = {
  "personal-injury": {
    title: "Hurricane Damage",
    services: [
      {
        title: "Hurricane Damage",
        slug: "hurricane-damage",
        description:
          "When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims.",
        image: "/images/practice-area/hurricane-damage.png",
        details_img: "/images/practice-area/hurricane-damage.png",
        content: `
Hurricanes can seriously impact properties across Florida, leaving homeowners, business owners, and tenants needing quick support. When wind, flood, or structural damage occurs, getting legal help ensures you receive fair compensation. However, Florida’s hurricane damage laws limit your time to file a claim—typically to just one year after the hurricane. This tight deadline makes it essential to act quickly and seek legal guidance to protect your rights and secure fair compensation.

Who Needs Legal Help After Hurricane Damage
Homeowners with unsettled insurance claims: If your insurance claim is denied, underpaid, or delayed, legal support can help you fight for a fair resolution.
Business owners facing severe losses: Hurricanes can cause massive damage to properties and disrupt business operations. Legal help can assist in securing the funds necessary to rebuild and recover.
Tenants displaced by damage: If you’re a tenant displaced due to hurricane damage, you might have the right to demand repairs or compensation under Florida tenant laws.
Property owners with complex damage: Structural, flood, and mold damage often require detailed assessment. Legal help ensures you’re fairly compensated for all types of damage.
What Challenges You Might Face
Insurance companies often deny or delay claims, which means you might wait longer for the funds needed to start your recovery. Handling these setbacks without legal guidance can make the process frustrating.
Insurance companies frequently offer settlements that don’t fully cover your repair costs. Without an attorney, negotiating a fair settlement to cover your expenses can be tough, and you might end up paying out of pocket.
Documenting extensive damage, such as structural issues or mold, requires careful organization and expert evidence. Gathering this evidence on your own can feel challenging, especially when it comes to proving the damage to insurance companies
With hurricane damage, you may need to file multiple claims for wind, flood, and mold damage. Handling these claims and understanding coverage gaps can be confusing without legal expertise, which may reduce the amount of compensation you receive.
Under Florida's laws, you have limited time to report hurricane-related damages. If you miss the deadline, you may lose your right to compensation. An attorney can help you stay on top of these deadlines, which is necessary for receiving recovery funds on time.
How Melamed Law Stands By Your Rights
We engage directly with insurance companies, addressing claim denials and delays. Our team pushes for timely processing and holds insurance companies accountable at every step, ensuring that Florida laws work to your advantage in securing protection.
We closely review each settlement offer, negotiating for fair compensation that covers essential repairs and recovery expenses.
Partnering with specialists, we develop thorough damage assessments. This strong evidence supports your claim, enhancing your chances of full compensation.
Our team manages all paperwork, tracks claim progress, and resolves any coverage gaps, ensuring you receive fair compensation.
We make sure to file all claims on time, safeguarding your right to compensation under Florida’s strict legal deadlines.
      `,
      },
      {
        title: "Windstorm Damage",
        slug: "windstorm-damage",
        description:
          "Is your claim being denied after a hurricane damaged your property? Obtain a free case review with us today!",
        image: "/images/practice-area/windstorm-damage.png",
        details_img: "/images/practice-area/windstorm-damage.png",
        content: `
Trucking and motorcycle accidents often result in severe or life-altering injuries due to the size and force involved in these collisions. Victims may suffer from spinal injuries, traumatic brain injuries, broken bones, or permanent disabilities. Motorcyclists are especially vulnerable and are frequently unfairly blamed for accidents they did not cause.

These cases often involve complex legal issues, including multiple liable parties such as trucking companies, drivers, manufacturers, and insurers. Our attorneys carefully investigate every aspect of the crash, including driver logs, vehicle maintenance records, and safety violations. We work diligently to build a strong case supported by expert testimony.

Our firm fights to recover compensation for medical expenses, rehabilitation, lost wages, and long-term care needs. We stand up to powerful insurance companies and corporations to protect your rights. Our commitment is to pursue justice and secure the compensation you deserve.
      `,
      },
      {
        title: "Roof Damage",
        slug: "roof-damage",
        description:
          "Did you have a recent storm leave wind damage to your property or home? Is your claim being denied?",
        image: "/images/practice-area/roof-damage.png",
        details_img: "/images/practice-area/roof-damage.png",
        content: `
Slip and fall accidents can occur in stores, apartment buildings, workplaces, or public areas due to unsafe conditions. Wet floors, uneven surfaces, poor lighting, or broken stairs can lead to serious injuries. Victims often experience fractures, head injuries, back pain, or long-term mobility issues.

Property owners have a legal responsibility to maintain safe premises for visitors. When they fail to address hazardous conditions, they may be held liable for resulting injuries. Our legal team investigates whether the property owner knew or should have known about the danger.

We gather evidence such as maintenance records, surveillance footage, and witness statements to support your claim. Our goal is to secure compensation for medical expenses, lost wages, and pain and suffering. We work diligently to hold negligent property owners accountable.
      `,
      },
      {
        title: "Storm Damage",
        slug: "storm-damage",
        description:
          "Did you have a recent storm leave wind damage to your property or home? Is your claim being denied?",
        image: "/images/practice-area/strom-damage.png",
        details_img: "/images/practice-area/strom-damage.png",
        content: `
Medical malpractice occurs when a healthcare provider fails to meet the accepted standard of care, causing harm to a patient. Common examples include misdiagnosis, surgical errors, medication mistakes, or delayed treatment. These errors can lead to serious injury, worsening conditions, or even wrongful death.

Medical malpractice cases are complex and require a detailed review of medical records and expert analysis. Our attorneys work closely with qualified medical professionals to identify negligence and establish liability. We carefully evaluate every aspect of your care to build a strong case.

Our firm seeks compensation for medical expenses, future treatment, lost income, and emotional suffering. We are committed to holding negligent providers accountable and protecting patient safety. Your trust in medical professionals should never result in preventable harm.
      `,
      },
      {
        title: "Water Damage",
        slug: "water-damage",
        description:
          "Was your home damaged by a flood? Do you have a pipe burst in your home during a freeze? Did the insurance",
        image: "/images/practice-area/water-damage.png",
        details_img: "/images/practice-area/water-damage.png",
        content: `
Nursing home negligence can place elderly and vulnerable residents at serious risk. Neglect may include poor hygiene, lack of medical attention, malnutrition, dehydration, or unsafe living conditions. In some cases, residents may also suffer physical or emotional abuse.

Families trust nursing facilities to provide safe and compassionate care for their loved ones. When that trust is violated, it can have devastating consequences. Our legal team investigates facility records, staff conduct, and compliance with state and federal regulations.

We work to hold negligent nursing homes accountable and seek compensation for medical treatment, pain, and emotional trauma. Our goal is to protect residents’ dignity and prevent future harm. We stand with families in their pursuit of justice.
      `,
      },
    ],
  },

  immigration: {
    title: "Immigration Services",
    services: [
      {
        title: "Fire Damage",
        slug: "fire-damage",
        description:
          "Did you have a recent storm leave wind damage to your property or home? Is your claim being denied?",
        image: "/images/practice-area/fire-damage.png",
        details_img: "/images/practice-area/fire-damage.png",
        content: `
U.S. citizenship is an important milestone that provides long-term security, voting rights, and full participation in civic life. Many lawful permanent residents are eligible to apply for naturalization but face challenges understanding eligibility requirements and documentation rules. Mistakes or omissions in the application process can lead to delays or denials.

Our firm carefully reviews your immigration history, residency requirements, and eligibility criteria before preparing your naturalization application. We assist with Form N-400 preparation, document collection, and submission to USCIS. Clients also receive guidance on English and civics requirements.

We prepare applicants for the citizenship interview and test, ensuring confidence and readiness. If issues arise, we respond promptly and effectively. Our goal is to guide you smoothly toward becoming a U.S. citizen.
      `,
      },
      {
        title: "Mold Damage",
        slug: "mold-damage",
        description:
          "Is your claim being denied after an hurricane damaged your property? Obtain a free case review with us today!",
        image: "/images/practice-area/mold-damage.png",
        details_img: "/images/practice-area/mold-damage.png",
        content: `
Marriage-based immigration allows U.S. citizens and lawful permanent residents to sponsor their spouses for a green card. These cases require strong evidence to prove the marriage is bona fide and not entered into for immigration purposes. Even genuine couples may face intense scrutiny.

Our firm assists clients with adjustment of status or consular processing depending on their circumstances. We prepare all required forms, supporting documents, and affidavits to establish a valid marital relationship. Interview preparation is a key part of our service.

If USCIS raises concerns or issues a Request for Evidence, we respond strategically. Our priority is protecting your relationship and guiding you toward lawful permanent residence with confidence.
      `,
      },
      {
        title: "Hail Damage",
        slug: "hail-damage",
        description:
          "Was your home damaged by a flood? Do you have a pipe burst in your home during a freeze? Did the insurance",
        image: "/images/practice-area/hail-damage.png",
        details_img: "/images/practice-area/hail-damage.png",
        content: `
Family preference immigration allows U.S. citizens and lawful permanent residents to sponsor certain relatives for green cards. These cases are subject to annual visa limits and long waiting periods based on priority dates. Understanding the visa bulletin is critical.

We help families file petitions correctly and track priority dates over time. Our attorneys guide clients through document preparation, eligibility requirements, and government processing stages. Proper planning can help avoid unnecessary delays.

When visas become available, we assist with adjustment of status or consular processing. Our firm remains engaged throughout the process to ensure families stay informed and prepared.
      `,
      },
      {
        title: "Plumbing Damage",
        slug: "plumbing-damage",
        description:
          "Is your claim being denied after an hurricane damaged your property? Obtain a free case review with us today!",
        image: "/images/practice-area/plumbing-damage.png",
        details_img: "/images/practice-area/plumbing-damage.png",
        content: `
Immediate relatives of U.S. citizens include spouses, parents, and unmarried children under the age of 21. These cases are not subject to annual visa caps, which often allows faster processing. However, proper documentation is still essential.

Our firm assists clients with petition filings, adjustment of status, or consular processing. We ensure all forms and supporting evidence meet USCIS standards. Each case is carefully reviewed for admissibility issues.

We also prepare clients for interviews and respond to government requests. Our focus is reuniting families as efficiently and securely as possible.
      `,
      },
      {
        title: "Smoke Damage",
        slug: "smoke-damage",
        description:
          "Did your home or property recently suffer damage from smoke and fire? Is your insurance refusing to pay?",
        image: "/images/practice-area/smoke-damage.png",
        details_img: "/images/practice-area/smoke-damage.png",
        content: `
Immediate relatives of U.S. citizens include spouses, parents, and unmarried children under the age of 21. These cases are not subject to annual visa caps, which often allows faster processing. However, proper documentation is still essential.

Our firm assists clients with petition filings, adjustment of status, or consular processing. We ensure all forms and supporting evidence meet USCIS standards. Each case is carefully reviewed for admissibility issues.

We also prepare clients for interviews and respond to government requests. Our focus is reuniting families as efficiently and securely as possible.
      `,
      },
      {
        title: "Bad Faith Claims",
        slug: "bad-faith-claims",
        description:
          "Did a sudden hail storm damage your home or property? Is the insurance company giving you the run around?",
        image: "/images/practice-area/bad-faith-claims.png",
        details_img: "/images/practice-area/bad-faith-claims.png",
        content: `
Immediate relatives of U.S. citizens include spouses, parents, and unmarried children under the age of 21. These cases are not subject to annual visa caps, which often allows faster processing. However, proper documentation is still essential.

Our firm assists clients with petition filings, adjustment of status, or consular processing. We ensure all forms and supporting evidence meet USCIS standards. Each case is carefully reviewed for admissibility issues.

We also prepare clients for interviews and respond to government requests. Our focus is reuniting families as efficiently and securely as possible.
      `,
      },
      {
        title: "Vandalism And Theft",
        slug: "vandalism-and-theft",
        description:
          "Do you have a commercial large loss claim that was denied? Get a free case review today.",
        image: "/images/practice-area/vandalism-and-thef.png",
        details_img: "/images/practice-area/vandalism-and-thef.png",
        content: `
Immediate relatives of U.S. citizens include spouses, parents, and unmarried children under the age of 21. These cases are not subject to annual visa caps, which often allows faster processing. However, proper documentation is still essential.

Our firm assists clients with petition filings, adjustment of status, or consular processing. We ensure all forms and supporting evidence meet USCIS standards. Each case is carefully reviewed for admissibility issues.

We also prepare clients for interviews and respond to government requests. Our focus is reuniting families as efficiently and securely as possible.
      `,
      },
    ],
  },
};
