const foods = [
  {
    id: "purigong-boneless-pichi-new",
    name: "뿌리공순살 피치세트",
    img: "purigong-boneless-pichi.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 25900,
    cid: "new",
    optTag: ["set", "up-pizza", "purigong"]
  },
  {
    id: "purigong-pichi-new",
    name: "뿌리공 피치세트",
    img: "purigong-pichi.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 22900,
    cid: "new",
    optTag: ["set", "up-pizza", "purigong",]
  },
  {
    id: "solo-set-cheese-new",
    name: "모쏠 탈출 (1인)세트 - 치즈",
    img: "solo-set-cheese.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "new",
    optTag: ["pizza-s"]
  },
  {
    id: "solo-set-pepperoni-new",
    name: "모쏠 탈출 (1인)세트 - 페퍼로니",
    img: "solo-set-pepperoni.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "new",
    optTag: ["pizza-s",]
  },
  {
    id: "solo-set-combi-new",
    name: "모쏠 탈출 (1인)세트 - 콤비네이션",
    img: "solo-set-combi.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "new",
    optTag: ["pizza-s",]
  },
  {
    id: "purigong-boneless-chicken-new",
    name: "뿌리공 순살 치킨",
    img: "purigong-boneless-chicken.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 순살 치킨",
    price: 22000,
    cid: "new",
    optTag: ["chicken", "purigong"]
  },
  {
    id: "purigong-chicken-new",
    name: "뿌리공 치킨",
    img: "purigong-chicken.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 19000,
    cid: "new",
    optTag: ["chicken", "purigong"]
  },

  {
    id: "purigong-boneless-pichi",
    name: "뿌리공순살 피치세트",
    img: "purigong-boneless-pichi.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 25900,
    cid: "set",
    optTag: ["set", "up-pizza", "purigong"]
  },
  {
    id: "purigong-pichi",
    name: "뿌리공 피치세트",
    img: "purigong-pichi.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 22900,
    cid: "set",
    optTag: ["set", "up-pizza", "purigong",]
  },
  {
    id: "solo-set-cheese",
    name: "모쏠 탈출 (1인)세트 - 치즈",
    img: "solo-set-cheese.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "set",
    optTag: ["pizza-s"]
  },
  {
    id: "solo-set-pepperoni",
    name: "모쏠 탈출 (1인)세트 - 페퍼로니",
    img: "solo-set-pepperoni.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "set",
    optTag: ["pizza-s",]
  },
  {
    id: "solo-set-combi",
    name: "모쏠 탈출 (1인)세트 - 콤비네이션",
    img: "solo-set-combi.png",
    intro: "(1인 피치세트) 7인치 피자 + 후라이드 치킨 반마리 + 콜라245ml",
    price: 14900,
    cid: "set",
    optTag: ["pizza-s",]
  },
  {
    id: "kamaco-pichi",
    name: "까마코 피치세트",
    img: "kamaco-pichi.png",
    intro: "피나치공의 대표 피자 + 달콤 알싸한 까만 마늘소스와 고소한 코코넛이 들어간 피자 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "garlic-steak-pichi",
    name: "갈릭 스테이크 피치세트",
    img: "garlic-steak-pichi.png",
    intro: "스테이크와 베이컨, 통마늘, 감자의 깊은 풍미를 가진 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 25900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "combination-pichi",
    name: "콤비네이션 피치세트",
    img: "combination-pichi.png",
    intro: "피나치공의 대표 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 20900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "onion-boneless-pichi",
    name: "순살 화이트어니언 피치세트",
    img: "onion-boneless-pichi.png",
    intro: "피나치공의 대표 피자 + 바삭한 순살치킨에 아삭한 양파와 달콤한 화이트 소스가 가득 + 콜라",
    price: 25900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "shrimp-bulgogi-pichi",
    name: "통새우 불고기 피치세트",
    img: "shrimp-bulgogi-pichi.png",
    intro: "오동통 통새우와 담백한 돼지 불고기가 가득 토핑된 피자 + 겉은 바삭, 속은 촉촉 비법 후라이트 치킨 + 콜라",
    price: 25900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "pepper-soy-pichi",
    name: "페퍼간장 피치세트",
    img: "pepper-soy-pichi.png",
    intro: "피나치공의 대표 피자 + 통으로 간 후추와 특제 간장소스를 더한 매콤 짭짤한 간장치킨 + 콜라",
    price: 23900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "honey-garlic-pichi",
    name: "허니갈릭 피치세트",
    img: "honey-garlic-pichi.png",
    intro: "피나치공의 대표 피자 + 마늘의 풍미와 달콤함이 환상적인 조화를 이룬 치킨 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "shrimp-gold-boneless-pichi",
    name: "순살 쉬림프골드 피치세트",
    img: "shrimp-gold-boneless-pichi.png",
    intro: "피나치공의 대표 피자 + 진짜 파인애플을 갈아 매콤한 칠리소스와 함께 버무린 치킨 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "sweet-bulgogi-pichi",
    name: "스위트불고기 피치세트",
    img: "sweet-bulgogi-pichi.png",
    intro: "불고기 토핑의 풍부한 육즙이 느껴지는 별미 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "double-potato-pichi",
    name: "더블포테이토 피치세트",
    img: "double-potato-pichi.png",
    intro: "감자와 베이컨의 화려하고 풍부한 맛의 향연 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "sweet-potato-pichi",
    name: "고구마 피치세트",
    img: "sweet-potato-pichi.png",
    intro: "단맛의 끝판왕 고구마 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 24900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "pepperoni-pichi",
    name: "페퍼로니 피치세트",
    img: "pepperoni-pichi.png",
    intro: "크림소스로 치즈맛의 풍미를 더한 페퍼로니 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 20900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "cheese-pichi",
    name: "치즈 피치세트",
    img: "cheese-pichi.png",
    intro: "치즈매니아를 위한 모짜렐라 치즈 피자 + 겉은 바삭, 속은 촉촉 비법 후라이드 치킨 + 콜라",
    price: 20900,
    cid: "set",
    optTag: ["set", "up-chicken"]
  },
  {
    id: "chicken-leg-boneless-pichi",
    name: "순살닭다리 피치세트",
    img: "chicken-leg-boneless-pichi.png",
    intro: "피나치공의 대표 피자 + 100% 닭다리살, 겉은 바삭, 속은 촉촉 순살 치킨 + 콜라",
    price: 23900,
    cid: "set",
    optTag: ["set", "up-pizza"]
  },
  {
    id: "garlic-steak-pizza",
    name: "갈릭 스테이크 피자",
    img: "garlic-steak-pizza.png",
    intro: "스테이크와 베이컨, 통마늘, 감자의 깊은 풍미를 가진 피자 + 콜라500ml",
    price: 17900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "shrimp-bulgogi-pizza",
    name: "통새우 불고기 피자",
    img: "shrimp-bulgogi-pizza.png",
    intro: "오동통 통새우와 담백한 돼지불고기가 가득 토핑된 피자 + 콜라500ml",
    price: 17900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "sweet-bulgogi-pizza",
    name: "스위트 불고기 피자",
    img: "sweet-bulgogi-pizza.png",
    intro: "불고기 토핑의 풍부한 육즙이 느꺄지는 별미 + 콜라500ml",
    price: 16900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "double-potato-pizza",
    name: "더블 포테이토 피자",
    img: "double-potato-pizza.png",
    intro: "감자와 베이컨의 화려하고 풍부한 맛의 향연 + 콜라500ml",
    price: 16900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "combination-pizza",
    name: "콤비네이션 피자",
    img: "combination-pizza.png",
    intro: "피나치공의 대표 피자 + 콜라500ml",
    price: 13900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "sweet-potato-pizza",
    name: "고구마 피자",
    img: "sweet-potato-pizza.png",
    intro: "단맛의 끝판왕 고구마 피자 + 콜라500ml",
    price: 16900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "pepperoni-pizza",
    name: "페퍼로니 피자",
    img: "pepperoni-pizza.png",
    intro: "크림소스로 치즈맛의 풍미를 더한 페퍼로니 피자 + 콜라500ml",
    price: 13900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "cheese-pizza",
    name: "치즈 피자",
    img: "cheese-pizza.png",
    intro: "치즈 매니아를 위한 모짜렐라 치즈 피자 + 콜라500ml",
    price: 13900,
    cid: "pizza",
    optTag: ["pizza"]
  },
  {
    id: "purigong-boneless-chicken",
    name: "뿌리공 순살 치킨",
    img: "purigong-boneless-chicken.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 순살 치킨",
    price: 22000,
    cid: "chicken",
    optTag: ["chicken", "purigong"]
  },
  {
    id: "purigong-chicken",
    name: "뿌리공 치킨",
    img: "purigong-chicken.png",
    intro: "치즈시즈닝이 미쳤다! 절대 후회 없는 맛, 피나치공 대표 치킨",
    price: 19000,
    cid: "chicken",
    optTag: ["chicken", "purigong"]
  },
  {
    id: "kamaco-chicken",
    name: "까마코 치킨",
    img: "kamaco-chicken.png",
    intro: "달콤알싸한 까만 마늘 소스와 고소한 코코넛이 들어간 황산화 성분이 풍부한 건강한 치킨",
    price: 20000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "fried-chicken",
    name: "후라이드 치킨",
    img: "fried-chicken.png",
    intro: "겉은 바삭하고 속은 부드러운 크리스피 후라이드 치킨",
    price: 17000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "onion-boneless-chicken",
    name: "순살 화이트어니언 치킨",
    img: "onion-boneless-chicken.png",
    intro: "바삭한 순살치킨위에 아삭한 양파와 달콤한 화이트소스가 한가득~",
    price: 21000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "pepper-soy-chicken",
    name: "페퍼간장 치킨",
    img: "pepper-soy-chicken.png",
    intro: "통으로 간 후추와 특제소스를 더한 매콤 짭짤한 맛 치킨",
    price: 19000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "honey-garlic-chicken",
    name: "허니갈릭 치킨",
    img: "honey-garlic-chicken.png",
    intro: "마늘의 풍미와 꿀의 달콤함이 환상적인 조화",
    price: 20000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "shrimp-gold-boneless-chicken",
    name: "순살 쉬림프골드 치킨",
    img: "shrimp-gold-boneless-chicken.png",
    intro: "진짜 파인애플을 갈아 매콤한 칠리소스와 함께 버무렸다. 골드빛 순살치킨과 통통한 새우튀김의 운명적 만남",
    price: 20000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "spicy-chicken",
    name: "양념 치킨",
    img: "spicy-chicken.png",
    intro: "새콤 달콤한 특제 양념소스를 푸짐하게 발라 맛이 더욱 풍부한 양념치킨",
    price: 19000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "chicken-leg-boneless-chicken",
    name: "순살 닭다리 치킨",
    img: "chicken-leg-boneless-chicken.png",
    intro: "겉은 바삭 속은 부드러워 먹기 편한 순살치킨, 한국인이 가장 선호하는 다리살만 모아 뼈가 없는 순살로 즐긴다 ~",
    price: 19000,
    cid: "chicken",
    optTag: ["chicken"]
  },
  {
    id: "coleslaw",
    name: "코울슬로",
    img: "coleslaw.png",
    intro: "신선한 재료로 만든 세계인의 정통 코울슬로(100g)",
    price: 1900,
    cid: "side",
    optTag: []
  },
  {
    id: "pepperoni-spaghetti",
    name: "페퍼로니 스파게티",
    img: "pepperoni-spaghetti.png",
    intro: "퓨전 볼로냐식 전통 스파게티 소스에 페퍼로니와 체다치즈로 인한 진~한 감칠맛이 일품인 스파게티",
    price: 5000,
    cid: "side",
    optTag: []
  },
  {
    id: "crunky-cheese",
    name: "크런치즈볼",
    img: "crunky-cheese.png",
    intro: "크런치즈볼 1세트 4개",
    price: 5000,
    cid: "side",
    optTag: []
  },
  {
    id: "wedge-butter-garlic",
    name: "리얼웨지 버터갈릭",
    img: "wedge-butter-garlic.png",
    intro: "리얼웨지 감자튀김 + 버터갈릭 시즈닝",
    price: 4000,
    cid: "side",
    optTag: []
  },
  {
    id: "wedge-corn",
    name: "리얼웨지 콘스프",
    img: "wedge-corn.png",
    intro: "리얼웨지 감자튀김 + 콘스프 시즈닝",
    price: 4000,
    cid: "side",
    optTag: []
  },
  {
    id: "sweet-chili-sauce",
    name: "스위트 칠리 소스",
    img: "sweet-chili-sauce.png",
    intro: "스위트 칠리 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "garlic-sauce",
    name: "리얼갈릭 소스",
    img: "garlic-sauce.png",
    intro: "리얼갈릭 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "sour-cheese-sauce",
    name: "사워 치즈크림 소스",
    img: "sour-cheese-sauce.png",
    intro: "사워 치즈크림 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "mapgoma-sauce",
    name: "맵고마 소스",
    img: "mapgoma-sauce.png",
    intro: "맵고마 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "spicy-chicken-sauce",
    name: "치킨양념 소스",
    img: "spicy-chicken-sauce.png",
    intro: "치킨양념 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "chicken-radish",
    name: "치킨무",
    img: "chicken-radish.png",
    intro: "치킨무",
    price: 500,
    cid: "side",
    optTag: []
  },
  {
    id: "pickle",
    name: "피클",
    img: "pickle.png",
    intro: "피클",
    price: 500,
    cid: "side",
    optTag: []
  },
  {
    id: "pine-yogurt-sauce",
    name: "파인요거트 소스",
    img: "pine-yogurt-sauce.png",
    intro: "파인요거트 소스(40g)",
    price: 700,
    cid: "side",
    optTag: []
  },
  {
    id: "hot-sauce",
    name: "핫소스",
    img: "hot-sauce.png",
    intro: "핫소스",
    price: 100,
    cid: "side",
    optTag: []
  },
]

export default foods;