<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

const props = defineProps<{
  id: string;
}>();

const router = useRouter();
const user = ref<User | null>(null);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`);
    user.value = await response.json();
  } catch (e) {
    error.value = 'Failed to load user details';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="user-details">
    <button class="back-button" @click="router.back()">← Back</button>
    
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="user" class="user-info">
      <h1>{{ user.name }}</h1>
      
      <div class="info-section">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Website:</strong> {{ user.website }}</p>
      </div>

      <div class="info-section">
        <h2>Address</h2>
        <p>{{ user.address.street }}, {{ user.address.suite }}</p>
        <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
      </div>

      <div class="info-section">
        <h2>Company</h2>
        <p><strong>Name:</strong> {{ user.company.name }}</p>
        <p><strong>Catch phrase:</strong> {{ user.company.catchPhrase }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  .back-button {
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #535bf2;
    }
  }

  .loading, .error {
    text-align: center;
    padding: 2rem;
    color: #666;
  }

  .error {
    color: #ff4444;
  }

  .user-info {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 0 0 2rem;
      color: #2c3e50;
    }

    .info-section {
      margin-bottom: 2rem;

      h2 {
        color: #646cff;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      p {
        margin: 0.5rem 0;
        color: #666;
      }
    }
  }
}
</style>