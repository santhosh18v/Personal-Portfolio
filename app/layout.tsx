import type { Metadata } from "next";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";
import {siteUrl} from "@/data/socials";
export const metadata: Metadata={metadataBase:new URL(siteUrl),alternates:{canonical:siteUrl},title:"Santhosh Kumar Reddy | Software Engineer & AI Developer",description:"Portfolio of Santhosh Kumar Reddy — software engineer building full-stack applications, AI systems, and intelligent engineering products.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},openGraph:{title:"Santhosh — Engineering Universe",description:"Engineering software. Building intelligent systems.",type:"website"},twitter:{card:"summary",title:"Santhosh — Engineering Universe",description:"Software Engineering • Full Stack • AI Systems"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
