export const initOptions = {
  framerate: 60,
  G: 250, // 내 맘대로 중력상수
  START_SPEED: 30, // 초기화 시 물체들의 속도
  OBJECT_COUNT: 40, // 초기화 후 렌더 될 물체 개수
  TRACE_LENGTH: 100, // 물체의 이동 궤적 길이
  MIN_MASS: 400, // 물체들의 최소 질량
  MAX_MASS: 3000, // 물체들의 최대 질량
  DENSITY: 0.15 // 물체들이 렌더되는 밀도
};
export const SPHERE_SIDES = 20;
export const MASS_FACTOR = 0.01;

//THREE

//https://evan-moon.github.io/2017/05/06/gravity-via-js-2/
