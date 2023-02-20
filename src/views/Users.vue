<template>
  <div class="p-8 bg-light-lemon h-screen">
    <div class="flex justify-between items-center mb-6">
      <p class="text-2xl text-primary-black font-semibold">Manage Users</p>
      <router-link to="/create-user">
        <c-button size="lg" class="text-white"> Create User </c-button>
      </router-link>
    </div>
    <div class="bg-white border-green border rounded-lg p-6 shadow-shadowTwo">
      <p class="text-lg font-semibold mb-4">Users List</p>
      <div class="overflow-x-scroll scroll-styled">
        <c-table
          class="mb-2"
          type="secondary"
          :tableData="$store.state.users"
          :tableHeaders="userHeader"
        >
          <template v-slot:table-row="{ item: user }">
            <td class="pl-4 whitespace-nowrap">{{ user.first_name }} {{ user.last_name }}</td>
            <td class="pl-4 no-caps">
              <p>{{ user.email }}</p>
            </td>
            <td class="pl-4 no-overflow">
              <p>{{ user.phone_number }}</p>
            </td>
            <td class="pl-4 no-overflow whitespace-nowrap">
              <p>{{ user.message }}</p>
            </td>
            <td class="pl-4 no-overflow whitespace-nowrap">
              <p>{{ user.selectedState }}</p>
            </td>
            <td class="pl-4 no-overflow whitespace-nowrap">
              <Dropdown
                type="icon"
                @input="handleDropdown($event, user)"
                :options="options"
              />
            </td>
          </template>
        </c-table>
      </div>
    </div>
  </div>
</template>
<script>
import CTable from "../components/Table";
import { userHeader } from "../mocks/headers";
import CButton from "../components/Button";
import Dropdown from "../components/Dropdown";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "UserList",
  data() {
    return {
      userHeader,
      action: "",
      options: [
        { label: "Delete", value: "delete" },
        { label: "Update", value: "update" },
      ],
    };
  },
  components: {
    CTable,
    CButton,
    Dropdown,
  },
  computed: {
    ...mapGetters({
      users: "getUsers",
    }),
  },
  created() {
    console.log(this.users);
  },
  methods: {
    ...mapMutations({
      setUsers: "setUsers",
    }),
    handleDropdown(value, user) {
      if (value === "Delete") {
        const newUsers = this.users.filter((u) => u.id !== user.id);
        this.setUsers(newUsers);
        return;
      }

      this.$router.push({ name: "home", query: { id: user.id } });
    },
  },
};
</script>
<style scoped></style>
