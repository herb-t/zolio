import gsap from "gsap";

const enterStaggerAnimation = item => {
  const tl = gsap.timeline();

  tl.to(
    item,
    {
      yPercent: '0',
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
      stagger: 0.075,
    }
  );

  return tl;
};

const leaveStaggerAnimation = item => {
  const tl = gsap.timeline();

  tl.to(item, {
    yPercent: '15',
    opacity: 0,
    duration: 0.01
  });

  return tl;
};

const enterProjectsAnimation = item => {
  const tl = gsap.timeline();

  tl.to(
    item,
    {
      yPercent: '0',
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.15)',
      stagger: 0.075,
    }
  );

  return tl;
};

const leaveProjectsAnimation = item => {
  const tl = gsap.timeline();

  tl.to(item, {
    yPercent: '20',
    opacity: 0,
    duration: 0.01
  });

  return tl;
};

const enterCloseBtn = item => {
  const tl = gsap.timeline();

  tl.to(
    item,
    {
      xPercent: '0',
      opacity: 1,
      duration: 0.2,
      rotate: 0,
      scale: 1,
      ease: 'back.out(1.15)',
    }
  );

  return tl;
};

const leaveCloseBtn = item => {
  const tl = gsap.timeline();

  tl.to(item, {
    xPercent: '30',
    opacity: 0,
    rotate: 45,
    scale: 0,
    duration: 0.06
  });

  return tl;
};

export {
  enterStaggerAnimation,
  leaveStaggerAnimation,
  enterProjectsAnimation,
  leaveProjectsAnimation,
  enterCloseBtn,
  leaveCloseBtn,
}