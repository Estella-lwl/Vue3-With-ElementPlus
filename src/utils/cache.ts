class LocalCache {
  // 设置缓存：
  setCache(key: string, value: any) {
    // 注意value可能输入any类型，setItem要求value里字符串，需要转换：
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  // 获取缓存：
  getCache(key: string) {
    // 原先将value转字符串了，这里再将它转回对象：
    const value = window.localStorage.getItem(key);
    // 有值的情况下再return出去：
    if (value) {
      return JSON.parse(value);
    }
  }

  // 移除某个缓存：
  removeCache(key: string) {
    window.localStorage.removeItem(key);
  }

  // 清空所有缓存：
  clearCache() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
