
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="rounded-lg bg-muted p-6 text-center">
          <h3 className="mb-2 text-lg font-medium">Something went wrong</h3>
          <p className="text-muted-foreground">
            The component could not be displayed
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
