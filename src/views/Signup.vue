<template>
  <section class="bg-light-lemon px-6 py-10">
    <back-button />
    <div class="h-screen max-w-[550px] justify-center items-center mx-auto">
      <div class="bg-white p-8 shadow-shadowTwo">
        <div class="mb-8">
          <p
            class="font-semiBold text-2xl text-primary-black mb-1.5 font-semibold"
          >
            {{ !$route.query.id ? "Create an account" : "Update user" }}
          </p>
          <p class="font-semiBold text-base text-grey" v-if="!$route.query.id">
            Fill the form with accurate information to create your profile
          </p>
        </div>
        <form class="action" @submit.prevent="signUp">
          <div class="grid gap-6 grid-cols-12">
            <div class="col-span-12 md:col-span-6">
              <textInput
                :rules="{ required: true }"
                id="firstName"
                name="firstName"
                label="First Name"
                placeHolder="First Name"
                v-model="formData.first_name"
              ></textInput>
            </div>
            <div class="col-span-12 md:col-span-6">
              <textInput
                :rules="{ required: true }"
                id="lastName"
                name="lastName"
                label="Last Name"
                placeHolder="Last Name"
                v-model="formData.last_name"
              ></textInput>
            </div>
            <div class="col-span-12 md:col-span-6">
              <textInput
                :rules="{ required: true }"
                id="email"
                name="email"
                label="Email"
                placeHolder="Email"
                v-model="formData.email"
              ></textInput>
            </div>
            <div class="col-span-12 md:col-span-6">
              <textInput
                :rules="{ required: true }"
                id="phone_number"
                name="phone_number"
                label="Phone number"
                placeHolder="Phone number"
                v-model="formData.phone_number"
              ></textInput>
            </div>
            <div class="col-span-12">
              <Dropdown
                title="State"
                v-model="formData.selectedState"
                :options="states"
              />
            </div>
            <div class="col-span-12">
              <textInput
                :rules="{ required: true }"
                id="message"
                type="textarea"
                name="message"
                label="Message"
                rows="5"
                placeHolder="Type here..."
                v-model="formData.message"
              ></textInput>
            </div>
            <div class="col-span-12" v-if="!$route.query.id">
              <div class="flex">
                <Checkbox v-model="agreeToTerms" />
                <p class="text-xs text-grey mt-1">
                  I agree to privacy policy
                  <span class="text-green">Terms</span> and
                  <span class="text-green">conditions</span>.
                </p>
              </div>
            </div>
            <!-- <p>{{ $store.state.users }}</p> -->
            <div class="col-span-12">
              <c-button size="lg" class="mt-7 w-full text-white">
                {{ $route.query.id ? "Update" : "Submit" }}
              </c-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import TextInput from "../components/Input/index";
import Dropdown from "../components/Dropdown/index";
import { states } from "../mocks/state";
import Checkbox from "../components/CheckBox";
import CButton from "../components/Button";
import { mapGetters, mapMutations } from "vuex";
import BackButton from "../components/Button/BackButton.vue";

export default {
  name: "SignUp",
  data() {
    return {
      formData: {},
      loading: false,
      states,
      selectedState: "",
      agreeToTerms: false,
    };
  },
  components: {
    TextInput,
    Dropdown,
    CButton,
    BackButton,
    Checkbox,
  },
  created() {
    const { id } = this.$route.query;
    if (id) {
      const user = this.users.find((user) => user.id === id);
      this.formData = user;
    }
  },
  computed: {
    isDisabled() {
      return (
        !this.formData?.first_name ||
        (!this.agreeToTerms && !this.$route.query.id) ||
        !this.formData?.last_name ||
        !this.formData.message
      );
    },
    ...mapGetters({
      users: "getUsers",
    }),
  },
  methods: {
    ...mapMutations({
      setUsers: "setUsers",
    }),
    clearForm() {
      this.formData = {};
      this.agreeToTerms = false;
    },
    signUp() {
      const userId = this.$route.query.id;
      if (userId) {
        const updatedUsers = [...this.users];
        const user = updatedUsers.find((user) => user.id === userId);
        Object.assign(user, this.formData);
        this.setUsers(updatedUsers);
        this.$router.push({ name: "userList" });
        return;
      }
      this.setUsers([
        { ...this.formData, id: `user-${this.users.length + 1}` },
        ...this.users,
      ]);
      this.clearForm();
      this.$router.push({ name: "userList" });
    },
  },
};
</script>

<style></style>
