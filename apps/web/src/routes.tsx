'use client';

import { ChartScatter, Shapes, Glasses, School, LayoutDashboard, NotebookTabs } from "lucide-react";
import { ReactElement } from "react";

import { useI18n } from "./locale/client";

export interface RouteProps {
    title: string;
    icon: ReactElement;
    path: string;
}

export interface RouteGroup {
    groupName: string;
    icon: ReactElement;
    routes: RouteProps[];
}

export type RouteDefinition = RouteProps | RouteGroup;

export function getRouteDashboard(): RouteDefinition[] {
    const t = useI18n();

    return [
        {
            title: t("dashboard.routes.dashboard"),
            icon: <LayoutDashboard />,
            path: "/"
        },
        {
            groupName: t("dashboard.routes.class"),
            icon: <NotebookTabs/>,
            routes: [
                {
                    title: "05",
                    icon: <Glasses />,
                    path: "/class/05"
                },
                {
                    title: "06",
                    icon: <School />,
                    path: "/class/06"
                }
            ]
        },
        {
            title: "Tests",
            icon: <ChartScatter />,
            path: "/diagram"
        },
        
    ];
}

