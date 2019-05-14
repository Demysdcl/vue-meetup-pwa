<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      Usuário
    </v-navigation-drawer>
    <v-container>
      <v-layout text-xs-center wrap>
        <v-btn
          v-for="user in users"
          :key="user.id"
          @click="onUserClick(user.id)"
          >{{ user.name }}
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "users",
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    ...mapState({
      users: state => state.users
    }),
    naoRecalculaAoAlterarRota() {
      return "Usuário selecionado" + this.$router.currentRoute.query.showUser;
    }
  },
  watch: {
    "$router.currentRoute.query.showUser"(newValue) {
      this.showUserAtSideNav = newValue;
    }
  },
  methods: {
    onUserClick(userId) {
      this.$router.push({
        name: "userDetails",
        params: {
          userId
        }
      });
    },
    onShowSideNavClick(userId) {
      this.$router.push({
        query: {
          showUser: userId
        }
      });
    }
  }
};
</script>
