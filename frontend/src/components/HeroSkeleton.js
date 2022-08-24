import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <>
      <ContentLoader
        viewBox="0 0 200 100"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="0" y="17" rx="4" ry="4" width="200" height="60" />
      </ContentLoader>
    </>
  );
}
