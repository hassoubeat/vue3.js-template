
import { ref, reactive, computed } from "vue";
 
export function useEnhancer() {
  const h1Text = ref("Vue3.js KichenSink Main Page");

  const searchWord = ref("");

  const updateSearchWord = (inputText) => {
    searchWord.value = inputText;
  };

  const fruitList = reactive(getFruitList());

  // 検索ワードでフィルターをかけた後のフルーツ一覧
  const filterFruitList = computed(() => {
    return fruitList.filter((fruit) => {
      if ( fruit.description.indexOf(searchWord.value) != -1) {
        return true;
      }
    });
  });

  return {
    h1Text,
    searchWord,
    updateSearchWord,
    fruitList,
    filterFruitList
  }
}

function getFruitList() {
  return [
    {
      jaName: "リンゴ",
      enName: "apple",
      description: "バラ科リンゴ属の落葉高木樹。またはその果実のこと。"
    },
    {
      jaName: "パイナップル",
      enName: "pineapple",
      description: "パイナップルは、熱帯アメリカ原産のパイナップル科の多年草。"
    },
    {
      jaName: "メロン",
      enName: "melon",
      description: "メロンは、果実を食用にするウリ科の一年生草本植物である。また、その果物・果実のこと。"
    },
    {
      jaName: "キウイ",
      enName: "kiwifruit",
      description: "キウイフルーツは、マタタビ科マタタビ属の雌雄異株の落葉蔓性植物の果実である。"
    },
    {
      jaName: "ドラゴンフルーツ",
      enName: "dragonfruit",
      description: "ドラゴンフルーツまたはピタヤは、サボテン科ヒモサボテン属のサンカクサボテン等の果実を指す。"
    }
  ];
}