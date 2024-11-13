<template>
  <div class="rubrics">
    <h2 class="rubrics__sum">Сумма отмеченных элементов: {{ sumCounts }}</h2>
    <div class="rubrics__title--wrapper">
      <div
        :class="[
          'rubrics__triangle--bottom',
          { 'rubrics__triangle--right': !isListVisible },
        ]"
        @click="toggleList"
      ></div>
      <h3 class="rubrics__title">Рубрикатор</h3>
    </div>
    <ul class="rubrics__list" v-if="isListVisible">
      <li class="rubrics__item" v-for="rubric of rubricators" :key="rubric.id">
        <AppRubric :rubric="rubric" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRubricator } from "../composables/useRubricator";
import { useConculateCounts } from "../composables/useCanculate";

const { sumCounts } = useConculateCounts();
const { rubricators } = await useRubricator();

const isListVisible = ref(false);

const toggleList = () => {
  isListVisible.value = !isListVisible.value;
};
</script>

<style scoped lang="scss">
.rubrics {
  max-width: 850px;
  margin: 0 auto;

  &__sum {
    width: 380px;
    margin: 20px auto 30px auto;
  }

  &__title--wrapper {
    padding-left: 10px;
    display: flex;
    // max-width: 890px;
  }

  &__title {
    padding: 0;
    margin: 0;
  // max-width: 850px;

  }

  &__triangle--bottom {
    width: 0px;
    height: 0px;
    border-top: 9px solid black;
    border-right: 9px solid transparent;
    transform: rotate(225deg);
    margin-right: 10px;
    margin-top: 3px;
  }

  &__triangle--right {
    transform: rotate(135deg);
  }

  // &__list {
  //   margin: 0;
  // } 

  &__item {
    list-style: none;
  }

}
</style>
