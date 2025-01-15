<script setup lang="ts">
interface User {
  id: number;
  name: string;
  email: string;
}

defineProps<{
  user: User;
}>();
</script>

<template>
  <router-link :to="{ name: 'user-details', params: { id: user.id }}" class="user-card">
    <div class="avatar">{{ user.name[0] }}</div>
    <div class="info">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #646cff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .info {
    h3 {
      margin: 0;
      font-size: 1.1rem;
    }

    p {
      margin: 0.5rem 0 0;
      color: #666;
    }
  }
}
</style>