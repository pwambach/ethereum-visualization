export function gweiToEther(gwei) {
  return gwei / 1e18;
}

export function toGwei(x) {
  return x / 10e8;
}

export function ellipsedHash(hash) {
  const start = hash.substr(0, 5);
  const end = hash.substr(-5, hash.length);
  return `${start}...${end}`;
}

export function isMobile() {
  const regx = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return Boolean(regx.test(navigator.userAgent));
}
