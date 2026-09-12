// Verified against santhosh18v/Personal-Portfolio and its bundled résumé.
export const socials = {
 github:"https://github.com/santhosh18v",
 email:"thungasanthoshkumarreddy@gmail.com" as string|null,
 linkedin:"https://linkedin.com/in/thunga-santhosh-reddy" as string|null,
 resume:"/resume.pdf" as string|null,
 phone:"+919014743783",
 phoneLabel:"+91 9014743783",
};
export const siteUrl = (process.env.SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")).replace(/\/$/, "");
