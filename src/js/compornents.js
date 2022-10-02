import vue_mixin from './mixin';

var fruit_object = {
  props: ["fruit"],
  template: `
    <div class="fruit_object">
      <span class="ja_name">{{ fruit.ja_name }}</span> (英名：<span class="en_name">{{ fruit.en_name }}</span>)
      <div class="fruit_description">説明：{{ fruit.description }}</div>
      <div class="fruit_object_detail">オブジェクト内容：<slot></slot></div>
    </div>
  `
}

export var view_main_contents = {
  mixins: [vue_mixin],
  created: function () {
    console.log("created " + this.h1_text);
  },
  data: function(){
    return {
      h1_text: "Vue.js KichenSink Main Page",
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
    is_reset_btn_active: function() {
      return this.search_word != ""
    }
    ,
    reset_btn_class: function () {
      return {
        active: this.is_reset_btn_active
      }
    }
  },
  methods: {
    isSearchResult: function (fruit, event) {
      var isView = false;
      if ( fruit.description.indexOf(this.search_word) != -1) {
        isView = true;
      }
      return isView;
    },
    resetSearchWord: function (event) {
      this.search_word = "";
    }
  },
  // ローカルコンポーネント登録
  components: {
    'fruit-object': fruit_object,
  },
  // 独自ディレクティブ定義
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  template: `
    <div>
      <h1>{{h1_text}}</h1>
      <input type="text" v-focus class="search-word" v-model="search_word" placeholder="検索ワードを入力してください。">
      <button v-on:click="resetSearchWord()" class="btn" v-bind:class="reset_btn_class" v-bind:disabled="!is_reset_btn_active">reset</button>
      <fruit-object v-for="(fruit, index) in filter_fruit_list" v-bind:fruit="fruit" :key="index">{{ fruit }}</fruit-object>
    </div>
  `
}

var user_object = {
  props: ["user"],
  computed: {
    href: function() {
      return "/html/users/" + this.user.id;
    }
  },
  template: `
    <div class="user_object">
      <router-link :to="href">
        {{ user.name }}( {{ user.sex }} )
      </router-link>
    </div>
  `
}

export var view_users_contents = {
  mixins: [vue_mixin],
  created: function () {
    console.log("created " + this.h1_text);
  },
  data: function(){
    return {
      h1_text: "Vue.js KichenSink User List Page",
      users: [
        {
          id: 1,
          name: "ジョン",
          sex: "male"
        },
        {
          id: 2,
          name: "ケイト",
          sex: "female"
        },
        {
          id: 3,
          name: "ハリー",
          sex: "male"
        },
      ]
    }
  },
  // ローカルコンポーネント登録
  components: {
    'user-object': user_object,
  },
  template: `
    <div>
      <h1>{{h1_text}}</h1>
      <user-object v-for="(user, index) in users" v-bind:user="user" :key="index"></user-object>
      <button v-on:click="goBack()">back</button>
    </div>
  `
}


export var view_user_detail_contents = {
  mixins: [vue_mixin],
  created: function () {
    console.log("created " + this.h1_text + "【UserID】" + this.id);
  },
  data: function(){
    return {
      h1_text: "Vue.js KichenSink User Detail Page",
    }
  },
  props: ["id"]
  ,
  template: `
    <div>
      <h1>{{h1_text}}</h1>
      選択したユーザのIDは{{ id }}です。<br>
      <button v-on:click="goBack()">back</button>
    </div>
  `
}