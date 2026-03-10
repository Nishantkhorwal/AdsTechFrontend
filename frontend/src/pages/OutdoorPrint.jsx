import MegaServiceLayout from '../layouts/MegaServicesLayout';

export default function OutdoorPrint() {
  return (
    <MegaServiceLayout
      title="Outdoor & Print Advertising"
      
      subtitle="High-visibility outdoor advertising solutions designed to dominate city landscapes and capture real-world attention. From highway billboards to transit media, we help your brand reach thousands daily."
      
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"

      description={`Outdoor advertising remains one of the most powerful ways to build large-scale brand awareness. From highway billboards and transit media to metro branding and LED screens, we help brands reach thousands of people daily through high-visibility placements.

Our team handles media planning, location research, design, fabrication, and on-ground execution to ensure your brand stands out in the real world.

With expertise across multiple outdoor mediums and deep relationships with premium media owners, we deliver campaigns that make a lasting impression.`}

      stats={[
        { number: '500+', label: 'Active Outdoor Placements' },
        { number: '50M+', label: 'Daily Impressions' },
        { number: '25+', label: 'Cities Covered' },
        { number: '98%', label: 'Client Satisfaction' }
      ]}

      benefits={[
        {
          icon: '👁️',
          title: 'Maximum Visibility',
          description: 'Reach commuters and consumers during their daily journeys with placements in high-traffic zones and premium locations.'
        },
        {
          icon: '🎯',
          title: 'Targeted Placement',
          description: 'Strategic location selection ensures your brand reaches the right audience at the right time based on demographic insights.'
        },
        {
          icon: '💪',
          title: 'Brand Dominance',
          description: 'Create a strong market presence with comprehensive campaigns across multiple mediums in the same geographic area.'
        },
        {
          icon: '⚡',
          title: 'Real-Time Impact',
          description: 'Digital OOH capabilities allow dynamic content updates and campaign flexibility for timely brand messaging.'
        },
        {
          icon: '📊',
          title: 'Measurable Results',
          description: 'Track campaign performance with location data, foot traffic analysis, and audience engagement metrics.'
        },
        {
          icon: '🚀',
          title: 'End-to-End Service',
          description: 'From concept and design through fabrication and installation, we handle every aspect of your outdoor campaign.'
        }
      ]}

      services={[
      {
      title: "Unipoles",
      description: "Large high-rise billboard structures placed on highways and major roads, offering massive brand visibility to commuters and long-distance travelers.",
      image: "images/unipole.png?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Premium highway locations with long-distance visibility",
      "High-impact large format branding",
      "Ideal for real estate and automobile campaigns",
      "Excellent for building brand awareness across routes"
      ]
      },

      {
      title: "Hoardings & Billboards",
      description: "Traditional outdoor advertising formats placed across busy city intersections and commercial areas for maximum urban reach.",
      image: "images/billboard.jpg?q=80&w=1200&auto=format&fit=crop",
      points: [
      "High traffic urban locations and commercial zones",
      "Strategic placement at key city intersections",
      "Large format brand storytelling capabilities",
      "Excellent for product launches and brand awareness"
      ]
      },

      {
      title: "Digital OOH (LED Screens)",
      description: "Dynamic digital screens placed in high-footfall areas allowing animated advertisements and multiple campaign rotations throughout the day.",
      image: "images/screen.jpg?q=80&w=1200&auto=format&fit=crop",
      points: [
      "LED display advertising with dynamic content",
      "Multiple brand rotations and real-time updates",
      "High-visibility day and night performance",
      "Ideal for modern interactive and video campaigns"
      ]
      },

      {
      title: "Metro Station Co-Branding",
      description: "Complete branding opportunities inside metro stations, allowing brands to dominate commuter spaces and capture daily foot traffic.",
      image: "images/metro-station.webp?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Station entry, exit, and platform branding",
      "Wall panels and escalator advertising",
      "Ticket counter and corridor placements",
      "High daily commuter reach with targeted messaging"
      ]
      },

      {
      title: "Metro Pillars",
      description: "Brand placements on metro corridor pillars that offer repetitive exposure to daily traffic with strong route dominance.",
      image: "/images/Pillar.jpg?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Continuous roadside visibility across corridors",
      "Long corridor branding impact and frequency",
      "Perfect for route domination campaigns",
      "High impression counts from repetitive exposure"
      ]
      },

      {
      title: "Pole Kiosks",
      description: "Compact advertising boards mounted on streetlight poles across busy city roads, offering cost-effective local brand visibility.",
      image: "/images/pole-kiosk.avif?q=80&w=1200&auto=format&fit=crop",
      points: [
      "High frequency brand visibility in dense areas",
      "Cost-effective outdoor campaigns",
      "Ideal for local businesses and retail promotions",
      "Strategic placement in residential and commercial zones"
      ]
      },

      {
      title: "Bus Branding",
      description: "Mobile advertising on city buses that moves across multiple high-traffic routes throughout the day for maximum coverage.",
      image: "/images/bus.png?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Full bus wrap branding with rear and side panels",
      "Mass city coverage across all major bus routes",
      "High impressions in dense traffic areas",
      "Dynamic moving billboard effect"
      ]
      },

      {
      title: "Cab Branding",
      description: "Taxi and cab advertising that transforms vehicles into moving billboards across urban locations and business districts.",
      image: "images/car.jpg?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Door panel and full vehicle branding options",
      "Coverage across business districts and residential areas",
      "Highly visible during traffic congestion",
      "Premium cab targeting for affluent demographics"
      ]
      },

      {
      title: "Auto Branding",
      description: "Auto-rickshaw advertising widely used in Indian cities for hyperlocal brand visibility and community engagement.",
      image: "/images/auto.png?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Back panel and side body branding options",
      "High frequency exposure in markets and malls",
      "Perfect for local brand visibility and footfall",
      "Cost-effective community targeting"
      ]
      },

      {
      title: "Rickshaw Branding",
      description: "Cycle rickshaw advertising that delivers strong local visibility in high-footfall markets and residential neighborhoods.",
      image: "images/rikshaw.jfif?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Back panel display ads in high-traffic areas",
      "Ideal for retail promotions and local campaigns",
      "Strong engagement in residential neighborhoods",
      "Grassroots community brand building"
      ]
      },

      {
      title: "Metro Train Wrap Branding",
      description: "Full or partial branding across metro train coaches creating city-wide visibility during peak commute times.",
      image: "/images/metro2.png?q=80&w=1200&auto=format&fit=crop?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Exterior train wrap campaigns across full trains",
      "Interior passenger advertising panels",
      "High commuter impressions during peak hours",
      "Regional coverage across metro network"
      ]
      },

      {
      title: "Railway Wrap Branding",
      description: "Large-scale advertising campaigns across railway coaches and station infrastructure for national-level visibility.",
      image: "images/railway.avif?q=80&w=1200&auto=format&fit=crop",
      points: [
      "Exterior train wrap branding across coaches",
      "Interior passenger advertising opportunities",
      "National route visibility and cross-country reach",
      "Ideal for large pan-India brand campaigns"
      ]
      }

      ]}


      process={[
        {
          title: 'Research & Planning',
          description: 'We analyze your target audience, campaign objectives, and competitive landscape to identify optimal locations and media mix.'
        },
        {
          title: 'Design & Creative',
          description: 'Our creative team develops compelling designs optimized for each medium, ensuring maximum impact and brand consistency.'
        },
        {
          title: 'Media Buying & Negotiation',
          description: 'We negotiate premium placements with media owners and secure the best rates for your campaign timeline and budget.'
        },
        {
          title: 'Execution & Monitoring',
          description: 'From production and installation to performance tracking, we manage every detail ensuring flawless campaign execution.'
        }
      ]}

      

      faqs={[
        {
          question: 'Which outdoor advertising format is most effective?',
          answer:
            'The most effective format depends on your campaign goals and target audience. Billboards and unipoles offer large-scale visibility for brand awareness, while transit media like buses and cabs provide continuous coverage across the city. For local businesses, pole kiosks and rickshaw advertising deliver targeted neighborhood reach. We recommend a multi-medium approach to maximize impressions and frequency.'
        },
        {
          question: 'How do you select the best locations for outdoor campaigns?',
          answer:
            'We use data-driven location analysis considering foot traffic patterns, demographic alignment, competitor presence, visibility metrics, and traffic volume. We conduct site surveys and use traffic counting technology to ensure every location delivers maximum ROI for your specific campaign objectives.'
        },
        {
          question: 'Do you handle the entire outdoor advertising process?',
          answer:
            'Yes, we manage end-to-end execution including research, media planning, creative design, fabrication, installation, maintenance, and performance tracking. Our team handles all interactions with media owners, ensuring smooth campaign implementation and timely execution.'
        },
        {
          question: 'How long does it typically take to set up an outdoor campaign?',
          answer:
            'Timeline depends on campaign scope. Small local campaigns can launch in 2-3 weeks, while large multi-city campaigns may take 4-8 weeks. This includes location approvals, design finalization, fabrication, and installation. We prioritize quick turnarounds without compromising quality.'
        },
        {
          question: 'Can we change creative mid-campaign?',
          answer:
            'Yes, we offer creative optimization during campaigns. For digital OOH, changes can be made instantly. For printed formats, we can rotate creatives based on performance data. Our Professional and Enterprise packages include mid-campaign optimization and A/B testing capabilities.'
        },
        {
          question: 'How do you measure the success of outdoor advertising?',
          answer:
            'We track multiple metrics including foot traffic counts, location visibility scores, audience demographic reach, campaign impressions, and brand recall surveys. For digital OOH, we monitor engagement rates and content performance. We provide detailed monthly reports with ROI analysis.'
        },
        {
          question: 'Is outdoor advertising suitable for local businesses?',
          answer:
            'Absolutely! Formats like pole kiosks, auto branding, and rickshaw advertising are highly effective for local promotions with excellent neighborhood targeting. We help businesses maximize hyperlocal visibility at cost-effective price points tailored to local market needs.'
        },
        {
          question: 'What is the difference between print and digital outdoor advertising?',
          answer:
            'Print advertising (billboards, hoardings) offers static high-impact visuals with lower maintenance costs. Digital OOH (LED screens) provides dynamic content, multiple campaign rotations, and real-time updates, making it ideal for time-sensitive messages and brand storytelling. We recommend combining both for maximum campaign effectiveness.'
        }
      ]}
    />
  );
}
