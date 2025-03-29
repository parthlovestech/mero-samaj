
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import GlobeFallback from "./GlobeFallback";

// Dynamically import the GlobeVisualization component
const GlobeVisualization = lazy(() => 
  import("./GlobeVisualization").then(module => ({
    default: module.default
  })).catch(() => ({
    default: () => <GlobeFallback />
  }))
);

const SafeGlobeVisualization = ({ className = "" }: { className?: string }) => {
  return (
    <ErrorBoundary fallback={<GlobeFallback />}>
      <Suspense fallback={<GlobeFallback />}>
        <GlobeVisualization className={className} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SafeGlobeVisualization;
