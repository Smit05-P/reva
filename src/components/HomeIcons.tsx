"use client";

import LucideIcon from "./LucideIcon";
import { type LucideProps } from "lucide-react";

interface HomeIconsProps extends LucideProps {
  name: string;
}

export default function HomeIcons({ name, size = 24, strokeWidth = 2, ...props }: HomeIconsProps) {
  return <LucideIcon name={name} size={size} strokeWidth={strokeWidth} {...props} />;
}
