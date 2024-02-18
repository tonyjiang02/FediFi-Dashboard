"use client";

import Timeline from "@/components/feed/Timeline";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";

export default function StatusPageLeft({ params }: { params: { id: string } }) {
  // return <Timeline type={feedTypes.home} startFrom={params.id} />;
  return <Timeline type = {feedTypes.home} />
}
