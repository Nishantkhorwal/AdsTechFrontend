import ServiceLayout from "../layouts/ServiceLayout";

export default function OutdoorPrint() {
  return (
    <ServiceLayout
      title="Outdoor & Print Advertising Agency"

      subtitle="Strategic outdoor media buying, high-impact print campaigns, and on-ground brand activations designed to maximize visibility and real-world engagement."

      /* ---------------- HERO IMAGE ---------------- */
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
      heroImageAlt="Large billboard advertising in a busy city"

      description={`We help brands dominate physical spaces through powerful outdoor advertising and strategic print campaigns. 

From high-traffic billboards and transit media to premium print placements and retail branding, our offline marketing strategies are built to increase brand recall and local authority.

Our team handles creative design, media planning, vendor coordination, and campaign execution — ensuring flawless delivery and measurable impact.`}

      /* ---------------- CORE SERVICES ---------------- */

      features={[
        {
          title: "Billboard & Outdoor Media Buying",
          desc: "Strategic placement of hoardings, highway billboards, metro ads, and transit media in high-visibility locations.",
          link: "/outdoor-print/billboards"
        },
        {
          title: "Print Advertising Campaigns",
          desc: "Newspaper, magazine, brochure, and catalog campaigns designed for maximum reach and engagement.",
          link: "/outdoor-print/print-advertising"
        },
        {
          title: "Retail & On-Ground Activations",
          desc: "In-store branding, mall activations, product launches, and experiential marketing events.",
          link: "/outdoor-print/activations"
        }
      ]}

      /* ---------------- DETAILED SERVICE BREAKDOWN ---------------- */

      detailedSections={[
        {
          title: "High-Impact Outdoor Advertising",
          image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "Outdoor billboard advertisement in urban environment",
          description: `Our outdoor advertising strategies focus on high-traffic zones and premium placements to maximize brand exposure.`,
          items: [
            "Highway & city hoardings",
            "Metro & airport advertising",
            "Bus & cab branding",
            "Digital LED billboards",
            "Location research & footfall analysis",
            "Campaign performance tracking"
          ]
        },
        {
          title: "Strategic Print Media Campaigns",
          image:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "Newspaper and print advertising layout design",
          description: `We plan and execute print campaigns that enhance credibility and authority in local and national markets.`,
          items: [
            "Newspaper ads (front page & jacket ads)",
            "Magazine placements",
            "Brochure & catalog design",
            "Flyer & leaflet campaigns",
            "Corporate profile printing",
            "Vendor coordination & distribution management"
          ]
        },
        {
          title: "Experiential & Retail Branding",
          image:
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "Retail store branding and product display setup",
          description: `We create immersive brand experiences that connect directly with your audience through real-world engagement.`,
          items: [
            "Mall & retail activations",
            "Product launch events",
            "Pop-up store setups",
            "Exhibition & trade show branding",
            "In-store signage & display design",
            "Sampling & promotional campaigns"
          ]
        }
      ]}

      /* ---------------- TRUST METRICS ---------------- */

      stats={[
        { value: "500+", label: "Outdoor Locations Managed" },
        { value: "2M+", label: "Monthly Estimated Impressions" },
        { value: "85%", label: "Increase in Brand Recall" },
        { value: "90%", label: "On-Time Campaign Execution" }
      ]}

      /* ---------------- INDUSTRIES ---------------- */

      industries={[
        "Real Estate Developers",
        "Retail & FMCG Brands",
        "Automotive Companies",
        "Education Institutions",
        "Healthcare Providers",
        "Local & Regional Businesses"
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Location Research",
          desc: "Footfall analysis and strategic placement planning."
        },
        {
          step: "02",
          title: "Creative Development",
          desc: "High-impact visual design tailored for outdoor visibility."
        },
        {
          step: "03",
          title: "Production & Deployment",
          desc: "Printing, fabrication, and seamless on-ground execution."
        },
        {
          step: "04",
          title: "Monitoring & Reporting",
          desc: "Campaign performance evaluation and impact assessment."
        }
      ]}

      /* ---------------- CASE STUDY ---------------- */

      caseStudy={{
        title: "Real Estate Launch – 300% Increase in Walk-ins",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop",
        imageAlt: "Real estate billboard campaign promoting new property launch",
        desc: `Through a combination of highway hoardings, metro station branding, and newspaper front-page ads, we helped a real estate developer generate 3X more site visits within 60 days.

Strategic location selection and bold creative messaging significantly improved brand visibility and direct inquiries.`
      }}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "How do you select billboard locations?",
          answer:
            "We conduct traffic and demographic analysis to ensure placements align with your target audience and maximize exposure."
        },
        {
          question: "Can outdoor advertising be measured?",
          answer:
            "Yes. We estimate impressions based on traffic data and integrate QR codes, landing pages, and tracking numbers to measure performance."
        },
        {
          question: "Do you handle printing and vendor coordination?",
          answer:
            "Yes. We manage the complete process — from design and production to installation and compliance approvals."
        },
        {
          question: "Is outdoor advertising suitable for small businesses?",
          answer:
            "Absolutely. Local billboard placements and print campaigns can significantly improve brand recognition within a specific geographic area."
        }
      ]}
    />
  );
}
