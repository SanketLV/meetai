"use client";

import { Button } from "@/components/ui/button";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeViewPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <Image src="/logo.svg" alt="Meet.AI Logo" width={92} height={92} />
      <h1 className="text-2xl font-bold mt-4">Welcome to Meet.AI</h1>
      <p className="text-muted-foreground mt-2 max-w-md">
        Your intelligent meeting assistant. Schedule, manage, and get summaries
        of your meetings all in one place. Get started by navigating to the
        meetings page.
      </p>
      <Button asChild className="mt-6">
        <Link href="/meetings">
          <VideoIcon className="mr-2 size-4" />
          Go to Meetings
        </Link>
      </Button>
    </div>
  );
};

export default HomeViewPage;
