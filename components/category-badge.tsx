'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "./ui/badge";
import { useCallback } from "react";
import qs from 'query-string'

interface CategoryBadgeProps {
  label: string;
  selected?: boolean;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ label, selected }) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery, 
            category: label
        }

        if(params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true })

        router.push(url)
    }, [label, params, router])

  return <Badge onClick={handleClick} variant={selected ? "default" : "outline"}>{label}</Badge>;
};

export default CategoryBadge;
