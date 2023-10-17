import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebaseConfig";

// /src/logic/api/firebaseConfig.ts -> criar arquivo e copiar as chaves do firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)