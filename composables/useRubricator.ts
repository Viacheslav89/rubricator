import type { Rubric, RubricCompound } from "./../type";
const rubricators = ref<Rubric[]>([]);

export const useRubricator = async () => {
  rubricators.value = await $fetch(
    "https://www.klerk.ru/yindex.php/v3/event/rubrics"
  );

  // const getRubricCompound = (currentRubric: Rubric, rubricCompoundList: RubricCompound[]) => {
  //   if (!idFildenRubrics.value.includes(currentRubric.id)) {
  //     return rubricCompoundList;
  //   }
  // };


  return {
    rubricators,
    // getRubricCompound,
  };
};
