
const DatePickerInline = {
    props: ['selectedDate'], 
    template: `
       
          <div class="datepickerContainer">
            <v-date-picker v-model='value' />
          </div>
        
    `,
    computed: {
        value() {
            return this.selectedDate;
        }
        
    },
    updated() {
        
    }
  };



Vue.component("DatepickerInlinecomp", DatePickerInline);
new Vue({
    el: "#app",
    
    template: `
    <DatepickerInlinecomp :selectedDate="selectedDate" />
    `,
    data() {
      return {
        selectedDate: null,
      };
    },
    methods: {
     
    },
    mounted() {
        
    },
    computed: {
       
    },
   
  });