import SubServiceLayout from "../layouts/SubServiceLayout";

export default function WebDevelopment() {
  return (
    <SubServiceLayout
      parentService="Digital Marketing"
      parentLink="/digital-marketing"

      title="Web Design & Development – High-Performance Websites That Convert"
      subtitle="Modern, scalable, and visually stunning websites designed to elevate your brand, improve user experience, and convert visitors into customers."

      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
      heroImageAlt="Web developer coding website"

      description={`Your website is the digital foundation of your brand. A poorly designed or slow website can cost you potential customers, while a well-built website becomes a powerful sales engine.

Our web design and development services focus on building visually stunning, high-performance websites that deliver exceptional user experiences. We combine creative design, modern technologies, and conversion-focused strategies to create websites that not only look impressive but also drive measurable business growth.

Whether you're launching a new brand, redesigning your website, or building a complex platform, we develop digital experiences that scale with your business.`}

      /* ---------------- PROBLEMS ---------------- */

      problems={[
        {
          title: "Outdated Website Design",
          description:
            "Your website looks old, unprofessional, or doesn't reflect your brand's quality.",
          image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Slow or Poor Performance",
          description:
            "Slow loading speeds and poor mobile optimization cause visitors to leave quickly.",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Low Conversion Rates",
          description:
            "Visitors come to your website but don't take action or become customers.",
          image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
        }
      ]}

      /* ---------------- SOLUTIONS ---------------- */

      solutions={[
        {
          title: "Custom Website Design",
          description:
            "Beautiful and strategic designs that communicate your brand and improve user experience.",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Modern UI/UX design",
            "Mobile-first responsive layouts",
            "Brand-aligned visual design",
            "User journey optimization",
            "Interactive design elements",
            "Conversion-focused page structure"
          ]
        },
        {
          title: "High-Performance Web Development",
          description:
            "Fast, scalable, and secure websites built using modern development technologies.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Custom front-end development",
            "React / modern JS frameworks",
            "Performance optimization",
            "SEO-friendly code structure",
            "Cross-browser compatibility",
            "Scalable architecture"
          ]
        },
        {
          title: "E-Commerce Development",
          description:
            "Powerful online stores designed to maximize sales and provide seamless shopping experiences.",
          image:
            "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Custom e-commerce website development",
            "Product catalog and inventory systems",
            "Secure payment gateway integration",
            "Optimized checkout experience",
            "Mobile shopping optimization"
          ]
        },
        {
          title: "Website Optimization & Maintenance",
          description:
            "Continuous improvements to ensure your website stays fast, secure, and effective.",
          image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
          items: [
            "Website performance optimization",
            "Speed & Core Web Vitals improvements",
            "Security monitoring",
            "Content updates and improvements",
            "Analytics tracking integration"
          ]
        }
      ]}

      /* ---------------- DELIVERABLES ---------------- */

      deliverables={[
        "Fully responsive website design",
        "SEO-friendly website structure",
        "Optimized website speed & performance",
        "Content management system setup",
        "Analytics & tracking integration",
        "Post-launch support & documentation"
      ]}

      /* ---------------- RESULTS ---------------- */

      results={[
        { value: "70%", label: "Average Increase in Website Engagement" },
        { value: "3X", label: "Higher Conversion Potential" },
        { value: "<2s", label: "Optimized Page Load Speed" },
        { value: "100%", label: "Mobile Responsive Experience" }
      ]}

      /* ---------------- PROCESS ---------------- */

      process={[
        {
          step: "01",
          title: "Discovery & Planning",
          desc: "Understanding your brand, goals, and website requirements."
        },
        {
          step: "02",
          title: "Design & Prototyping",
          desc: "Creating UI/UX designs and interactive prototypes."
        },
        {
          step: "03",
          title: "Development",
          desc: "Building the website using modern technologies."
        },
        {
          step: "04",
          title: "Launch & Optimization",
          desc: "Testing, launching, and continuously improving performance."
        }
      ]}

      /* ---------------- FAQ ---------------- */

      faqs={[
        {
          question: "How long does it take to build a website?",
          answer:
            "Most websites take 3–6 weeks depending on complexity, number of pages, and features required."
        },
        {
          question: "Will my website be mobile friendly?",
          answer:
            "Yes. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices."
        },
        {
          question: "Can you redesign an existing website?",
          answer:
            "Absolutely. We can redesign and optimize your current website to improve design, speed, and conversions."
        },
        {
          question: "Do you provide website maintenance?",
          answer:
            "Yes. We offer ongoing maintenance, security updates, and performance optimization services."
        },
        {
          question: "Will my website be SEO friendly?",
          answer:
            "Yes. Our development approach ensures fast loading speeds, clean code, and an SEO-friendly structure."
        }
      ]}
    />
  );
}
