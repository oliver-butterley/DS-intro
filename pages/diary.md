<!-- Source data can be edited in /data/diary.csv -->

<script setup>
import { data } from '../data/csv.data.ts'
const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Lecture diary

## Schedule

- Monday 11:00 - 13:00
- Wednesday 14:00 - 16:00
- Friday 11:00 - 13:00

Location: Aula 1200 (ex biblioteca storica)

## Lesson topics

<div v-if="data.diary">
<div v-for="week in weeks">

### Week {{ week }}

<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    {{ diaryItem.date }}, {{ diaryItem.time }} ({{ diaryItem.location }}): {{ diaryItem.topic }}
  </li>
</ul>

</div>
</div>
