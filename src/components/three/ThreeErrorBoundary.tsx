"use client";

import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ThreeErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // If 3D fails on a device/environment, disable it for future loads.
    try {
      localStorage.setItem("threeEnabled", "false");
      // eslint-disable-next-line no-console
      console.error("3D layer crashed, disabling threeEnabled:", error);
    } catch {}
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
