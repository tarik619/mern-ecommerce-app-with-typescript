export default function Loader() {
  return <div>Loading...</div>;
}

export function Skeleton({ width = "unset" }: { width?: string }) {
  return (
    <div className="skeleton-loader" style={{ width }}>
      <div className="skeleton-shape"></div>
      <div className="skeleton-shape"></div>
      <div className="skeleton-shape"></div>
    </div>
  );
}
