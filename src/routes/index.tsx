import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - raw html import
import bodyHtml from "../landing-body.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ship or Die — Ship a startup in 30 days, or get kicked out forever" },
      { name: "description", content: "Join a private crew of builders. Ship an app in 30 days, or get marked overboard." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Ship or Die" },
      { property: "og:description", content: "Ship an app in 30 days, or get kicked out forever." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: "/sod/base.css" },
      { rel: "stylesheet", href: "/sod/hero.css" },
      { rel: "stylesheet", href: "/sod/sections.css" },
    ],
  }),
  component: Page,
});

function Page() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure html/body don't lock scroll inside iframes
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    const scripts = ["/sod/scene.js", "/sod/content.js"];
    const tags: HTMLScriptElement[] = [];
    scripts.forEach((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
      tags.push(s);
    });
    return () => {
      tags.forEach((t) => t.remove());
    };
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
