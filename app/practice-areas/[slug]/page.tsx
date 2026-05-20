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

  for (const practiceArea of Object.values(PRACTICE_DATA)) {
    for (const service of practiceArea.services) {
      params.push({ slug: service.slug });
    }
  }

  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let title = "Practice Areas";
  let description = "Our legal services and practice areas";

  for (const practiceArea of Object.values(PRACTICE_DATA)) {
    const service = practiceArea.services.find(
      (s: any) => s.slug === params.slug,
    );
    if (service) {
      title = `${service.title} | Melamed Law Firm`;
      description = service.description;
      break;
    }
  }

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
  let foundService: Service | null = null;

  for (const practiceArea of Object.values(PRACTICE_DATA)) {
    const found = practiceArea.services.find(
      (s: any) => s.slug === params.slug,
    );
    if (found) {
      foundService = found;
      break;
    }
  }

  if (!foundService) {
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
        title={foundService.title}
        description={foundService.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: foundService.title },
        ]}
      />
      <PracticeAreaDetailsSection service={foundService} />
      <Footer />
    </>
  );
}
