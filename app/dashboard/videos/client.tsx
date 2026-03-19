"use client";

import { Button } from "@/components/ui/button";

export default function VideosClient() {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col items-center justify-center gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Video Library
        </h1>
        <p className="text-lg text-muted-foreground">
          Your library is empty. Upload videos to share with your audience.
        </p>
      </div>
      <Button size="lg" asChild>
        <a href="#">Upload Video</a>
      </Button>
    </div>
  );
}