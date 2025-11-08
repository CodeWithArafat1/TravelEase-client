const FeaturedOwnerCard = () => {
  return (
    <div className="card w-full bg-base-200 shadow-sm">
      <div className="card-body">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://i.ibb.co.com/cK31hGBF/profile.jpg" alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-base-content">
              Arafat Travel Services
            </h3>
            <p className="text-sm text-base-content text-opacity-70">
              5 years hosting · 420+ trips
            </p>
          </div>
        </div>
        <p className="mt-4 text-base-content text-opacity-90">
          Reliable host known for clean vehicles and punctual service.
        </p>
      </div>
    </div>
  );
};

export default FeaturedOwnerCard;
