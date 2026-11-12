export const experienceCopy = {
  ru: {
    journey: "Путь груза",
    scroll: "Листайте — меняйте вид транспорта",
    note: "Иллюстрация возможных этапов перевозки",
    next: "Исследовать контейнер",
    container: "Логистика в деталях",
    intro:
      "Выберите направление. Поверните контейнер, чтобы рассмотреть его со всех сторон.",
    rotate: "Вращайте мышью или клавишами ← → ↑ ↓",
    touch: "Проведите влево или вправо для поворота",
    reset: "Вернуть ракурс",
    open: "Подробнее об услуге",
    choose: "Выберите услугу",
    model: "Интерактивная модель контейнера",
    pause: "Остановить видео",
    play: "Включить видео",
  },
  kk: {
    journey: "Жүктің жолы",
    scroll: "Төмен жылжытыңыз — көлік түрін өзгертіңіз",
    note: "Тасымалдаудың ықтимал кезеңдерінің көрінісі",
    next: "Контейнерді зерттеу",
    container: "Логистика егжей-тегжейлі",
    intro: "Бағытты таңдаңыз. Контейнерді барлық жағынан көру үшін бұрыңыз.",
    rotate: "Тінтуірмен немесе ← → ↑ ↓ пернелерімен бұрыңыз",
    touch: "Бұру үшін солға немесе оңға сырғытыңыз",
    reset: "Бастапқы көрініс",
    open: "Қызмет туралы толығырақ",
    choose: "Қызметті таңдаңыз",
    model: "Контейнердің интерактивті моделі",
    pause: "Бейнені тоқтату",
    play: "Бейнені қосу",
  },
  en: {
    journey: "The cargo journey",
    scroll: "Scroll to change the mode of transport",
    note: "An illustration of possible transport stages",
    next: "Explore the container",
    container: "Logistics in detail",
    intro:
      "Choose a service. Rotate the container to explore it from every angle.",
    rotate: "Rotate with your mouse or the ← → ↑ ↓ keys",
    touch: "Swipe left or right to rotate",
    reset: "Reset view",
    open: "Explore this service",
    choose: "Choose a service",
    model: "Interactive container model",
    pause: "Pause video",
    play: "Play video",
  },
  zh: {
    journey: "货物的旅程",
    scroll: "滚动以切换运输方式",
    note: "可能的运输阶段示意图",
    next: "探索集装箱",
    container: "物流细节",
    intro: "选择一项服务。旋转集装箱，从各个角度查看。",
    rotate: "使用鼠标或 ← → ↑ ↓ 键旋转",
    touch: "向左或向右滑动以旋转",
    reset: "重置视角",
    open: "了解此服务",
    choose: "选择服务",
    model: "交互式集装箱模型",
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
