import MegaServiceLayout from "../layouts/MegaServicesLayout";

export default function RetailFabrication() {
  return (
    <MegaServiceLayout
      title="Retail & Fabrication"
      subtitle="Professional fabrication, installation, and large format printing services designed to help brands dominate physical spaces and retail environments."

      heroImage="images/fabrication.jpg?q=80&w=1400&auto=format&fit=crop"

      description={`Retail branding and fabrication play a critical role in creating strong offline brand visibility. 
From construction site branding and hoarding structures to showroom design and signage boards, these physical installations help brands establish presence in real-world environments.

Our team handles everything from concept and design to fabrication, printing, and installation. Whether it’s project fencing, glow sign boards, retail showrooms, or large outdoor structures, we deliver durable and visually impactful solutions using industry-grade materials and advanced printing technologies.`}

      benefits={[
        {
          icon: "⚙",
          title: "End-to-End Fabrication",
          description:
            "We manage the complete fabrication cycle including design, material sourcing, manufacturing, printing, and installation."
        },
        {
          icon: "🏗",
          title: "Durable Materials",
          description:
            "All structures and signage are built using high-quality metal frames, acrylic, vinyl, and weather-resistant materials."
        },
        {
          icon: "🎯",
          title: "High Brand Visibility",
          description:
            "Our fabrication solutions ensure strong brand presence across construction sites, highways, retail stores, and commercial areas."
        },
        {
          icon: "🖨",
          title: "Advanced Printing Technology",
          description:
            "We use modern digital printing equipment to produce sharp, vibrant, and long-lasting print materials."
        },
        {
          icon: "⚡",
          title: "Fast Installation",
          description:
            "Our on-ground team ensures quick and safe installation across project sites, retail locations, and outdoor advertising spaces."
        },
        {
          icon: "📍",
          title: "Nationwide Execution",
          description:
            "We deliver fabrication and installation services across multiple cities for large-scale campaigns."
        }
      ]}

      services={[
        {
          title: "Project / Site Fencing & Branding",
          description:
            "Temporary fencing structures installed around construction sites to secure the area while also displaying brand advertisements and project information.",
          image:
            "images/fencing.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Construction site boundary fencing",
            "Large format branding panels",
            "Durable weather-resistant materials",
            "Ideal for real estate project marketing"
          ]
        },

        {
          title: "Flag Pole Fabrication & Installation",
          description:
            "High-quality metal flag poles installed for corporate campuses, real estate projects, showrooms, and public events.",
          image:
            "images/flag.webp?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Custom height metal flag poles",
            "Rust-resistant coated structures",
            "Corporate and commercial branding",
            "Perfect for events and project sites"
          ]
        },

        {
          title: "Barricade Fabrication & Installation",
          description:
            "Strong barricades used for traffic control, event management, and construction zones while providing space for brand advertisements.",
          image:
            "images/barricade.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Metal barricade fabrication",
            "Advertising panels on barricades",
            "Traffic and event control solutions",
            "Durable powder-coated materials"
          ]
        },

        {
          title: "Unipoles & Hoardings Fabrication",
          description:
            "Large outdoor advertising structures designed and installed for highways, city roads, and commercial locations.",
          image:
            "images/unipoleF.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Highway unipole structures",
            "City hoarding installations",
            "Large format outdoor branding",
            "High visibility advertising locations"
          ]
        },

        {
          title: "LED Letter Boards",
          description:
            "Modern illuminated signboards with individual LED letters used for retail stores, offices, malls, and corporate branding.",
          image:
            "images/led.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "3D illuminated LED letters",
            "Acrylic and metal fabrication",
            "Energy efficient lighting",
            "High visibility storefront branding"
          ]
        },

        {
          title: "Glow Sign Boards",
          description:
            "Backlit signage boards commonly used by retail stores, restaurants, and service businesses to attract attention day and night.",
          image:
            "images/neon.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Backlit flex or acrylic boards",
            "High brightness illumination",
            "Weather-resistant outdoor signage",
            "Perfect for shopfront advertising"
          ]
        },

        {
          title: "Sunboards Installation",
          description:
            "Rigid PVC sunboards widely used for indoor branding, promotional displays, and retail advertising panels.",
          image:
            "images/sunboard.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Lightweight PVC boards",
            "High-resolution printed graphics",
            "Retail store branding panels",
            "Ideal for exhibitions and indoor promotions"
          ]
        },

        {
          title: "Flex Printing",
          description:
            "Large-format flex printing widely used for hoardings, banners, stage backdrops, and outdoor advertising campaigns.",
          image:
            "images/flex.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Large format banner printing",
            "Outdoor advertising flex materials",
            "Durable weather-resistant prints",
            "Used for hoardings and event branding"
          ]
        },

        {
          title: "SAV Printing",
          description:
            "Self Adhesive Vinyl printing used for glass branding, wall graphics, vehicle branding, and retail signage.",
          image:
            "images/sav.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Self adhesive vinyl graphics",
            "Glass and wall branding",
            "Vehicle wrap printing",
            "High-quality adhesive materials"
          ]
        },

        {
          title: "Digital Printing",
          description:
            "High-resolution digital printing for marketing materials, signage, posters, and retail branding assets.",
          image:
            "images/digital.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "High resolution digital printing",
            "Posters and promotional materials",
            "Indoor and outdoor signage",
            "Quick turnaround production"
          ]
        },

        {
          title: "Showroom Design",
          description:
            "Complete showroom interior design solutions including layout planning, signage installation, branding elements, and customer experience design.",
          image:
            "images/showroom.jfif?q=80&w=1200&auto=format&fit=crop",
          points: [
            "Retail showroom interior design",
            "Brand display installations",
            "Customer experience layout planning",
            "Lighting and visual merchandising"
          ]
        }
      ]}

      process={[
        {
          title: "Requirement Analysis",
          description:
            "Understanding project requirements, branding goals, and site conditions before fabrication begins."
        },
        {
          title: "Design & Planning",
          description:
            "Our design team creates structural layouts and branding concepts tailored to the project."
        },
        {
          title: "Fabrication & Printing",
          description:
            "Using industry-grade materials and advanced printing machines to manufacture signage and structures."
        },
        {
          title: "Installation & Execution",
          description:
            "Professional on-site installation ensuring safety, durability, and perfect brand visibility."
        }
      ]}

      faqs={[
        {
          question: "Do you provide complete fabrication and installation services?",
          answer:
            "Yes, we provide end-to-end services including design, fabrication, printing, transportation, and on-site installation."
        },
        {
          question: "What materials are used for outdoor signage?",
          answer:
            "We use materials like acrylic, metal frames, flex banners, PVC boards, and vinyl depending on the project requirements."
        },
        {
          question: "Can you execute large-scale retail branding projects?",
          answer:
            "Yes, we regularly execute large retail branding campaigns including showroom design, mall branding, and multi-location installations."
        },
        {
          question: "Do you handle outdoor advertising structure fabrication?",
          answer:
            "Yes, we fabricate and install structures like hoardings, unipoles, barricades, and project site branding systems."
        }
      ]}
    />
  );
}
