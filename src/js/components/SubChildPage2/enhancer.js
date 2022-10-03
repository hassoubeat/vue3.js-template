
import { ref } from "vue";
import { ROUTING_PATH } from "~/js/const";

 
export function useEnhancer() {
  const h1Text = ref("Vue3.js KichenSink SubChild2 Page");
  const message = ref(`this page url is ${ROUTING_PATH.SUB_CHILD2}`);

  return {
    h1Text,
    message
  }
}