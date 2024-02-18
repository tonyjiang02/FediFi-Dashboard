"use client";

import { Menu } from "@/components/layout/Menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

// const title = "Next Mastodon";
// const description = "Mastodon client built with Next.js";

// export const metadata: Metadata = {
//   title,
//   description,
// };

export default function Layout({
  children,
  navbar,
  left,
  right,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  const defaultLayout = [265, 440, 655];
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SessionProvider>
      <html lang="en">
        <body className="bg-black p-3">
          <div className="overflow-hidden rounded-lg border bg-background shadow">
            <Menu />
            <div className="border-t">
              <div className="bg-background">
                <div
                  className="w-screen h-screen"
                  style={{ maxHeight: "calc(100vh - 5.5rem)" }}
                >
                  <ResizablePanelGroup
                    direction="horizontal"
                    onLayout={(sizes: number[]) => {
                      document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes,
                      )}`;
                    }}
                    className="h-full max-h-[800px] items-stretch"
                  >
                    <ResizableHandle />
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={56} minSize={35}>
                      <div className="p-8">{right}</div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
