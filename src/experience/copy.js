export const experienceCopy = {
  ru: {
    journey: "Путь груза",
    scroll: "Листайте — меняйте вид транспорта",
    note: "Иллюстрация возможных этапов перевозки",
    open: "Подробнее об услуге",
    pause: "Остановить видео",
    play: "Включить видео",
  },
  kk: {
    journey: "Жүктің жолы",
    scroll: "Төмен жылжытыңыз — көлік түрін өзгертіңіз",
    note: "Тасымалдаудың ықтимал кезеңдерінің көрінісі",
    open: "Қызмет туралы толығырақ",
    pause: "Бейнені тоқтату",
    play: "Бейнені қосу",
  },
  en: {
    journey: "The cargo journey",
    scroll: "Scroll to change the mode of transport",
    note: "An illustration of possible transport stages",
    open: "Explore this service",
    pause: "Pause video",
    play: "Play video",
  },
  zh: {
    journey: "货物的旅程",
    scroll: "滚动以切换运输方式",
    note: "可能的运输阶段示意图",
    open: "了解此服务",
    pause: "暂停视频",
    play: "播放视频",
  },
};
export const journeyStages = [
  {
    key: "container",
    slug: "container",
    photo: "multimodal",
    description: "multimodal",
    mode: "port",
  },
  {
    key: "rail",
    slug: "railway",
    photo: "rail",
    description: "rail",
    mode: "rail",
  },
  {
    key: "auto",
    slug: "auto",
    photo: "auto",
    description: "road",
    mode: "road",
  },
  { key: "avia", slug: "air", photo: "air", description: "air", mode: "air" },
];
export function journeyProgress(top, height, viewport, inset = 90) {
  return Math.max(
    0,
    Math.min(1, (inset - top) / Math.max(1, height - viewport + inset)),
  );
}
export function journeyIndex(progress) {
  return Math.min(3, Math.max(0, Math.floor(progress * 4)));
}
