"use client";

import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filter";
import DataPagination from "../components/data-pagination";
import { useRouter } from "next/navigation";

const AgentsView = () => {
  const router = useRouter();
  const [filters, setFilters] = useAgentsFilters();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/agents/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first agent"
          description="Create an agent to join your meetings. Each agent can be customized with specific instructions and can intereact with participants during the call."
        />
      )}
    </div>
  );
};

export default AgentsView;

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading agents"
      description="This may take a few seconds..."
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error while loading agents"
      description="Something went wrong, please try again later."
    />
  );
};
