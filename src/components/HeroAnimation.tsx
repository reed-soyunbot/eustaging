"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/documents/nueva-animacion.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );
}
