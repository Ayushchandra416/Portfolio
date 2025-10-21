"use client";

import { useThreeEnabled } from "./ThreeProvider";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

export function ThreeToggle() {
  const { enabled, setEnabled } = useThreeEnabled();
  return (
    <Button
      type="button"
      variant={enabled ? "default" : "outline"}
      size="sm"
      onClick={() => setEnabled(!enabled)}
      title={enabled ? "Disable 3D effects" : "Enable 3D effects"}
    >
  <Box className="mr-2 h-4 w-4" /> 3D: {enabled ? "On" : "Off"}
    </Button>
  );
}
