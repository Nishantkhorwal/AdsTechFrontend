import SubServiceLayout from "../layouts/SubServiceLayout";

export default function ContentStrategy() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="Content Strategy Services – Turn Content Into Revenue-Driving Assets"
      subtitle="Data-driven content strategies designed to attract, engage, and convert your ideal audience through SEO-focused and brand-aligned storytelling."

      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="Content planning and strategy meeting"

      description={`Our content strategy services help businesses build authority, generate organic traffic, and convert prospects into customers through intentional, data-backed content marketing.

We don’t just create content — we build structured content ecosystems aligned with SEO, social media, and paid campaigns. From blog strategy to landing page frameworks, we create content that drives measurable business growth and long-term brand positioning.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "Content Without Strategy",
          description:
            "You are publishing content, but it is not aligned with business goals or driving measurable ROI.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Low Conversion Rates",
          description:
            "Your blog and landing pages attract traffic but fail to convert visitors into leads.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Inconsistent Brand Messaging",
          description:
            "Your brand voice and positioning are unclear across different platforms.",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Content Audit & Gap Analysis",
          description:
            "We evaluate your existing content assets and identify high-impact opportunities for growth.",
          image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Full content inventory review",
            "SEO content gap analysis",
            "Competitor benchmarking",
            "Content performance evaluation",
            "Conversion funnel assessment"
          ]
        },
        {
          title: "SEO-Driven Content Planning",
          description:
            "Strategic content frameworks aligned with search intent and revenue-generating keywords.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Advanced keyword clustering",
            "Topic authority mapping",
            "Pillar & cluster content structure",
            "Search intent targeting",
            "Long-form content strategy"
          ]
        },
        {
          title: "Conversion-Focused Copywriting",
          description:
            "Content optimized not just for rankings — but for lead generation and sales.",
          image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Landing page copywriting",
            "Sales funnel content",
            "Lead magnet creation",
            "CTA optimization strategy",
            "Story-driven brand messaging"
          ]
        },
        {
          title: "Content Distribution & Repurposing",
          description:
            "We maximize ROI by repurposing and distributing content across multiple channels.",
          image:
            "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Blog-to-social repurposing",
            "Email newsletter integration",
            "Video & short-form adaptations",
            "Paid amplification strategy",
            "Multi-channel content calendar"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "Comprehensive content strategy document",
        "SEO keyword & topic map",
        "Editorial content calendar",
        "Conversion-optimized landing page frameworks",
        "Brand messaging & tone guide",
        "Monthly performance tracking reports"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "3X", label: "Increase in Organic Traffic" },
        { value: "2X", label: "Higher Lead Conversion Rates" },
        { value: "50%", label: "Improved Content Engagement" },
        { value: "4X", label: "Content Marketing ROI" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Discovery & Research",
          desc: "Audience research, competitor analysis, and brand positioning."
        },
        {
          step: "02",
          title: "Strategic Planning",
          desc: "Keyword mapping and content framework creation."
        },
        {
          step: "03",
          title: "Content Development",
          desc: "Creation of SEO-optimized and conversion-focused assets."
        },
        {
          step: "04",
          title: "Distribution & Optimization",
          desc: "Ongoing tracking, refinement, and scaling."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "What is content strategy in digital marketing?",
          answer:
            "Content strategy is the structured planning, creation, and distribution of content aligned with business goals. It ensures every content asset contributes to traffic growth, brand authority, and lead generation."
        },
        {
          question: "How is content strategy different from content marketing?",
          answer:
            "Content marketing focuses on publishing content, while content strategy defines why, how, and where content should be created to achieve measurable business outcomes."
        },
        {
          question: "How long does content marketing take to show results?",
          answer:
            "Content marketing typically delivers noticeable results within 3–6 months, with compounding growth over time as authority builds."
        },
        {
          question: "Do you create the content as well?",
          answer:
            "Yes. We provide full-service content creation including blogs, landing pages, website copy, and multi-channel distribution assets."
        },
        {
          question: "How do you measure content performance?",
          answer:
            "We track keyword rankings, organic traffic, engagement metrics, lead generation, and revenue attribution to evaluate ROI."
        }
      ]}
    />
  );
}
