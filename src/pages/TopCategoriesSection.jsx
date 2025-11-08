import CategoryCard from "../components/CategoryCard";
import FeaturedOwnerCard from "../components/FeaturedOwnerCard";

const TopCategoriesSection = () => {
  const categories = [
    {
      title: "Electric",
      description: "Quiet, eco-friendly rides for the city.",
    },
    { title: "SUV", description: "Roomy trips and family-friendly travel." },
    { title: "Sedan", description: "Fuel-efficient daily drivers." },
    { title: "Van", description: "Group trips and cargo-friendly options." },
  ];

  return (
    <section className="container mx-auto py-4 md:py-8  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Top Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Featured Owner</h2>
          <FeaturedOwnerCard />
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesSection;
