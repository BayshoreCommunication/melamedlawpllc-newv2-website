import { PRACTICE_DATA } from "data/practice-data";
import PageBanner from "components/shared/PageBanner";
import PracticeAreaDetailsSection from "./PracticeAreaDetailsSection";
import Footer from "components/layout/Footer";

type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  details_img: string;
  content: string;
};

export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  Object.values(PRACTICE_DATA).forEach((practiceArea) => {
    practiceArea.services.forEach((service) => {
      params.push({ slug: service.slug });
    });
  });

  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let title = "Practice Areas";
  let description = "Our legal services and practice areas";

  Object.values(PRACTICE_DATA).forEach((practiceArea) => {
    const service = practiceArea.services.find((s) => s.slug === params.slug);
    if (service) {
      title = `${service.title} | Melamed Law Firm`;
      description = service.description;
    }
  });

  return {
    title,
    description,
  };
}

export default function PracticeAreaDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  let service: Service | null = null;

  Object.values(PRACTICE_DATA).forEach((practiceArea) => {
    const found = practiceArea.services.find((s) => s.slug === params.slug);
    if (found) service = found;
  });

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <p className="text-gray-600 mt-2">
            The practice area you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: service.title },
        ]}
      />
      <PracticeAreaDetailsSection service={service} />
      <Footer />
    </>
  );
}
