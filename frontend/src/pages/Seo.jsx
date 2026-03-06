import SubServiceLayout from "../layouts/SubServiceLayout";

export default function Seo() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="SEO Services – Rank Higher, Drive Qualified Traffic & Increase Revenue"
      subtitle="Data-driven search engine optimization strategies designed to improve rankings, increase organic traffic, and generate consistent long-term growth."

      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="SEO analytics dashboard"

      description={`As a results-focused SEO agency, we help businesses increase visibility on Google through technical optimization, strategic content marketing, and authoritative link building.

Our search engine optimization services are designed to drive high-intent organic traffic that converts into leads and revenue. Whether you're an e-commerce brand, local business, or SaaS company, we build scalable SEO systems that generate measurable ROI and sustainable growth.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "Not Ranking on Google",
          description: "Your website is buried beyond page one for high-value keywords.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Declining Organic Traffic",
          description: "Traffic is stagnant or dropping due to algorithm updates.",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Competitors Outranking You",
          description: "Your competitors dominate search results and steal potential leads.",
          image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Technical SEO Optimization",
          description:
            "We ensure your website is technically optimized for search engines, improving crawlability, indexation, and performance.",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Comprehensive technical SEO audit",
            "Core Web Vitals & page speed optimization",
            "Schema markup implementation",
            "Mobile optimization",
            "URL structure & site architecture improvement",
            "Indexing & crawl error fixes"
          ]
        },
        {
          title: "On-Page SEO & Content Strategy",
          description:
            "We optimize your website content around high-intent keywords aligned with revenue goals.",
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Advanced keyword research & mapping",
            "Content optimization for ranking & conversion",
            "SEO-focused blog strategy",
            "Internal linking architecture",
            "Meta tags & heading optimization",
            "Search intent alignment"
          ]
        },
        {
          title: "Authority Link Building",
          description:
            "High-quality backlinks that strengthen domain authority and improve rankings.",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
          items: [
            "High-authority editorial backlinks",
            "Digital PR campaigns",
            "Niche-relevant outreach",
            "Competitor backlink analysis",
            "Anchor text optimization strategy"
          ]
        },
        {
          title: "Local SEO Services",
          description:
            "We help local businesses rank higher in Google Maps and local search results.",
          image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Google Business Profile optimization",
            "Local citation building",
            "Location-based keyword targeting",
            "Review acquisition strategies",
            "Local landing page optimization"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "Monthly SEO performance reports",
        "Keyword ranking tracking dashboard",
        "Technical SEO audit documentation",
        "Content optimization roadmap",
        "Backlink acquisition reports",
        "Conversion tracking integration"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "120%", label: "Average Organic Traffic Growth" },
        { value: "65%", label: "Increase in Qualified Leads" },
        { value: "3–6 Mo", label: "Typical Ranking Growth Timeline" },
        { value: "4X", label: "Average ROI from SEO Campaigns" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "SEO Audit",
          desc: "Full technical, on-page, and competitor analysis."
        },
        {
          step: "02",
          title: "Strategy Development",
          desc: "Keyword targeting & growth roadmap creation."
        },
        {
          step: "03",
          title: "Implementation",
          desc: "On-page fixes, content optimization & link building."
        },
        {
          step: "04",
          title: "Monitoring & Scaling",
          desc: "Ongoing tracking, reporting, and performance growth."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "How long does SEO take to work?",
          answer:
            "SEO typically takes 3–6 months to show measurable ranking growth. Competitive industries may take longer, but long-term ROI is significantly higher than paid channels."
        },
        {
          question: "Is SEO better than paid ads?",
          answer:
            "SEO builds sustainable long-term traffic, while paid ads generate instant visibility. A hybrid strategy delivers the strongest results."
        },
        {
          question: "Do you guarantee rankings?",
          answer:
            "No ethical agency guarantees rankings. We implement proven strategies to maximize performance and growth."
        },
        {
          question: "What industries do you work with?",
          answer:
            "We work with e-commerce brands, SaaS companies, healthcare providers, local businesses, and professional service firms."
        },
        {
          question: "How do you measure SEO success?",
          answer:
            "We track keyword growth, organic traffic, lead generation, and revenue attribution to measure real ROI."
        }
      ]}
    />
  );
}
