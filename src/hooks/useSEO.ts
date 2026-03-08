import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = description;
      document.head.appendChild(tag);
    }
  }, [title, description]);
}
