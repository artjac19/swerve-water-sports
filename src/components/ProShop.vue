<script setup>
import { ref, onMounted, nextTick } from 'vue'
import ProShopItem from './ProShopItem.vue';
import ItemDetails from './ItemDetails.vue';
import proShopItems from '../proShopItems.json';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const allItems = ref([]);
const outOfStock = ref([]);

onMounted(() => {
  allItems.value = proShopItems.allItems.map(item => ({
    ...item,
    imgSrc: images[`../assets/${item.imgSrc}`]?.default || item.imgSrc // Use the imported image or fallback to the original path
  }));
  outOfStock.value = proShopItems.outOfStock.map(item => ({
    ...item,
    imgSrc: images[`../assets/${item.imgSrc}`]?.default || item.imgSrc
  }));
});

const itemDetailsProps = ref({
  title: "",
  price: "",
  imgSrc: "",
  imgAlt: "",
  description: "",
  payPalFormProps: {}
});

const selectedItemIndex = ref(-1);
const showItemDetails = ref(false);

function handleItemSelected(index) {
  itemDetailsProps.value = allItems.value[index];
  selectedItemIndex.value = index;
  showItemDetails.value = true;

  nextTick(() => {
    const element = document.getElementById(`item-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

</script>

<template>
<div class="vert-container">
    <h2 style="margin-top: calc(100px + 3vh);">The Proshop </h2>
    <p style="text-align: center">We carry a variety of boardsport and watersport products and everything you will need with them. Give us a call we
    can help you find equipment and or give advice.</p>
    <div class="proshop-container">
      <template v-for="(item, index) in allItems" :key="index">
        <div :id="'item-' + index" class="proshop-item">
          <ProShopItem
            :title="item.title"
            :price="item.price"
            :imgSrc="item.imgSrc"
            :imgAlt="item.imgAlt"
            :description="item.description"
            :payPalFormProps="item.payPalFormProps"
            :isSelected="selectedItemIndex === index"
            @item-selected="handleItemSelected(index)"
          />
        </div>
      </template>
    </div>
    <ItemDetails v-if="showItemDetails" class="item-details" v-bind="itemDetailsProps" />
</div>
</template>

<style scoped>
.proshop-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 90vw; 
  margin: 0 20px 0 20px;
  justify-content: center; /* Center the grid items horizontally */
}

.proshop-item {
  display: flex;
  justify-content: center;
}

.item-details {
  width: 90vw;
  margin: 3vh 0 5vh 0;
}
</style>
