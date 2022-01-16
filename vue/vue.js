const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Ensar Hamzić",
          phone: "066/154-14-87",
          email: "ensarhamzic@gmail.com",
        },
        {
          id: "2",
          name: "Tarik Ibrahimović",
          phone: "063/124-48-72",
          email: "tarikibrahimovic@gmail.com",
        },
        {
          id: "3",
          name: "Emir Gicić",
          phone: "061/148-55-67",
          email: "emirgicic@gmail.com",
        },
        {
          id: "4",
          name: "Ramiz Šabović",
          phone: "065/177-99-25",
          email: "ramizsabovic@yahoo.com",
        },
      ],
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter - num >= 0) {
        this.counter = this.counter - num;
      } else {
        this.counter = 0;
      }
    },
    donate() {
      this.counter = 0;
    },
  },
});

app.component("member", {
  props: ["name", "phone", "email"],
  template: `
  <li>
    <h2>{{ name }}</h2>
    <ul v-if="detailsAreVisible">
      <li><i class="fas fa-phone-alt"></i> {{ phone }}</li>
      <li><i class="fas fa-envelope"></i>  {{ email }}</li>
    </ul>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
