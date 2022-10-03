
import { ref } from "vue";
import { ROUTING_PATH } from "~/js/const";

 
export function useEnhancer(props) {
  const h1Text = ref(`Vue3.js KichenSink User Detail Page 【UserId】${props.id}`);

  return {
    ...props,
    h1Text
  }
}