import type { AnimalProfile, TraitKey, TraitVector } from '@/domain/totem/types';

export const animals: AnimalProfile[] = [
  {
    "code": "lion",
    "name": "Лев",
    "traits": {
      "extraversion": 82,
      "openness": 42,
      "self_control": 66,
      "agreeableness": 38,
      "emotional_stability": 78,
      "dominance": 96,
      "adaptability": 38
    },
    "sortOrder": 0,
    "title": "Публичная сила и прямое лидерство.",
    "description": "Публичная сила и прямое лидерство. Лев подходит человеку, который не боится быть заметным, брать ответственность и задавать тон группе. Это не самый гибкий и не самый мягкий профиль: он скорее про статус, контроль и уверенность.",
    "imagePath": "/images/animals/lion.webp",
    "isActive": true
  },
  {
    "code": "wolf",
    "name": "Волк",
    "traits": {
      "extraversion": 58,
      "openness": 54,
      "self_control": 76,
      "agreeableness": 68,
      "emotional_stability": 72,
      "dominance": 72,
      "adaptability": 56
    },
    "sortOrder": 1,
    "title": "Командный стратег.",
    "description": "Командный стратег. Волк подходит человеку, которому важны свои люди, правила стаи, лояльность и распределённые роли. Это не одиночный демонстративный лидер, а устойчивый участник сильной группы.",
    "imagePath": "/images/animals/wolf.webp",
    "isActive": true
  },
  {
    "code": "fox",
    "name": "Лиса",
    "traits": {
      "extraversion": 42,
      "openness": 76,
      "self_control": 52,
      "agreeableness": 32,
      "emotional_stability": 56,
      "dominance": 44,
      "adaptability": 94
    },
    "sortOrder": 2,
    "title": "Гибкий наблюдатель и тактик.",
    "description": "Гибкий наблюдатель и тактик. Лиса подходит человеку, который не давит напрямую, а ищет обходной путь, быстро читает ситуацию и умеет менять поведение под контекст. Низкая мягкость здесь означает не жестокость, а осторожную дистанцию.",
    "imagePath": "/images/animals/fox.webp",
    "isActive": true
  },
  {
    "code": "bear",
    "name": "Медведь",
    "traits": {
      "extraversion": 28,
      "openness": 36,
      "self_control": 72,
      "agreeableness": 48,
      "emotional_stability": 86,
      "dominance": 82,
      "adaptability": 34
    },
    "sortOrder": 3,
    "title": "Спокойная автономная сила.",
    "description": "Спокойная автономная сила. Медведь подходит человеку, который не любит суету, не стремится постоянно быть среди людей, но способен жёстко обозначить границы. Его профиль — устойчивость, масса и внутренний запас.",
    "imagePath": "/images/animals/bear.webp",
    "isActive": true
  },
  {
    "code": "eagle",
    "name": "Орёл",
    "traits": {
      "extraversion": 24,
      "openness": 78,
      "self_control": 86,
      "agreeableness": 34,
      "emotional_stability": 82,
      "dominance": 74,
      "adaptability": 48
    },
    "sortOrder": 4,
    "title": "Дистанционный наблюдатель с амбицией.",
    "description": "Дистанционный наблюдатель с амбицией. Орёл подходит человеку, который предпочитает видеть систему сверху, держать фокус и действовать не из толпы, а из собственной позиции. Это профиль контроля, высоты и стратегического одиночества.",
    "imagePath": "/images/animals/eagle.webp",
    "isActive": true
  },
  {
    "code": "cat",
    "name": "Кот",
    "traits": {
      "extraversion": 32,
      "openness": 66,
      "self_control": 42,
      "agreeableness": 38,
      "emotional_stability": 60,
      "dominance": 52,
      "adaptability": 72
    },
    "sortOrder": 5,
    "title": "Независимый индивидуалист.",
    "description": "Независимый индивидуалист. Кот подходит человеку, который сам решает, когда быть рядом, а когда исчезнуть. Это гибкий, избирательный, комфортолюбивый тип без потребности постоянно доказывать доминирование.",
    "imagePath": "/images/animals/cat.webp",
    "isActive": true
  },
  {
    "code": "dog",
    "name": "Пёс",
    "traits": {
      "extraversion": 88,
      "openness": 42,
      "self_control": 62,
      "agreeableness": 94,
      "emotional_stability": 60,
      "dominance": 36,
      "adaptability": 46
    },
    "sortOrder": 6,
    "title": "Лояльный социальный союзник.",
    "description": "Лояльный социальный союзник. Пёс подходит человеку, которому важны контакт, поддержка, честная привязанность и свои люди. Это один из самых тёплых профилей: много доброжелательности, много социальной энергии, мало холодного контроля.",
    "imagePath": "/images/animals/dog.webp",
    "isActive": true
  },
  {
    "code": "owl",
    "name": "Сова",
    "traits": {
      "extraversion": 16,
      "openness": 92,
      "self_control": 88,
      "agreeableness": 52,
      "emotional_stability": 76,
      "dominance": 28,
      "adaptability": 46
    },
    "sortOrder": 7,
    "title": "Тихий аналитик.",
    "description": "Тихий аналитик. Сова подходит человеку, который наблюдает, думает, замечает закономерности и не любит лишний шум. Это высокий самоконтроль и открытость ума при низкой потребности в социальной активности.",
    "imagePath": "/images/animals/owl.webp",
    "isActive": true
  },
  {
    "code": "raven",
    "name": "Ворон",
    "traits": {
      "extraversion": 36,
      "openness": 96,
      "self_control": 62,
      "agreeableness": 28,
      "emotional_stability": 56,
      "dominance": 42,
      "adaptability": 86
    },
    "sortOrder": 8,
    "title": "Нестандартный скептик.",
    "description": "Нестандартный скептик. Ворон подходит человеку с сильным интеллектом, иронией, тягой к необычному и способностью выкручиваться. В отличие от Совы, он менее академичен и более мрачно-гибок.",
    "imagePath": "/images/animals/raven.webp",
    "isActive": true
  },
  {
    "code": "dolphin",
    "name": "Дельфин",
    "traits": {
      "extraversion": 92,
      "openness": 72,
      "self_control": 56,
      "agreeableness": 88,
      "emotional_stability": 64,
      "dominance": 40,
      "adaptability": 68
    },
    "sortOrder": 9,
    "title": "Умный социальный коммуникатор.",
    "description": "Умный социальный коммуникатор. Дельфин подходит человеку, который легко входит в контакт, умеет поддерживать атмосферу и при этом не выглядит поверхностным. Это общительность, эмпатия, любопытство и мягкая гибкость.",
    "imagePath": "/images/animals/dolphin.webp",
    "isActive": true
  },
  {
    "code": "raccoon",
    "name": "Енот",
    "traits": {
      "extraversion": 68,
      "openness": 88,
      "self_control": 22,
      "agreeableness": 54,
      "emotional_stability": 32,
      "dominance": 30,
      "adaptability": 96
    },
    "sortOrder": 10,
    "title": "Хаотичный изобретатель.",
    "description": "Хаотичный изобретатель. Енот подходит человеку, который может устроить бардак, но потом из этого же бардака собрать работающий план. Это высокая адаптивность и любопытство при слабом порядке и невысокой устойчивости к внутреннему шуму.",
    "imagePath": "/images/animals/raccoon.webp",
    "isActive": true
  },
  {
    "code": "tiger",
    "name": "Тигр",
    "traits": {
      "extraversion": 30,
      "openness": 56,
      "self_control": 78,
      "agreeableness": 24,
      "emotional_stability": 86,
      "dominance": 92,
      "adaptability": 50
    },
    "sortOrder": 11,
    "title": "Одиночная концентрированная сила.",
    "description": "Одиночная концентрированная сила. Тигр подходит человеку, который не нуждается в толпе, действует точно и предпочитает сильную позицию. В отличие от Льва, он менее публичен и гораздо более автономен.",
    "imagePath": "/images/animals/tiger.webp",
    "isActive": true
  },
  {
    "code": "panda",
    "name": "Панда",
    "traits": {
      "extraversion": 44,
      "openness": 40,
      "self_control": 38,
      "agreeableness": 88,
      "emotional_stability": 62,
      "dominance": 18,
      "adaptability": 36
    },
    "sortOrder": 12,
    "title": "Мягкий комфорт и мирное присутствие.",
    "description": "Мягкий комфорт и мирное присутствие. Панда подходит человеку, который не хочет никого побеждать, а хочет, чтобы вокруг стало спокойнее. Это высокая доброжелательность, низкая доминантность и умеренная жизненная инерция.",
    "imagePath": "/images/animals/panda.webp",
    "isActive": true
  },
  {
    "code": "otter",
    "name": "Выдра",
    "traits": {
      "extraversion": 86,
      "openness": 76,
      "self_control": 30,
      "agreeableness": 82,
      "emotional_stability": 48,
      "dominance": 28,
      "adaptability": 82
    },
    "sortOrder": 13,
    "title": "Игривый тёплый импровизатор.",
    "description": "Игривый тёплый импровизатор. Выдра подходит человеку, который оживляет пространство, легко общается и быстро подхватывает настроение. В отличие от Лемура, у неё больше эмоциональной лёгкости и меньше наблюдательной осторожности.",
    "imagePath": "/images/animals/otter.webp",
    "isActive": true
  },
  {
    "code": "turtle",
    "name": "Черепаха",
    "traits": {
      "extraversion": 12,
      "openness": 32,
      "self_control": 94,
      "agreeableness": 66,
      "emotional_stability": 96,
      "dominance": 18,
      "adaptability": 28
    },
    "sortOrder": 14,
    "title": "Медленная надёжность и защита.",
    "description": "Медленная надёжность и защита. Черепаха подходит человеку, который не спешит, но редко ломается. Это очень высокий самоконтроль, высокая устойчивость, низкая социальная активность и слабая потребность в давлении на других.",
    "imagePath": "/images/animals/turtle.webp",
    "isActive": true
  },
  {
    "code": "deer",
    "name": "Олень",
    "traits": {
      "extraversion": 34,
      "openness": 62,
      "self_control": 56,
      "agreeableness": 84,
      "emotional_stability": 34,
      "dominance": 16,
      "adaptability": 60
    },
    "sortOrder": 15,
    "title": "Чувствительная мягкость.",
    "description": "Чувствительная мягкость. Олень подходит человеку, который тонко реагирует на атмосферу, старается не ранить других и избегает грубого давления. Низкая эмоциональная устойчивость здесь важна: это не слабость, а повышенная чувствительность.",
    "imagePath": "/images/animals/deer.webp",
    "isActive": true
  },
  {
    "code": "bull",
    "name": "Бык",
    "traits": {
      "extraversion": 34,
      "openness": 24,
      "self_control": 88,
      "agreeableness": 52,
      "emotional_stability": 82,
      "dominance": 84,
      "adaptability": 18
    },
    "sortOrder": 16,
    "title": "Упрямая надёжность.",
    "description": "Упрямая надёжность. Бык подходит человеку, который держит линию, не любит хаос и тяжело меняет направление. Это сила стабильности: мало гибкости, мало тяги к новизне, много контроля и выдержки.",
    "imagePath": "/images/animals/bull.webp",
    "isActive": true
  },
  {
    "code": "monkey",
    "name": "Обезьяна",
    "traits": {
      "extraversion": 96,
      "openness": 90,
      "self_control": 18,
      "agreeableness": 58,
      "emotional_stability": 34,
      "dominance": 48,
      "adaptability": 92
    },
    "sortOrder": 17,
    "title": "Социальный экспериментатор.",
    "description": "Социальный экспериментатор. Обезьяна подходит человеку, который быстро переключается, пробует новое, шутит, импровизирует и плохо переносит скуку. В отличие от Попугая, она не столько демонстрирует себя, сколько постоянно тестирует среду.",
    "imagePath": "/images/animals/monkey.webp",
    "isActive": true
  },
  {
    "code": "snake",
    "name": "Змея",
    "traits": {
      "extraversion": 18,
      "openness": 68,
      "self_control": 80,
      "agreeableness": 18,
      "emotional_stability": 88,
      "dominance": 58,
      "adaptability": 90
    },
    "sortOrder": 18,
    "title": "Хладнокровный скрытый стратег.",
    "description": "Хладнокровный скрытый стратег. Змея подходит человеку, который мало говорит, многое замечает и действует тогда, когда момент созрел. Это высокая устойчивость, гибкость и самоконтроль при низкой мягкости и низкой социальной открытости.",
    "imagePath": "/images/animals/snake.webp",
    "isActive": true
  },
  {
    "code": "horse",
    "name": "Лошадь",
    "traits": {
      "extraversion": 78,
      "openness": 64,
      "self_control": 54,
      "agreeableness": 62,
      "emotional_stability": 64,
      "dominance": 56,
      "adaptability": 52
    },
    "sortOrder": 19,
    "title": "Свобода, движение и прямота.",
    "description": "Свобода, движение и прямота. Лошадь подходит человеку, которому важно не застревать, чувствовать пространство и двигаться вперёд. Это активный, относительно доброжелательный профиль без сильной хитрости и без жёсткой доминантности.",
    "imagePath": "/images/animals/horse.webp",
    "isActive": true
  },
  {
    "code": "hedgehog",
    "name": "Ёж",
    "traits": {
      "extraversion": 18,
      "openness": 46,
      "self_control": 68,
      "agreeableness": 44,
      "emotional_stability": 38,
      "dominance": 18,
      "adaptability": 42
    },
    "sortOrder": 20,
    "title": "Осторожная самооборона.",
    "description": "Осторожная самооборона. Ёж подходит человеку, который держит дистанцию, долго привыкает и защищает личные границы. Низкая эмоциональная устойчивость делает его не холодным, а настороженным.",
    "imagePath": "/images/animals/hedgehog.webp",
    "isActive": true
  },
  {
    "code": "shark",
    "name": "Акула",
    "traits": {
      "extraversion": 26,
      "openness": 40,
      "self_control": 84,
      "agreeableness": 10,
      "emotional_stability": 92,
      "dominance": 98,
      "adaptability": 54
    },
    "sortOrder": 21,
    "title": "Холодная цель и конкуренция.",
    "description": "Холодная цель и конкуренция. Акула подходит человеку, который мыслит задачей, победой и эффективностью. Это очень высокая доминантность, самоконтроль и устойчивость при минимальной мягкости.",
    "imagePath": "/images/animals/shark.webp",
    "isActive": true
  },
  {
    "code": "chameleon",
    "name": "Хамелеон",
    "traits": {
      "extraversion": 46,
      "openness": 74,
      "self_control": 38,
      "agreeableness": 46,
      "emotional_stability": 50,
      "dominance": 24,
      "adaptability": 100
    },
    "sortOrder": 22,
    "title": "Чистая адаптация.",
    "description": "Чистая адаптация. Хамелеон подходит человеку, который меняет роль под среду, считывает контекст и умеет не застревать в одной идентичности. Это не лидер и не спасатель, а мастер подстройки.",
    "imagePath": "/images/animals/chameleon.webp",
    "isActive": true
  },
  {
    "code": "capybara",
    "name": "Капибара",
    "traits": {
      "extraversion": 72,
      "openness": 44,
      "self_control": 48,
      "agreeableness": 98,
      "emotional_stability": 86,
      "dominance": 10,
      "adaptability": 54
    },
    "sortOrder": 23,
    "title": "Спокойная социальная нейтральность.",
    "description": "Спокойная социальная нейтральность. Капибара подходит человеку, рядом с которым другим становится проще. Это очень высокая доброжелательность и устойчивость при почти полном отсутствии желания доминировать.",
    "imagePath": "/images/animals/capybara.webp",
    "isActive": true
  },
  {
    "code": "lemur",
    "name": "Лемур",
    "traits": {
      "extraversion": 78,
      "openness": 88,
      "self_control": 42,
      "agreeableness": 62,
      "emotional_stability": 36,
      "dominance": 22,
      "adaptability": 70
    },
    "sortOrder": 24,
    "title": "Любопытный социальный разведчик.",
    "description": "Любопытный социальный разведчик. Лемур подходит человеку, который любит новое, людей и живой обмен, но не настолько хаотичен, как Обезьяна, и не настолько демонстративен, как Попугай. Это лёгкая, подвижная, но не полностью бесконтрольная энергия.",
    "imagePath": "/images/animals/lemur.webp",
    "isActive": true
  },
  {
    "code": "lynx",
    "name": "Рысь",
    "traits": {
      "extraversion": 22,
      "openness": 60,
      "self_control": 78,
      "agreeableness": 28,
      "emotional_stability": 76,
      "dominance": 64,
      "adaptability": 72
    },
    "sortOrder": 25,
    "title": "Тихий точный охотник.",
    "description": "Тихий точный охотник. Рысь подходит человеку, который не любит лишнего внимания, но хорошо видит момент и действует аккуратно. Она ближе к Тигру по одиночности, но менее напориста и более гибка.",
    "imagePath": "/images/animals/lynx.webp",
    "isActive": true
  },
  {
    "code": "swan",
    "name": "Лебедь",
    "traits": {
      "extraversion": 46,
      "openness": 76,
      "self_control": 74,
      "agreeableness": 66,
      "emotional_stability": 78,
      "dominance": 50,
      "adaptability": 34
    },
    "sortOrder": 26,
    "title": "Сдержанное достоинство и эстетика.",
    "description": "Сдержанное достоинство и эстетика. Лебедь подходит человеку с чувством формы, дистанции и внутренней собранности. Это не шумный статус, как у Льва, а спокойная самопрезентация без лишнего давления.",
    "imagePath": "/images/animals/swan.webp",
    "isActive": true
  },
  {
    "code": "ant",
    "name": "Муравей",
    "traits": {
      "extraversion": 52,
      "openness": 26,
      "self_control": 98,
      "agreeableness": 78,
      "emotional_stability": 68,
      "dominance": 24,
      "adaptability": 36
    },
    "sortOrder": 27,
    "title": "Системная полезность.",
    "description": "Системная полезность. Муравей подходит человеку, который ценит порядок, труд, вклад в общее дело и повторяемый результат. Это высокий самоконтроль и кооперация при низкой тяге к экспериментам.",
    "imagePath": "/images/animals/ant.webp",
    "isActive": true
  },
  {
    "code": "spider",
    "name": "Паук",
    "traits": {
      "extraversion": 12,
      "openness": 80,
      "self_control": 92,
      "agreeableness": 16,
      "emotional_stability": 82,
      "dominance": 40,
      "adaptability": 78
    },
    "sortOrder": 28,
    "title": "Терпеливый архитектор систем.",
    "description": "Терпеливый архитектор систем. Паук подходит человеку, который не суетится, а строит конструкцию, в которую потом всё само попадает. Это высокий контроль, высокая открытость и адаптивность при низкой социальной теплоте.",
    "imagePath": "/images/animals/spider.webp",
    "isActive": true
  },
  {
    "code": "elephant",
    "name": "Слон",
    "traits": {
      "extraversion": 54,
      "openness": 52,
      "self_control": 88,
      "agreeableness": 84,
      "emotional_stability": 92,
      "dominance": 66,
      "adaptability": 38
    },
    "sortOrder": 29,
    "title": "Тяжёлая спокойная надёжность.",
    "description": "Тяжёлая спокойная надёжность. Слон подходит человеку, который сочетает силу, память, заботу и зрелую устойчивость. В отличие от Медведя, он более социально-тёплый; в отличие от Быка, менее упрямо закрытый.",
    "imagePath": "/images/animals/elephant.webp",
    "isActive": true
  },
  {
    "code": "hyena",
    "name": "Гиена",
    "traits": {
      "extraversion": 78,
      "openness": 58,
      "self_control": 32,
      "agreeableness": 20,
      "emotional_stability": 62,
      "dominance": 68,
      "adaptability": 88
    },
    "sortOrder": 30,
    "title": "Дерзкий социальный выживальщик.",
    "description": "Дерзкий социальный выживальщик. Гиена подходит человеку с жёстким юмором, быстрым чувством момента и способностью выживать в хаосе. Это не мягкий тип: здесь много социальной энергии, наглости и адаптивности.",
    "imagePath": "/images/animals/hyena.webp",
    "isActive": true
  },
  {
    "code": "parrot",
    "name": "Попугай",
    "traits": {
      "extraversion": 98,
      "openness": 70,
      "self_control": 42,
      "agreeableness": 56,
      "emotional_stability": 36,
      "dominance": 60,
      "adaptability": 62
    },
    "sortOrder": 31,
    "title": "Яркий коммуникатор.",
    "description": "Яркий коммуникатор. Попугай подходит человеку, который говорит, реагирует, привлекает внимание и создаёт вокруг себя социальный шум. В отличие от Обезьяны, он больше про образ, речь и демонстрацию.",
    "imagePath": "/images/animals/parrot.webp",
    "isActive": true
  },
  {
    "code": "octopus",
    "name": "Осьминог",
    "traits": {
      "extraversion": 20,
      "openness": 98,
      "self_control": 58,
      "agreeableness": 26,
      "emotional_stability": 74,
      "dominance": 30,
      "adaptability": 100
    },
    "sortOrder": 32,
    "title": "Сложный интеллектуальный адаптер.",
    "description": "Сложный интеллектуальный адаптер. Осьминог подходит человеку, который мыслит нестандартно, быстро меняет стратегию и умеет проходить там, где другие видят стену. Это более умная и скрытая версия адаптивности, чем у Хамелеона.",
    "imagePath": "/images/animals/octopus.webp",
    "isActive": true
  },
  {
    "code": "badger",
    "name": "Барсук",
    "traits": {
      "extraversion": 20,
      "openness": 34,
      "self_control": 82,
      "agreeableness": 30,
      "emotional_stability": 74,
      "dominance": 76,
      "adaptability": 30
    },
    "sortOrder": 33,
    "title": "Упрямая оборона территории.",
    "description": "Упрямая оборона территории. Барсук подходит человеку, который не стремится нравиться, не любит вторжений и может долго держать свою линию. Это не публичный лидер, а жёсткий защитник границ.",
    "imagePath": "/images/animals/badger.webp",
    "isActive": true
  },
  {
    "code": "rabbit",
    "name": "Кролик",
    "traits": {
      "extraversion": 48,
      "openness": 58,
      "self_control": 42,
      "agreeableness": 78,
      "emotional_stability": 24,
      "dominance": 12,
      "adaptability": 72
    },
    "sortOrder": 34,
    "title": "Тревожная мягкая скорость.",
    "description": "Тревожная мягкая скорость. Кролик подходит человеку, который быстро реагирует на угрозу, избегает давления и предпочитает безопасность прямому столкновению. Это чувствительный, доброжелательный и адаптивный профиль.",
    "imagePath": "/images/animals/rabbit.webp",
    "isActive": true
  },
  {
    "code": "goat",
    "name": "Коза",
    "traits": {
      "extraversion": 54,
      "openness": 70,
      "self_control": 50,
      "agreeableness": 42,
      "emotional_stability": 52,
      "dominance": 62,
      "adaptability": 64
    },
    "sortOrder": 35,
    "title": "Своенравный экспериментатор.",
    "description": "Своенравный экспериментатор. Коза подходит человеку, который любит делать по-своему, пробовать нестандартные маршруты и спорить с ограничениями. Это не хаос Енота, а упрямая свобода.",
    "imagePath": "/images/animals/goat.webp",
    "isActive": true
  },
  {
    "code": "beaver",
    "name": "Бобр",
    "traits": {
      "extraversion": 36,
      "openness": 34,
      "self_control": 96,
      "agreeableness": 72,
      "emotional_stability": 78,
      "dominance": 40,
      "adaptability": 32
    },
    "sortOrder": 36,
    "title": "Практичный строитель.",
    "description": "Практичный строитель. Бобр подходит человеку, который любит создавать устойчивые системы, чинить, улучшать и доводить до результата. Он похож на Муравья, но более автономен и меньше растворён в коллективе.",
    "imagePath": "/images/animals/beaver.webp",
    "isActive": true
  },
  {
    "code": "peacock",
    "name": "Павлин",
    "traits": {
      "extraversion": 92,
      "openness": 68,
      "self_control": 36,
      "agreeableness": 44,
      "emotional_stability": 56,
      "dominance": 70,
      "adaptability": 42
    },
    "sortOrder": 37,
    "title": "Демонстративная самопрезентация.",
    "description": "Демонстративная самопрезентация. Павлин подходит человеку, которому важно быть замеченным, выглядеть ярко и производить впечатление. В отличие от Льва, он меньше про власть и больше про образ.",
    "imagePath": "/images/animals/peacock.webp",
    "isActive": true
  },
  {
    "code": "frog",
    "name": "Лягушка",
    "traits": {
      "extraversion": 56,
      "openness": 72,
      "self_control": 34,
      "agreeableness": 64,
      "emotional_stability": 36,
      "dominance": 22,
      "adaptability": 88
    },
    "sortOrder": 38,
    "title": "Лёгкая переменчивость.",
    "description": "Лёгкая переменчивость. Лягушка подходит человеку, который быстро перескакивает между состояниями, местами и идеями. Это доброжелательная адаптация с невысоким самоконтролем и чувствительностью к среде.",
    "imagePath": "/images/animals/frog.webp",
    "isActive": true
  },
  {
    "code": "moose",
    "name": "Лось",
    "traits": {
      "extraversion": 24,
      "openness": 38,
      "self_control": 74,
      "agreeableness": 62,
      "emotional_stability": 80,
      "dominance": 72,
      "adaptability": 20
    },
    "sortOrder": 39,
    "title": "Крупная спокойная независимость.",
    "description": "Крупная спокойная независимость. Лось подходит человеку, который держится отдельно, не любит суету и выглядит мягче, чем может оказаться при давлении. Это автономная устойчивость без явной агрессии.",
    "imagePath": "/images/animals/moose.webp",
    "isActive": true
  }
];

export const animalsByCode = animals.reduce<Record<string, AnimalProfile>>((acc, animal) => {
  acc[animal.code] = animal;
  return acc;
}, {});
