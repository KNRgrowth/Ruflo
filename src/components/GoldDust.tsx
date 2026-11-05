import { useEffect, useRef } from "react";

/** Drifting brass dust particles behind the hero. */
const GoldDust = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Mote = { x: number; y: number; r: number; vy: number; vx: number; a: number; t: number };
    let W = 0, H = 0, motes: Mote[] = [], running = true, raf = 0;

    const spawn = (anywhere: boolean): Mote => ({
      x: Math.random() * W, y: anywhere ? Math.random() * H : H + 10,
      r: Math.random() * 1.6 + 0.3, vy: -(Math.random() * 0.25 + 0.06), vx: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.6 + 0.15, t: Math.random() * Math.PI * 2,
    });
    const size = () => {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      motes = Array.from({ length: Math.round(Math.min(90, (W * H) / 14000)) }, () => spawn(true));
    };
    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      motes.forEach((m, i) => {
        m.t += 0.02; m.x += m.vx + Math.sin(m.t) * 0.12; m.y += m.vy;
        if (m.y < -10) motes[i] = m = spawn(false);
        const tw = m.a * (0.6 + 0.4 * Math.sin(m.t * 1.7));
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4);
        g.addColorStop(0, `rgba(243,224,180,${tw})`);
        g.addColorStop(1, "rgba(184,148,90,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(frame);
    };
    size(); frame();
    window.addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; frame(); }
      else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
    });
    io.observe(canvas);
    return () => { running = false; cancelAnimationFrame(raf); window.removeEventListener("resize", size); io.disconnect(); };
  }, []);

  return <canvas ref={ref} className="hero__dust" aria-hidden="true" />;
};

export default GoldDust;
