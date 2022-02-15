// circle.js
import * as math from './math/index.js';

export function circumference(r) {
  return math.product(2, math.pi, r);
}
