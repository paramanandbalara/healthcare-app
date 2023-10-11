<template>
  <div class="consultation">
    <div v-for="issue in issues" :key="issue.id" class="issue-card">
      <router-link :to="'/consultation/solution?issue=' + issue.id">
      <img :src="issue.imageUrl" alt="issue.title" class="issue-image"/>
      <h3>{{ issue.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      issues: [
        { id: 1, title: "Hair", imageUrl: "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500" },
        { id: 2, title: "Beard", imageUrl: "https://i.mscwlns.co/media/misc/other/home-rcl/3_Jk-73vm_j.png?tr=w-500" },
        { id: 3, title: "Nutrition", imageUrl: "https://i.mscwlns.co/media/misc/other/home-rcl/2_eC69YoDSw.png?tr=w-500" },
        { id: 4, title: "Performance", imageUrl: "https://i.mscwlns.co/media/misc/other/home-rcl/4_EHvSVJQ1c.png?tr=w-500" },
        { id: 5, title: "Skin", imageUrl: "https://i.mscwlns.co/media/misc/other/home-rcl/5_3fhACuk5-.png?tr=w-500" },
        { id: 6, title: "Smoking", imageUrl: "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500" },
      ],
    };
  },
};
</script>

<style scoped>
.consultation {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.issue-card {
  background-color: #f7f7f7;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease;
}

.issue-card:hover {
  transform: scale(1.05);
}

.issue-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
