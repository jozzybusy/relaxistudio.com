import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  shuffleDirection?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  maxDelay?: number;
  ease?: string;
  threshold?: number;
  rootMargin?: string;
  tag?: keyof JSX.IntrinsicElements;
  textAlign?: 'left' | 'center' | 'right';
  onShuffleComplete?: () => void;
  shuffleTimes?: number;
  animationMode?: 'random' | 'evenodd';
  loop?: boolean;
  loopDelay?: number;
  stagger?: number;
  scrambleCharset?: string;
  colorFrom?: string;
  colorTo?: string;
  triggerOnce?: boolean;
  respectReducedMotion?: boolean;
  triggerOnHover?: boolean;
}

const Shuffle = ({ ...props }: ShuffleProps) => {
  const {
    text,
    className = '',
    style = {},
    shuffleDirection = 'right',
    duration = 0.35,
    maxDelay = 0,
    ease = 'power3.out',
    threshold = 0.1,
    rootMargin = '-100px',
    tag = 'p',
    textAlign = 'center',
    onShuffleComplete,
    shuffleTimes = 1,
    animationMode = 'evenodd',
    loop = false,
    loopDelay = 0,
    stagger = 0.03,
    scrambleCharset = '',
    colorFrom,
    colorTo,
    triggerOnce = true,
    respectReducedMotion = true,
    triggerOnHover = true
  } = props;
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef<((event: Event) => void) | null>(null);
  const charsRef = useRef<HTMLElement[]>([]);

  const userHasFont = useMemo(
    () => (style && style.fontFamily) || (className && /font[-[]/i.test(className)),
    [style, className]
  );

  const scrollTriggerStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? `-=${Math.abs(mv)}${mu}` : `+=${mv}${mu}`;
    return `top ${startPct}%${sign}`;
  }, [threshold, rootMargin]);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;
      charsRef.current = [];

      const chars = text.split('');
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'shuffle-char inline-block';
        span.style.display = 'inline-block';
        span.style.whiteSpace = 'pre';
        el.appendChild(span);
        charsRef.current.push(span);
      });

      const rolls = Math.max(1, Math.floor(shuffleTimes));
      const strips: HTMLElement[] = [];

      charsRef.current.forEach((ch, i) => {
        const w = ch.getBoundingClientRect().width;
        const h = ch.getBoundingClientRect().height;
        if (!w) return;

        const wrap = document.createElement('div');
        wrap.className = 'inline-block overflow-hidden text-left';
        Object.assign(wrap.style, {
          width: w + 'px',
          height: shuffleDirection === 'up' || shuffleDirection === 'down' ? h + 'px' : 'auto',
          verticalAlign: 'bottom',
          display: 'inline-block',
          position: 'relative'
        });

        const inner = document.createElement('div');
        inner.className = 'inline-block will-change-transform origin-left';
        inner.style.display = 'inline-block';
        inner.style.whiteSpace = 'nowrap';

        wrap.appendChild(inner);

        const firstOrig = ch.cloneNode(true) as HTMLElement;
        firstOrig.style.width = w + 'px';
        firstOrig.style.display = 'block';
        if (shuffleDirection === 'up' || shuffleDirection === 'down') {
          firstOrig.style.display = 'block';
        } else {
          firstOrig.style.display = 'inline-block';
        }

        inner.appendChild(firstOrig);
        for (let k = 0; k < rolls; k++) {
          const c = ch.cloneNode(true) as HTMLElement;
          if (scrambleCharset) c.textContent = scrambleCharset[Math.floor(Math.random() * scrambleCharset.length)];
          if (shuffleDirection === 'up' || shuffleDirection === 'down') {
            c.style.display = 'block';
          } else {
            c.style.display = 'inline-block';
          }
          c.style.width = w + 'px';
          inner.appendChild(c);
        }
        inner.appendChild(ch);

        ch.style.display = shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block';
        ch.style.width = w + 'px';

        const steps = rolls + 1;

        if (shuffleDirection === 'right' || shuffleDirection === 'down') {
          const firstCopy = inner.firstElementChild;
          const real = inner.lastElementChild;
          if (real) inner.insertBefore(real, inner.firstChild);
          if (firstCopy) inner.appendChild(firstCopy);
        }

        if (ch.parentNode) {
          ch.parentNode.replaceChild(wrap, ch);
        }
        strips.push(inner);
      });

      const play = () => {
        if (!strips.length) return;
        playingRef.current = true;

        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            const startX = shuffleDirection === 'right' ? -strips.length * 10 : 0;
            const finalX = 0;
            const startY = shuffleDirection === 'down' ? -strips.length * 10 : 0;
            const finalY = 0;
            
            if (isVertical) {
              gsap.set(strips, { y: startY });
            } else {
              gsap.set(strips, { x: startX });
            }
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
            }
          }
        });

        if (animationMode === 'evenodd') {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;

          if (odd.length) {
            tl.to(odd, {
              x: 0,
              y: 0,
              duration,
              ease,
              force3D: true,
              stagger
            }, 0);
          }
          if (even.length) {
            tl.to(even, {
              x: 0,
              y: 0,
              duration,
              ease,
              force3D: true,
              stagger
            }, evenStart);
          }
        } else {
          strips.forEach((strip, i) => {
            const d = Math.random() * maxDelay;
            tl.to(strip, {
              x: 0,
              y: 0,
              duration,
              ease,
              force3D: true
            }, d);
            if (colorFrom && colorTo) {
              tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
            }
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        const handler = () => {
          if (playingRef.current) return;
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({ trigger: el, start: scrollTriggerStart, once: triggerOnce, onEnter: create });

      return () => {
        st.kill();
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
        }
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        scrollTriggerStart,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover,
        onShuffleComplete,
        userHasFont
      ],
      scope: ref
    }
  );

  const baseTw = 'inline-block whitespace-normal break-words will-change-transform text-[4rem] leading-none font-tech-logo';
  const classes = useMemo(
    () => `${baseTw} ${ready ? 'visible' : 'invisible'} ${className}`.trim(),
    [baseTw, ready, className]
  );
  const Tag = tag as any;
  const commonStyle = useMemo(() => ({ textAlign, ...style }), [textAlign, style]);

  return (
    <Tag ref={ref} className={classes} style={commonStyle}>
      {text}
    </Tag>
  );
};

export default Shuffle;
