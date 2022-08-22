import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <>
      <ContentLoader
        viewBox="0 0 50 4"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="5" y="1" rx="0.2" ry="0.2" width="15" height="2" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 50 4"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="5" y="1" rx="0.2" ry="0.2" width="40" height="2" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 50 4"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="5" y="1" rx="0.2" ry="0.2" width="40" height="2" />
      </ContentLoader>
    </>
  );
}
