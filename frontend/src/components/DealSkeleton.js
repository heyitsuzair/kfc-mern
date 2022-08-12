import ContentLoader from "react-content-loader";

export default function HeroSkeleton() {
  return (
    <div style={{ display: "flex" }}>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 500 400"
        backgroundColor="#1c1816"
        foregroundColor="#d3d3d3"
        foregroundOpacity={0.1}
      >
        {/* Only SVG shapes */}
        <circle cx="52%" cy="55%" r="100" fill="black" />
      </ContentLoader>
    </div>
  );
}
