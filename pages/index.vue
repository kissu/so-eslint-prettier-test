<template>
  <section>
      Ugly example that should be linted and formatted properly
      <div v-for="(fruit, index) in fruits" @click="toggleEat(index)">
      <!-- :key="fruit.id"  -->
      <!-- ESlint should complain that the code above is missing a :key -->
      <span :class="{ 'was-eaten': fruit.eaten }">{{ fruit.name }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ToggleFruits',
  data() {
            return {
      fruits: [
        { id: 1, name: 'banana', eaten: false },
        { id: 2, name: 'apple', eaten: true },
        { id: 3, name: 'watermelon', eaten: false },
      ],
    }
  },
  methods: {
toggleEat(clickedFruitIndex) {
      this.fruits = this.fruits.map((fruit) => ({
        ...fruit,
        eaten: false,
        }))
      return this.$set(this.fruits, clickedFruitIndex, {
          ...this.fruits[clickedFruitIndex],
              eaten: true,
      })
    },
  },
}
</script>

<style scoped>
.was-eaten {
  color: hsl(24, 81.7%, 49.2%);
}
</style>
