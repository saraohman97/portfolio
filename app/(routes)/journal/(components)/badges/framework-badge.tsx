"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../../../../../components/ui/badge";
import { useCallback } from "react";
import qs from "query-string";

interface FrameworkBadgeProps {
  label: string;
  selected?: boolean;
}

const FrameworkBadge: React.FC<FrameworkBadgeProps> = ({ label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      framework: label,
    };

    if (params?.get("framework") === label) {
      delete updatedQuery.framework;
    }

    const url = qs.stringifyUrl(
      {
        url: "/journal",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <Badge
      onClick={handleClick}
      variant={selected ? "destructive" : "secondary"}
      className="cursor-pointer"
    >
      {label}
    </Badge>
  );
};

export default FrameworkBadge;
