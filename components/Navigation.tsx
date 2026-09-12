"use client";
import {useEffect,useState} from "react";
import {ArrowUpRight,Menu} from "lucide-react";
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription,SheetClose} from "@/components/ui/sheet";
import {socials} from "@/data/socials";
export default function Navigation({detail=false}:{detail?:boolean}){
 const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>70);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
 const links=[['About','about'],['Work','work'],['Journey','journey'],['Contact','contact']];
 return <header className={`site-nav ${scrolled||detail?'scrolled':''}`}><a className="wordmark" href={detail?'/':'#home'} aria-label="Santhosh home"><span className="wordmark-symbol" aria-hidden="true">s.</span>SANTHOSH</a><nav className="nav-links" aria-label="Main navigation">{links.map(([text,id])=><a key={id} href={`${detail?'/':''}#${id}`}>{text}</a>)}</nav>{socials.resume?<a className="nav-resume" href={socials.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={15}/></a>:<span className="nav-resume resume-pending" title="Resume has not been added yet">Resume <span className="pending-tag">Soon</span></span>}<Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><button className="mobile-menu" aria-label="Open navigation"><Menu size={24}/></button></SheetTrigger><SheetContent className="mobile-sheet" data-lenis-prevent><SheetTitle className="eyebrow">The engineering universe</SheetTitle><SheetDescription className="sr-only">Choose a chapter of Santhosh's portfolio.</SheetDescription><nav aria-label="Mobile navigation">{links.map(([text,id],i)=><SheetClose asChild key={id}><a href={`${detail?'/':''}#${id}`}><span>0{i+1}</span>{text}</a></SheetClose>)}{socials.resume&&<SheetClose asChild><a href={socials.resume} target="_blank" rel="noopener noreferrer"><span>↗</span>Resume</a></SheetClose>}</nav><p className="eyebrow">SANTHOSH KUMAR REDDY<br/>SOFTWARE ENGINEER · AI DEVELOPER</p></SheetContent></Sheet></header>
}
