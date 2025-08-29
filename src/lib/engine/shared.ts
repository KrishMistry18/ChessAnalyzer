import { EngineName } from "@/types/enums";
import { Stockfish11 } from "./stockfish11";
import { Stockfish16 } from "./stockfish16";
import { Stockfish16_1 } from "./stockfish16_1";
import { Stockfish17 } from "./stockfish17";

export const isWasmSupported = () => {
  if (typeof WebAssembly === 'undefined') {
    return false; // Default fallback for server-side rendering
  }
  
  return (
    typeof WebAssembly === "object" &&
    WebAssembly.validate(
      Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
    )
  );
};

export const isMultiThreadSupported = () => {
  if (typeof SharedArrayBuffer === 'undefined') {
    return false; // Default fallback for server-side rendering
  }
  
  try {
    return SharedArrayBuffer !== undefined && !isIosDevice();
  } catch {
    return false;
  }
};

export const isIosDevice = () => {
  if (typeof navigator === 'undefined') {
    return false; // Default fallback for server-side rendering
  }
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const isMobileDevice = () => {
  if (typeof navigator === 'undefined') {
    return false; // Default fallback for server-side rendering
  }
  return isIosDevice() || /Android|Opera Mini/i.test(navigator.userAgent);
};

export const isEngineSupported = (name: EngineName): boolean => {
  switch (name) {
    case EngineName.Stockfish17:
    case EngineName.Stockfish17Lite:
      return Stockfish17.isSupported();
    case EngineName.Stockfish16_1:
    case EngineName.Stockfish16_1Lite:
      return Stockfish16_1.isSupported();
    case EngineName.Stockfish16:
    case EngineName.Stockfish16NNUE:
      return Stockfish16.isSupported();
    case EngineName.Stockfish11:
      return Stockfish11.isSupported();
  }
};
