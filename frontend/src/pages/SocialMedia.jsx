import SubServiceLayout from "../layouts/SubServiceLayout";

export default function SocialMedia() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="Social Media Marketing Services – Build Brand Authority & Drive Real Engagement"
      subtitle="Strategic social media marketing campaigns designed to increase brand awareness, grow communities, and generate high-converting leads across all major platforms."

      heroImage="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="Social media marketing dashboard"

      description={`Our social media marketing services help brands grow faster through data-driven strategies, engaging content creation, and performance-focused advertising.

From Instagram and Facebook to LinkedIn and YouTube, we create scalable campaigns that build brand authority, increase engagement, and drive measurable business growth. Whether your goal is awareness, lead generation, or sales — we design social media systems that convert followers into customers.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "Low Engagement Rates",
          description:
            "Your posts are not generating meaningful engagement or interactions.",
          image:
            "https://images.unsplash.com/photo-1551817958-20204c45a9b1?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Inconsistent Branding",
          description:
            "Your social presence lacks a clear voice, identity, and strategy.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Poor Ad Performance",
          description:
            "Paid campaigns are running but not generating profitable ROI.",
          image:
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Social Media Strategy & Planning",
          description:
            "We develop platform-specific strategies aligned with your business objectives and target audience.",
          image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Audience research & persona development",
            "Competitor benchmarking",
            "Content calendar planning",
            "Platform selection strategy",
            "Growth roadmap creation"
          ]
        },
        {
          title: "Content Creation & Branding",
          description:
            "High-quality visuals and compelling copy that strengthens brand authority and engagement.",
          image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Graphic design & branded creatives",
            "Short-form video content (Reels, Shorts)",
            "Caption & storytelling strategy",
            "Hashtag research & optimization",
            "Visual identity consistency"
          ]
        },
        {
          title: "Paid Social Media Advertising",
          description:
            "Performance-driven paid campaigns designed to maximize conversions and ROI.",
          image:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Facebook & Instagram Ads",
            "LinkedIn Ads for B2B lead generation",
            "Retargeting & funnel optimization",
            "A/B testing creatives & audiences",
            "Conversion tracking & analytics"
          ]
        },
        {
          title: "Community Growth & Engagement",
          description:
            "We build loyal communities that increase brand trust and customer retention.",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Daily engagement management",
            "DM & comment moderation",
            "Influencer collaborations",
            "UGC (User Generated Content) strategy",
            "Reputation management"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "Monthly content calendar",
        "Platform-specific creative assets",
        "Ad performance & analytics reports",
        "Growth & engagement tracking dashboard",
        "Audience targeting & retargeting setup",
        "Campaign optimization roadmap"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "3X", label: "Average Engagement Growth" },
        { value: "2.5X", label: "Increase in Qualified Leads" },
        { value: "45%", label: "Improved Ad Conversion Rates" },
        { value: "60%", label: "Growth in Brand Reach" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Audit & Analysis",
          desc: "Review existing social presence and competitor landscape."
        },
        {
          step: "02",
          title: "Strategy & Planning",
          desc: "Create content & advertising roadmap."
        },
        {
          step: "03",
          title: "Execution",
          desc: "Launch content & paid campaigns."
        },
        {
          step: "04",
          title: "Optimization",
          desc: "Continuous testing and scaling for growth."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "Which social media platforms should my business use?",
          answer:
            "Platform selection depends on your target audience and business goals. B2B brands often perform well on LinkedIn, while B2C brands see stronger results on Instagram, Facebook, and YouTube."
        },
        {
          question: "How often should we post on social media?",
          answer:
            "Consistency matters more than volume. We typically recommend 3–5 high-quality posts per week combined with regular engagement and story content."
        },
        {
          question: "Do you manage paid ads as well?",
          answer:
            "Yes. We create and manage high-performing paid social campaigns focused on lead generation, sales, and brand growth."
        },
        {
          question: "How do you measure social media success?",
          answer:
            "We track engagement rate, reach, lead generation, conversion rates, and ROI from paid campaigns to measure real business impact."
        },
        {
          question: "Can social media generate real leads?",
          answer:
            "Absolutely. With proper targeting, funnel strategy, and retargeting campaigns, social media can become a powerful lead generation channel."
        }
      ]}
    />
  );
}
