import EmptyState from "@/components/empty-state";
import React from "react";

const CancelledState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        title="Meeting Cancelled"
        description="This meeting was cancelled."
        image="/cancelled.svg"
      />
    </div>
  );
};

export default CancelledState;
