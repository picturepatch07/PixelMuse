import React from "react";

function home() {
  const [loading, setLoading] = React.useState(false);
  const [allPosts, setAllPosts] = React.useState(null);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w [500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
    </div>
  );
}

export default home;