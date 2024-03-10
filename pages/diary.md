<!-- Source data can be edited in /data/diary.csv -->

<script setup>
import { data } from '../data/csv.data.ts'
const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Lecture diary

<div v-if="data.diary">
<div v-for="week in weeks">

### Week {{ week }}

<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    {{ diaryItem.date }}, {{ diaryItem.time }}: {{ diaryItem.topic }}
  </li>
</ul>

</div>
</div>
