
import { computed } from "vue";
import { ROUTING_PATH } from "~/js/const";
 
export function useEnhancer(props) {
  // リンク先パス
  const href = computed(() => {
    return ROUTING_PATH.USER_DETAIL_OUT_ID + props.user.id;;
  });

  return {
    ...props,
    href
  }
};