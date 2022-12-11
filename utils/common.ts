/**
 * 获得随机的重新验证时间, 单位分钟<p/>
 * exp: <p/>
 * min = 10, max = 15, step = 1,
 * @author ginga
 * @since 10/12/2022 下午8:58
 * @param min 最小值
 * @param max 最大值
 * @param step 步长
 * @return {number} 时长, 单位分钟
 **/
const getRandomRevalidate = (min: number, max: number, step: number): number => {
  return 60 * (Math.floor(Math.random() * (max - min) / step) * step + min);
}

// 重载getRandomRevalidate方法, 使得step默认为1
const getDefaultRandomRevalidate = (min: number, max: number): number => {
  return getRandomRevalidate(min, max, 1);
}

export {
  getRandomRevalidate,
  getDefaultRandomRevalidate
};