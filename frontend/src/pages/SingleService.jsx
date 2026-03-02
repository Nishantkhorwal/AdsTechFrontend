import { useParams } from "react-router-dom";
import ServiceLayout from "../layouts/ServiceLayout";

export default function SingleService() {
  const { category, service } = useParams();

  return (
    <ServiceLayout
      title={service.replaceAll("-", " ")}
      subtitle="Detailed professional marketing solution tailored for your brand."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-6 capitalize">
          {service.replaceAll("-", " ")}
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          This is the dedicated page for {service.replaceAll("-", " ")} under{" "}
          {category.replaceAll("-", " ")}.
        </p>
      </div>
    </ServiceLayout>
  );
}
