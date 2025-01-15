<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import UserCard from '../components/UserCard.vue';
import SearchBar from '../components/SearchBar.vue';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);
const searchQuery = ref('');
const loading = ref(true);
const error = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await response.json();
  } catch (e) {
    error.value = 'Failed to load users';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="user-list">
    <h1>Users</h1>
    <SearchBar v-model="searchQuery" />
    
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
      <UserCard
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.user-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .loading, .error {
    text-align: center;
    padding: 2rem;
    color: #666;
  }

  .error {
    color: #ff4444;
  }
}
</style>