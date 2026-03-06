import SubServiceLayout from "../layouts/SubServiceLayout";

export default function PerformanceMarketing() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="Performance Marketing Services – Scale Faster with Google & Meta Ads"
      subtitle="ROI-driven Google Ads and Meta Ads campaigns designed to generate qualified leads, increase sales, and maximize return on ad spend."

      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="Digital advertising analytics dashboard"

      description={`Our performance marketing services focus on measurable growth. We create and manage high-converting Google Ads and Meta Ads campaigns that drive revenue, not just clicks.

From search ads that capture high-intent buyers to advanced retargeting funnels that convert warm audiences, we build scalable paid advertising systems tailored to your business goals.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "High Ad Spend, Low ROI",
          description:
            "You're running ads but not generating profitable returns.",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Poor Lead Quality",
          description:
            "You are getting leads that don’t convert into customers.",
          image:
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "No Funnel Strategy",
          description:
            "Ads are running without structured targeting or retargeting strategy.",
          image:
            "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Google Ads (Search, Display & YouTube)",
          description:
            "Capture high-intent traffic and dominate search results with data-driven Google Ads campaigns.",
          image:
            "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Search campaign setup & optimization",
            "Display & remarketing campaigns",
            "YouTube video advertising",
            "Keyword & bidding strategy",
            "Conversion tracking & GA4 integration"
          ]
        },
        {
          title: "Meta Ads (Facebook & Instagram)",
          description:
            "Advanced audience targeting and creative testing to maximize conversions.",
          image:
            "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Lead generation campaigns",
            "E-commerce sales funnels",
            "Retargeting & lookalike audiences",
            "Creative A/B testing",
            "Pixel & event tracking setup"
          ]
        },
        {
          title: "Conversion Funnel Optimization",
          description:
            "We optimize the entire customer journey — from click to conversion.",
          image:
            "https://images.unsplash.com/photo-1551288049-1e8c9c8b7f60?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Landing page optimization",
            "Ad copy & creative testing",
            "Audience segmentation",
            "ROAS tracking & scaling strategy",
            "Multi-step funnel creation"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "Full campaign setup & management",
        "Conversion tracking implementation",
        "Monthly performance reports",
        "Ad creative & copy testing",
        "Budget allocation & scaling strategy",
        "Detailed ROI & ROAS analysis"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "3X", label: "Average Return on Ad Spend (ROAS)" },
        { value: "45%", label: "Reduction in Cost Per Lead" },
        { value: "2X", label: "Increase in Qualified Conversions" },
        { value: "90 Days", label: "Typical Scaling Timeline" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Audit & Strategy",
          desc: "Business analysis and competitor research."
        },
        {
          step: "02",
          title: "Campaign Setup",
          desc: "Ad account structure and tracking implementation."
        },
        {
          step: "03",
          title: "Optimization",
          desc: "A/B testing creatives, audiences, and bids."
        },
        {
          step: "04",
          title: "Scaling",
          desc: "Budget scaling based on performance metrics."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "Which is better – Google Ads or Meta Ads?",
          answer:
            "Google Ads captures high-intent search traffic, while Meta Ads excel at demand generation and retargeting. The most profitable strategy combines both."
        },
        {
          question: "How much budget do I need to start?",
          answer:
            "Most businesses can start with a monthly ad budget of ₹30,000–₹50,000, depending on competition and industry."
        },
        {
          question: "How soon can I see results?",
          answer:
            "Paid ads can generate leads within days, but optimization typically takes 30–60 days for stable ROI."
        },
        {
          question: "Do you manage tracking and analytics?",
          answer:
            "Yes. We implement full conversion tracking using Google Tag Manager, GA4, and Meta Pixel to ensure accurate performance measurement."
        },
        {
          question: "Do you guarantee ROI?",
          answer:
            "While no agency can guarantee specific results, we use proven frameworks, testing, and data analysis to maximize ROI."
        }
      ]}
    />
  );
}
