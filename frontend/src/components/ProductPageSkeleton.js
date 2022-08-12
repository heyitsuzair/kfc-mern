import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <ContentLoader
        viewBox="0 0 200 200"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="46" y="10" rx="4" ry="4" width="105" height="105" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 200 200"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <rect x="6" y="10" rx="4" ry="4" width="70" height="15" />
        <rect x="6" y="40" rx="4" ry="4" width="90" height="30" />
        <rect x="6" y="80" rx="4" ry="4" width="40" height="10" />
        <rect x="6" y="100" rx="4" ry="4" width="130" height="15" />
      </ContentLoader>
    </div>
  );
}
