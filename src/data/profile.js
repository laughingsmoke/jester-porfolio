// Shared profile details used across the site.

// Drop your résumé at src/assets/resume.pdf and the "Download Résumé"
// buttons appear automatically. Without the file, they stay hidden.
const resumeFiles = import.meta.glob("../assets/resume.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

export const resumeUrl = Object.values(resumeFiles)[0] ?? null;

export const profile = {
  name: "Jester Glory",
  role: "Full-Stack Web Developer",
  location: "Surigao, Philippines",
  email: "jesterglory15@gmail.com",
  phone: "+63 999 671 6744",
  phoneHref: "tel:+639996716744",
  github: "https://github.com/laughingsmoke",
  linkedin: "https://www.linkedin.com/in/jester-glory-6055b8380/",
  facebook: "https://www.facebook.com/jester.pabas/",
};
