"use client";

import { Button } from "@/components/ui/button";

export default function PlaylistsClient() {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col items-center justify-center gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Playlists
        </h1>
        <p className="text-lg text-muted-foreground">
          You haven’t created any playlists yet.
        </p>
      </div>
      <Button size="lg" asChild>
        <a href="#">Create Playlist</a>
      </Button>
    </div>
  );
}