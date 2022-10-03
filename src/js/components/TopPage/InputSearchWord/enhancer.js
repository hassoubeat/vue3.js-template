
import { computed } from "vue";
 
export function useEnhancer(props) {
  // 検索ワードが空か？
  const isEmptySearchWord = computed(() => {
    return props.searchWord === "";
  });

  // 検索ワードをリセットする
  const resetSearchWord = () => {
    props.updateSearchWord("");
  };

  return {
    ...props,
    isEmptySearchWord,
    resetSearchWord
  }
};