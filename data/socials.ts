// Verified against santhosh18v/Personal-Portfolio and its bundled résumé.
export const socials = {
  github: "https://github.com/santhosh18v",
  email: "thungasanthoshkumarreddy@gmail.com" as string | null,
  linkedin: "https://linkedin.com/in/thunga-santhosh-reddy" as string | null,
  resume: "/resume.pdf" as string | null,
  phone: "+919014743783",
  phoneLabel: "+91 9014743783",
};
// Default production domain is the homepage listed by the portfolio repository.
export const siteUrl = (
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://santhoshreddy.vercel.app")
).replace(/\/$/, "");
