import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <>
      <div>
        <ContentLoader
          viewBox="0 0 200 30"
          backgroundColor="#1c1816"
          foregroundColor="#d3d3d3"
          foregroundOpacity={0.1}
        >
          {/* Only SVG shapes */}
          <rect x="0" y="17" rx="1" ry="1" width="50" height="7" />
        </ContentLoader>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ContentLoader
          viewBox="0 0 200 300"
          backgroundColor="#1c1816"
          foregroundColor="#d3d3d3"
          foregroundOpacity={0.1}
        >
          {/* Only SVG shapes */}
          <rect x="0" y="17" rx="5" ry="5" width="190" height="250" />
        </ContentLoader>
        <ContentLoader
          viewBox="0 0 200 300"
          backgroundColor="#1c1816"
          foregroundColor="#d3d3d3"
          foregroundOpacity={0.1}
        >
          {/* Only SVG shapes */}
          <rect x="0" y="17" rx="5" ry="5" width="190" height="250" />
        </ContentLoader>
        <ContentLoader
          viewBox="0 0 200 300"
          backgroundColor="#1c1816"
          foregroundColor="#d3d3d3"
          foregroundOpacity={0.1}
        >
          {/* Only SVG shapes */}
          <rect x="0" y="17" rx="5" ry="5" width="190" height="250" />
        </ContentLoader>
        <ContentLoader
          viewBox="0 0 200 300"
          backgroundColor="#1c1816"
          foregroundColor="#d3d3d3"
          foregroundOpacity={0.1}
        >
          {/* Only SVG shapes */}
          <rect x="0" y="17" rx="5" ry="5" width="190" height="250" />
        </ContentLoader>
      </div>
    </>
  );
}
