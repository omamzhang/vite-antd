/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_APP_API_PREFIX: string;
    readonly VITE_APP_API_URL: string;
    readonly VITE_APP_WEB_TITLE: string;
    readonly VITE_APP_VERSION: string;
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  