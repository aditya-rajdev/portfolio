const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

const anchors=[...document.querySelectorAll(".anchor-nav a")];
const ids=anchors.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      anchors.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  })
},{rootMargin:"-25% 0px -65% 0px"});
ids.forEach(s=>sectionObserver.observe(s));

document.querySelectorAll(".anchor-nav a").forEach(a=>{
  a.addEventListener("click",e=>{
    const el=document.querySelector(a.getAttribute("href"));
    if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});
