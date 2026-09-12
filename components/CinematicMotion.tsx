"use client";
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";
export default function CinematicMotion(){useEffect(()=>{
 gsap.registerPlugin(ScrollTrigger);const media=gsap.matchMedia();let lenis:Lenis|undefined;let tick:((time:number)=>void)|undefined;
 media.add('(prefers-reduced-motion: no-preference)',()=>{
  lenis=new Lenis({duration:1.1,smoothWheel:true,anchors:false,prevent:node=>node.hasAttribute('data-lenis-prevent')});lenis.on('scroll',ScrollTrigger.update);tick=time=>lenis?.raf(time*1000);gsap.ticker.add(tick);
  // Let native fragment navigation own section links. Cancel wheel inertia so
  // an animation frame cannot pull the page back after the browser scrolls.
  const onAnchorClick=(event:MouseEvent)=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const link=event.composedPath().find((node):node is HTMLAnchorElement=>node instanceof HTMLAnchorElement);
   if(!link||!link.hasAttribute('href')||link.hasAttribute('download')||(link.target&&link.target!=='_self'))return;
   const destination=new URL(link.href,window.location.href);
   if(destination.origin===window.location.origin&&destination.pathname===window.location.pathname&&destination.search===window.location.search&&destination.hash){lenis?.stop();lenis?.start()}
  };
  document.addEventListener('click',onAnchorClick);
  gsap.fromTo('.portrait-wrap img',{scale:1.03},{scale:1.17,yPercent:7,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.hero-content',{yPercent:15,opacity:.35,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:35,opacity:0,duration:1.05,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 91%',once:true}}));
  gsap.fromTo('.universe-image',{scale:1.1,yPercent:-4},{scale:1,yPercent:4,ease:'none',scrollTrigger:{trigger:'.universe-stage',start:'top bottom',end:'bottom top',scrub:1.3}});
  gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el,i)=>gsap.fromTo(el,{y:35+(i%3)*10},{y:-25,ease:'none',scrollTrigger:{trigger:'.universe-stage',start:'top bottom',end:'bottom top',scrub:1+(i%2)*.4}}));
  gsap.utils.toArray<HTMLElement>('.exhibition-screen').forEach((el,i)=>gsap.fromTo(el,{rotateY:i%2?9:-9,rotateX:5,y:50,scale:.93},{rotateY:0,rotateX:0,y:-15,scale:1,ease:'none',scrollTrigger:{trigger:el.closest('.project-scene'),start:'top 85%',end:'bottom 35%',scrub:1.1}}));
  gsap.utils.toArray<HTMLElement>('.journey-chapter').forEach((el,i)=>gsap.from(el,{y:40,opacity:.3,duration:1,delay:i*.13,scrollTrigger:{trigger:'.timeline-stage',start:'top 78%',once:true}}));
  const refresh=()=>ScrollTrigger.refresh();document.fonts.ready.then(refresh);window.addEventListener('load',refresh);
  return()=>{document.removeEventListener('click',onAnchorClick);window.removeEventListener('load',refresh);if(tick)gsap.ticker.remove(tick);lenis?.destroy()};
 });return()=>{media.revert()}
},[]);return null}
