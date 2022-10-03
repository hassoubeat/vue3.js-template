
import { ref } from "vue";
import { ROUTING_PATH } from "~/js/const";

 
export function useEnhancer() {
  const h1Text = ref("Vue3.js KichenSink Sub Page");

  return {
    h1Text,
    ROUTING_PATH
  }
}