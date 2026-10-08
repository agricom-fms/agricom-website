"use client";

import { useState, useEffect } from "react";
import {
  WhatsApp,
  Linkedin,
  Twitter,
  Facebook,
  CopyIcon,
  Check,
  Share2,
} from "@/components/icons";

interface ShareButtonsProps {
  title: string;
  slug: string;
  variant?: "inline" | "card";
}

export default function ShareButtons({
  title,
  slug,
  variant = "inline",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://www.agricomassurance.com/blog/${slug}`;
    setCurrentUrl(url);

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, [slug]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const whatsappText = encodeURIComponent(`${title}\n\nRead more: ${currentUrl}`);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: WhatsApp,
      href: `https://api.whatsapp.com/send?text=${whatsappText}`,
      hoverBg: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
      label: "Share on WhatsApp",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
      label: "Share on LinkedIn",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      hoverBg: "hover:bg-black hover:text-white hover:border-black",
      label: "Share on X",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      hoverBg: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
      label: "Share on Facebook",
    },
  ];

  async function handleCopy() {
    if (!currentUrl) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const input = document.createElement("input");
        input.value = currentUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Could not copy link:", err);
    }
  }

  async function handleNativeShare() {
    if (navigator.share && currentUrl) {
      try {
        await navigator.share({
          title,
          url: currentUrl,
        });
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Native share failed:", err);
        }
      }
    }
  }

  if (variant === "card") {
    return (
      <div className="rounded-2xl border border-mist-200 bg-gradient-to-br from-mist-50/70 via-white to-green-50/30 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Share2 className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-display text-base font-bold text-strong">
                Share this article
              </h3>
            </div>
            <p className="text-xs text-muted max-w-md">
              Found this insightful? Share with fellow farmers, cooperatives, agribusiness leaders, or partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {canNativeShare && (
              <button
                type="button"
                onClick={handleNativeShare}
                aria-label="Share via device"
                title="Share via device"
                className="flex items-center gap-1.5 rounded-lg border border-mist-200 bg-white px-3.5 py-2 text-xs font-semibold text-strong transition-all duration-200 hover:border-green-600 hover:bg-green-50 hover:text-green-700 shadow-sm"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>
            )}

            {shareLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-mist-200 bg-white text-muted shadow-sm transition-all duration-200 ${item.hoverBg}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            <div className="relative">
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy article link"
                title="Copy article link"
                className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-all duration-200 shadow-sm ${
                  copied
                    ? "border-green-600 bg-green-50 text-green-700 font-bold"
                    : "border-mist-200 bg-white text-strong hover:border-mist-300 hover:bg-mist-50"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5 text-muted" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-900 px-2 py-0.5 text-[10px] font-semibold text-white shadow-md animate-fade-in">
                  Link copied to clipboard
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inline variant (header / metadata row)
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[11px] font-medium text-muted uppercase tracking-wider mr-1">
        Share:
      </span>

      {canNativeShare && (
        <button
          type="button"
          onClick={handleNativeShare}
          aria-label="Share via device"
          title="Share via device"
          className="flex h-7 w-7 items-center justify-center rounded-md border border-mist-200 bg-white text-muted transition-all duration-200 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
        >
          <Share2 className="h-3 w-3" />
        </button>
      )}

      {shareLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`flex h-7 w-7 items-center justify-center rounded-md border border-mist-200 bg-white text-muted transition-all duration-200 ${item.hoverBg}`}
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        );
      })}

      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          title={copied ? "Link Copied" : "Copy link"}
          className={`flex h-7 w-7 items-center justify-center rounded-md border transition-all duration-200 ${
            copied
              ? "border-green-600 bg-green-50 text-green-700"
              : "border-mist-200 bg-white text-muted hover:border-mist-300 hover:text-strong hover:bg-mist-50"
          }`}
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-600" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
        </button>

        {copied && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-900 px-1.5 py-0.5 text-[9px] font-medium text-white shadow">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
