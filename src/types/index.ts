// ====================================
// 共通型定義
// ====================================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success?: boolean;
  error?: string;
}
