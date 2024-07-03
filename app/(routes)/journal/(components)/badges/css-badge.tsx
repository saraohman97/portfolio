"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../../../../../components/ui/badge";
import { useCallback } from "react";
import qs from "query-string";

interface BadgeProps {
  label: string;
  selected?: boolean;
}

const CssBadge: React.FC<BadgeProps> = ({ label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      css: label,
    };

    if (params?.get("css") === label) {
      delete updatedQuery.css;
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

export default CssBadge;
