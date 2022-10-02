<template>
  <div>
      <h1>{{h1Text}}</h1>
      <input type="text" v-focus class="search-word" v-model="searchWord" placeholder="検索ワードを入力してください。">
      <button v-on:click="resetSearchWord()" class="btn" v-bind:class="resetBtnClass" v-bind:disabled="!isResetBtnActive">reset</button>
      <fruit-item v-for="(fruit, index) in filterFruitList" v-bind:fruit="fruit" :key="index">{{ fruit }}</fruit-item>
  </div>
</template>

<script>
  import FruitItem from './FruitItem/index.vue';

  export default {
    created() {
      console.log("created " + this.h1Text);
    },
    data() {
      return {
        h1Text: "Vue3.js KichenSink Main Page",
        searchWord: "",
        fruitList: [
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
        ]
      }
    },
    computed: {
      filterFruitList: function () {
        var isSearchResult = this.isSearchResult;
        // 検索ワードでフィルターをかける
        return this.fruitList.filter(function (fruit) {
          return isSearchResult(fruit);
        })
      },
      isResetBtnActive() {
        return this.searchWord != ""
      }
      ,
      resetBtnClass() {
        return {
          active: this.isResetBtnActive
        }
      }
    },
    methods: {
      isSearchResult(fruit) {
        var isView = false;
        if ( fruit.description.indexOf(this.searchWord) != -1) {
          isView = true;
        }
        return isView;
      },
      resetSearchWord() {
        this.searchWord = "";
      }
    },
    // ローカルコンポーネント登録
    components: {
      'fruit-item': FruitItem,
    },
    // 独自ディレクティブ定義
    directives: {
      focus: {
        inserted(el) {
          el.focus()
        }
      }
    },
  };
</script>

<style scoped>
  .green {
    color: green;
  }
</style>