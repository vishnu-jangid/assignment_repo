export const isReachable = async (url) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'Request timed out');
  });
  const request = fetch(url);
  try {
    await Promise.race([timeout, request]);
    return true;
  } catch (error) {
    return false
  }
};
