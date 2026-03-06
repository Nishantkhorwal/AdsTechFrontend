import SubServiceLayout from "../layouts/SubServiceLayout";

export default function BillboardAdvertising() {
  return (
    <SubServiceLayout
      parentService="Outdoor & Print"
      parentLink="/outdoor-print"

      title="Billboard Advertising & Design"

      subtitle="High-impact billboard campaigns strategically placed and creatively designed to dominate attention and maximize brand recall."

      heroImage="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop"
      heroImageAlt="Large city highway billboard advertisement"

      description={`Billboard advertising remains one of the most powerful ways to build large-scale brand visibility. 

We combine strategic location research, bold creative design, and seamless execution to ensure your brand stands out in high-traffic areas. From highways and metro stations to premium urban locations, our billboard campaigns are built for maximum exposure and measurable impact.`}

      /* ================= PROBLEMS ================= */

      problems={[
        {
          title: "Low Visibility Locations",
          description:
            "Poorly placed billboards fail to generate impressions and waste advertising budget.",
          image:
            "https://images.unsplash.com/photo-1520975922284-0a0c1f29f1df?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Weak Creative Design",
          description:
            "Overcrowded messaging and poor visual hierarchy reduce brand recall.",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Lack of Performance Tracking",
          description:
            "Traditional outdoor campaigns often lack measurable insights.",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
        }
      ]}

      /* ================= SOLUTIONS ================= */

      solutions={[
        {
          title: "Strategic Location Planning",
          description:
            "We analyze traffic data, demographics, and business objectives to select billboard placements that maximize daily impressions.",
          image:
            "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?q=80&w=1200&auto=format&fit=crop",
          items: [
            "Highway & expressway billboards",
            "City center premium hoardings",
            "Metro & airport placements",
            "Residential & commercial cluster targeting",
            "Traffic flow & footfall analysis"
          ]
        },
        {
          title: "High-Impact Creative Design",
          description:
            "Billboards must communicate within seconds. Our design approach focuses on bold typography, clean messaging, and strong visual contrast.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
          items: [
            "Minimal, high-contrast layouts",
            "Large readable typography",
            "Brand-first visual hierarchy",
            "Call-to-action optimization",
            "QR code & tracking integration"
          ]
        }
      ]}

      /* ================= DELIVERABLES ================= */

      deliverables={[
        "Billboard location shortlist & media plan",
        "Creative concept development",
        "High-resolution print-ready designs",
        "Vendor coordination & installation supervision",
        "Campaign monitoring & compliance checks",
        "Performance tracking integration (QR, landing pages, tracking numbers)"
      ]}

      /* ================= RESULTS ================= */

      results={[
        { value: "1M+", label: "Monthly Impressions Generated" },
        { value: "300%", label: "Increase in Brand Recall" },
        { value: "60 Days", label: "Average Campaign Duration" },
        { value: "90%+", label: "On-Time Deployment Rate" }
      ]}

      /* ================= PROCESS ================= */

      process={[
        {
          step: "01",
          title: "Research & Planning",
          desc: "Location analysis and competitor study."
        },
        {
          step: "02",
          title: "Creative Design",
          desc: "High-visibility billboard concept creation."
        },
        {
          step: "03",
          title: "Production & Installation",
          desc: "Printing, fabrication, and deployment."
        },
        {
          step: "04",
          title: "Monitoring & Optimization",
          desc: "Tracking, reporting, and campaign refinement."
        }
      ]}

      /* ================= FAQ ================= */

      faqs={[
        {
          question: "How do you choose billboard locations?",
          answer:
            "We analyze traffic density, demographics, competitor presence, and your campaign goals before recommending placements."
        },
        {
          question: "Can billboard campaigns be measured?",
          answer:
            "Yes. We integrate QR codes, tracking numbers, and dedicated landing pages to measure inquiries and engagement."
        },
        {
          question: "How long should a billboard campaign run?",
          answer:
            "Most campaigns run for 30–90 days depending on goals, location demand, and brand visibility objectives."
        },
        {
          question: "Do you handle printing and installation?",
          answer:
            "Yes. We manage the entire process from design to production and on-ground installation."
        }
      ]}
    />
  );
}
