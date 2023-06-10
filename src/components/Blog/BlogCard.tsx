import * as React from "react";
import Image from "next/image";
import { getHumanDateFromSlashDate, getMonthName } from "@/utils/DateUtils";
import {
    CategoryAbbreviation,
    ContentCategory,
    contentCategories,
} from "@/utils/ContentCategories";
import Chip from "@/components/Chip";
interface BlogCardProps {
    title: string;
    date: string;
    icon: string;
    slug: string;
    categories: CategoryAbbreviation[];
}

function BlogCard({ title, date, icon, slug, categories }: BlogCardProps) {
    return (
        <a href={`/blog/${slug}`}>
            <div className=" hover:border-neutral-600 border-neutral-800 border-2 rounded-xl bg-neutral-800 px-8 py-6 text-left w-full">
                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between items-center">
                    <Image src={icon} alt="" width={64} height={64} />
                    <div className="flex flex-col ">
                        <div className="text-xl font-bold w-full h-full">{title}</div>
                        <div className="font-light text-md md:text-right text-center">
                            {getHumanDateFromSlashDate(date)}
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center md:justify-end items-center  pt-4">
                    {categories.map((categoryAbbreviation, index) => {
                        const fullCategory: ContentCategory | undefined =
                            contentCategories.find(
                                (category) =>
                                    category.abbreviation ==
                                    categoryAbbreviation
                            );
                        if (fullCategory)
                            return (
                                <Chip
                                    className="w-24 border-neutral-500 bg-neutral-700 text-slate-200"
                                    title={fullCategory?.abbreviation}
                                />
                            );

                        return null;
                    })}
                </div>
            </div>
        </a>
    );
}

export default BlogCard;
