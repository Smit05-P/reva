"use client";

import {
  Droplets, Zap, Microscope, Hospital, Target, Sparkles, Award, MapPin,
  Heart, Handshake, ArrowDownCircle, CircleDot, ShieldAlert, AlertCircle,
  Clock, ScanLine, Activity, BrainCircuit, Search, Eye, Pill, FlaskConical,
  ShieldCheck, Plane, Leaf, Phone, Mail, Plus, Minus, ChevronLeft, ChevronRight,
  User, Image as ImageIcon, X, CheckCircle, XCircle, Check, type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Droplets, Zap, Microscope, Hospital, Target, Sparkles, Award, MapPin,
  Heart, Handshake, ArrowDownCircle, CircleDot, ShieldAlert, AlertCircle,
  Clock, ScanLine, Activity, BrainCircuit, Search, Eye, Pill, FlaskConical,
  ShieldCheck, Plane, Leaf, Phone, Mail, Plus, Minus, ChevronLeft, ChevronRight,
  User, Image: ImageIcon, X, CheckCircle, XCircle, Check,
};

interface LucideIconProps extends LucideProps {
  name: string;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
