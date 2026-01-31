// 环境配置 - 简化版本
// 在Vite中，直接使用import.meta.env需要类型定义，这里简化处理
// 使用腾讯云COS URL作为主要视频源，开发和生产环境都使用同样的URL
// 这样可以确保视频在不同环境下都能正常播放

import { TENCENT_COS_URLS } from './videoUrls';

// 直接使用腾讯云COS URL，不进行环境切换
// 这样可以避免开发和生产环境的配置问题
export const getVideoUrl = (videoKey: keyof typeof TENCENT_COS_URLS) => {
  return TENCENT_COS_URLS[videoKey];
};

// 如果需要，可以在开发环境保留本地文件访问
// 但为了简化，统一使用腾讯云COS
