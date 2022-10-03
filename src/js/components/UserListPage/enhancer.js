
import { ref, reactive } from "vue";
import { ROUTING_PATH } from "~/js/const";

 
export function useEnhancer() {
  const h1Text = ref("Vue3.js KichenSink User List Page");
  const users = reactive(getUsers());

  return {
    h1Text,
    users
  }
}

function getUsers() {
  return [
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
  ];
}