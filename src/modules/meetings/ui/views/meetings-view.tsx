"use client";

import { DataTable } from "@/components/data-table";
import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { columns } from "../components/columns";
import EmptyState from "@/components/empty-state";
import { useMeetingsFilters } from "../../hooks/use-meetings-filter";
import DataPagination from "../components/data-pagination";
import { useRouter } from "next/navigation";

const MeetingsView = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filters, setFilters] = useMeetingsFilters();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({ ...filters })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first Meeting"
          description="Schedule a meeting to connect with others. Each meeting lets you collaborate, share ideas, and interact with participants in real time."
        />
      )}
    </div>
  );
};

export default MeetingsView;

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading meetings"
      description="This may take a few seconds..."
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error while loading meetings"
      description="Something went wrong, please try again later."
    />
  );
};
