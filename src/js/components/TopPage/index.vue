<template>
  <div>
      <h1>{{h1_text}}</h1>
      <input type="text" v-focus class="search-word" v-model="search_word" placeholder="検索ワードを入力してください。">
      <button v-on:click="resetSearchWord()" class="btn" v-bind:class="reset_btn_class" v-bind:disabled="!is_reset_btn_active">reset</button>
      <fruit-item v-for="(fruit, index) in filter_fruit_list" v-bind:fruit="fruit" :key="index">{{ fruit }}</fruit-item>
  </div>
</template>

<script>
  import FruitItem from './FruitItem/index.vue';

  export default {
    created() {
      console.log("created " + this.h1_text);
    },
    data() {
      return {
        h1_text: "Vue3.js KichenSink Main Page",
        search_word: "",
        fruit_list: [
          {
            ja_name: "リンゴ",
            en_name: "apple",
            description: "バラ科リンゴ属の落葉高木樹。またはその果実のこと。"
          },
          {
            ja_name: "パイナップル",
            en_name: "pineapple",
            description: "パイナップルは、熱帯アメリカ原産のパイナップル科の多年草。"
          },
          {
            ja_name: "メロン",
            en_name: "melon",
            description: "メロンは、果実を食用にするウリ科の一年生草本植物である。また、その果物・果実のこと。"
          },
          {
            ja_name: "キウイ",
            en_name: "kiwifruit",
            description: "キウイフルーツは、マタタビ科マタタビ属の雌雄異株の落葉蔓性植物の果実である。"
          },
          {
            ja_name: "ドラゴンフルーツ",
            en_name: "dragonfruit",
            description: "ドラゴンフルーツまたはピタヤは、サボテン科ヒモサボテン属のサンカクサボテン等の果実を指す。"
          }
        ]
      }
    },
    computed: {
      filter_fruit_list: function () {
        var isSearchResult = this.isSearchResult;
        // 検索ワードでフィルターをかける
        return this.fruit_list.filter(function (fruit) {
          return isSearchResult(fruit);
        })
      },
      is_reset_btn_active() {
        return this.search_word != ""
      }
      ,
      reset_btn_class() {
        return {
          active: this.is_reset_btn_active
        }
      }
    },
    methods: {
      isSearchResult(fruit) {
        var isView = false;
        if ( fruit.description.indexOf(this.search_word) != -1) {
          isView = true;
        }
        return isView;
      },
      resetSearchWord() {
        this.search_word = "";
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