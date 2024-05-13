import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOffersStore = defineStore('offersStore', () => {

  const moreIsActive = ref(false)

  const offers = ref([
    {
      id: 1,
      title: 'Group shooting outdoors in special costumes',
      price: 999
    },
    {
      id: 2,
      title: 'Single shot at your location.',
      price: 390
    },
    {
      id: 3,
      title: 'Group shooting with scenery.',
      price: 3500
    },
    {
      id: 4,
      title: 'The most common single shooting in the ...',
      price: 199
    },
    {
      id:5,
      title:'Single shooting in an expensive mansion',
      price: 7845
    },
    {
      id:6,
      title:'Love story on the streets',
      price: 1845
    },
    {
      id:7,
      title:'Photo for documents (passport, med card etc.)',
      price: 500
    },
  ])

  const offersSlice = computed(()=>{
    if(moreIsActive.value === false){
      return offers.value.slice(0, 5)
    }else{
      return offers.value
    }
  })
  const changeMoreState = ()=>{
    moreIsActive.value = !moreIsActive.value
  }

  return {
    offers,
    offersSlice,
    moreIsActive,
    changeMoreState
  }
})
