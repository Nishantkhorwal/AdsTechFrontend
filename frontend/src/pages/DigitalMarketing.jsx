import ServiceLayout from "../layouts/ServiceLayout";

export default function DigitalMarketing() {
  return (
    <ServiceLayout
      title="Digital Marketing Agency"

      subtitle="Full-service digital marketing solutions designed to increase traffic, generate qualified leads, and scale revenue through SEO, paid media, and data-driven growth strategies."

      /* ---------------- HERO IMAGE ---------------- */
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
      heroImageAlt="Digital marketing analytics dashboard with growth charts"

      description={`As a results-driven digital marketing agency, we help brands grow through strategic SEO, high-performance paid advertising, and conversion-focused content marketing. 

Our team combines data analysis, creative strategy, and advanced performance marketing techniques to build scalable growth systems for startups, e-commerce brands, and established enterprises. 

Whether you're looking to dominate search rankings, reduce customer acquisition costs, or build long-term brand authority, our digital marketing services are built to deliver measurable ROI.`}

      /* ---------------- CORE SERVICES ---------------- */

      features={[
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Technical SEO, on-page optimization, authority link building, and content strategy to rank higher on Google and drive long-term organic growth.",
          link: "/digital-marketing/seo"
        },
        {
          title: "Performance Marketing",
          desc: "Performance-driven PPC campaigns including Google Search, Shopping, Performance Max, and Meta ads optimized for maximum ROAS.",
          link: "/digital-marketing/performance-marketing"
        },
        {
          title: "Social Media Marketing",
          desc: "Content creation, paid social scaling, and engagement strategies that grow your audience and turn followers into customers.",
          link: "/digital-marketing/social-media"
        }
      ]}

      /* ---------------- DETAILED SERVICE BREAKDOWN ---------------- */

      detailedSections={[
        {
          title: "Comprehensive SEO Services",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "SEO keyword research and ranking analytics dashboard",
          description: `Our search engine optimization strategies are built for long-term visibility and sustainable growth. We focus on technical optimization, content authority, and strategic link acquisition to help your business rank for high-intent keywords that convert.`,
          items: [
            "Technical SEO audits & site architecture optimization",
            "Keyword research & competitor analysis",
            "On-page optimization & content restructuring",
            "High-authority backlink building",
            "Local SEO & Google Business optimization",
            "Monthly ranking & traffic reports"
          ]
        },
        {
          title: "Performance Marketing & Paid Advertising",
          image:
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "Google Ads and paid advertising campaign analytics",
          description: `As a performance marketing agency, we design and manage ROI-focused advertising campaigns that drive measurable results. Our paid media strategies prioritize conversion rate optimization and data-backed scaling.`,
          items: [
            "Google Search & Shopping campaigns",
            "Performance Max & display retargeting",
            "Meta (Facebook & Instagram) ads",
            "Conversion tracking & analytics setup",
            "Landing page optimization",
            "A/B testing & continuous campaign refinement"
          ]
        },
        {
          title: "Social Media Growth & Brand Positioning",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1400&auto=format&fit=crop",
          imageAlt: "Social media marketing strategy and content planning workspace",
          description: `We help brands build authority and engagement across social platforms through strategic storytelling, content production, and paid amplification.`,
          items: [
            "Content calendar & brand messaging strategy",
            "Short-form video & creative production",
            "Community engagement management",
            "Influencer collaborations",
            "Paid social scaling",
            "Audience growth strategies"
          ]
        }
      ]}

      /* ---------------- TRUST METRICS ---------------- */

      stats={[
        { value: "4X", label: "Average ROAS on Paid Campaigns" },
        { value: "120%", label: "Average Organic Traffic Growth" },
        { value: "37%", label: "Reduction in Cost Per Acquisition" },
        { value: "95%", label: "Client Retention Rate" }
      ]}

      /* ---------------- INDUSTRIES ---------------- */

      industries={[
        "E-commerce & DTC Brands",
        "SaaS & Tech Startups",
        "Real Estate Companies",
        "Healthcare & Clinics",
        "Professional Services",
        "Local Service Businesses"
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Discovery & Audit",
          desc: "Comprehensive market, competitor, and performance analysis."
        },
        {
          step: "02",
          title: "Strategy Development",
          desc: "Channel planning, keyword targeting, and conversion mapping."
        },
        {
          step: "03",
          title: "Execution & Optimization",
          desc: "Campaign launch, testing, and data-driven refinements."
        },
        {
          step: "04",
          title: "Scale & Growth",
          desc: "Budget scaling, automation, and long-term expansion."
        }
      ]}

      /* ---------------- CASE STUDY ---------------- */

      caseStudy={{
        title: "E-commerce Brand Growth – 4X Revenue in 6 Months",
        image:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
        imageAlt: "E-commerce growth analytics dashboard showing revenue increase",
        desc: `Through a combined SEO restructuring strategy and high-converting Google & Meta advertising campaigns, we helped an e-commerce brand increase revenue by 400% within six months. 

By optimizing product feeds, improving technical SEO, and launching retargeting funnels, we reduced cost-per-acquisition by 37% while significantly increasing lifetime customer value.`
      }}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "How long does digital marketing take to show results?",
          answer:
            "Paid advertising campaigns can generate leads within days, while SEO typically takes 3–6 months to show significant organic growth. Long-term strategies yield the highest ROI."
        },
        {
          question: "How much should I invest in digital marketing?",
          answer:
            "Budget depends on your industry, competition, and growth goals. We create customized strategies aligned with your target ROI and scaling capacity."
        },
        {
          question: "Do you offer long-term contracts?",
          answer:
            "We focus on performance and results. While we recommend a minimum commitment for optimal impact, our partnerships are built on transparency and measurable growth."
        },
        {
          question: "What makes your agency different?",
          answer:
            "We combine advanced analytics, creative execution, and performance marketing under one roof. Our strategies are data-driven, ROI-focused, and tailored to each client’s growth objectives."
        }
      ]}
    />
  );
}
