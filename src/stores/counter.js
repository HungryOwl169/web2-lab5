import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  function setCount(newCount) {
    count.value = newCount
  }

  return { count, setCount }
}) 
