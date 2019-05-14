<template>
  <v-container>
    <v-btn :to="{ name: 'users' }">Voltar</v-btn>
    <v-card>
      <v-img :src="selectedUser.img" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ selectedUser.name }}</h3>
          <div>{{ selectedUser.company }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Compartilhar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "users",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      users: state => state.users
    }),
    selectedUser() {
      return this.users.find(user => {
        return user.id === this.$route.params.userId;
      });
    }
  }
};
</script>
