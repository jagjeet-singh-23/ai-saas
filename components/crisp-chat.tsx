"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0cca5f34-0262-4ab3-9572-8c18a32f3418");
  }, []);

  return null;
};
