"use client";

import { Button } from "@/components/ui/button";

export default function OverviewClient() {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col items-center justify-center gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Your Streaming Overview
        </h1>
        <p className="text-lg text-muted-foreground">
          No videos added yet. Get started by uploading your first video.
        </p>
      </div>
      <Button size="lg" asChild>
        <a href="/dashboard/videos">Upload Video</a>
      </Button>
    </div>
  );
}