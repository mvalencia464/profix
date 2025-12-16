/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_CERTIFICATIONS: string;
  readonly VITE_CERTIFICATIONS_LIST: string;
  readonly VITE_BRANDFETCH_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
