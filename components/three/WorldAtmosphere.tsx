"use client";
import {useEffect,useRef} from "react";
export default function WorldAtmosphere(){
 const container=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const root=container.current;if(!root||window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches)return;
  let disposed=false;let cleanup=()=>{};
  const observer=new IntersectionObserver(async entries=>{if(!entries.some(e=>e.isIntersecting))return;observer.disconnect();
   try{const T=await import('three');if(disposed)return;
    const canvas=document.createElement('canvas');const context=canvas.getContext('webgl2',{alpha:true,antialias:false,powerPreference:'low-power'});if(!context)return;
    const scene=new T.Scene();const camera=new T.PerspectiveCamera(50,root.clientWidth/root.clientHeight,.1,100);camera.position.z=8;
    const renderer=new T.WebGLRenderer({canvas,context,alpha:true,antialias:false,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25));renderer.setSize(root.clientWidth,root.clientHeight);renderer.setClearColor(0x000000,0);root.appendChild(renderer.domElement);
    const positions=new Float32Array(150*3);for(let i=0;i<150;i++){positions[i*3]=Math.sin(i*137.3)*16;positions[i*3+1]=Math.cos(i*91.1)*9;positions[i*3+2]=Math.sin(i*53.8)*6;}
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));const material=new T.PointsMaterial({color:0xe2b678,size:.025,transparent:true,opacity:.4,depthWrite:false});const dust=new T.Points(geometry,material);scene.add(dust);
    let visible=true,frame=0;const render=()=>{if(disposed||!visible||document.hidden)return;const offset=root.getBoundingClientRect().top/window.innerHeight;dust.rotation.z=performance.now()*.000007;camera.position.y=offset*.15;renderer.render(scene,camera);frame=requestAnimationFrame(render);};
    const start=()=>{cancelAnimationFrame(frame);if(visible&&!document.hidden)frame=requestAnimationFrame(render)};
    const visibility=new IntersectionObserver(e=>{visible=e[0].isIntersecting;start()});visibility.observe(root);
    const resize=new ResizeObserver(()=>{camera.aspect=root.clientWidth/root.clientHeight;camera.updateProjectionMatrix();renderer.setSize(root.clientWidth,root.clientHeight);start()});resize.observe(root);document.addEventListener('visibilitychange',start);
    const lost=(e:Event)=>{e.preventDefault();cancelAnimationFrame(frame);renderer.domElement.style.display='none'};renderer.domElement.addEventListener('webglcontextlost',lost);start();
    cleanup=()=>{cancelAnimationFrame(frame);visibility.disconnect();resize.disconnect();document.removeEventListener('visibilitychange',start);renderer.domElement.removeEventListener('webglcontextlost',lost);geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove()};
   }catch{/* Atmospheric enhancement is optional; the complete DOM scene stays visible. */}
  },{rootMargin:'250px'});observer.observe(root);return()=>{disposed=true;observer.disconnect();cleanup()}
 },[]);return <div className="world-atmosphere" ref={container} aria-hidden="true"/>;
}
