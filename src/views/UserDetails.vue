<template>
  <v-container>
    <v-btn :to="{ name: 'users' }">Voltar</v-btn>
    <v-card>
      <v-img
        v-if="viewImage"
        :src="selectedUser.img"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ selectedUser.name }}</h3>
          <div>{{ selectedUser.company }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange" @click="onViewImage">Ver imagem</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "users",
  props: {
    userId: {
      required: true
    }
  },
  data() {
    return {};
  },
  urlData: {
    viewImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      users: state => state.users
    }),
    selectedUser() {
      return this.users.find(user => {
        return String(user.id) === String(this.userId);
      });
    }
  },
  methods: {
    onViewImage() {
      this.viewImage = !this.viewImage;
    }
  }
};
</script>
