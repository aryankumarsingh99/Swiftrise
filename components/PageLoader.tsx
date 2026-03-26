"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SmartLoader = dynamic(() => import("@/components/home/SmartLoader"), { ssr: false });

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SmartLoader />}
      <div style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? "none" : "auto" }}>{children}</div>
    </>
  );
}