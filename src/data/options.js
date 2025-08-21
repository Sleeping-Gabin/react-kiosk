const options = [
  {
    tag: ["pizza", "set"],
    title: "사이즈",
    id: "size",
    options: [
      {
        name: "M",
        icon: null,
        price: 0
      }, 
      {
        name: "L",
        icon: null,
        price: 4000
      }, 
      {
        name: "치즈크러스트 M",
        icon: null,
        price: 2500
      }, 
      {
        name: "치즈크러스트 L",
        icon: null,
        price: 7500
      }
    ],
    default: 0,
    type: "radio",
    max: 1
  },
  {
    tag: ["pizza-s"],
    title: "사이즈",
    id: "size-s",
    options: [
      {
        name: "S",
        icon: null,
        price: 0
      }
    ],
    default: 0,
    type: "radio",
    max: 1
  },
  {
    tag: ["pizza", "set", "pizza-s"],
    title: "피자 토핑",
    id: "pizza-topping",
    options: [
      {
        name: "치즈 토핑",
        icon: null,
        price: 1500
      }, 
      {
        name: "고구마 테두리",
        icon: null,
        price: 1500
      }, 
      {
        name: "체다치즈 테두리",
        icon: null,
        price: 1500
      }, 
    ],
    default: null,
    type: "checkbox",
    max: 1
  },
  {
    tag: ["pizza", "chicken", "set", "pizza-s"],
    title: "제외 사항",
    id: "exception",
    options: [
      {
        name: "피클X",
        icon: "opt-pickle-x.png",
        price: 0
      }, 
      {
        name: "치킨무X",
        icon: "opt-chicken-radish-x.png",
        price: 0
      }, 
      {
        name: "핫소스X",
        icon: "opt-hot-sauce-x.png",
        price: 0
      }, 
    ],
    default: null,
    type: "checkbox",
    max: 3
  },
  {
    tag: ["pizza", "chicken", "set", "pizza-s"],
    title: "음료 선택",
    id: "drink",
    options: [
      {
        name: "콜라 1.25L로 변경",
        icon: "opt-cola.png",
        price: 700
      }, 
      {
        name: "콜라 500ml 추가",
        icon: "opt-cola.png",
        price: 1300
      }, 
      {
        name: "콜라 1.25L 추가",
        icon: "opt-cola.png",
        price: 2000
      }, 
    ],
    default: null,
    type: "checkbox",
    max: 1
  },
  {
    tag: ["chicken", "set"],
    title: "치킨 토핑",
    id: "chicken-topping",
    options: [
      {
        name: "웨지 감자(100g)",
        icon: null,
        price: 1000
      }, 
      {
        name: "깐쇼새우(10마리)",
        icon: null,
        price: 2500
      },
    ],
    default: null,
    type: "checkbox",
    max: 2
  },
  {
    tag: ["purigong"],
    title: "뿌리공 디핑 소스",
    id: "purigong-sauce",
    options: [
      {
        name: "뿌리공 소스 1개",
        icon: "opt-purigong-sauce.png",
        price: 700
      }, 
      {
        name: "뿌리공 소스 2개",
        icon: "opt-purigong-sauce.png",
        price: 1300
      }, 
      {
        name: "뿌리공 소스 3개",
        icon: "opt-purigong-sauce.png",
        price: 1900
      }, 
    ],
    default: null,
    type: "checkbox",
    max: 1
  },
  {
    tag: ["up-pizza"],
    title: "피자 변경",
    id: "up-pizza",
    options: [
      {
        name: "콤비네이션 피자",
        icon: "opt-combination-pizza.png",
        price: 0
      }, 
      {
        name: "페퍼로니 피자",
        icon: "opt-pepperoni-pizza.png",
        price: 0
      }, 
      {
        name: "치즈 피자",
        icon: "opt-cheese-pizza.png",
        price: 0
      }, 
      {
        name: "더블 포테이토 피자",
        icon: "opt-double-potato-pizza.png",
        price: 3000
      }, 
      {
        name: "고구마 피자",
        icon: "opt-sweet-potato-pizza.png",
        price: 3000
      }, 
      {
        name: "스위트 불고기 피자",
        icon: "opt-sweet-bulgogi-pizza.png",
        price: 3000
      }, 
      {
        name: "통새우 불고기 피자",
        icon: "opt-shrimp-bulgogi-pizza.png",
        price: 4000
      }, 
      {
        name: "갈릭 스테이크 피자",
        icon: "opt-garlic-steak-pizza.png",
        price: 4000
      }, 
    ],
    default: 0,
    type: "radio",
    max: 1
  },  
  {
    tag: ["up-chicken"],
    title: "치킨 변경",
    id: "up-chicken",
    options: [
      {
        name: "후라이드 치킨",
        icon: "opt-fried-chicken.png",
        price: 0
      },
      {
        name: "뿌리공 치킨",
        icon: "opt-porigong-chicken.png",
        price: 2000
      },
      {
        name: "뿌리공 순살 치킨",
        icon: "opt-porigong-boneless-chicken.png",
        price: 5000
      },
      {
        name: "순살 닭다리 치킨",
        icon: "opt-chicken-leg-boneless-chicken.png",
        price: 3000
      },
      {
        name: "양념 치킨",
        icon: "opt-spicy-chicken.png",
        price: 2000
      },
      {
        name: "까마코 치킨",
        icon: "opt-kamoco-chicken.png",
        price: 4000
      },
      {
        name: "순살 화이트어니언 치킨",
        icon: "opt-onion-boneless-chicken.png",
        price: 4000
      },
      {
        name: "페퍼 간장 치킨",
        icon: "opt-pepper-soy-chicken.png",
        price: 3000
      },
      {
        name: "허니 갈릭 치킨",
        icon: "opt-honey-garlic-chicken.png",
        price: 4000
      },
      {
        name: "순살 쉬림프골드 치킨",
        icon: "opt-shrimp-gold-chicken.png",
        price: 4000
      },
    ],
    default: 0,
    type: "radio",
    max: 1
  },  
];

export default options;