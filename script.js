// Replace with the real business WhatsApp number, country code + number, digits only.
const WHATSAPP_NUMBER = "919999999999";
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation"); menuToggle.textContent = "☰";
}));
const filterButtons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");
const projectGrid = document.querySelector(".projects");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => item.classList.remove("active")); button.classList.add("active");
  const filter = button.dataset.filter;
  projects.forEach(project => project.classList.toggle("hidden", filter !== "all" && !project.dataset.category.split(" ").includes(filter)));
  projectGrid.classList.toggle("filtered", filter !== "all");
}));
document.getElementById("projectForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const type = document.getElementById("projectType").value;
  const budget = document.getElementById("budget").value;
  const notes = document.getElementById("notes").value.trim();
  if (!name || !type) { alert("Please enter your name and choose a project type."); return; }
  if (WHATSAPP_NUMBER === "919999999999") { alert("This is a demo. Open script.js and replace the placeholder WhatsApp number before testing enquiries."); return; }
  const message = `Hello Forma House! I'd like to enquire about an interior design project.\nName: ${name}\nProject: ${type}\nBudget: ${budget}\nAdditional details: ${notes || "Not provided"}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
