import SubServiceLayout from "../layouts/SubServiceLayout";

export default function GraphicDesign() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="Graphic Design Services – Creative Visuals That Elevate Your Brand"
      subtitle="Strategic graphic design solutions for brands that want to stand out, engage audiences, and create memorable visual experiences."

      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="Graphic designer working on creative visuals"

      description={`Strong visual design is one of the most powerful tools in modern marketing. Whether you're promoting your brand on social media, launching a marketing campaign, or building brand recognition, high-quality creative design helps you capture attention and communicate your message effectively.

Our graphic design services focus on creating impactful visuals that strengthen your brand identity and improve marketing performance. From daily social media creatives to full branding systems, we design visuals that attract attention, engage audiences, and support your business growth.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "Inconsistent Brand Visuals",
          description:
            "Your brand visuals lack consistency across social media, ads, and marketing materials.",
          image:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Low Engagement on Social Media",
          description:
            "Your posts fail to capture attention and generate engagement from your audience.",
          image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Unprofessional Marketing Materials",
          description:
            "Poorly designed graphics reduce credibility and weaken brand perception.",
          image:
            "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Social Media Creatives",
          description:
            "Daily and campaign-based social media graphics designed to boost engagement and strengthen brand presence.",
          image:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Daily social media post designs",
            "Instagram & Facebook creatives",
            "Carousel post designs",
            "Story creatives",
            "Festival & campaign creatives",
            "Brand engagement visuals"
          ]
        },
        {
          title: "Marketing & Promotional Graphics",
          description:
            "High-conversion marketing creatives designed for digital campaigns and promotional activities.",
          image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Ad creatives for marketing campaigns",
            "Promotional banners",
            "Landing page graphics",
            "Website marketing visuals",
            "Product promotion creatives"
          ]
        },
        {
          title: "Brand Identity Design",
          description:
            "Professional branding systems that build recognition and trust for your business.",
          image:
            "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Logo design",
            "Brand color and typography systems",
            "Brand identity guidelines",
            "Business cards & stationery",
            "Brand asset creation"
          ]
        },
        {
          title: "Corporate & Print Design",
          description:
            "Professional print-ready designs for corporate communication and marketing.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Brochure and flyer design",
            "Company profile design",
            "Presentation design",
            "Poster and banner design",
            "Event marketing creatives"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "High-resolution design files",
        "Social media optimized graphics",
        "Editable source files (if required)",
        "Brand-consistent creative templates",
        "Marketing-ready promotional visuals",
        "Campaign creative design packages"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "3X", label: "Higher Social Media Engagement" },
        { value: "80%", label: "Improved Visual Brand Consistency" },
        { value: "50%", label: "Better Ad Creative Performance" },
        { value: "100+", label: "Creative Assets Delivered Monthly" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Brand Understanding",
          desc: "Understanding your brand identity and marketing goals."
        },
        {
          step: "02",
          title: "Creative Concept Development",
          desc: "Developing visual concepts aligned with your brand."
        },
        {
          step: "03",
          title: "Design Creation",
          desc: "Designing high-quality visuals for marketing and branding."
        },
        {
          step: "04",
          title: "Delivery & Optimization",
          desc: "Providing optimized designs ready for marketing use."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "Do you design daily social media posts?",
          answer:
            "Yes. We create daily and monthly social media creative packages designed to maintain brand consistency and improve engagement."
        },
        {
          question: "Do you provide ad creatives for marketing campaigns?",
          answer:
            "Yes. We design high-conversion ad creatives optimized for platforms like Facebook, Instagram, and Google Ads."
        },
        {
          question: "Can you create a complete brand identity?",
          answer:
            "Absolutely. We design logos, brand guidelines, typography systems, and visual identity assets."
        },
        {
          question: "Will I receive editable files?",
          answer:
            "Yes. Depending on the project, we can provide editable source files along with final design exports."
        },
        {
          question: "Can you design creatives for festivals and special campaigns?",
          answer:
            "Yes. We regularly design festival creatives, campaign promotions, and marketing visuals tailored to your brand."
        }
      ]}
    />
  );
}
