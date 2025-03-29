
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import GlobeFallback from "./GlobeFallback";

// Dynamically import the GlobeVisualization component
const GlobeVisualization = lazy(() => 
  import("./GlobeVisualization").catch(() => ({
    default: () => <GlobeFallback />
  }))
);

const SafeGlobeVisualization = () => {
  return (
    <ErrorBoundary fallback={<GlobeFallback />}>
      <Suspense fallback={<GlobeFallback />}>
        <GlobeVisualization />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SafeGlobeVisualization;
